import { useRef } from "react";
import "./form-style.css";

const Form = ({ signUpHandler }) => {
	const nameInput = useRef();
	const surnameInput = useRef();
	const imageInput = useRef();
	const bioInput = useRef();

	const submitHandler = (event) => {
		event.preventDefault();

		const enterName = nameInput.current.value;
		const enterSurname = surnameInput.current.value;
		const enterImage = imageInput.current.value;
		const enterBio = bioInput.current.value;

		const data = {
			name: enterName,
			surname: enterSurname,
			image: enterImage,
			bio: enterBio,
		};

		signUpHandler(data);
	};

	return (
		<div className='content-center'>
			<form className='card' onSubmit={submitHandler}>
				<div className='text-boxes-sm'>
					<label htmlFor='name'>Name: </label>
					<input type='text' required id='name' ref={nameInput} />
				</div>
				<div className='text-boxes-sm'>
					<label htmlFor='surname'>Surname: </label>
					<input type='text' required id='surname' ref={surnameInput} />
				</div>
				<div className='text-boxes-sm'>
					<label htmlFor='image'>Image: </label>
					<input type='url' required id='image' ref={imageInput} />
				</div>

				<div className='bio'>
					<label htmlFor='bio'>Biography: </label>
					<textarea id='bio' required rows='6' ref={bioInput}></textarea>
				</div>
				<div className='content-center'>
					<button className='btn'>Sign Up</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
