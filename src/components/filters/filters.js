import Input from "../input/input";
import './filters.scss';
import Datepicker from "../datepicker/datepicker";

function Filter({ locationFilter, descriptionFilter, handleLocationFilterChange, handleDescriptionFilterChange, selectedDateFrom, handleDateChangeFrom, selectedDateTo, handleDateChangeTo }) {

    return (
        <div className="filter-input">
            <Input type="text" name="location" label="Location:" value={locationFilter} handleChange={handleLocationFilterChange} />
            <Input type="text" name="description" label="Description:" value={descriptionFilter} handleChange={handleDescriptionFilterChange} />
            <Datepicker label='Date From:' selectedDate={selectedDateFrom} handleDateChange={handleDateChangeFrom}/>
            <Datepicker label="Date To:" selectedDate={selectedDateTo} handleDateChange={handleDateChangeTo}/>
        </div>
    );
}

export default Filter;