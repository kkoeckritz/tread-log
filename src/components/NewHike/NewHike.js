import { useState } from "react";
import PropTypes from "prop-types";
import HikeForm from "./HikeForm";
import "./NewHike.css";

const NewHike = (props) => {
	const [formIsShown, setFormIsShown] = useState(false);
	let formContent = <p>state error: formContent</p>;

	const submitHikeHandler = (newHikeData) => {
		const hikeData = {
			...newHikeData,
			id: Math.random().toString()
		};

		props.onAddHike(hikeData);
		setFormIsShown(false);
	};

	formIsShown ? 
		formContent = <HikeForm onCancelSubmit={() => setFormIsShown(false)} onSubmitHike={submitHikeHandler} /> : 
		formContent = <button onClick={() => setFormIsShown(true)}>New Hike</button>;
	
	return (
		<div className="new-hike">
			{formContent}
		</div>
	);
};

NewHike.propTypes = {
	onAddHike: PropTypes.func
};

export default NewHike;