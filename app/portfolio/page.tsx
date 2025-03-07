import Image from 'next/image';
import img1 from '../../photos/20240224-DSCF4034.jpeg';
import img2 from '../../photos/20240220-DSCF3873.jpeg';
import img3 from '../../photos/20241012-164751-4181-Adele Robert.jpg';
import img4 from '../../photos/20241013-133244-4292-Adele Robert.jpg';

export default function Portfolio() {
  return (
    <div className="grid gap-4 p-6">
      <h1 className="text-4xl font-bold">Portfolio</h1>
      <p>This is a short introduction</p>
      <Image
        src={img1}
        // TODO: Update alt text
        alt="TODO"
      />
      <Image
        src={img2}
        // TODO: Update alt text
        alt="TODO"
      />
      <Image
        src={img3}
        // TODO: Update alt text
        alt="TODO"
      />
      <Image
        src={img4}
        // TODO: Update alt text
        alt="TODO"
      />
    </div>
  );
}
