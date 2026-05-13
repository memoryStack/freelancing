import { Text } from '@freelancing/ui';
import { Eraser } from 'lucide-react';
import clsx from 'clsx';

interface NumberPadProps {
  selectedNumber: number | null;
  onNumberSelect: (number: number | null) => void;
}

export default function NumberPad({ selectedNumber, onNumberSelect }: NumberPadProps) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="grid grid-cols-5 gap-2 max-w-md mx-auto">
      {numbers.map((number) => (
        <button
          key={number}
          onClick={() => onNumberSelect(number)}
          className={clsx(
            'h-14 md:h-16 rounded-lg flex items-center justify-center',
            'transition-all duration-200',
            'border-2',
            {
              'bg-blue-100 border-blue-600': selectedNumber === number,
              'bg-gray-100 border-gray-300 hover:bg-gray-200': selectedNumber !== number,
            }
          )}
        >
          <Text
            variant="title-large"
            className={clsx('font-bold', {
              'text-blue-700': selectedNumber === number,
              'text-black': selectedNumber !== number,
            })}
          >
            {number}
          </Text>
        </button>
      ))}

      <button
        onClick={() => onNumberSelect(null)}
        className={clsx(
          'h-14 md:h-16 rounded-lg flex items-center justify-center',
          'transition-all duration-200',
          'border-2',
          'bg-gray-100 border-gray-300 hover:bg-gray-200'
        )}
      >
        <Eraser size={24} className="text-gray-700" />
      </button>
    </div>
  );
}
