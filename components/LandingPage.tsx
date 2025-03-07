import Image from 'next/image';
import Link from 'next/link';

import landingPageImage from './landing-page-image.jpeg';

export default function LandingPage() {
  return (
    <div className="grid place-items-center h-full text-4xl lg:text-7xl">
      <Image
        className="absolute z-[-1] h-full w-full object-cover"
        src={landingPageImage}
        placeholder="blur"
        // TODO: Update alt text
        alt="TODO"
      />
      <Link
        className="hover:underline"
        // TODO: Update link
        href="/portfolio"
      >
        Adèle Robert
      </Link>
    </div>
  );
}
