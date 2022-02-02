import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Navbar from '../NavBar';

import './index.css';

function Header({ data }) {
	return (
		<header>
			<div className="nav-area">
				<Link to="/" className="logo">
					<img
						src='https://www.selina.com/static/media/selina_logo_black.b62a0982.svg'
					/>
				</Link>
				<Navbar
					menuItems={data}
				/>
			</div>
		</header>
	);
}

Header.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			submenu: PropTypes.array,
		})
	)
};

export default Header;