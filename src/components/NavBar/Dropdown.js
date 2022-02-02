import PropTypes from 'prop-types';
import classNames from 'classnames';

import MenuItems from './MenuItems';

function Dropdown({ submenus, opened, depthLevel }) {
	const currentLevel = depthLevel + 1;

	return (
		<ul
			className={classNames('dropdown', {
				"dropdown-submenu": currentLevel > 1,
				show: opened
			})}
		>
			{submenus.map((submenu, index) => (
				<MenuItems
					key={index}
					items={submenu}
					depthLevel={currentLevel}
				/>
			))}
		</ul>
	);
}

Dropdown.propTypes = {
	submenus: PropTypes.arrayOf(PropTypes.object).isRequired,
	depthLevel: PropTypes.number.isRequired,
	opened: PropTypes.bool.isRequired,
};

export default Dropdown;