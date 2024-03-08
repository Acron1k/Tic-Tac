import styles from './information.module.css';
import PropTypes from 'prop-types';

export const InformationLayout = ({
	setField,
	isGameEnded,
	setIsGameEnded,
	currentPlayer,
	setCurrentPlayer,
	isDraw,
	setIsDraw,
	isGameStarted,
	setIsGameStarted,
}) => {
	return (
		<div className={styles.informationBlock}>
			{isGameEnded === false ? (
				<p className={styles.gameName}>Игра крестики-нолики</p>
			) : isDraw === false ? (
				<p className={styles.gameName}>Победил: {currentPlayer} !</p>
			) : (
				<p className={styles.gameName}>Ничья!</p>
			)}
			{isGameStarted === false ? (
				<p className={styles.instructionText}>Первым ходит {currentPlayer}, нажмите на поле, чтобы начать.</p>
			) : isGameEnded === true ? (
				<button
					className={styles.resetButton}
					onClick={() => {
						setField(['', '', '', '', '', '', '', '', '']);
						setCurrentPlayer('X');
						setIsDraw(false);
						setIsGameEnded(false);
						setIsGameStarted(false);
					}}
				>
					Начать сначала
				</button>
			) : (
				<p className={styles.instructionText}>Следующим ходит {currentPlayer}</p>
			)}
		</div>
	);
};

InformationLayout.propTypes = {
	setField: PropTypes.func,
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameStarted: PropTypes.bool,
	setIsGameStarted: PropTypes.func,
};
