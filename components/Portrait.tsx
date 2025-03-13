import Image from 'next/image';
import styles from './Portrait.module.scss';

const Portrait = () => (
  <Image
    src="/portrait.jpeg"
    className={[styles.portrait, 'border-2 border-stone-900'].join(' ')}
    width={799 / 2.5}
    height={800 / 2.5}
    alt="Portrait of the author"
  />
);

export default Portrait;
