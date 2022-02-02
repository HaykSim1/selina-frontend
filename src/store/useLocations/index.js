import { useCallback, useEffect, useState } from 'react';
import { atom, useRecoilState } from 'recoil';

import request from 'utils/request';

const locationsState = atom({
	key: 'locationsState',
	default: [],
});

function useLocations() {
	const [locations, setLocations] = useRecoilState(locationsState);

	const [loading, setLoading] = useState(false);

	const read = useCallback(() => {
		setLoading(true);

		return request(`locations/api/locations?includeUpcomingLocations=true&content=false`)
		.then(data => {
			setLocations(data);
			setLoading(false);
		});
	}, []);

	const get = useCallback(id => locations.find(item => item.id === id) || {}, [locations]);

	useEffect(() => {
		locations.length === 0 && read();
	}, []);

	return [locations, loading, { read, get }]
}

export default useLocations;