import Link from 'next/link';
import Menu from '../../components/Menu';
import { title as titleFont } from '../fonts';

export default function MenuPage() {
  return (
    <div className="grid gap-14 p-6">
      <Link href="/">
        <h1 className={`text-2xl lg:text-4xl font-bold ${titleFont.className}`}>
          Adèle Robert
        </h1>
      </Link>
      <Menu />
    </div>
  );
}
