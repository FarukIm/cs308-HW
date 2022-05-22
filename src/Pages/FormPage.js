import Form from "../Components/Form/Form";
import Header from "../Components/Layout/Header";
import { useNavigate } from "react-router-dom";

const FormPage = () => {
	const naviagte = useNavigate();
	function signUpHandler(data) {
		fetch(
			"https://cs308-hw-default-rtdb.europe-west1.firebasedatabase.app/SignUpData.json",
			{
				method: "POST",
				body: JSON.stringify(data),
				headers: {
					"Content-Type": "application/json",
				},
			}
		).then(() => {
			naviagte("/");
		});
	}

	return (
		<div>
			<Header title={"Hotel? TRIVAGO"} />
			<Form signUpHandler={signUpHandler} />
		</div>
	);
};

export default FormPage;
