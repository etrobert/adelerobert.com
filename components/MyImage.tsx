'use client';

import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

export const MyImage = ({ img }: { img: StaticImport }) => (
  <Image
    src={img}
    placeholder="blur"
    // TODO: Update alt text
    alt="TODO"
    onContextMenu={(e) => e.preventDefault()}
  />
);
