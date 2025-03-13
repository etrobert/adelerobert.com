import Link from 'next/link';
import { title as titleFont } from '../fonts';

export default function Menu() {
  return (
    <div className="grid gap-14 p-6">
      <h1 className={`text-2xl font-bold ${titleFont.className}`}>
        Adèle Robert
      </h1>

      <ul className="grid text-xl gap-4">
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/milan">Milan - Women's day 2025</Link>
        </li>
      </ul>
    </div>
  );
}
