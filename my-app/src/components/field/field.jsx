import { FieldLayout } from './fieldLayout';
import PropTypes from 'prop-types';

export const Field = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	setIsGameStarted,
	isGameEnded,
	checkTheWinner,
}) => {
	return (
		<FieldLayout
			field={field}
			setField={setField}
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
			setIsGameStarted={setIsGameStarted}
			isGameEnded={isGameEnded}
			checkTheWinner={checkTheWinner}
		/>
	);
};

Field.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	setIsGameStarted: PropTypes.func,
	isGameEnded: PropTypes.bool,
	checkTheWinner: PropTypes.func,
};
