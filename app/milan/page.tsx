import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

import img1 from "../../photos/Milan/Women's day/20250308-192925-8761-Adele Robert.jpg";
import img2 from "../../photos/Milan/Women's day/20250308-193127-8764-Adele Robert.jpg";
import img3 from "../../photos/Milan/Women's day/20250308-193322-8771-Adele Robert.jpg";
import img4 from "../../photos/Milan/Women's day/20250308-193505-8780-Adele Robert.jpg";
import img5 from "../../photos/Milan/Women's day/20250308-193631-8785-Adele Robert.jpg";
import img6 from "../../photos/Milan/Women's day/20250308-193847-8796-Adele Robert.jpg";
import img7 from "../../photos/Milan/Women's day/20250308-194421-8806-Adele Robert.jpg";
import img8 from "../../photos/Milan/Women's day/20250308-195120-8819-Adele Robert.jpg";
import img9 from "../../photos/Milan/Women's day/20250308-195658-8830-Adele Robert.jpg";
import img10 from "../../photos/Milan/Women's day/20250308-200459-8868-Adele Robert.jpg";
import img11 from "../../photos/Milan/Women's day/20250308-200613-8878-Adele Robert.jpg";
import img12 from "../../photos/Milan/Women's day/20250308-201040-8880-Adele Robert.jpg";

const MyImage = ({ img }: { img: StaticImport }) => (
  <Image
    src={img}
    placeholder="blur"
    // TODO: Update alt text
    alt="TODO"
  />
);

export default function Milan() {
  return (
    <div className="grid gap-4 p-6">
      <h1 className="text-4xl font-bold">Milan - Women’s day 2025</h1>
      <p>This is a short introduction about Milan</p>

      <MyImage img={img1} />
      <MyImage img={img2} />
      <MyImage img={img3} />
      <MyImage img={img4} />
      <MyImage img={img5} />
      <MyImage img={img6} />
      <MyImage img={img7} />
      <MyImage img={img8} />
      <MyImage img={img9} />
      <MyImage img={img10} />
      <MyImage img={img11} />
      <MyImage img={img12} />
    </div>
  );
}
