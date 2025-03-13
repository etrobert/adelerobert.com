import Link from 'next/link';
import { cn } from './ui/utils';

export default function Menu({ className }: { className?: string }) {
  return (
    <ul className={cn('grid text-xl gap-4', className)}>
      <li>
        <Link href="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link href="/milan">Milan - Women's day 2025</Link>
      </li>
    </ul>
  );
}
