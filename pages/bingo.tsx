import React, { useState, useEffect } from 'react';

const Bingo = () => {
    const [board, setBoard] = useState<string[][]>([]);
    const values = [
        'B1', 'B2', 'B3', 'B4', 'B5',
        'I1', 'I2', 'I3', 'I4', 'I5',
        'N1', 'N2', 'N3', 'N4', 'N5',
        'G1', 'G2', 'G3', 'G4', 'G5',
        'O1', 'O2', 'O3', 'O4', 'O5',
    ];

    useEffect(() => {
        initializeBoard();
    }, []);

    const initializeBoard = () => {
        const shuffledValues = shuffleArray(values);

        const newBoard: string[][] = [];

        for (let row = 0; row < 5; row++) {
            const newRow: string[] = [];
            for (let col = 0; col < 5; col++) {
                const index = row * 5 + col;
                newRow.push(shuffledValues[index]);
            }
            newBoard.push(newRow);
        }

        setBoard(newBoard);
    };

    const handleClick = (row: number, col: number) => {
        const updatedBoard = [...board];
        updatedBoard[row][col] = 'X';
        setBoard(updatedBoard);
    };

    const regenerateBoard = () => {
        initializeBoard();
    };

    const shuffleArray = (array: any[]) => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };

    return (
        <div>
            <h1>Bingo Game</h1>
            <table>
                <tbody>
                    {board.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, colIndex) => (
                                <td key={colIndex} onClick={() => handleClick(rowIndex, colIndex)}>
                                    {cell === 'X' ? (
                                        <div style={{ fontSize: '20px' }}>🎯</div>
                                    ) : (
                                        cell
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={regenerateBoard}>Regenerate Board</button>
        </div>
    );
};

export default Bingo;
