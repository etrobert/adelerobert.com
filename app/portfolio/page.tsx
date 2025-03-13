import Collection from '../../components/Collection';

import img1 from '../../photos/20240224-DSCF4034.jpeg';
import img2 from '../../photos/20240220-DSCF3873.jpeg';
import img3 from '../../photos/20241012-164751-4181-Adele Robert.jpg';
import img4 from '../../photos/20241013-133244-4292-Adele Robert.jpg';

export default function Portfolio() {
  return (
    <Collection
      title="Portfolio"
      description="This is a short introduction."
      images={[img1, img2, img3, img4]}
    />
  );
}
