import React, { useState } from 'react';
import styles from './ColorKeyWords.module.css';

const CurrentColor = () => {
    const [correntColor, setcorrentColor] = useState(false);
    const [correntColorBackgrund, setcorrentColorBackgrund] = useState(false);
    return (
        <div>
            <section className="section">
                {/* Background Shorthand */}
                <h2>Current Color</h2>
                <div className="codeRunDiv">
                    <div className={styles.currentColorBorder}>
                        This is div element has a border color as current color.
                    </div>
                    {
                        correntColor ? <button className='seeCodeButton' onClick={() => setcorrentColor(!correntColor)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setcorrentColor(!correntColor)}>Output</button>
                    }
                </div>


                {
                    correntColor && <div className="codeDiv">
                        <code>
                            <span className='seclector'>div</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>color</span>: <span className='cssTextvalue'>blue</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>border</span>: <span className='cssTextvalue'>5px solid currentColor</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>box-shadow</span>: <span className='cssTextvalue'>0px 0px 15px currentColor</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>padding</span>: <span className='cssTextvalue'>15px</span>;<br />
                            &#125;
                        </code>
                    </div>
                }


                <div className="codeRunDiv">
                    <div className={styles.currentColorBackground_parents} >
                        <div className={styles.currentColorBackground}>
                            <p>This is div element has backgroundColor color as currentColor.</p>
                            
                        </div>
                    </div>
                {
                    correntColorBackgrund ? <button className='seeCodeButton' onClick={() => setcorrentColorBackgrund(!correntColorBackgrund)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setcorrentColorBackgrund(!correntColorBackgrund)}>Output</button>
                }
        </div>


                {
        correntColorBackgrund && <div className="codeDiv">
            <code>
                <span className='seclector'>div_parents</span> &#123; <br />
                &nbsp;&nbsp;<span className='cssName'>color</span>: <span className='cssTextvalue'>purple</span>;<br />
                &#125;<br />

                <span className='seclector'>div</span> &#123; <br />
                &nbsp;&nbsp;<span className='cssName'>background-color</span>: <span className='cssTextvalue'>currentColor</span>;<br />
                &nbsp;&nbsp;<span className='cssName'>padding</span>: <span className='cssTextvalue'>15px</span>;<br />
                &#125;<br />

                <span className='seclector'>div p</span> &#123; <br />
                &nbsp;&nbsp;<span className='cssName'>color</span>: <span className='cssTextvalue'>white</span>;<br />
                &#125;
            </code>
        </div>
    }
            </section >
        </div >
    );
};

export default CurrentColor;