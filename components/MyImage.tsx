'use client';

import Image from 'next/image';

export const MyImage = ({ src }: { src: string }) => (
  <Image
    src={src}
    width={0}
    height={0}
    sizes="100vw"
    style={{ width: '100%', height: 'auto' }}
    // TODO: Update alt text
    alt="TODO"
    onContextMenu={(e) => e.preventDefault()}
  />
);
