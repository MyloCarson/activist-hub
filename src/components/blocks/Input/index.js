import React from 'react';
import PropTypes from 'prop-types';

const Input = ({type, name, label, placeholder, onChange}) => {

    const handleChange = (event) => {
        const value = type !== 'date' ?  event.target.value : event.target.valueAsDate;
        
        onChange({name, value});
    }

    return (
        <input type={type} name={name} htmlFor={label} placeholder={placeholder} className="form-input" onChange={handleChange} />
    )
}

Input.defaultProps = {
    type: 'text'
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,

}

export default Input