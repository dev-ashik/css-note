import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
import styles from './Sidebar.module.css';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
import AddCardIcon from '@mui/icons-material/AddCard';

const Sidebar = () => {
    return (
        <div>
            <Link to="/" className={styles.link}>
                <HomeIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>Welcome</span>
            </Link>

            <Link to="/addcss" className={styles.link}>
                <AddCardIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>Add CSS</span>
            </Link>

            <Link to="/selector" className={styles.link}>
                <PanToolAltIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>Selector</span>
            </Link>











            <Link to="/test" className={styles.link}>
                <PrecisionManufacturingIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>test</span>
            </Link>


        </div>
    );
};

export default Sidebar;