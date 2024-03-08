import { InformationLayout } from './informationLayout';
import PropTypes from 'prop-types';

export const Information = ({
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
		<InformationLayout
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
	);
};
Information.propTypes = {
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
