import React, { useState } from 'react';
import Layout from '../../../Layout/Layout';
import styles from './Fonts.module.css';

const Fonts = () => {
    const [fontFamily, setFontFamily] = useState(true);
    const [fontFamilyEx, setFontFamilyEx] = useState(true);
    const [fontStyle, setFontStyle] = useState(true);
    const [fontWidth, setFontWidth] = useState(true);
    const [fontVariant, setFontVariant] = useState(true);
    const [fontShorthand, setFontShorthand] = useState(true);
    return (
        <Layout>
            <div className='name'>
                <h2>Fonts</h2>
            </div>
            <section className="section">
                <h2>Font shorthand</h2>
                <p>it is also possible to specify all the individual font properties in one property.</p>
                <ul>
                    <li>font-style</li>
                    <li>font-variant</li>
                    <li>font-weight</li>
                    <li>font-size/line-height</li>
                    <li>font-family</li>
                </ul>
                <div className="codeDiv">
                    <code>
                        <p className="note"></p>
                        <span className='seclector'>.font_p</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>font</span>: <span className='cssTextvalue'>italic small-caps bold 20px/30px Georgia, serif</span>;<br />
                        &#125;<br /><br />
                    </code>
                    {
                        fontShorthand ? <button className="seeCodeButton" onClick={() => setFontShorthand(!fontShorthand)}>hide output</button> : <button className="seeCodeButton" onClick={() => setFontShorthand(!fontShorthand)}>output</button>
                    }
                </div>
                {
                    fontShorthand && <div className="codeRunDiv">
                            <p className={styles.fontUse}>This is a paragraph.</p>
                        </div>
                }
            </section>


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

            <section className="section">
                <h4>web safe fonts</h4>
                <ul>
                    <li>Arial (sans-serif)</li>
                    <li>Verdana (sans-serif)</li>
                    <li>Helvetica (sans-serif)</li>
                    <li>Tahoma (sans-serif)</li>
                    <li>Trebuchet MS (sans-serif)</li>
                    <li>Times New Roman (serif)</li>
                    <li>Georgia (serif)</li>
                    <li>Garamond (serif)</li>
                    <li>Courier New (monospace)</li>
                    <li>Brush Script MT (cursive)</li>
                </ul>
                {/* <div className="codeDiv">
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
                        fontFamilyEx ? <button className="seeCodeButton" onClick={() => setFontFamilyEx(!fontFamilyEx)}>hide output</button> : <button className="seeCodeButton" onClick={() => setFontFamilyEx(!fontFamilyEx)}>output</button>
                    }
                </div> */}
                {
                    fontFamilyEx && <div>
                        <div className="codeRunDiv">
                            <h2 className={styles.f_arial}>
                                Arial (sans-serif) <br />
                                <span className={styles.smallFont}>1 2 3 4 5 6 7 8 9 0</span>
                            </h2>

                            <h2 className={styles.f_verdana}>
                                Verdana (sans-serif)<br />
                                <span className={styles.smallFont}>1 2 3 4 5 6 7 8 9 0</span>
                            </h2>

                            <h2 className={styles.f_helvetica}>
                                Helvetica (sans-serif)<br />
                                <span className={styles.smallFont}>1 2 3 4 5 6 7 8 9 0</span>
                            </h2>

                            <h2 className={styles.f_tahoma}>
                                Tahoma (sans-serif)<br />
                                <span className={styles.smallFont}>1 2 3 4 5 6 7 8 9 0</span>
                            </h2>

                            <h2 className={styles.f_trebuchet}>
                                Trebuchet MS (sans-serif)<br />
                                <span className={styles.smallFont}>1 2 3 4 5 6 7 8 9 0</span>
                            </h2>

                            <h2 className={styles.f_timesNewRoman}>
                                Times New Roman (serif)<br />
                                <span className={styles.smallFont}>1 2 3 4 5 6 7 8 9 0</span>
                            </h2>
                            <h2 className={styles.f_georgia}>
                                Georgia (serif)<br />
                                <span className={styles.smallFont}>1 2 3 4 5 6 7 8 9 0</span>
                            </h2>
                            <h2 className={styles.f_garamond}>
                                Garamond (serif)<br />
                                <span className={styles.smallFont}>1 2 3 4 5 6 7 8 9 0</span>
                            </h2>
                            <h2 className={styles.f_courierNew}>
                                Courier New (monospace)<br />
                                <span className={styles.smallFont}>1 2 3 4 5 6 7 8 9 0</span>
                            </h2>
                            <h2 className={styles.f_brushScriptMt}>
                                Brush Script MT (cursive)<br />
                                <span className={styles.smallFont}>1 2 3 4 5 6 7 8 9 0</span>
                            </h2>
                        </div>
                    </div>
                }
            </section>


            <section className="section">
                <h2>Font Styles</h2>
                <p>The font-style property is mostly used to specify italic text.</p>
                <h4>This property has three values</h4>
                <ul>
                    <li>normal - The text is shown normally</li>
                    <li>italic - The text is shown in italics</li>
                    <li>oblique - The text is "leaning" (oblique is very similar to italic, but less supported)</li>
                </ul>

                <div className="codeDiv">
                    <code>
                        <span className='cssComment'>&#47;* font style *&#47;</span><br />
                        <span className='seclector'>.f_s_normal</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>font-style</span>: <span className='cssTextvalue'>normal</span>;<br />
                        &#125;<br /><br />

                        <span className='seclector'>.f_s_italic</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>font-style</span>: <span className='cssTextvalue'>italic</span>;<br />
                        &#125;<br /><br />

                        <span className='seclector'>.f_s_oblique</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>font-style</span>: <span className='cssTextvalue'>oblique</span>;<br />
                        &#125;<br /><br />
                    </code>
                    {
                        fontStyle ? <button className="seeCodeButton" onClick={() => setFontStyle(!fontStyle)}>hide output</button> : <button className="seeCodeButton" onClick={() => setFontStyle(!fontStyle)}>output</button>
                    }
                </div>

                {
                    fontStyle && <div>
                        <div className="codeRunDiv">
                            <p className={styles.f_s_normal}>Lorem ipsum dolor sit amet.</p>

                            <p className={styles.f_s_italic}>Lorem ipsum dolor sit amet.</p>

                            <p className={styles.f_s_oblique}>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                }
            </section>


            <section className="section">
                <h2>Font Weight</h2>
                <p>The font-weight property specifies the weight of a font.</p>

                <div className="codeDiv">
                    <code>
                        <span className='cssComment'>&#47;* font width *&#47;</span><br />
                        <span className='seclector'>.f_width</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>font-weight</span>: <span className='cssTextvalue'>normal</span>;<br />
                        &#125;<br /><br />

                        <span className='seclector'>.f_width</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>font-weight</span>: <span className='cssTextvalue'>bold</span>;<br />
                        &#125;<br /><br />
                    </code>
                    {
                        fontWidth ? <button className="seeCodeButton" onClick={() => setFontWidth(!fontWidth)}>hide output</button> : <button className="seeCodeButton" onClick={() => setFontWidth(!fontWidth)}>output</button>
                    }
                </div>

                {
                    fontWidth && <div>
                        <div className="codeRunDiv">
                            <p >Lorem ipsum dolor sit amet.</p>
                            <p className={styles.f_width}>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                }
            </section>

            <section className="section">
                <h2>Font Veriant</h2>
                <p>The font-variant property specifies whether or not a text should be displayed in a small-caps font.</p>

                <div className="codeDiv">
                    <code>
                        <span className='cssComment'>&#47;* font width *&#47;</span><br />
                        <span className='seclector'>.f_normal</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>font-variant</span>: <span className='cssTextvalue'>normal</span>;<br />
                        &#125;<br /><br />

                        <span className='seclector'>.f_variant</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>font-variant</span>: <span className='cssTextvalue'>small-caps</span>;<br />
                        &#125;<br /><br />
                    </code>
                    {
                        fontVariant ? <button className="seeCodeButton" onClick={() => setFontVariant(!fontVariant)}>hide output</button> : <button className="seeCodeButton" onClick={() => setFontVariant(!fontVariant)}>output</button>
                    }
                </div>

                {
                    fontVariant && <div>
                        <div className="codeRunDiv">
                            <h2 className={styles.f_variant_n}>Lorem ipsum dolor sit amet.</h2>
                            <h2 className={styles.f_variant}>Lorem ipsum dolor sit amet.</h2>
                        </div>
                    </div>
                }
            </section>
        </Layout>
    );
};

export default Fonts;