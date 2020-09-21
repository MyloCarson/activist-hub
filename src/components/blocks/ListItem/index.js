import React from 'react'
import styles from './ListItem.module.scss';

const ListItem = ({person, description, imgUrl}) => (
    <div className={styles['list-item']}>
        <div className={styles['list-item__left-pane']}>
            <div className={styles['list-item__image-wrapper']}>
                <img src={imgUrl} className={styles['list-item__image']}  alt={person}/>
            </div>
            <h5 className={styles['list-item__title']}>{person}</h5>

        </div>
        <div className={styles['list-item__right-pane']}>
            <p className={styles['list-item__detail']}>{description}</p>
        </div>

    </div>
)


export default ListItem;