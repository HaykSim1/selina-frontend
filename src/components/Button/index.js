import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.css';

function Button({ title, className, ...rest }) {

	return (
		<button
			{...rest}
			className={classNames('button', className)}
		>
			{title}
		</button>
	);
}

Button.propTypes = {
	title: PropTypes.string,
	className: PropTypes.string,
}

export default Button;