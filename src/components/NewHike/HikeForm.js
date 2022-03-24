import { useState } from "react";
import PropTypes from "prop-types";
import "./HikeForm.css";

const HikeForm = (props) => {
	const todayDate = new Date().toISOString().split("T")[0];

	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredMileage, setEnteredMileage] = useState("");
	const [enteredDate, setEnteredDate] = useState("");
	
	
	const titleChangeHandler = (e) => {
		setEnteredTitle(e.target.value);
	};
	const mileageChangeHandler = (e) => {
		setEnteredMileage(e.target.value);
	};
	const dateChangeHandler = (e) => {
		setEnteredDate(e.target.value);
	};
	const submitHandler = (e) => {
		e.preventDefault();

		const newHikeData = {
			title: enteredTitle,
			mileage: parseInt(enteredMileage),
			date: new Date(enteredDate)
		};
		
		props.onSubmitHike(newHikeData);
		setEnteredTitle("");
		setEnteredMileage("");
		setEnteredDate("");
	};
	
	return (
		<form onSubmit={submitHandler}>
			<div className="new-hike__controls">
				<div className="new-hike__control new-hike__control--text">
					<label>Title</label>
					<input type="text" value={enteredTitle} onChange={titleChangeHandler} required/>
				</div>
				<div className="new-hike__control new-hike__control--number">
					<label>Mileage</label>
					<input type="number" min=".25" step=".01" value={enteredMileage} onChange={mileageChangeHandler} required/>
				</div>
				<div className="new-hike__control new-hike__control--date">
					<label>Date</label>
					<input type="date" min="2000-01-01" max={todayDate} value={enteredDate} onChange={dateChangeHandler} required/>
				</div>
			</div>
			<div className="new-hike__actions">
				<button onClick={props.onCancelSubmit}>Cancel</button>
				<button type="submit">Add Hike</button>
			</div>
		</form>
	);
};

HikeForm.propTypes = {
	onCancelSubmit: PropTypes.func,
	onSubmitHike: PropTypes.func
};

export default HikeForm;