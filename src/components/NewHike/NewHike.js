import PropTypes from "prop-types";
import HikeForm from "./HikeForm";
import "./NewHike.css";

const NewHike = (props) => {
	const submitHikeHandler = (newHikeData) => {
		const hikeData = {
			...newHikeData,
			id: Math.random().toString()
		};

		props.onAddHike(hikeData);
	};
	
	return (
		<div className="new-hike">
			<HikeForm onSubmitHike={submitHikeHandler} />
		</div>
	);
};

NewHike.propTypes = {
	onAddHike: PropTypes.func
};

export default NewHike;