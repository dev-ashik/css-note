import React, { useState } from 'react';
import Layout from '../../Layout/Layout';
import styles from './Fonts.module.css';

const Fonts = () => {
    const [fontFamily, setFontFamily] = useState(true);
    return (
        <Layout>
            <div className='name'>
                <h2>Fonts</h2>
            </div>
            <h3>In CSS there are five generic font families.</h3>
            <ol>
                <li><strong>Serif</strong> fonts have a small stroke at the edges of each letter. They create a sense of formality and elegance.
                    <ul>
                        <li className={styles.timeNewRoman}>Times New Roman</li>
                        <li className={styles.garamond}>Garamond</li>
                    </ul>
                </li>

                <li><strong>Sans-serif</strong> fonts have clean lines (no small strokes attached). They create a modern and minimalistic look.
                    <ul>
                        <li className={styles.arial}>Arial</li>
                        <li className={styles.verdana}>Verdana</li>
                    </ul>
                </li>

                <li><strong>Monospace</strong> fonts - here all the letters have the same fixed width. They create a mechanical look. 
                    <ul>
                        <li className={styles.courierNew}>Courier New</li>
                        <li className={styles.lucidaConsole}>Lucida Console</li>
                    </ul>
                </li>

                <li><strong>Cursive</strong> fonts imitate human handwriting.
                    <ul>
                        <li className={styles.brushScriptMt}>Brush Script MT</li>
                        <li className={styles.lucidaHandwriting}>Lucida Handwriting</li>
                    </ul>
                </li>

                <li><strong>Fantasy</strong> fonts are decorative/playful fonts.
                    <ul>
                        <li className={styles.copperplate}>Copperplate</li>
                        <li className={styles.papyrus}>Verdana</li>
                    </ul>
                </li>
            </ol>
            <h2>font-family Property</h2>
            <p>In CSS, we use the font-family property to specify the font of a text. Note: If the font name is more than one word, it must be in quotation marks, like: "Times New Roman".</p>
            <small>The font-family property should hold several font names as a "fallback" system. The font names should be separated with comma.</small>

            <section className="section">
                <div className="codeDiv">
                    <code>
                        <span className='cssComment'>&#47;* font family *&#47;</span><br />
                        <span className='seclector'>p_a</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>font-family</span>: <span className='cssTextvalue'>"Times New Roman", Times, serif</span>;<br />
                        &#125;<br /><br />

                        <span className='seclector'>p_b</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>font-family</span>: <span className='cssTextvalue'>Arial, Helvetica, sans-serif</span>;<br />
                        &#125;<br /><br />

                        <span className='seclector'>p_c</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>font-family</span>: <span className='cssTextvalue'>"Lucida Console", "Courier New", monospace</span>;<br />
                        &#125;<br /><br />

                        
                    </code>
                    {
                        fontFamily ? <button className="seeCodeButton" onClick={() => setFontFamily(!fontFamily)}>hide output</button> : <button className="seeCodeButton" onClick={() => setFontFamily(!fontFamily)}>output</button>
                    }
                </div>
                {
                    fontFamily && <div>
                        <div className="codeRunDiv">
                            <h2 className={styles.p_a}>This is a paragraph.</h2>
                            <h2 className={styles.p_b}>This is a paragraph.</h2>
                            <h2 className={styles.p_c}>This is a paragraph.</h2>
                        </div>
                    </div>
                }
            </section>
        </Layout>
    );
};

export default Fonts;