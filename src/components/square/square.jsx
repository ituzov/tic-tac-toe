import style from './square.module.css';
import PropTypes from 'prop-types';

const Square = ({ value, onSquareClick }) => {
	return (
		<button onClick={onSquareClick} className={style.square}>
			{value}
		</button>
	);
};

Square.propTypes = {
	value: PropTypes.string,
	onSquareClick: PropTypes.func,
};

export default Square;
