import React, {useRef, useState}  from 'react'

import Modal from 'src/components/blocks/Modal';
import UserIcon from 'src/components/vectors/UserIcon';
import Input from 'src/components/blocks/Input';
import TextArea from 'src/components/blocks/TextArea';
import {validateObject} from 'src/utils'

import styles from './AddActivistModal.module.scss';

const AddActivistModal = ({onClose, newActivistEvent}) => {
    
    const [activistDataSet, setActivistDataSet] = useState({});
    const [imageData, setImageData] = useState('')


    const inputSelectRef = useRef(null);

    const selectFile = () => {
        inputSelectRef.current.click();
    }

    const handleFileChange = (event) => {
        const target = event.target;
        
        const reader = new FileReader();
        reader.onload = function(){
            setImageData(reader.result)
            updateNode('imgUrl', reader.result);
        };
        reader.readAsDataURL(target.files[0]);
    }

    const handleChange = (payload) => {
        if(payload.name === 'activist_name'){
            updateNode('person', payload.value);
        }
        if(payload.name === 'description'){
            updateNode('description', payload.value)
        }
        if(payload.name === 'date_of_birth'){
            updateNode('dateOfBirth', new Date(payload.value).toISOString())
        }

        if(payload.name === 'place_of_birth'){
            updateNode('placeOfBirth', payload.value)
        }
    }

    const updateNode = (node, value) => {
        const _newActivist = activistDataSet;
        _newActivist[node] = value;
        setActivistDataSet(_newActivist);
    }

    const emitNewActivist = () => {
        if(!validateObject(activistDataSet, 'person', 'description', 'dateOfBirth', 'placeOfBirth', 'imgUrl')){
            return;
        }
        newActivistEvent(activistDataSet)
        onClose();
    }
    

    return (
        <Modal onClose={onClose}>
            <div className={styles['modal-form']}>
                <form className="form"> 
                    <div className={styles['modal-form__head']}>
                        {
                            !imageData && (
                                <div className="circle circle--primary circle--md" onClick={selectFile}>
                                    <UserIcon />
                                </div>
                            )
                        }
                        {imageData && (
                            <div className={styles['modal-form__image-wrapper']}>
                                <img src={imageData} className={styles['modal-form__image']}  alt="avatar"/>
                            </div>
                        )}
                        <div className={styles['modal-form__add-button']} onClick={selectFile} >{!imageData ? 'Add a Photo': 'Edit Photo'}</div>
                        <input ref={inputSelectRef} hidden type="file" accept="image/*" onChange={handleFileChange} />
                    </div>
    
                
                    <div className="form-group">
                        <div className="form-control">
                            <label id="activist_name" className="form-label">Activist Name</label>
                            <Input label="activist_name" name="activist_name" placeholder="Enter activist name" onChange={handleChange} />
                        </div>
                    </div>
                    
                    <div className="form-group__full">
                        <div className="form-control">
                            <label id="description" className="form-label">Description</label>
                            <TextArea label="description" name="description" placeholder="Enter activist description" onChange={handleChange} />
                        </div>
                    </div>
    
                    <div className="form-group">
                        <div className="form-control">
                            <label id="date_of_birth" className="form-label">Date of Birth</label>
                            <Input type="date" label="date_of_birth" name="date_of_birth" placeholder="02-04-1998" onChange={handleChange} />
                        </div>
                        <div className="form-control">
                            <label id="place_of_birth" className="form-label">Place of Birth</label>
                            <Input label="place_of_birth" name="place_of_birth" placeholder="Lagos, Nigeria" onChange={handleChange} />
                        </div>
                    </div>
    
                </form>
            </div>
            <div className="modal-footer">
                <button className="button button--primary" onClick={emitNewActivist}>Add Activist</button>
            </div>
        </Modal>
    )
}

export default AddActivistModal