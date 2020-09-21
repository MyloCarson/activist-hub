import React, {useEffect} from 'react'
import CloseIcon from 'src/components/vectors/CloseIcon';
import PropTypes from 'prop-types';

const Modal = ({children, onClose, hasHeaderTitle}) => {

    
    useEffect(() => {
        const handleEscape = (event) => {
            if(event.key === 27){
                onClose();
            }
        }
        document.addEventListener('keydown',handleEscape, false)
        return () => {
            document.removeEventListener('keydown', handleEscape)
        }
    }, [onClose]);

    return (
        <div className={`modal ${!hasHeaderTitle ? 'modal--alternate' : ''}`}>
            <div class="modal-overlay"></div>
            <div className={`modal-content ${!hasHeaderTitle ? 'modal-content--alternate' : ''}`}>
                <div className={`modal-header ${!hasHeaderTitle ? 'modal-header--alternate' : ''}`}>
                    {hasHeaderTitle && (<h6 className="modal-header__title">Add an Activist</h6>)}
                    <CloseIcon onClose={onClose} />
                </div>
    
                {children}
            </div>
        </div>
    );
};

Modal.defaultProps ={
    hasHeaderTitle: true
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    hasHeaderTitle: PropTypes.bool
}

export default Modal;