import PropTypes from 'prop-types';
import MenuItems from './MenuItems';

import './index.css';

function Navbar({ menuItems }) {
	return (
		<nav>
			<ul className="menus">
				<MenuItems
					items={{
						title: 'Locations',
						submenu: menuItems
					}}
					depthLevel={0}
				/>
			</ul>
		</nav>
	);
}

Navbar.propTypes = {
	menuItems: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			submenu: PropTypes.array,
		})
	)
};

export default Navbar;