import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
import styles from './Sidebar.module.css';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
import AddCardIcon from '@mui/icons-material/AddCard';
import BorderColorIcon from '@mui/icons-material/BorderColor';

const Sidebar = () => {
    return (
        <div>
            <Link to="/" className={styles.link}>
                <HomeIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>Welcome</span>
            </Link>

            {/* starting  */}
            <Link to="/addcss" className={styles.link}>
                <AddCardIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>Add CSS</span>
            </Link>

            <Link to="/selector" className={styles.link}>
                <PanToolAltIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>Selector</span>
            </Link>
            {/* starting End */}

            {/* A start */}
            
            {/* A end */}
            {/* B start */}
            <Link to="/background" className={styles.link}>
                <BorderColorIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>Background</span>
            </Link>
            {/* B end */}
            {/* C start */}
            <Link to="/comment" className={styles.link}>
                <PanToolAltIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>Comment</span>
            </Link>
            <Link to="/colors" className={styles.link}>
                <BorderColorIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>Colors</span>
            </Link>
            {/* C end */}
            {/* D start */}

            {/* D end */}
            {/* E start */}

            {/* E end */}
            {/* F start */}

            {/* F end */}
            {/* G start */}

            {/* G end */}
            {/* H start */}

            {/* H end */}
            {/* I start */}

            {/* I end */}
            {/* J start */}

            {/* J end */}
            {/* K start */}

            {/* K end */}
            {/* L start */}

            {/* L end */}
            {/* M start */}

            {/* M end */}
            {/* N start */}

            {/* N end */}
            {/* O start */}

            {/* O end */}
            {/* P start */}

            {/* P end */}
            {/* Q start */}

            {/* Q end */}
            {/* R start */}

            {/* R end */}
            {/* S start */}

            {/* S end */}
            {/* T start */}

            {/* T end */}
            {/* U start */}

            {/* U end */}
            {/* V start */}

            {/* V end */}
            {/* W start */}

            {/* W end */}
            {/* X start */}

            {/* X end */}
            {/* Y start */}

            {/* Y end */}
            {/* Z start */}

            {/* Z end */}






            <Link to="/test" className={styles.link}>
                <PrecisionManufacturingIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>test</span>
            </Link>


        </div>
    );
};

export default Sidebar;