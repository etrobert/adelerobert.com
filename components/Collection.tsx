import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

import { StaticImageData } from 'next/image';
import { title as titleFont } from '../app/fonts';

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
    <div className="grid gap-14 p-6">
      <h1 className={`text-2xl font-bold ${titleFont.className}`}>
        Adèle Robert
      </h1>
      <div className="grid gap-2">
        <h1 className="text-xl font-bold">{title}</h1>
        <p>{description}</p>
      </div>

      {images.map((image) => (
        <MyImage key={image.src} img={image} />
      ))}
    </div>
  );
}
