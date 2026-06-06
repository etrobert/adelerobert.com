import { useState } from 'react';
import { Link } from 'react-router-dom';
import Lightbox from './Lightbox';
import MenuIcon from './icons/MenuIcon';
import Menu from './Menu';
import { MyImage } from './MyImage';

const IMGPROXY_PREFIX =
  'https://images.etiennerobert.com/insecure/w:1200/plain/local://';

function originalUrl(proxyUrl: string): string {
  const path = proxyUrl.replace(IMGPROXY_PREFIX, '');
  return `https://files.etiennerobert.com${path}`;
}

type Props = {
  title: string;
  description: string;
  images: string[];
};

export default function Collection({ title, description, images }: Props) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <div className="grid lg:gap-14 p-6 lg:grid-cols-[auto_1fr]">
      <div className="lg:sticky lg:top-6 lg:h-screen grid gap-14 content-start">
        <Link to="/">
          <h1 className="text-2xl lg:text-4xl font-bold font-title">
            Adèle Robert
          </h1>
        </Link>
        <Menu className="hidden lg:grid" />
      </div>

      <Link to="/menu" className="absolute right-6 lg:hidden">
        <MenuIcon className="w-8 h-8" />
      </Link>

      <div className="grid gap-14 pt-14">
        <div className="grid gap-2">
          <h1 className="text-xl font-bold">{title}</h1>
          <p>{description}</p>
        </div>

        <div className="grid gap-14 lg:grid-cols-2 lg:grid-rows-[masonry]">
          {images.map((url) => (
            <MyImage
              key={url}
              src={url}
              onClick={() => setLightboxSrc(originalUrl(url))}
            />
          ))}
        </div>

        <footer className="text-gray-500 text-center">
          © 2025 Adèle Robert. This work is openly licensed via{' '}
          <Link
            className="underline"
            target="_blank"
            to="https://creativecommons.org/licenses/by-nc-nd/4.0/"
          >
            CC BY NC ND 4.0
          </Link>
          .
        </footer>
      </div>

      {lightboxSrc && (
        <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
      )}
    </div>
  );
}
