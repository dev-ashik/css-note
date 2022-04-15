import React, { useState } from 'react';
import Layout from '../../../Layout/Layout';
import styles from './Fonts.module.css';

const FontSize = () => {
    const [fontSize, setFontSize] = useState(true);
    const [fontSizeResponsive, setFontSizeResponsive] = useState(true);
    return (
        <Layout>
            <div className='name'>
                <h2>Font Size</h2>
            </div>

            <p>The font-size property sets the size of the text. The font-size value can be an absolute, or relative size.</p>

            <h4>Absolute size:</h4>
            <ul>
                <li>Sets the text to a specified size</li>
                <li>Does not allow a user to change the text size in all browsers (bad for accessibility reasons)</li>
                <li>Absolute size is useful when the physical size of the output is known</li>
            </ul>

            <h4>Relative size::</h4>
            <ul>
                <li>Sets the size relative to surrounding elements</li>
                <li>Allows a user to change the text size in browsers</li>
            </ul>

            <p className='note'>Note: If you do not specify a font size, the default size for normal text, like paragraphs, is 16px (16px=1em).</p>
            <section className="section">
                <section className="section">
                    <div className="codeDiv">
                        <code>
                            <span className='cssComment'>&#47;* font size *&#47;</span><br />
                            <span className='seclector'>.fs_px</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>font-size</span>: <span className='cssTextvalue'>20px</span>;<br />
                            &#125;<br /><br /><br />

                            <span className='cssComment'>&#47;* many developers use em instead of pixels. calculated from pixels to em using this formula: pixels/16=em *&#47;</span><br />
                            <span className='seclector'>.fs_em</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>font-size</span>: <span className='cssTextvalue'>1em</span>; <span className="cssComment">&#47;* 16px/16 = 1em *&#47;</span><br />
                            &#125;<br /><br />

                            <span className='seclector'>.fs_percent</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>font-size</span>: <span className='cssTextvalue'>100%</span>; <span className="cssComment">&#47;* fontsize 1em or 16px *&#47;</span><br />
                            &#125;<br /><br />
                            
                        </code>
                        {
                            fontSize ? <button className="seeCodeButton" onClick={() => setFontSize(!fontSize)}>hide output</button> : <button className="seeCodeButton" onClick={() => setFontSize(!fontSize)}>output</button>
                        }
                    </div>
                    {
                        fontSize &&
                            <div className="codeRunDiv">
                                <h2 className={styles.fs_px}>This is a paragraph. font-size: 20px</h2>

                                <h2 className={styles.fs_em}>This is a paragraph. font-size: 1em</h2>

                                <p className={styles.fs_percent}>This is a paragraph. font-size: 100%</p>
                            </div>
                    }
                </section>

                <section className="section">
                    <h2>Responsive Font Size</h2>
                    <p>The text size can be set with a vw unit, which means the "viewport width". That way the text size will follow the size of the browser window.</p>
                    <div className="codeDiv">
                        <code>
                            <p className="note"></p>
                            <span className='seclector'>.fs_vw</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>font-size</span>: <span className='cssTextvalue'>5vw</span>; <span className="cssComment">&#47;* responsive text size *&#47;</span><br />
                            &#125;<br /><br />
                        </code>
                        {
                            fontSizeResponsive ? <button className="seeCodeButton" onClick={() => setFontSizeResponsive(!fontSizeResponsive)}>hide output</button> : <button className="seeCodeButton" onClick={() => setFontSizeResponsive(!fontSizeResponsive)}>output</button>
                        }
                    </div>
                    {
                        fontSizeResponsive && <div className="codeRunDiv">
                                <p className={styles.fs_vw}>This is a paragraph. font-size: 5vw</p>
                            </div>
                    }
                </section>
            </section>
        </Layout>
    );
};

export default FontSize;