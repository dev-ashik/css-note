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
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ImageIcon from '@mui/icons-material/Image';
import { Divider } from '@mui/material';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import BorderVerticalIcon from '@mui/icons-material/BorderVertical';

const Sidebar = () => {
    return (
        <div>
            <Link to="/" className={styles.link}>
                <HomeIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>Welcome</span>
            </Link>

            {/* A start */}
            <Link to="/addcss" className={styles.link}>
                <AddCardIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>Add CSS</span>
            </Link>
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
            <Link to="/dropdown" className={styles.link}>
                <ArrowDropDownIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>Dropdown</span>
            </Link>
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
            <Link to="/image" className={styles.link}>
                <ImageIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>Image</span>
            </Link>
            <Link to="/imagesprites" className={styles.link}>
                <ImageIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>Image Sprites</span>
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
            <Link to="/selector" className={styles.link}>
                <PanToolAltIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>Selector</span>
            </Link>
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




            {/* Advanced */}
            <Divider className={styles.divider}/>
            {/* A Advanced start */}

            {/* A end */}
            {/* B Advanced start */}
            <Link to="/borderimages" className={styles.link}>
                <BorderVerticalIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>Border Images</span>
            </Link>
            <Link to="/advancedbackground" className={styles.link}>
                <WallpaperIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>Advanced Background</span>
            </Link>
            {/* B end */}
            {/* C Advanced start */}
            <Link to="/colorkeyword" className={styles.link}>
                <WallpaperIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>Color Keyword</span>
            </Link>    
            {/* C end */}
            {/* D Advanced start */}

            {/* D end */}
            {/* E Advanced start */}

            {/* E end */}
            {/* F Advanced start */}

            {/* F end */}
            {/* G Advanced start */}
            <Link to="/gradients" className={styles.link}>
                <WallpaperIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>Gradients</span>
            </Link>
            {/* G end */}
            {/* H Advanced start */}

            {/* H end */}
            {/* I Advanced start */}

            {/* I end */}
            {/* J Advanced start */}

            {/* J end */}
            {/* K Advanced start */}

            {/* K end */}
            {/* L Advanced start */}

            {/* L end */}
            {/* M Advanced start */}
            
            {/* M end */}
            {/* N Advanced start */}

            {/* N end */}
            {/* O Advanced start */}

            {/* O end */}
            {/* P Advanced start */}

            {/* P end */}
            {/* Q Advanced start */}

            {/* Q end */}
            {/* R Advanced start */}
            <Link to="/roundedcorners" className={styles.link}>
                <AutoAwesomeMotionIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>Rounded Corners</span>
            </Link>
            {/* R end */}
            {/* S Advanced start */}
            <Link to="/shadow" className={styles.link}>
                <WallpaperIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>Shadow Effects</span>
            </Link>
            {/* S end */}
            {/* T Advanced start */}

            {/* T end */}
            {/* U Advanced start */}

            {/* U end */}
            {/* V Advanced start */}

            {/* V end */}
            {/* W Advanced start */}

            {/* W end */}
            {/* X Advanced start */}

            {/* X end */}
            {/* Y Advanced start */}

            {/* Y end */}
            {/* Z Advanced start */}

            {/* Z end */}

            <Divider className={styles.divider}/>

            <Link to="/test" className={styles.link}>
                <PrecisionManufacturingIcon className={styles.linkIcon}/>
                <span className={styles.linkName}>test</span>
            </Link>


        </div>
    );
};

export default Sidebar;