import './input.scss';
function Input({ type, name, label, value, handleChange, checked }) {
    return (
        <>
            {type === 'text' ? (
                <div className="inp-label">
                    <label htmlFor="title" className="label">
                        {label}
                    </label>
                    <input id="title" className="input" name={name} value={value} onChange={handleChange}/>
                </div>
            ) : (
                ''
            )}
            {type === 'radio' ? (
                <div className='radio-item'>
                    <label>
                        <input
                            type="radio"
                            name={name}
                            value={value}
                            className='radio-btn'
                            onChange={handleChange}
                            checked={checked}
                        />
                        {label}
                    </label>
                </div>
            ) : (
                ''
            )}
            {type === 'attachment' ? (
                <div className='inp-label'>
                    <label htmlFor="attachment" className='label'>{label}</label>
                    <input
                        type="file"
                        id="attachment"
                        name={name}
                        className='input input--attach'
                        onChange={handleChange}
                    />
                </div>
            ) : (
                ''
            )}
        </>

    );
}

export default Input;