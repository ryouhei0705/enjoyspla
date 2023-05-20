import React, { useState, useEffect,useCallback,useMemo } from 'react';
import { initializeWeapons } from './arrayUtils';
interface CellData {
    value1: string;
    value2: string;
    marked: boolean;
}

const Bingo = () => {
    const [board, setBoard] = useState<CellData[][]>([]);
    const weapons = useMemo(() => initializeWeapons(),[]);
    const rules = useMemo(() =>['ガチエリア', 'ガチヤグラ', 'ガチホコ', 'ガチアサリ', 'ナワバリ'],[]);

    const initializeBoard = useCallback(() => {
        const newBoard: CellData[][] = [];

        for (let row = 0; row < 5; row++) {
            const newRow: CellData[] = [];
            for (let col = 0; col < 5; col++) {
                const cellData: CellData = {
                    value1: getRandomElement(weapons),
                    value2: getRandomElement(rules),
                    marked: false,
                };
                newRow.push(cellData);
            }
            newBoard.push(newRow);
        }

        setBoard(newBoard);
    },[weapons,rules]);

    useEffect(() => {
        initializeBoard();
    }, [initializeBoard]);



    const handleClick = (row: number, col: number) => {
        const updatedBoard = [...board];
        updatedBoard[row][col].marked = true;
        setBoard(updatedBoard);
    };

    const regenerateBoard = () => {
        initializeBoard();
    };

    const getRandomElement = (array: string[]) => {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-8 text-gray-500">Bingo Game</h1>
            <table className="border-collapse bg-red">
                <tbody>
                    {board.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, colIndex) => (
                                <td
                                    key={colIndex}
                                    onClick={() => handleClick(rowIndex, colIndex)}
                                    className={`py-4 px-6 border ${cell.marked ? 'bg-green-200' : 'bg-white'
                                        }`}
                                    style={{ width: '8rem', height: '8rem' }} // セルの高さと幅を指定
                                >
                                    <div className="flex items-center justify-center text-gray-500 font-bold">
                                        {cell.value1}
                                    </div>
                                    <div className="text-xs text-gray-500 mt-1">
                                        {cell.value2}
                                    </div>
                                </td>

                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <button
                className="mt-8 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={regenerateBoard}
            >
                Regenerate Board
            </button>
        </div>
    );

};

export default Bingo;
