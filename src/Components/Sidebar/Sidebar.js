import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
import styles from './Sidebar.module.css';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';

const Sidebar = () => {
    return (
        <div>
            <Link to="/" className={styles.link}>
                <HomeIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>Welcome</span>
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