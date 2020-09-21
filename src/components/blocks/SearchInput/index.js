import React, {useRef} from 'react'
import PropTypes from 'prop-types';
import SearchIcon from 'src/components/vectors/SearchIcon';

const SearchInput = ({label, placeholder, onChange}) =>{
    const inputRef = useRef(null);

    const showFocusOnInput = () => {
        inputRef.current.focus();
    }

    const handleChange = (event) => {
        onChange(event.target.value);
    }

    return (
            <div className="form__search-input" onClick={showFocusOnInput} >
                <SearchIcon />
                <input ref={inputRef} htmlFor={label} placeholder={placeholder}  onChange={handleChange} />
            </div>
        )
}

SearchInput.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default SearchInput;