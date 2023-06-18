import React, { useState, useEffect,useCallback,useMemo } from 'react';
import { initializeWeapons } from './arrayUtils';
import Image from 'next/image';
import { Rule } from 'postcss';
import Head from 'next/head';
interface CellData {
    value1: string;
    value2: string;
    value1Image: string;
    value2Image: string;
    marked: boolean;
}

interface ValueDate{
    name: string;
    imageUrl: string;
}

const weapons:ValueDate[] = [
    { name: 'ボールドマーカー', imageUrl: '/images/borudomaka.png' },
    { name: 'ボールドマーカーネオ', imageUrl: '/images/borudomakaneo.png' },
    { name: 'わかばシューター', imageUrl: '/images/wakabasyuta.png' },
    { name: 'もみじシューター', imageUrl: '/images/momizisyuta.png' },
    { name: 'シャープマーカー', imageUrl: '/images/syapumaka.png' },
];

const rules: ValueDate[] = [
    { name: 'ガチエリア', imageUrl: '/images/gatieria.webp' },
    { name: 'ガチヤグラ', imageUrl: '/images/gatiyagura.webp' },
    { name: 'ガチホコ', imageUrl: '/images/gatihoko.webp' },
    { name: 'ガチアサリ', imageUrl: '/images/gatiasari.webp' },
    { name: 'ナワバリ', imageUrl: '/images/nawabari.webp' },
];

const Bingo = () => {
    const [board, setBoard] = useState<CellData[][]>([]);

    const initializeBoard = useCallback(() => {
        const newBoard: CellData[][] = [];

        for (let row = 0; row < 5; row++) {
            const newRow: CellData[] = [];
            for (let col = 0; col < 5; col++) {
                const weapon:ValueDate = getRandomElement(weapons);
                const rule: ValueDate = getRandomElement(rules);

                const cellData: CellData = {
                    value1: weapon.name,
                    value2: rule.name,
                    value1Image: weapon.imageUrl,
                    value2Image: rule.imageUrl,
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

    const getRandomElement = (array: ValueDate[]) => {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    };

    

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4" style={{ maxWidth: '100%' }}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <h1 className="text-3xl font-bold mb-8 text-gray-500">Bingo Game</h1>
            <table className="border-collapse bg-red max-w-full">
                <tbody>
                    {board.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, colIndex) => (
                                <td
                                    key={colIndex}
                                    onClick={() => handleClick(rowIndex, colIndex)}
                                    className={`py-4 px-6 border w-[100px] h-[100px] ${cell.marked ? 'bg-green-200' : 'bg-white'
                                        }`}            
                                >
                                    <div className="flex items-center justify-center text-gray-500 font-bold h-12">
                                        {cell.value1}
                                    </div>
                                    <div className="text-xs text-gray-500 mt-1 h-4">
                                        {cell.value2}
                                    </div>
                                    {/* <img src={cell.value1Image} alt="写真" className="w-full h-full" />
                                    <img src={cell.value2Image} alt="写真" className="w-full h-full" /> */}
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
                New Bingo
            </button>
        </div>
    );

};

export default Bingo;
