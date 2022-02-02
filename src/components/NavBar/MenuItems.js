import { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Dropdown from './Dropdown';

function MenuItems({ items, depthLevel }) {
	const ref = useRef();

	const [opened, setOpened] = useState(false);

	useEffect(() => {
		// For mobile and tablet menu will open on click
		const handler = event =>
			opened && ref.current && !ref.current.contains(event.target) && setOpened(false);

		document.addEventListener("mousedown", handler);
		document.addEventListener("touchstart", handler);
		return () => {
			// Cleanup the event listener
			document.removeEventListener("mousedown", handler);
			document.removeEventListener("touchstart", handler);
		};
	}, [opened]);

	const onMouseEnter = useCallback(() => {
		// For desktop menu will open on hover
		window.innerWidth > 960 && setOpened(true);
	}, []);

	const onMouseLeave = useCallback(() => {
		// For desktop menu will close on mouse leave
		window.innerWidth > 960 && setOpened(false);
	}, []);

	return (
		<li
			className="menu-items"
			ref={ref}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			{items.submenu ? (
				<>
					<button
						type="button"
						onClick={() => setOpened(!opened)}
					>
						{items.title} <span className="arrow" />
					</button>
					<Dropdown
						depthLevel={depthLevel}
						submenus={items.submenu}
						opened={opened}
					/>
				</>
			) : (
				<Link to={`/${items.id}`}>{items.title || items.name}</Link>
			)}
		</li>
	);
}

MenuItems.propTypes = {
	items: PropTypes.oneOfType([
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			submenu: PropTypes.array,
		}),
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		})
	]),
	depthLevel: PropTypes.number.isRequired
}

export default MenuItems;