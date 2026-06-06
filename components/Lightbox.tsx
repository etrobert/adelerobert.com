import { useEffect } from 'react';

type Props = {
  src: string;
  onClose: () => void;
};

export default function Lightbox({ src, onClose }: Props) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center animate-fade-in cursor-zoom-out"
      onClick={onClose}
    >
      <img
        src={src}
        className="max-h-screen max-w-full object-contain"
        alt="TODO"
      />
    </div>
  );
}
