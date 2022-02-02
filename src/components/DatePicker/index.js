import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.css';

function DatePicker({ onChange, className, error, ...rest }) {
	return (
		<div
			className={classNames('date-picker-container', className, { error })}
		>
			<input
				type='date'
				onChange={onChange}
				{...rest}
			/>
		</div>
	);
}

DatePicker.propTypes = {
	error: PropTypes.bool,
	onChange: PropTypes.func,
	className: PropTypes.string,
};

DatePicker.defaultProps = {
	onChange: () => {}
};

export default DatePicker;