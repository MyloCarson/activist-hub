import React from 'react'
import PropTypes from 'prop-types';

import Modal from 'src/components/blocks/Modal';
import SuccessIcon from 'src/components/vectors/SuccessIcon';

import styles from './SuccessModal.module.scss';

const SuccessModal = ({activist_name, onClose}) => (
    <Modal hasHeaderTitle={false} onClose={onClose}>

        <div className={styles['modal-content']}>
            <SuccessIcon />
            <p className={styles['modal-content__detail']}><span className={styles['modal-content--highlight']}>{activist_name}</span> has been added to <span className={styles['modal-content--highlight']}>Activists.</span></p>
        </div>

    </Modal>
);

SuccessModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    activist_name: PropTypes.string.isRequired
}

export default SuccessModal;
