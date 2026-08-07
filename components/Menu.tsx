import { Link } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { getCollections } from '../lib/collections';
import { cn } from './ui/utils';

export default function Menu({ className }: { className?: string }) {
  const { data: collections = [] } = useQuery({
    queryKey: ['collections'],
    queryFn: getCollections,
    staleTime: 3600_000,
  });
  return (
    <ul className={cn('grid text-xl gap-4', className)}>
      {collections.map(({ slug, title }) => (
        <li key={slug}>
          <Link to={`/${slug}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}
