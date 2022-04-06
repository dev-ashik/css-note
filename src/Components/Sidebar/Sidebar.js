import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
import styles from './Sidebar.module.css';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
import AddCardIcon from '@mui/icons-material/AddCard';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import CommentIcon from '@mui/icons-material/Comment';
import BorderStyleIcon from '@mui/icons-material/BorderStyle';
import PaddingIcon from '@mui/icons-material/Padding';
import MarginIcon from '@mui/icons-material/Margin';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import HeightIcon from '@mui/icons-material/Height';
import LineWeightIcon from '@mui/icons-material/LineWeight';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import LinkIcon from '@mui/icons-material/Link';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import TableChartIcon from '@mui/icons-material/TableChart';


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
                <WallpaperIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>Background</span>
            </Link>
            <Link to="/border" className={styles.link}>
                <BorderStyleIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>Border</span>
            </Link>
            {/* B end */}
            {/* C start */}
            <Link to="/comment" className={styles.link}>
                <CommentIcon className={styles.linkIcon}/>
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
            <Link to="/fonts" className={styles.link}>
                <FontDownloadIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>Fonts</span>
            </Link>
            <Link to="/fontsize" className={styles.link}>
                <FormatSizeIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>Font Size</span>
            </Link>
            {/* F end */}
            {/* G start */}

            {/* G end */}
            {/* H start */}
            <Link to="/heightandwidth" className={styles.link}>
                <HeightIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>Height &#38; Width</span>
            </Link>
            {/* H end */}
            {/* I start */}
            <Link to="/icons" className={styles.link}>
                <InsertEmoticonIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>Ions</span>
            </Link>
            {/* I end */}
            {/* J start */}

            {/* J end */}
            {/* K start */}

            {/* K end */}
            {/* L start */}
            <Link to="/links" className={styles.link}>
                <LinkIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>Links</span>
            </Link>
            <Link to="/lists" className={styles.link}>
                <FormatListNumberedIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>Lists</span>
            </Link>
            {/* L end */}
            {/* M start */}
            <Link to="/margins" className={styles.link}>
                <MarginIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>Margins</span>
            </Link>
            <Link to="/mesure" className={styles.link}>
                <ArchitectureIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>Mesure</span>
            </Link>
            
            {/* M end */}
            {/* N start */}

            {/* N end */}
            {/* O start */}
            <Link to="/outline" className={styles.link}>
                <LineWeightIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>Outline</span>
            </Link>
            {/* O end */}
            {/* P start */}
            <Link to="/padding" className={styles.link}>
                <PaddingIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>Padding</span>
            </Link>
            {/* P end */}
            {/* Q start */}

            {/* Q end */}
            {/* R start */}

            {/* R end */}
            {/* S start */}

            {/* S end */}
            {/* T start */}
            <Link to="/text" className={styles.link}>
                <FormatColorTextIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>Text</span>
            </Link>
            <Link to="/textdecoration" className={styles.link}>
                <FormatColorTextIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>Text Decoration</span>
            </Link>
            <Link to="/textspaceing" className={styles.link}>
                <FormatColorTextIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>Text Spaceing</span>
            </Link>
            <Link to="/tables" className={styles.link}>
                <TableChartIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>Tables</span>
            </Link>
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