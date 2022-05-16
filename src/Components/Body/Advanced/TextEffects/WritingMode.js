import React, { useState } from 'react';
import styles from './TextEffects.module.css';

const WritingMode = () => {
    const [writingMode, setWritingMode] = useState(true);
    return (
        <div>
            <section className="section">
                <h3>Writing mode</h3>
                <div className="codeRunDiv">
                    <p className={styles.writingMode_1}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className={styles.writingMode_2}>Lorem ipsum dolor sit amet <span>consectetur</span> adipisicing elit.</p>
                    <p className={styles.writingMode_3}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    

                    {
                        writingMode ? <button className='seeCodeButton' onClick={() => setWritingMode(!writingMode)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setWritingMode(!writingMode)}>Output</button>
                    }
                </div>
                {
                    writingMode && <div className="codeDiv">
                        <code>
                            <span className='seclector'>.writingMode_1</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> writing-mode</span>: <span className='cssTextvalue'>horizontal-tb</span>;<br />
                            &#125;<br /><br />

                            <span className='seclector'>.writingMode_2 span</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> writing-mode</span>: <span className='cssTextvalue'>vertical-rl</span>;<br />
                            &#125;<br /><br />

                            <span className='seclector'>.writingMode_3</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> writing-mode</span>: <span className='cssTextvalue'>vertical-rl</span>;<br />
                            &#125;<br /><br />


                            
                        </code>

                    </div>
                }
            </section>
        </div>
    );
};

export default WritingMode;