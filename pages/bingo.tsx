import React, { useState } from 'react';

const Bingo = () => {
    const [board, setBoard] = useState<string[][]>([
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ]);

    const handleClick = (row: number, col: number) => {
        const updatedBoard = [...board];
        updatedBoard[row][col] = 'X';
        setBoard(updatedBoard);
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
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Bingo;
