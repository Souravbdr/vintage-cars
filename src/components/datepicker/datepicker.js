import ReactDatePicker from "react-datepicker";
import './datepicker.scss';

function Datepicker({ label, selectedDate, handleDateChange }) {
    return (
        <div className='date-picker'>
            <label htmlFor="datePicker" className="datepicker">{label}</label>
            <ReactDatePicker
                className="date"
                id="datePicker"
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
            />
        </div>
    );
}

export default Datepicker;