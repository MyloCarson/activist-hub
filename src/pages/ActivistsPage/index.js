import React, {useState, useEffect} from 'react'
import DefaultLayout from 'src/components/layouts/DefaultLayout';
import SearchInput from 'src/components/blocks/SearchInput';
import TileIcon from 'src/components/vectors/TileIcon';
import ListIcon from 'src/components/vectors/ListIcon';

import ActivistsGrid from 'src/components/blocks/ActivistsGrid';
import ActivistsList from 'src/components/blocks/ActivistsList';
import AddActivistModal from 'src/components/blocks/AddActivistModal';
import SuccessModal from 'src/components/blocks/SuccessModal';


import styles from './ActivistsPage.module.scss';
import { GRID, LIST, BASE_URL, IDLE, PENDING, RESOLVED } from 'src/constants';
import { getListLayoutType, storeListLayoutType } from 'src/utils';

const ActivistsPage = () => {
    const [activists, setActivists] = useState([]);
    const [listViewType, setListViewType] = useState(getListLayoutType());
    const [fetchStatus, setFetchStatus] = useState(IDLE);
    const [showForm, setShowForm] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const isGrid = listViewType === GRID;

    const Icon = isGrid ? ListIcon : TileIcon;

    const ListLayout = isGrid ? ActivistsGrid : ActivistsList;

    const toggleListViewLayout = () => {
        if(isGrid) {
            setListViewType(LIST)
            storeListLayoutType(LIST);
        } else {
            setListViewType(GRID)
            storeListLayoutType(GRID)
        }
    }

    const toggleFormModal = ()  => {
        setShowForm(!showForm);
    }

    const toggleSuccessModal  = () => {
        setShowSuccessModal(!showSuccessModal);
    }

    const newActivistEvent = (newActivist) => {
        setActivists([...activists, newActivist])
        toggleSuccessModal();
    }


    useEffect(() => {
        setFetchStatus(PENDING)
        fetch(BASE_URL)
        .then(response => response.json())
        .then( response => {
            setFetchStatus(RESOLVED)
            setActivists(response);
        })
    }, [])


    return (
        <DefaultLayout>
            <div className={styles['activist-page']}>
                <section className={styles['activist-page__form-panel']}>
                    <form className={`form ${styles['activist-page__form']}`}>
                        <SearchInput 
                            label="search"
                            placeholder="Search for activists, movements, etc"
                            onChange={() => {}} />
                        
                        <button className={`button button--primary ${styles['activist-page__form-button']}`}>Search</button>
    
                    </form>
    
                    <div className="button button--primary--with-border" onClick={toggleFormModal}>Add New Activist</div>
                </section>
    
                <section className={styles['activist-page__content-section']}>
                    <div className={`circle circle--primary circle--sm ${styles['activist-page__content-section__control']}`} onClick={toggleListViewLayout}>
                        <Icon />
                    </div>
                    {
                        fetchStatus === RESOLVED && (
                            <ListLayout activists={activists} />
                        )
                    }                    
                </section>
            </div>
            {showForm && (<AddActivistModal onClose={toggleFormModal} newActivistEvent={newActivistEvent} />)}
            {showSuccessModal && (<SuccessModal onClose={toggleSuccessModal} activist_name={activists[activists.length - 1].person} />)}
        </DefaultLayout>
    )
};

export default ActivistsPage;