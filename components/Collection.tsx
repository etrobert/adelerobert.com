import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

import { StaticImageData } from 'next/image';
import Link from 'next/link';
import { title as titleFont } from '../app/fonts';
import MenuIcon from './icons/MenuIcon';

const MyImage = ({ img }: { img: StaticImport }) => (
  <Image
    src={img}
    placeholder="blur"
    // TODO: Update alt text
    alt="TODO"
  />
);

type Props = {
  title: string;
  description: string;
  images: StaticImageData[];
};

export default function Collection({ title, description, images }: Props) {
  return (
    <div className="grid lg:gap-14 p-6 lg:grid-cols-[auto,1fr]">
      <h1 className={`text-2xl lg:text-4xl font-bold ${titleFont.className}`}>
        Adèle Robert
      </h1>

      <Link href="/menu" className="absolute right-6 lg:hidden">
        <MenuIcon className="w-8 h-8" />
      </Link>

      <div className="grid gap-14 pt-14">
        <div className="grid gap-2">
          <h1 className="text-xl font-bold">{title}</h1>
          <p>{description}</p>
        </div>

        {images.map((image) => (
          <MyImage key={image.src} img={image} />
        ))}
      </div>
    </div>
  );
}
