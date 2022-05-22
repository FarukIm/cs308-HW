import Card from "./Card";
import "./card-style.css";

const DataToCard = ({ data }) => {
	return <Card title={data.title} info={data.info} />;
};

export default DataToCard;
