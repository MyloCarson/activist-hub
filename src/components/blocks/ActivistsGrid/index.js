import React from 'react'
import GridItem from 'src/components/blocks/GridItem';

import {getUniqueKey} from 'src/utils';

import styles from './ActivistsGrid.module.scss';

const ActivistsGrid = ({activists}) => (
    <div className={styles['grid']}>
        {activists && activists.map( activist => (
            <GridItem key={getUniqueKey()} {...activist} />
        ))}
    </div>
);

export default ActivistsGrid;