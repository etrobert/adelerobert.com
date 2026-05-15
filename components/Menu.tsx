import Link from 'next/link';
import { getCollections } from '../lib/collections';
import { cn } from './ui/utils';

export default async function Menu({ className }: { className?: string }) {
  const collections = await getCollections();
  return (
    <ul className={cn('grid text-xl gap-4', className)}>
      {collections.map(({ slug, title }) => (
        <li key={slug}>
          <Link href={`/${slug}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}
