import Form from "../Components/Form/Form";
import Header from "../Components/Layout/Header";

const FormPage = () => {
	function signUpHandler(data) {
		console.log(data);
	}

	return (
		<div>
			<Header title={"Hotel? TRIVAGO"} />
			<Form signUpHandler={signUpHandler} />
		</div>
	);
};

export default FormPage;
