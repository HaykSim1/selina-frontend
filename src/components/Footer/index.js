import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './index.css';

function Footer({ data }) {
	return (
		<footer>
			<div className="container">
				<div className="profiles">
					{data.map(item => <Link key={item.id} to={`/${item.id}`}>{item.name}</Link>)}
				</div>
			</div>
		</footer>
	);
}

Footer.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			id: PropTypes.string.isRequired,
		})
	)
};

export default Footer;