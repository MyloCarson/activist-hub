import React from 'react'
import Header from 'src/components/shared/Header';

import styles from './DefaultLayout.module.scss';

const DefaultLayout = ({children}) => {
    return (
        <div className="max-container">
            <div className={styles['default-layout']}>
                <Header />
                <div className={styles['default-layout__main']}>
                    {children}
                </div>
                
            </div>
        </div>
    )
}

export default DefaultLayout;