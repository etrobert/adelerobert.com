import { useParams, Navigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getCollection } from '../../lib/collections';
import Collection from '../../components/Collection';

export default function CollectionPage() {
  const { slug } = useParams<{ slug: string }>();
  const { data, error, isPending } = useQuery({
    queryKey: ['collection', slug],
    queryFn: () => getCollection(slug!),
    staleTime: 3600_000,
  });
  if (isPending) return null;
  if (error) return <Navigate to="/menu" replace />;
  return <Collection title={data.title} description={data.description} images={data.imageUrls} />;
}
