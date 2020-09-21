import React from 'react'
import {Link} from 'react-router-dom';
import styles from './LandingPage.module.scss';
import Header from 'src/components/shared/Header';

const LandingPage = () => (
    <>
        <main className="max-container">
            <Header isAlternate />
            <div className={styles['landing-page__main']}>
                <div className={styles['landing-page__main__left-pane']}></div>
                <div className={styles['landing-page__main__right-pane']}>
                    <h1 className={styles['landing-page__main-title']}>
                        <span>Learn About Historical Figures Who</span>
                        <br/>
                        <span>Have Made Meaningful Social Change.</span>
                    </h1>
                    <Link to="/activists" className="button button--primary">View Activists</Link>
                </div>
            </div>
        </main>
    </>
)

export default LandingPage;