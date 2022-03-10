import React, { useState } from 'react';
import Layout from '../../Layout/Layout';
import styles from './Background.module.css';

const Background = () => {
    const [backgroundOutput, setBackgroundOutput] = useState(false)
    const [opacity, setOpacity] = useState(false)
    const [rgbaOpacity, setRgbaOpacity] = useState(false)
    const [bgImage, setBgImage] = useState(false)
    return (
        <Layout>
            <div className='name'>
                <h2>Backgrounds</h2>
            </div>
            <ol>
                <li>background-color
                    <ul>
                        <li>Opacity / Transparency</li>
                    </ul>
                </li>
                <li>background-image</li>
                <li>background-repeat</li>
                <li>background-attachment</li>
                <li>background-position</li>
                <li>background (shorthand property)</li>
            </ol>
            <section className='section'>
                <section className='section'>
                    <h2 className='sectionTitle'>background-color</h2>
                    <p>The id selector uses the id attribute of an HTML element to select a specific element. </p>
                    <p>To select an element with a specific id, write a hash (#) character, followed by the id of the element.</p>
                    <div className="codeDiv">
                        <code>
                            <span className='seclector'>body</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>background-color</span>: <span className='cssTextvalue'>gray</span>;<br />
                            &#125;
                        </code>
                        {
                            !backgroundOutput && <button className='seeCodeButton' onClick={() => setBackgroundOutput(!backgroundOutput)}>Output</button>
                        }
                    </div>
                    {
                        backgroundOutput && <div className="codeRunDiv">
                            <div style={{ backgroundColor: 'gray', padding: '20px' }}>
                                body with background
                            </div>
                        </div>
                    }

                    {/* <a href="https://github.com/dev-ashik/css-note/blob/main/src/Components/Selector/Code/style.css" target="_blank" className='githubLinkButton' ><GitHubIcon />View Code on Github</a> */}
                    <a href="https://www.w3schools.com/cssref/css_colors_legal.asp">read it</a>
                </section>
                <section className='section'>
                    <h2 className='sectionTitle'>Opacity / Transparency</h2>

                    <div className="codeDiv">
                        <code>
                            <span className='cssComment'>/* first Div */</span><br />
                            <span className='seclector'>.firstDiv</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>background-color</span>: <span className='cssTextvalue'>blue</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>opacity</span>: <span className='cssTextvalue'>1</span>;<br />
                            &#125;
                            <br /><br />
                            <span className='cssComment'>/* second Div */</span><br />
                            <span className='seclector'>.secondDiv</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>background-color</span>: <span className='cssTextvalue'>blue</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>opacity</span>: <span className='cssTextvalue'>0.5</span>;<br />
                            &#125;
                            <br /><br />
                            <span className='cssComment'>/* third Div */</span><br />
                            <span className='seclector'>.thirdDiv</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>background-color</span>: <span className='cssTextvalue'>blue</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>opacity</span>: <span className='cssTextvalue'>0.1</span>;<br />
                            &#125;
                        </code>
                        {
                            !opacity && <button className='seeCodeButton' onClick={() => setOpacity(!opacity)}>Output</button>
                        }
                    </div>

                    {
                        opacity && <div className="codeRunDiv">
                            <div className={styles.opacityrunDiv}>
                                <div className={styles.firtDiv}>opacity 1</div>
                                <div className={styles.secondDiv}>opacity 0.5</div>
                                <div className={styles.thirdDiv}>opacity 0.1</div>
                            </div>
                        </div>
                    }

                    <p>If you do not want to apply opacity to child elements. use RGBA color values.</p>

                    <div className="codeDiv">
                        <code>
                            <span className='cssComment'>/* first Div */</span><br />
                            <span className='seclector'>.firstDiv</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>background-color</span>: <span className='cssTextvalue'>rgba(0, 0, 128, 1)</span>;<br />
                            &#125;
                            <br /><br />
                            <span className='cssComment'>/* second Div */</span><br />
                            <span className='seclector'>.secondDiv</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>background-color</span>: <span className='cssTextvalue'>rgba(0, 0, 128, 0.5)</span>;<br />
                            &#125;
                            <br /><br />
                            <span className='cssComment'>/* third Div */</span><br />
                            <span className='seclector'>.thirdDiv</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>background-color</span>: <span className='cssTextvalue'>rgba(0, 0, 128, 0.1)</span>;<br />
                            &#125;
                        </code>
                        {
                            !rgbaOpacity && <button className='seeCodeButton' onClick={() => setRgbaOpacity(!opacity)}>Output</button>
                        }
                    </div>
                    {
                        rgbaOpacity && <div className="codeRunDiv">
                            <div className={styles.opacityrunDiv}>
                                <div className={styles.firtRgbaDiv}>rgba(0, 0, 128, 1)</div>
                                <div className={styles.seconRgbaDiv}>rgba(0, 0, 128, 0.5)</div>
                                <div className={styles.thirdRgbaDiv}>rgba(0, 0, 128, 0.1)</div>
                            </div>
                        </div>
                    }
                </section>
            </section>
            <section className='section'>
                <h2 className='sectionTitle'>Background Image</h2>
                <div className="codeDiv">
                    <code>
                        <span className='seclector'>div</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>background-image</span>: <span className='cssTextvalue'>url("paper.gif")</span>;<br />
                        &#125;
                    </code>
                    {
                        !bgImage && <button className='seeCodeButton' onClick={() => setBgImage(!bgImage)}>Output</button>
                    }
                </div>
                {
                        bgImage && <div className="codeRunDiv">
                            <div className={styles.opacityrunDiv} style={{minHeight: '90px'}}>
                                background image
                            </div>
                        </div>
                    }
                {/* <a href="https://github.com/dev-ashik/css-note/blob/main/src/Components/Selector/Code/style.css" className='githubLinkButton' target="_blank"><GitHubIcon />View Code on Github</a> */}
            </section>
        </Layout>
    );
};

export default Background;