import React from 'react'
import ClapIcon from 'src/components/vectors/ClapIcon';
import { formatDateOfBirth } from 'src/utils';

import styles from './GridItem.module.scss';


const GridItem = ({person, description, dateOfBirth, imgUrl, placeOfBirth}) => (
    <div className={`card card--sm ${styles['grid-item-card']}`}>

        <div className={styles['grid-item']}>
            <div className={styles['grid-item__head']}>
                <div className={styles['grid-item__image-wrapper']}>
                    <img src={imgUrl} className={styles['grid-item__image']}  alt={person}/>
                </div>
                <div className={styles['grid-item__head__clap-container']}>
                    <ClapIcon />
                    <p className={styles['grid-item__head__clap-count']}>3.5k</p>
                </div>
            </div>

            <div className={styles['grid-item__content']}>
                <h5 className={styles['grid-item__content-title']}>{person}</h5>

                <p className={styles['grid-item__content-detail']}>{description}</p>

                <p className={styles['grid-item__content-extra']}> <span className={styles['grid-item__content-highlight']}>Born</span> {formatDateOfBirth(dateOfBirth)} <span className={styles['grid-item__content-highlight']}>in</span> {placeOfBirth}</p>
            </div>


        </div>

    </div>
)

export default GridItem;