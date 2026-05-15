import { Link } from 'react-router-dom';
import Menu from '../../components/Menu';

export default function MenuPage() {
  return (
    <div className="grid gap-14 p-6">
      <Link to="/">
        <h1 className="text-2xl lg:text-4xl font-bold font-title">
          Adèle Robert
        </h1>
      </Link>
      <Menu />
    </div>
  );
}
