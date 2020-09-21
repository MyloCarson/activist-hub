import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const Header = ({isAlternate}) => (
    <div className="max-container">
        <div className={`header ${isAlternate ? 'header-alternate' : ''}`}>
            <Link to="/" className={`header-logo ${isAlternate ? 'header--white': ''}`}>ActivistHub</Link>
        </div>
    </div>
)

Header.defaultProp = {
    isAlternate: false
}

Header.propTypes = {
    isAlternate: PropTypes.bool
}

export default Header;
