import { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import './index.css';

function Carousel({ images }) {
	const [index, setIndex] = useState(0);

	const next = useCallback(() => {
	  setIndex(i => i === images.length - 1 ? 0 : i+1);
	}, []);

	const prev = useCallback(() => {
		setIndex(i => i === 0 ? images.length -1 : i-1);
	}, []);

	const count = useMemo(() => images.length, [images]);

	return (
		<div className="slideshow-container">
			{images.map((item, i) => (
				<div key={i} className={i === index ? 'fade active' : 'slides fade'}>
					<div className="number-text">{index + 1} / {count}</div>
					<div className='image' style={{ backgroundImage: `url(${item.url})` }}/>
					<div className="text">{item.title}</div>
				</div>
			))}
			<a className="prev" onClick={prev}>&#10094;</a>
			<a className="next" onClick={next}>&#10095;</a>
		</div>
	);
}

Carousel.propTypes = {
	images: PropTypes.arrayOf(PropTypes.shape({
		url: PropTypes.string.isRequired,
		title: PropTypes.string,
	})),
}

Carousel.defaultProps = {
	images: [],
}

export default Carousel;

