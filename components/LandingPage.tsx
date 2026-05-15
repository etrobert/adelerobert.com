import Image from 'next/image';
import Link from 'next/link';
import { title } from '../app/fonts';

import landingPageImage from '../photos/20241013-133244-4292-Adele Robert.jpg';

export default function LandingPage() {
  return (
    <div className="grid text-black grid-cols-[2fr_1fr] place-items-center h-full text-4xl lg:text-7xl">
      <Image
        className="absolute z-[-1] h-full w-full object-cover"
        src={landingPageImage}
        priority
        placeholder="blur"
        // TODO: Update alt text
        alt="TODO"
      />
      <Link
        className={`hover:underline ${title.className}`}
        // TODO: Update link
        href="/milan"
      >
        Adèle Robert
      </Link>
    </div>
  );
}
