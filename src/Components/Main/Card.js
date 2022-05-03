import React from "react";
import "./card-style.css";

const Card = ({ title, info }) => {
	return (
		<div className='content-center'>
			<div className='card-box'>
				<div className='title'>{title}</div>
				<div className='info'>{info}</div>

				<div className='move-btn'>
					<button className='btn'>Sign Up</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
