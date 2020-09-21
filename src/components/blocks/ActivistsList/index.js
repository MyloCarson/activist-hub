import React from 'react'
import ListItem from 'src/components/blocks/ListItem';
import { getUniqueKey } from 'src/utils';


import styles from './ActivistsList.module.scss'

const ActivistsList = ({activists}) => (
    <div className={styles['list']}>
        <div className={styles['list-head']}>
            <div className={styles['list-head__left-pane']}>
                <p className={styles['list-head__title']}>Name</p>
            </div>

            <div>
                <p className={styles['list-head__title']}>Description</p>
            </div>

        </div>

        { activists && activists.map( activist => (
            <ListItem key={getUniqueKey()} {...activist} />
        ))}
        
    </div>
)


export default ActivistsList;
