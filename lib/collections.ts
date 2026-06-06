import { parse } from 'smol-toml';

const BASE_URL = 'https://files.etiennerobert.com/adele/';
const IMGPROXY_BASE = 'https://images.etiennerobert.com';

interface CaddyItem {
  name: string;
  is_dir: boolean;
  url: string;
}

interface CollectionSummary {
  slug: string;
  title: string;
}

interface CollectionDetail {
  title: string;
  description: string;
  imageUrls: string[];
}

const IMAGE_EXTENSIONS = new Set(['jpg', 'jpeg']);

function isImageFile(name: string): boolean {
  const ext = name.split('.').pop()?.toLowerCase() ?? '';
  return IMAGE_EXTENSIONS.has(ext);
}

// Caddy returns directory names with a trailing slash, e.g. "test/"
function dirSlug(name: string): string {
  return name.replace(/\/$/, '');
}

const FILES_ORIGIN = 'https://files.etiennerobert.com';
const COLLECTION_WIDTH = 1200;

export function imgproxyUrl(url: string): string {
  const path = url.replace(FILES_ORIGIN, '');
  return `${IMGPROXY_BASE}/insecure/w:${COLLECTION_WIDTH}/plain/local://${path}`;
}

export function originalUrl(url: string): string {
  const path = url.replace(
    `${IMGPROXY_BASE}/insecure/w:${COLLECTION_WIDTH}/plain/local://`,
    '',
  );
  return `${FILES_ORIGIN}${path}`;
}

export async function getCollections(): Promise<CollectionSummary[]> {
  const res = await fetch(BASE_URL, {
    headers: { Accept: 'application/json' },
  });
  if (!res.ok)
    throw new Error(`Failed to fetch collection list: ${res.status}`);
  const items: CaddyItem[] = await res.json();
  return Promise.all(
    items
      .filter((i) => i.is_dir)
      .map(async (i) => {
        const slug = dirSlug(i.name);
        const { title } = await fetchCollectionInfo(slug);
        return { slug, title };
      }),
  );
}

export async function getCollection(slug: string): Promise<CollectionDetail> {
  const url = `${BASE_URL}${encodeURIComponent(slug)}/`;
  const res = await fetch(url, {
    headers: { Accept: 'application/json' },
  });
  if (!res.ok)
    throw new Error(`Failed to fetch collection "${slug}": ${res.status}`);
  const items: CaddyItem[] = await res.json();
  const imageUrls = items
    .filter((i) => !i.is_dir && isImageFile(i.name))
    .map((i) =>
      imgproxyUrl(
        `${BASE_URL}${encodeURIComponent(slug)}/${encodeURIComponent(i.name)}`,
      ),
    );
  const { title, description } = await fetchCollectionInfo(slug);
  return { title, description, imageUrls };
}

async function fetchCollectionInfo(
  slug: string,
): Promise<{ title: string; description: string }> {
  const res = await fetch(`${BASE_URL}${encodeURIComponent(slug)}/info.toml`);
  if (!res.ok)
    throw new Error(`Missing info.toml for "${slug}": ${res.status}`);
  const parsed = parse(await res.text()) as {
    title: string;
    description: string;
  };
  return { title: parsed.title, description: parsed.description };
}
