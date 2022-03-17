import React, { useState } from 'react';
import Layout from '../../Layout/Layout';
import styles from './Background.module.css';

const Background = () => {
    const [backgroundOutput, setBackgroundOutput] = useState(false)
    const [opacity, setOpacity] = useState(true)
    const [rgbaOpacity, setRgbaOpacity] = useState(false)
    const [bgImage, setBgImage] = useState(false)
    const [bgImagerx, setBgImagerx] = useState(true)
    const [bgImagery, setBgImagery] = useState(true)
    const [bgImagern, setBgImagern] = useState(false)
    const [bgImagepc, setBgImagepc] = useState(false)
    const [bgImagepl, setBgImagepl] = useState(false)
    const [bgImageplb, setBgImageplb] = useState(false)
    const [bgImagepr, setBgImagepr] = useState(true)
    const [bgImageprt, setBgImageprt] = useState(false)
    const [bgImageprb, setBgImageprb] = useState(false)
    const [bgImageaf, setBgImageaf] = useState(true)
    const [bgImageas, setBgImageas] = useState(true)
    const [bgImagesh, setBgImagesh] = useState(true)


    console.log(rgbaOpacity);
    return (
        <Layout>
            <div className='name'>
                <h2>Background</h2>
            </div>
            <ol>
                <li>background-color
                    <ul>
                        <li>Opacity / Transparency</li>
                    </ul>
                </li>
                <li>background-image</li>
                <li>background-repeat</li>
                <li>background-position</li>
                <li>background-attachment</li>
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
                            backgroundOutput ? <button className='seeCodeButton' onClick={() => setBackgroundOutput(!backgroundOutput)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setBackgroundOutput(!backgroundOutput)}>Output</button>
                        }
                    </div>
                    {
                        backgroundOutput && <div className="codeRunDiv">
                            <div style={{ backgroundColor: 'gray', padding: '20px' }}>
                                body with background
                            </div>
                        </div>
                    }

                    
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
                            opacity ? <button className='seeCodeButton' onClick={() => setOpacity(!opacity)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setOpacity(!opacity)}>Output</button>
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
                            rgbaOpacity ? <button className='seeCodeButton' onClick={() => setRgbaOpacity(!rgbaOpacity)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setRgbaOpacity(!rgbaOpacity)}>Output</button>
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
            <div className='name'>
                <h2>Background Image</h2>
            </div>
            <section className='section'>
                <section className="section">
                    <h2 className='sectionTitle'>Background Image</h2>
                    <p>By default, the background-image property repeats an image both horizontally and vertically.</p>
                    <div className="codeDiv">
                        <code>
                            <span className='seclector'>div</span> &#123; <br />
                                &nbsp;&nbsp;<span className='cssName'>background-image</span>: <span className='cssTextvalue'>url("bg.png")</span>;<br />
                            &#125;
                        </code>
                        {
                            bgImage ? <button className='seeCodeButton' onClick={() => setBgImage(!bgImage)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setBgImage(!bgImage)}>Output</button>
                        }
                    </div>
                    {
                            bgImage && <div className="codeRunDiv">
                                <div className={styles.backgroundImageRepeat} style={{minHeight: '90px'}}>
                                    background image
                                </div>
                            </div>
                        }    
                </section>

                {/* background-repeat */}
                <section className='section'>
                <h2 className='sectionTitle'>background-repeat</h2>

                {/* repeat-x */}
                <h2>repeat-x</h2>
                <div className="codeDiv">
                    <code>
                        <span className='cssComment'>/* repeat-x */</span><br />
                        <span className='seclector'>div</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>background-image</span>: <span className='cssTextvalue'>url("bg.png")</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>background-repeat</span>: <span className='cssTextvalue'>repeat-x</span>;<br />
                        &#125;
                    </code>
                    {
                        bgImagerx ? <button className='seeCodeButton' onClick={() => setBgImagerx(!bgImagerx)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setBgImagerx(!bgImagerx)}>Output</button>
                    }
                </div>
                {
                        bgImagerx && <div className="codeRunDiv">
                            <div className={`${styles.backgroundImageRepeat} ${styles.bgr1}`} style={{minHeight: '90px'}}>
                                background image
                            </div>
                        </div>
                    }

                {/* repeat-y  */}
                <h2>repeat-y</h2>
                <div className="codeDiv">
                    <code>
                        <span className='cssComment'>/* repeat-y */</span><br />
                        <span className='seclector'>div</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>background-image</span>: <span className='cssTextvalue'>url("bg.png")</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>background-repeat</span>: <span className='cssTextvalue'>repeat-y</span>;<br />
                        &#125;
                    </code>
                    {
                        bgImagery ? <button className='seeCodeButton' onClick={() => setBgImagery(!bgImagery)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setBgImagery(!bgImagery)}>Output</button>
                    }
                </div>
                {
                        bgImagery && <div className="codeRunDiv">
                            <div className={`${styles.backgroundImageRepeat} ${styles.bgr2}`} style={{minHeight: '90px'}}>
                                background image
                            </div>
                        </div>
                    }

                {/* no-repeat  */}
                <h2>no-repeat</h2>
                <div className="codeDiv">
                    <code>
                        <span className='cssComment'>/* no-repeat */</span><br />
                        <span className='seclector'>div</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>background-image</span>: <span className='cssTextvalue'>url("bg.png")</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>background-repeat</span>: <span className='cssTextvalue'>no-repeat</span>;<br />
                        &#125;
                    </code>
                    {
                        bgImagern ? <button className='seeCodeButton' onClick={() => setBgImagern(!bgImagern)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setBgImagern(!bgImagern)}>Output</button>
                    }
                </div>
                {
                        bgImagern && <div className="codeRunDiv">
                            <div className={`${styles.backgroundImageRepeat} ${styles.bgr3}`} style={{minHeight: '90px'}}>
                                background image
                            </div>
                        </div>
                    }
            </section>
            </section>

            {/* no-repeat  */}
            <div className='name'>
                <h2>Background-position</h2>
            </div>
            <section className="section">
                <section className="section">
                    {/* background-position center */}
                    <h2>background-position center</h2>
                    <div className="codeDiv">
                        <code>
                            <span className='cssComment'>/* background-position left */</span><br />
                            <span className='seclector'>div</span> &#123; <br />
                                &nbsp;&nbsp;<span className='cssName'>background-image</span>: <span className='cssTextvalue'>url("bg.png")</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>background-repeat</span>: <span className='cssTextvalue'>no-repeat</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>background-position</span>: <span className='cssTextvalue'>center</span>;<br />
                            &#125;
                        </code>
                        {
                            bgImagepc ? <button className='seeCodeButton' onClick={() => setBgImagepc(!bgImagepc)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setBgImagepc(!bgImagepc)}>Output</button>
                        }
                    </div>
                    {
                            bgImagepc && <div className="codeRunDiv">
                                <div className={`${styles.backgroundImageRepeat} ${styles.bgr12}`} style={{minHeight: '90px'}}>
                                    background image position center
                                </div>
                            </div>
                        }

                    {/* background-position left */}
                    <h2>background-position left</h2>
                    <div className="codeDiv">
                        <code>
                            <span className='cssComment'>/* background-position left */</span><br />
                            <span className='seclector'>div</span> &#123; <br />
                                &nbsp;&nbsp;<span className='cssName'>background-image</span>: <span className='cssTextvalue'>url("bg.png")</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>background-repeat</span>: <span className='cssTextvalue'>no-repeat</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>background-position</span>: <span className='cssTextvalue'>left</span>;<br />
                            &#125;
                        </code>
                        {
                            bgImagepl ? <button className='seeCodeButton' onClick={() => setBgImagepl(!bgImagepl)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setBgImagepl(!bgImagepl)}>Output</button>
                        }
                    </div>
                    {
                            bgImagepl && <div className="codeRunDiv">
                                <div className={`${styles.backgroundImageRepeat} ${styles.bgr4}`} style={{minHeight: '90px'}}>
                                    background image position left
                                </div>
                            </div>
                        }

                    {/* background-position left bottom  */}
                    <h2>background-position left bottom</h2>
                    <div className="codeDiv">
                        <code>
                            <span className='cssComment'>/* background-position left bottom */</span><br />
                            <span className='seclector'>div</span> &#123; <br />
                                &nbsp;&nbsp;<span className='cssName'>background-image</span>: <span className='cssTextvalue'>url("bg.png")</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>background-repeat</span>: <span className='cssTextvalue'>no-repeat</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>background-position</span>: <span className='cssTextvalue'>left bottom</span>;<br />
                            &#125;
                        </code>
                        {
                            bgImageplb ? <button className='seeCodeButton' onClick={() => setBgImageplb(!bgImageplb)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setBgImageplb(!bgImageplb)}>Output</button>
                        }
                    </div>
                    {
                            bgImageplb && <div className="codeRunDiv">
                                <div className={`${styles.backgroundImageRepeat} ${styles.bgr5}`} style={{minHeight: '90px'}}>
                                    background image left bottom
                                </div>
                            </div>
                        }

                    {/* background-position right */}
                    <h2>background-position right</h2>
                    <div className="codeDiv">
                        <code>
                            <span className='cssComment'>/* background-position right */</span><br />
                            <span className='seclector'>div</span> &#123; <br />
                                &nbsp;&nbsp;<span className='cssName'>background-image</span>: <span className='cssTextvalue'>url("bg.png")</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>background-repeat</span>: <span className='cssTextvalue'>no-repeat</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>background-position</span>: <span className='cssTextvalue'>right</span>;<br />
                            &#125;
                        </code>
                        {
                            bgImagepr ? <button className='seeCodeButton' onClick={() => setBgImagepr(!bgImagepr)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setBgImagepr(!bgImagepr)}>Output</button>
                        }
                    </div>
                    {
                            bgImagepr && <div className="codeRunDiv">
                                <div className={`${styles.backgroundImageRepeat} ${styles.bgr6}`} style={{minHeight: '90px'}}>
                                    background image right
                                </div>
                            </div>
                        }
                    {/* background-position right top */}
                    <h2>background-position right top</h2>
                    <div className="codeDiv">
                        <code>
                            <span className='cssComment'>/* background-position right top */</span><br />
                            <span className='seclector'>div</span> &#123; <br />
                                &nbsp;&nbsp;<span className='cssName'>background-image</span>: <span className='cssTextvalue'>url("bg.png")</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>background-repeat</span>: <span className='cssTextvalue'>no-repeat</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>background-position</span>: <span className='cssTextvalue'>right top</span>;<br />
                            &#125;
                        </code>
                        {
                            bgImageprt ? <button className='seeCodeButton' onClick={() => setBgImageprt(!bgImageprt)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setBgImageprt(!bgImageprt)}>Output</button>
                        }
                    </div>
                    {
                            bgImageprt && <div className="codeRunDiv">
                                <div className={`${styles.backgroundImageRepeat} ${styles.bgr7}`} style={{minHeight: '90px'}}>
                                    background image right top
                                </div>
                            </div>
                        }
                    {/* background-position right bottom */}
                    <h2>background-position right bottom</h2>
                    <div className="codeDiv">
                        <code>
                            <span className='cssComment'>/* background-position right bottom */</span><br />
                            <span className='seclector'>div</span> &#123; <br />
                                &nbsp;&nbsp;<span className='cssName'>background-image</span>: <span className='cssTextvalue'>url("bg.png")</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>background-repeat</span>: <span className='cssTextvalue'>no-repeat</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>background-position</span>: <span className='cssTextvalue'>right bottom</span>;<br />
                            &#125;
                        </code>
                        {
                            bgImageprb ? <button className='seeCodeButton' onClick={() => setBgImageprb(!bgImageprb)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setBgImageprb(!bgImageprb)}>Output</button>
                        }
                    </div>
                    {
                            bgImageprb && <div className="codeRunDiv">
                                <div className={`${styles.backgroundImageRepeat} ${styles.bgr8}`} style={{minHeight: '90px'}}>
                                    background image right bottom
                                </div>
                            </div>
                        }
                </section>
            </section>
            
            <div className='name'>
                <h2>Background Attachment</h2>
            </div>
            <section className="section">
                <section className="section">
                    {/* Background Attachment fixed */}
                    <h2>Background Attachment fixed</h2>
                    <p>The background-attachment property specifies whether the background image should scroll or be fixed.</p>
                    <div className="codeDiv">
                        <code>
                            <span className='cssComment'>Background Attachment fixed</span><br />
                            <span className='seclector'>div</span> &#123; <br />
                                &nbsp;&nbsp;<span className='cssName'>background-image</span>: <span className='cssTextvalue'>url("bg.png")</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>background-repeat</span>: <span className='cssTextvalue'>no-repeat</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>background-position</span>: <span className='cssTextvalue'>right</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>background-attachment</span>: <span className='cssTextvalue'>fixed</span>;<br />
                            &#125;
                        </code>
                        {
                            bgImageaf ? <button className='seeCodeButton' onClick={() => setBgImageaf(!bgImageaf)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setBgImageaf(!bgImageaf)}>Output</button>
                        }
                    </div>
                    {
                            bgImageaf && <div className="codeRunDiv">
                                <div className={`${styles.backgroundImageRepeat} ${styles.bgr9}`} style={{minHeight: '90px'}}>
                                    Background Attachment fixed
                                </div>
                            </div>
                        }

                    {/* Background Attachment scroll */}
                    <h2>Background Attachment scroll</h2>
                    <p>The background-attachment property specifies whether the background image should scroll or be fixed.</p>
                    <div className="codeDiv">
                        <code>
                            <span className='cssComment'>Background Attachment scroll</span><br />
                            <span className='seclector'>div</span> &#123; <br />
                                &nbsp;&nbsp;<span className='cssName'>background-image</span>: <span className='cssTextvalue'>url("bg.png")</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>background-repeat</span>: <span className='cssTextvalue'>no-repeat</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>background-position</span>: <span className='cssTextvalue'>right</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>background-attachment</span>: <span className='cssTextvalue'>fixed</span>;<br />
                            &#125;
                        </code>
                        {
                            bgImageas ? <button className='seeCodeButton' onClick={() => setBgImageas(!bgImageas)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setBgImageas(!bgImageas)}>Output</button>
                        }
                    </div>
                    {
                            bgImageas && <div className="codeRunDiv">
                                <div className={`${styles.backgroundImageRepeat} ${styles.bgr10}`} style={{minHeight: '90px'}}>
                                    Background Attachment scroll
                                </div>
                            </div>
                        }
                </section>
            </section>


            <div className='name'>
                <h2>Background Shorthand</h2>
            </div>
            <section className="section">
                {/* Background Shorthand */}
                <h2>Background Shorthand</h2>
                <p>TTo shorten the code, it is also possible to specify all the background properties in one single property. This is called a shorthand property.</p>
                <div className="codeDiv">
                    <code>
                        
                        <span className='seclector'>div</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>background-color</span>: <span className='cssTextvalue'>#8b7878</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>background-image</span>: <span className='cssTextvalue'>url("bg.png")</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>background-repeat</span>: <span className='cssTextvalue'>no-repeat</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>background-position</span>: <span className='cssTextvalue'>right top</span>;<br />
                        &#125;
                    </code>
                </div>
                <div className="codeDiv">
                    <code>
                        <span className='cssComment'>/* Background Shorthand */</span><br />
                        <span className='seclector'>div</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>background</span>: <span className='cssTextvalue'>#8b7878 url("bg.png") no-repeat right top</span>;<br />
                        &#125;
                    </code>
                    {
                        bgImageaf ? <button className='seeCodeButton' onClick={() => setBgImageaf(!bgImageaf)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setBgImageaf(!bgImageaf)}>Output</button>
                    }
                </div>
                {
                        bgImageaf && <div className="codeRunDiv">
                            <div className={` ${styles.bgr11}`} style={{minHeight: '90px'}}>
                                Background Shorthand
                            </div>
                        </div>
                    }

            </section>
        </Layout>
    );
};

export default Background;