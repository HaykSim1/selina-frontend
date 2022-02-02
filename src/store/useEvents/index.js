import { useCallback, useMemo, useEffect, useState } from 'react';
import { atom, useRecoilState } from 'recoil';

import request from 'utils/request';

const eventsState = atom({
	key: 'eventsState',
	default: {},
});

function useEvents(id) {
	const [events, setEvents] = useRecoilState(eventsState);

	const [loading, setLoading] = useState(false);

	const read = useCallback(() => {
		setLoading(true);
		return request(`events/events/aggregated/${id}`)
		.then(data => {
			setEvents(old => ({ ...old, [id]: data }));
			setLoading(false);
		});
	}, [id]);

	useEffect(() => {
		read();
	}, [id]);

	return [events[id], loading, { read }]
}

export default useEvents;