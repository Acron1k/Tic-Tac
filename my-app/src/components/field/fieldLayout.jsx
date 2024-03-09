import styles from './field.module.css';
import PropTypes from 'prop-types';

export const FieldLayout = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	setIsGameStarted,
	isGameEnded,
	checkTheWinner,
}) => {
	return (
		<div className={styles.fieldBlock}>
			{field.map((cell, index) => (
				<button
					className={styles.fieldButton}
					key={index}
					disabled={cell !== '' || isGameEnded === true}
					onClick={() => {
						setField((prevField) => {
							const newField = [...prevField];
							newField[index] = currentPlayer;
							checkTheWinner(newField);
							return newField;
						});
						// checkTheWinner();
						if (!isGameEnded) {
							setCurrentPlayer((prevPlayer) => (prevPlayer === 'X' ? '0' : 'X'));
							setIsGameStarted(true);
						}
						setIsGameStarted(true);
					}}
				>
					{cell}
				</button>
			))}
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	setIsGameStarted: PropTypes.func,
	checkTheWinner: PropTypes.func,
};
