import { Field } from '../field/field';
import { Information } from '../information/imformation';
import styles from './game.module.css';
import PropTypes from 'prop-types';

export const GameLayout = ({
	field,
	setField,
	isDraw,
	setIsDraw,
	isGameEnded,
	setIsGameEnded,
	currentPlayer,
	setCurrentPlayer,
	isGameStarted,
	setIsGameStarted,
	checkTheWinner,
}) => {
	return (
		<div className={styles.game}>
			<div className={styles.gameWindow}>
				<Information
					setField={setField}
					isGameEnded={isGameEnded}
					setIsGameEnded={setIsGameEnded}
					currentPlayer={currentPlayer}
					setCurrentPlayer={setCurrentPlayer}
					isDraw={isDraw}
					setIsDraw={setIsDraw}
					isGameStarted={isGameStarted}
					setIsGameStarted={setIsGameStarted}
				/>
				<Field
					field={field}
					setField={setField}
					currentPlayer={currentPlayer}
					setCurrentPlayer={setCurrentPlayer}
					setIsGameStarted={setIsGameStarted}
					isGameEnded={isGameEnded}
					checkTheWinner={checkTheWinner}
				/>
			</div>
		</div>
	);
};

GameLayout.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameStarted: PropTypes.bool,
	setIsGameStarted: PropTypes.func,
	checkTheWinner: PropTypes.func,
};
