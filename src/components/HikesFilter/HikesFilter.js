import PropTypes from "prop-types";
import "./HikesFilter.css";

const HikesFilter = (props) => {
	const dropdownChangeHandler = (e) => {
		props.onFilterYear(e.target.value);
	};

	return (
		<div className='hikes-filter'>
			<div className='hikes-filter__control'>
				<label>Filter by year</label>
				<select value={props.filteredYear} onChange={dropdownChangeHandler}>
					<option value='2022'>2022</option>
					<option value='2021'>2021</option>
					<option value='2020'>2020</option>
					<option value='2019'>2019</option>
				</select>
			</div>
		</div>
	);
};

HikesFilter.propTypes = {
	filteredYear: PropTypes.number,
	onFilterYear: PropTypes.func
};
	
export default HikesFilter;
	