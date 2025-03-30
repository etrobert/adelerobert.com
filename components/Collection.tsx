import { StaticImageData } from 'next/image';
import Link from 'next/link';
import { title as titleFont } from '../app/fonts';
import MenuIcon from './icons/MenuIcon';
import Menu from './Menu';
import { MyImage } from './MyImage';

type Props = {
  title: string;
  description: string;
  images: StaticImageData[];
};

export default function Collection({ title, description, images }: Props) {
  return (
    <div className="grid lg:gap-14 p-6 lg:grid-cols-[auto,1fr]">
      <div className="lg:sticky lg:top-6 lg:h-screen grid gap-14 content-start">
        <Link href="/">
          <h1
            className={`text-2xl lg:text-4xl font-bold ${titleFont.className}`}
          >
            Adèle Robert
          </h1>
        </Link>
        <Menu className="hidden lg:grid" />
      </div>

      <Link href="/menu" className="absolute right-6 lg:hidden">
        <MenuIcon className="w-8 h-8" />
      </Link>

      <div className="grid gap-14 pt-14">
        <div className="grid gap-2">
          <h1 className="text-xl font-bold">{title}</h1>
          <p>{description}</p>
        </div>

        <div className="grid gap-14 lg:grid-cols-2 lg:grid-rows-[masonry]">
          {images.map((image) => (
            <MyImage key={image.src} img={image} />
          ))}
        </div>

        <footer className="text-gray-500">
          © 2025 Adèle Robert. This work is openly licensed via{' '}
          <Link
            className="underline"
            target="_blank"
            href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
          >
            CC BY NC ND 4.0
          </Link>
          .
        </footer>
      </div>
    </div>
  );
}
