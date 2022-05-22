import Header from "../Components/Layout/Header";
import DataToCard from "../Components/Main/DataToCard";

import { useEffect, useState } from "react";

const MainPage = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [loadedLocations, setLoadedLocations] = useState([]);
	useEffect(() => {
		setIsLoading(true);
		fetch(
			"https://cs308-hw-default-rtdb.europe-west1.firebasedatabase.app/Locations.json"
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const locations = [];

				for (const key in data) {
					const location = {
						...data[key],
					};
					locations.push(location);
				}

				setIsLoading(false);
				setLoadedLocations(locations);
			});
	}, []);

	if (isLoading) {
		return (
			<section>
				<p>Loading...</p>
			</section>
		);
	}
	return (
		<div>
			<Header title={"Hotel? Trivago"} />

			{loadedLocations.map((item) => {
				return <DataToCard data={item} />;
			})}
		</div>
	);
};

export default MainPage;
