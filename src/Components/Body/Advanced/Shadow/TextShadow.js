import React, { useState } from 'react';
import styles from './Shadow.module.css';

const TextShodow = () => {
    const [textShadow, setTextShadow] = useState(true);
    const [multipleShadow, setMultipleShadow] = useState(true);
    const [textBorder, setTextBorder] = useState(true);
    return (
        <section className="section">
            <h2>Text Shadow</h2>
            <section className="section">
                <h3>Text Shadow</h3>
                <div className="codeRunDiv">
                    <p className={styles.p_1}>This is first paragraph.</p>
                    <p className={styles.p_2}>This is second Paragraph.</p>
                    <p className={styles.p_3}>This is third Paragraph.</p>

                    {
                        textShadow ? <button className='seeCodeButton' onClick={() => setTextShadow(!textShadow)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setTextShadow(!textShadow)}>Output</button>
                    }
                </div>
                {
                    textShadow && <div className="codeDiv">
                        <code>
                            <span className='seclector'>p_1</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> text-shadow</span>: <span className='cssTextvalue'>2px 2px</span>;<br />
                            &#125;<br /><br />
                            
                            <span className='seclector'>p_2</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> text-shadow</span>: <span className='cssTextvalue'>2px 2px red</span>;<br />
                            &#125;<br /><br />

                            <span className='seclector'>p_3</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> text-shadow</span>: <span className='cssTextvalue'>2px 2px 10px red</span>;<br />
                            &nbsp;&nbsp; <span className='cssComment'>/* horizontal shadow (2px) and the vertical shadow (2px), 10px blur effect and red color. */</span><br />
                            &#125;
                        </code>

                    </div>
                }
            </section>

            <section className="section">
                <h3>Multiple Text Shadow</h3>
                <div className="codeRunDiv">
                    <p className={styles.p_4}>This is a paragraph.</p>
                    <p className={styles.p_5}>This is a Paragraph.</p>

                    {
                        multipleShadow ? <button className='seeCodeButton' onClick={() => setMultipleShadow(!multipleShadow)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setMultipleShadow(!multipleShadow)}>Output</button>
                    }
                </div>
                {
                    multipleShadow && <div className="codeDiv">
                        <code>
                            <span className='seclector'>p_4</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> text-shadow</span>: <span className='cssTextvalue'>0 0 3px #FF0000, 0 0 5px #0000FF</span>;<br />
                            &#125;<br /><br />
                            
                            <span className='seclector'>p_5</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> text-shadow</span>: <span className='cssTextvalue'>1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue</span>;<br />
                            &#125;<br /><br />

                        </code>

                    </div>
                }
            </section>

            <section className="section">
                <h3>border around text</h3>
                <div className="codeRunDiv">
                    <p className={styles.p_6}>Red border around thext.</p>

                    {
                        textBorder ? <button className='seeCodeButton' onClick={() => setTextBorder(!textBorder)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setTextBorder(!textBorder)}>Output</button>
                    }
                </div>
                {
                    textBorder && <div className="codeDiv">
                        <code>
                            <span className='seclector'>p_4</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> text-shadow</span>: <span className='cssTextvalue'>-1px 0 red, 0 1px red, 1px 0 red, 0 -1px red</span>;<br />
                            &#125;<br /><br />
                        </code>

                    </div>
                }
            </section>
        </section>
    );
};

export default TextShodow;