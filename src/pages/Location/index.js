import { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';

import useLocations from 'store/useLocations';
import useEvents from 'store/useEvents';

import request from 'utils/request';

import DatePicker from 'components/DatePicker';
import { Row, Column } from 'components/Grid';
import Carousel from 'components/Carousel';
import Spinner from 'components/Spinner';
import Card from 'components/Card';

import './index.css';

function Location() {
	const { id } = useParams();
	const [locations, locationLoading, { get }] = useLocations();
	const [events, loading] = useEvents(id);

	const {
		enData = {},
		name,
		checkInTime,
		checkOutTime,
		url,
		hasCoWork,
		hasEvents,
		hasTransportation ,
	} = get(id);

	const [images, setImages] = useState([]);
	const [date, setDate] = useState('');

	useEffect(() => {
		// For images
		request(`content/content/hero?url=${url}`).then(({ carousel }) => {
			setImages(carousel.map(({ image }) => ({ url: image.file.url, title: image.title })))
		});
	}, [url]);

	// Filter  event  by date, if no date return empty array
	const filteredEvents = useMemo(() => {
		if(!date) return [];
		if(!events?.length) return [];

		return events.filter(event => dayjs(event.startDateUTC).isAfter(date));
	}, [events, date]);

	if(loading) {
		return <Spinner />;
	}

	return (
		<div className='detailed-container'>
			<Carousel
				images={images}
			/>
			<div className='body'>
				<h1>{name} </h1>
				<p>{enData.country}, {enData.region}, {enData.location}</p>
				<p>Check in: {checkInTime} Check out: {checkOutTime}</p>
				<div className='content'>
					{hasCoWork && <i title='Co-working' className="fas fa-briefcase"></i>}
					{hasEvents && <i title='Has Events' className="fas fa-calendar-alt"></i>}
					{hasTransportation && <i title='Transportation' className="fas fa-shuttle-van"></i>}
				</div>
			</div>
			<div className='events'>
				<DatePicker
					min={dayjs().format('YYYY-MM-DD')}
					max={dayjs().add(1, 'M').format('YYYY-MM-DD')}
					onChange={e => setDate(e.target.value)}
					value={date}
				/>
			</div>
			<Row>
				{filteredEvents.map(({ images, startDate, description, name }) => (
					<Column>
						<Card
							url={images[0]}
							startDate={startDate}
							description={description}
							name={name}
						/>
					</Column>
				))}
			</Row>
		</div>
	);
}

export default Location;