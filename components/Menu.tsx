import Link from 'next/link';

export default function Menu() {
  return (
    <ul className="text-xl gap-4 hidden lg:grid">
      <li>
        <Link href="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link href="/milan">Milan - Women's day 2025</Link>
      </li>
    </ul>
  );
}
