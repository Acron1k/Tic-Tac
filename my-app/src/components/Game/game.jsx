import { useState } from 'react';
import { GameLayout } from './gameLayout';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isGameStarted, setIsGameStarted] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);
	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	function checkTheWinner(field) {
		for (let i = 0; i < WIN_PATTERNS.length; i++) {
			const [a, b, c] = WIN_PATTERNS[i];
			if (field[a] === 'X' && field[b] === 'X' && field[c] === 'X') {
				setCurrentPlayer((prevPlayer) => (prevPlayer === 'X' ? '0' : 'X'));
				setIsGameEnded(true);
			} else if (field[a] === '0' && field[b] === '0' && field[c] === '0') {
				setCurrentPlayer((prevPlayer) => (prevPlayer === 'X' ? '0' : 'X'));
				setIsGameEnded(true);
			}
		}

		if (!field.some((cell) => cell === '')) {
			setIsDraw(true);
			setIsGameEnded(true);
		}
	}
	return (
		<GameLayout
			field={field}
			setField={setField}
			isDraw={isDraw}
			setIsDraw={setIsDraw}
			isGameEnded={isGameEnded}
			setIsGameEnded={setIsGameEnded}
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
			isGameStarted={isGameStarted}
			setIsGameStarted={setIsGameStarted}
			checkTheWinner={checkTheWinner}
		/>
	);
};
