import { Link } from 'react-router';
import landingPageImage from '../photos/20241013-133244-4292-Adele Robert.jpg';

export default function LandingPage() {
  return (
    <div className="grid text-black grid-cols-[2fr_1fr] place-items-center h-full text-4xl lg:text-7xl">
      <img
        className="absolute z-[-1] h-full w-full object-cover"
        src={landingPageImage}
        alt=""
      />
      <Link
        className="hover:underline font-title"
        // TODO: Update link
        to="/milan"
      >
        Adèle Robert
      </Link>
    </div>
  );
}
