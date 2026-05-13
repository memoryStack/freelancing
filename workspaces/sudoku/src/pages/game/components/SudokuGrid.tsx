import { Text } from '@freelancing/ui';
import clsx from 'clsx';

interface SudokuGridProps {
  selectedCell: { row: number; col: number } | null;
  onCellClick: (cell: { row: number; col: number }) => void;
  selectedNumber: number | null;
}

// Sample grid data (0 means empty)
const SAMPLE_GRID = [
  [5, 0, 0, 6, 0, 0, 3, 0, 0],
  [0, 0, 9, 3, 0, 0, 5, 7, 0],
  [0, 1, 4, 0, 0, 0, 0, 0, 9],
  [0, 0, 0, 0, 0, 8, 0, 4, 0],
  [2, 9, 0, 0, 4, 0, 0, 5, 6],
  [0, 4, 0, 7, 0, 0, 0, 0, 0],
  [8, 0, 0, 0, 0, 0, 4, 3, 0],
  [0, 6, 7, 0, 0, 1, 8, 0, 0],
  [0, 0, 1, 0, 0, 5, 0, 0, 7],
];

const GIVEN_CELLS = [
  [true, false, false, true, false, false, true, false, false],
  [false, false, true, true, false, false, true, true, false],
  [false, true, true, false, false, false, false, false, true],
  [false, false, false, false, false, true, false, true, false],
  [true, true, false, false, true, false, false, true, true],
  [false, true, false, true, false, false, false, false, false],
  [true, false, false, false, false, false, true, true, false],
  [false, true, true, false, false, true, true, false, false],
  [false, false, true, false, false, true, false, false, true],
];

export default function SudokuGrid({
  selectedCell,
  onCellClick,
  selectedNumber,
}: SudokuGridProps) {
  const isInSameRow = (row: number) => selectedCell?.row === row;
  const isInSameCol = (col: number) => selectedCell?.col === col;
  const isInSameBlock = (row: number, col: number) => {
    if (!selectedCell) return false;
    const blockRow = Math.floor(row / 3);
    const blockCol = Math.floor(col / 3);
    const selectedBlockRow = Math.floor(selectedCell.row / 3);
    const selectedBlockCol = Math.floor(selectedCell.col / 3);
    return blockRow === selectedBlockRow && blockCol === selectedBlockCol;
  };

  const isSelected = (row: number, col: number) =>
    selectedCell?.row === row && selectedCell?.col === col;

  const hasSameNumber = (row: number, col: number) => {
    if (!selectedNumber) return false;
    return SAMPLE_GRID[row][col] === selectedNumber;
  };

  return (
    <div className="inline-block border-4 border-black">
      {SAMPLE_GRID.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((cell, colIndex) => {
            const isGiven = GIVEN_CELLS[rowIndex][colIndex];
            const cellSelected = isSelected(rowIndex, colIndex);
            const highlighted =
              isInSameRow(rowIndex) ||
              isInSameCol(colIndex) ||
              isInSameBlock(rowIndex, colIndex);
            const sameNumber = hasSameNumber(rowIndex, colIndex);

            return (
              <div
                key={colIndex}
                onClick={() => onCellClick({ row: rowIndex, col: colIndex })}
                className={clsx(
                  'w-12 h-12 md:w-14 md:h-14 flex items-center justify-center cursor-pointer',
                  'border border-gray-400',
                  'transition-colors',
                  {
                    'border-r-2 border-r-black': (colIndex + 1) % 3 === 0 && colIndex !== 8,
                    'border-b-2 border-b-black': (rowIndex + 1) % 3 === 0 && rowIndex !== 8,
                    'bg-yellow-100': cellSelected,
                    'bg-blue-50': highlighted && !cellSelected,
                    'bg-purple-100': sameNumber && !cellSelected,
                    'hover:bg-gray-100': !cellSelected,
                  }
                )}
              >
                {cell !== 0 && (
                  <Text
                    variant="title-large"
                    className={clsx('font-medium', {
                      'text-black': isGiven,
                      'text-blue-600': !isGiven,
                    })}
                  >
                    {cell}
                  </Text>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
