import { notFound } from 'next/navigation';
import { getCollection } from '../../lib/collections';
import Collection from '../../components/Collection';

type Props = { params: Promise<{ slug: string }> };

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params;
  try {
    const { title, description, imageUrls } = await getCollection(slug);
    return <Collection title={title} description={description} images={imageUrls} />;
  } catch {
    notFound();
  }
}
