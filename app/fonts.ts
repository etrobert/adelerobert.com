import { Inter, Jost } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const defaultFont = Inter({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const title = Jost({
  weight: '200',
  subsets: ['latin'],
  display: 'swap',
});

export { defaultFont, title };
