type Props = {
  src: string;
  onClick?: () => void;
};

export const MyImage = ({ src, onClick }: Props) => (
  <img
    src={src}
    className={onClick ? 'cursor-zoom-in' : undefined}
    style={{ width: '100%', height: 'auto' }}
    alt="TODO"
    loading="lazy"
    decoding="async"
    onContextMenu={(e) => e.preventDefault()}
    onClick={onClick}
  />
);
