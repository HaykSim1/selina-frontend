import { useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';

import getRandomFromArray from 'utils/getRandomFromArray';

import useLocations from 'store/useLocations';

import Home from 'pages/Home';
import Location from 'pages/Location';

import Header from '../Header';
import Footer from '../Footer';
import Spinner from "../Spinner";

function Layout() {
	const [data, loading] = useLocations();

	// Group locations by country, and structure for menu
	const groupedLocations = useMemo(() => {
		const resp = data.reduce((acc, item) => {
			const country = item.country.name;
			acc[country] = acc[country] || { title: country, submenu: [] };
			acc[country].submenu.push(item);
			return acc;
		}, {});

		return Object.values(resp);
	}, [data]);

	const footerData = useMemo(() => getRandomFromArray(data, 3), [data]);

	if(loading) {
		return <Spinner/>;
	}

	return (
		<>
			<Header
				data={groupedLocations}
			/>
			<Routes>
				<Route
					exact
					path="/"
					element={<Home />}
				/>
				<Route
					path="/:id"
					element={<Location />}
				/>
			</Routes>
			<Footer data={footerData}/>
		</>
	)
}

export default Layout;