import Card from "../Components/Main/Card";
import Header from "../Components/Layout/Header";

const MainPage = () => {
	const description =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
	return (
		<div>
			<Header title={"Hotel? Trivago"} />
			<Card title={"Skver"} info={description} />
			<Card title={"Johnny"} info={description} />
			<Card title={"Depp"} info={description} />
			<Card title={"Termalna rivijera Ilidza"} info={description} />
		</div>
	);
};

export default MainPage;
