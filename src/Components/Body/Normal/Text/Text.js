import React, { useState } from 'react';
import Layout from '../../Layout/Layout';
import styles from './Text.module.css';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import background from '../../../images/background.jpg'

const Text = () => {
    const [textColor, setTextColor] = useState(true);
    const [textAlign, setTextAlign] = useState(true);
    const [textAlignLast, setTextAlignLast] = useState(true);
    const [textDirection, setTextDirection] = useState(true);
    const [textVerticalAlign, setTextVerticalAlign] = useState(true);
    const [textTransformation, setTextTransformation] = useState(true);
    return (
        <Layout>
            <div className='name'>
                <h2>Text</h2>
            </div>
            <section className="section">
                <div className="codeDiv">
                    <code>
                        <span className='cssComment'>&#47;* Color *&#47;</span><br />
                        <span className='seclector'>.redColor</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>color</span>: <span className='cssTextvalue'>red</span>;<br />
                        &#125;<br /><br />
                        <span className='seclector'>.redColor</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>color</span>: <span className='cssTextvalue'>green</span>;<br />
                        &#125;<br /><br />
                    </code>
                    {
                        textColor ? <button className="seeCodeButton" onClick={() => setTextColor(!textColor)}>hide output</button> : <button className="seeCodeButton" onClick={() => setTextColor(!textColor)}>output</button>
                    }
                </div>
                {
                    textColor && <div>
                        <div className="codeRunDiv">
                            <p className={styles.redColor}>
                                color: red;
                            </p>
                            <p className={styles.greenColor}>
                                color: green;
                            </p>
                        </div>
                    </div>
                }
            </section>
            <section className="section">
                <h2>Text Align</h2>
                <div className="codeDiv">
                    <code>
                        <span className='cssComment'>&#47;* Text Align *&#47;</span><br />
                        <span className='seclector'>.textAlign_right</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>text-align</span>: <span className='cssTextvalue'>right</span>;<br />
                        &#125;<br /><br />
                        <span className='seclector'>.textAlign_center</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>text-align</span>: <span className='cssTextvalue'>center</span>;<br />
                        &#125;<br /><br />
                        <span className='seclector'>.textAlign_left</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>text-align</span>: <span className='cssTextvalue'>left</span>;<br />
                        &#125;<br /><br />
                        <hr />
                        <span className='seclector'>.textAlign_justify</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>text-align</span>: <span className='cssTextvalue'>justify</span>;<br />
                        &#125;<br /><br />
                        <span className='seclector'>.textAlign_left</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>text-align</span>: <span className='cssTextvalue'>left</span>;<br />
                        &#125;<br /><br />
                    </code>
                    {
                        textAlign ? <button className="seeCodeButton" onClick={() => setTextAlign(!textAlign)}>hide output</button> : <button className="seeCodeButton" onClick={() => setTextAlign(!textAlign)}>output</button>
                    }
                </div>
                {
                    textAlign && <div>
                        <div className="codeRunDiv">
                            <p className={styles.textAlign_right}>
                                text-align: right;
                            </p>
                            <p className={styles.textAlign_center}>
                                text-align: right;
                            </p>
                            <p className={styles.textAlign_left}>
                                text-align: left;
                            </p>
                        </div>
                        <div className="codeRunDiv">
                            <div className={styles.textAlign_justify}>
                                <h4>text-align: justify;</h4>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident tempora odit dolorum praesentium dolore nemo ab! Ducimus delectus quis architecto?
                            </div>
                            <br />
                            <div className={styles.textAlign_l}>
                                <h4>text-align: left;</h4>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident tempora odit dolorum praesentium dolore nemo ab! Ducimus delectus quis architecto?
                            </div>
                        </div>
                    </div>
                }
            </section>
            <section className="section">
                <h2>Text Align Last</h2>
                <p>The text-align-last property specifies how to align the last line of a text.</p>
                <div className="codeDiv">
                    <code>
                        <span className='cssComment'>&#47;* text-align-last *&#47;</span><br />
                        <span className='seclector'>.TextAlignLast_justify</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>text-align-last</span>: <span className='cssTextvalue'>justify</span>;<br />
                        &#125;<br /><br />
                        <span className='seclector'>.TextAlignLast_right</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>text-align-last</span>: <span className='cssTextvalue'>right</span>;<br />
                        &#125;<br /><br />
                        <span className='seclector'>.TextAlignLast_center</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>text-align-last</span>: <span className='cssTextvalue'>center</span>;<br />
                        &#125;<br /><br />
                        
                    </code>
                    {
                        textAlignLast ? <button className="seeCodeButton" onClick={() => setTextAlignLast(!textAlignLast)}>hide output</button> : <button className="seeCodeButton" onClick={() => setTextAlignLast(!textAlignLast)}>output</button>
                    }
                </div>
                {
                    textAlignLast && <div>
                        <div className="codeRunDiv">
                            <div className={styles.TextAlignLast_justify}>
                                <h4>text-align-last: justify;</h4>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident tempora odit dolorum praesentium dolore nemo ab! Ducimus delectus quis architecto?
                            </div>
                            <br />
                            <div className={styles.TextAlignLast_right}>
                                <h4>text-align-last: right;</h4>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident tempora odit dolorum praesentium dolore nemo ab! Ducimus delectus quis architecto?
                            </div><br />
                            <div className={styles.TextAlignLast_center}>
                                <h4>text-align-last: center;</h4>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident tempora odit dolorum praesentium dolore nemo ab! Ducimus delectus quis architecto?
                            </div>
                        </div>
                    </div>
                }
            </section>
            <section className="section">
                <h2>Text Direction</h2>
                <p>The direction and unicode-bidi properties can be used to change the text direction of an element.</p>
                <div className="codeDiv">
                    <code>
                        <span className='seclector'>.reverceText</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>direction</span>: <span className='cssTextvalue'>rtl</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>unicode-bidi</span>: <span className='cssTextvalue'>bidi-override</span>;<br />
                        &#125;<br /><br />
                        
                    </code>
                    {
                        textDirection ? <button className="seeCodeButton" onClick={() => setTextDirection(!textDirection)}>hide output</button> : <button className="seeCodeButton" onClick={() => setTextDirection(!textDirection)}>output</button>
                    }
                </div>
                {
                    textDirection && <div>
                        <div className="codeRunDiv">
                            <p className={styles.defaultText}>This is a paragraph.</p>
                            <p className={styles.reverceText}>This is a paragraph.</p>
                        </div>
                    </div>
                }
            </section>
            <section className="section">
                <h2>Vartical Alignment</h2>
                <p>The vertical-align property sets the vertical alignment of an element.</p>
                <div className="codeDiv">
                    <code>
                        <span className='seclector'>img.a</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>vertical-align</span>: <span className='cssTextvalue'>baseline</span>;<br />
                        &#125;<br /><br />

                        <span className='seclector'>img.b</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>vertical-align</span>: <span className='cssTextvalue'>text-top</span>;<br />
                        &#125;<br /><br />

                        <span className='seclector'>img.c</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>vertical-align</span>: <span className='cssTextvalue'>text-bottom</span>;<br />
                        &#125;<br /><br />

                        <span className='seclector'>img.d</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>vertical-align</span>: <span className='cssTextvalue'>sub</span>;<br />
                        &#125;<br /><br />
                        
                        <span className='seclector'>img.e</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>vertical-align</span>: <span className='cssTextvalue'>super</span>;<br />
                        &#125;<br /><br />
                    </code>
                    {
                        textVerticalAlign ? <button className="seeCodeButton" onClick={() => setTextVerticalAlign(!textVerticalAlign)}>hide output</button> : <button className="seeCodeButton" onClick={() => setTextVerticalAlign(!textVerticalAlign)}>output</button>
                    }
                </div>
                {
                    textVerticalAlign && <div>
                        <div className="codeRunDiv">
                            <p className={styles.text}>This is an <img className={styles.a} src={background} alt="" height='30' width='30' /> Image. <span className='cssComment'>&#47;* vertical-align: baseline; *&#47;</span></p> 
                            <p >This is an <img className={styles.b} src={background} alt="" height='30' width='30' /> Image. <span className='cssComment'>&#47;* vertical-align: text-top; *&#47;</span></p>
                            <p >This is an <img className={styles.c} src={background} alt="" height='30' width='30' /> Image. <span className='cssComment'>&#47;* vertical-align: text-bottom; *&#47;</span></p>
                            <p >This is an <img className={styles.d} src={background} alt="" height='30' width='30' /> Image. <span className='cssComment'>&#47;* vertical-align: sub; *&#47;</span></p>
                            <p >This is an <img className={styles.e} src={background} alt="" height='30' width='30' /> Image. <span className='cssComment'>&#47;* vertical-align: super; *&#47;</span></p>
                        </div>
                    </div>
                }
            </section>
            <section className="section">
                <h2>Text Transformation</h2>
                <p>The text-transform property is used to specify uppercase and lowercase letters in a text.</p>
                <div className="codeDiv">
                    <code>
                        <span className='seclector'>.text_uppercase</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>text-transform</span>: <span className='cssTextvalue'>uppercase</span>;<br />
                        &#125;<br /><br />

                        <span className='seclector'>.text_lowercase</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>text-transform</span>: <span className='cssTextvalue'>lowercase</span>;<br />
                        &#125;<br /><br />

                        <span className='seclector'>text_capitalize</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>text-transform</span>: <span className='cssTextvalue'>capitalize</span>;<br />
                        &#125;<br /><br />
                    </code>
                    {
                        textTransformation ? <button className="seeCodeButton" onClick={() => setTextTransformation(!textTransformation)}>hide output</button> : <button className="seeCodeButton" onClick={() => setTextTransformation(!textTransformation)}>output</button>
                    }
                </div>
                {
                    textTransformation && <div>
                        <div className="codeRunDiv">
                            <p className={styles.textUppercase}>This is text is uppercase.</p> 
                            <p className={styles.textLowercase}>This is text is Lowercase.</p> 
                            <p className={styles.textCapitalize}>This is text is capitalize.</p> 
                        </div>
                    </div>
                }
            </section>
        </Layout>
    );
};

export default Text;