import React from 'react'
import PropTypes from 'prop-types';

const TextArea = ({label, name, placeholder, onChange}) => {

    const handleChange = (event) => {
        onChange({name, value:event.target.value});
    }

    return (
        <textarea htmlFor={label} name={name} placeholder={placeholder} className="form__text-area" onChange={handleChange} rows="5"></textarea>
    )
}

TextArea.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default TextArea