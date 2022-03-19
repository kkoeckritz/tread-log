import PropTypes from "prop-types";
import "./HikesFilter.css";

const HikesFilter = (props) => {

	const dropdownChangeHandler = (e) => {
		props.onFilterYear(parseInt(e.target.value));
	};

	let optionContent = props.yearList.map((year, i) => (
		<option value={year} key={i}>{year}</option>)
	);

	return (
		<div className='hikes-filter'>
			<div className='hikes-filter__control'>
				<label>Filter by year</label>
				<select value={props.filteredYear} onChange={dropdownChangeHandler}>
					{optionContent}
				</select>
			</div>
		</div>
	);
};

HikesFilter.propTypes = {
	yearList: PropTypes.array,
	filteredYear: PropTypes.number,
	onFilterYear: PropTypes.func
};
	
export default HikesFilter;
	