import React from 'react';
import { Link } from "react-router-dom";
import Layout from '../../../Layout/Layout';
import styles from './Image.module.css';

const Image = () => {
    return (
        <Layout>
            <div className='name'>
                <h2>Dropdown</h2>
            </div>
            <div className={styles.nav}>
                <ul>
                    <li><Link to="/" className={styles.link}>
                        Image Galary
                    </Link></li>
                    <li><Link to="/imagesprites" className={styles.link}>
                        Image Sprites
                    </Link></li>
                    <li><Link to="/dropdown" className={styles.link}>
                        image dropdown
                    </Link></li>
                </ul>
            </div>
        </Layout>
    );
};

export default Image;