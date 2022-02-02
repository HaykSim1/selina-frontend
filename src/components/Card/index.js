import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.css';

function Card({ url, name, description, startDate, className, ...rest }) {
	return (
		<div
			{...rest}
			className={classNames('card', className)}
		>
			<img
				src={url}
				alt="Event"
			/>
				<div
					className="container"
				>
					<h4>{name}</h4>
					<p
						className='caption'
					>
						{description}
					</p>
					<p
						className='caption'
					>
						Start at: {startDate}
					</p>
				</div>
		</div>
	);
}

Card.propTypes = {
	url: PropTypes.string,
	name: PropTypes.string,
	description: PropTypes.string,
	startDate: PropTypes.string,
	className: PropTypes.string,
};

export default Card;