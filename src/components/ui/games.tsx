import { GridMotion } from '@/components/ui/grid-motion';

export function GridMotionDemo() {
  const items = [
    'https://source.unsplash.com/random/800x600?nature',
    'https://source.unsplash.com/random/800x600?mountain',
    'https://source.unsplash.com/random/800x600?ocean',
    'https://source.unsplash.com/random/800x600?forest',
    'https://source.unsplash.com/random/800x600?desert',
    'https://source.unsplash.com/random/800x600?beach',
    'https://source.unsplash.com/random/800x600?sunset'
  ];

  // Repeat the items to fill the grid
  const repeatedItems = Array(4).fill(items).flat();

  return (
    <div className="min-h-screen bg-black">
      <GridMotion 
        items={repeatedItems}
        gradientColor="rgba(0, 0, 0, 0.5)"
      />
    </div>
  );
}

export default GridMotionDemo; 