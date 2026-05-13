import { useState } from 'react';
import { Button, ICON_BUTTON_VARIANTS, IconButton, Text } from '@freelancing/ui';
import { Undo, Pencil, Zap, Lightbulb, Eraser, Star, Play } from 'lucide-react';
import SudokuGrid from './components/SudokuGrid';
import NumberPad from './components/NumberPad';

export default function SudokuGame() {
  const [selectedCell, setSelectedCell] = useState<{ row: number; col: number } | null>(null);
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const [isPencilMode, setIsPencilMode] = useState(false);
  const [mistakes, setMistakes] = useState(0);
  const [time, setTime] = useState('00:00');
  const [difficulty, setDifficulty] = useState('EASY');

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Game Info */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Star className="text-yellow-500" size={24} fill="currentColor" />
          <Text variant="headline-small">3</Text>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-center">
            <Text variant="body-small" className="text-gray-600">
              Mistakes: {mistakes}
            </Text>
          </div>

          <div className="text-center">
            <Text variant="title-medium">{difficulty}</Text>
          </div>

          <div className="text-center">
            <div className="flex items-center gap-1">
              <Play size={14} className="text-gray-600" />
              <Text variant="body-small" className="text-gray-600">
                {time}
              </Text>
            </div>
          </div>
        </div>

        <IconButton
          variant={ICON_BUTTON_VARIANTS.STANDARD}
          icon={<Star size={20} />}
          className="text-gray-600"
        />
      </div>

      {/* Sudoku Grid */}
      <div className="mb-6">
        <SudokuGrid
          selectedCell={selectedCell}
          onCellClick={setSelectedCell}
          selectedNumber={selectedNumber}
        />
      </div>

      {/* Number Pad */}
      <div className="mb-6">
        <NumberPad
          selectedNumber={selectedNumber}
          onNumberSelect={setSelectedNumber}
        />
      </div>

      {/* Control Buttons */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex-1 flex justify-center">
          <IconButton
            variant={ICON_BUTTON_VARIANTS.STANDARD}
            icon={<Undo size={24} />}
            className="flex flex-col items-center gap-1"
          />
        </div>

        <div className="flex-1 flex justify-center">
          <IconButton
            variant={ICON_BUTTON_VARIANTS.STANDARD}
            icon={<Eraser size={24} />}
            className="flex flex-col items-center gap-1"
          />
        </div>

        <div className="flex-1 flex justify-center">
          <IconButton
            variant={ICON_BUTTON_VARIANTS.STANDARD}
            icon={<Pencil size={24} />}
            className="flex flex-col items-center gap-1"
            selected={isPencilMode}
            isToggle
            onClick={() => setIsPencilMode(!isPencilMode)}
          />
        </div>

        <div className="flex-1 flex justify-center">
          <IconButton
            variant={ICON_BUTTON_VARIANTS.STANDARD}
            icon={<Zap size={24} />}
            className="flex flex-col items-center gap-1"
          />
        </div>

        <div className="flex-1 flex justify-center">
          <IconButton
            variant={ICON_BUTTON_VARIANTS.STANDARD}
            icon={<Lightbulb size={24} />}
            className="flex flex-col items-center gap-1"
          />
        </div>
      </div>

      <div className="flex items-center justify-between mt-2 text-xs text-gray-600">
        <Text variant="label-small">Undo</Text>
        <Text variant="label-small">Eraser</Text>
        <Text variant="label-small">Pencil</Text>
        <Text variant="label-small">Fast Pencil</Text>
        <Text variant="label-small">Hint</Text>
      </div>
    </div>
  );
}
