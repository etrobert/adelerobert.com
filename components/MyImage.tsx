export const MyImage = ({ src }: { src: string }) => (
  <img
    src={src}
    style={{ width: '100%', height: 'auto' }}
    alt="TODO"
    onContextMenu={(e) => e.preventDefault()}
  />
);
