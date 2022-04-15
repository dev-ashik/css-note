import React, { useState } from 'react';
import Layout from '../../Layout/Layout';
import styles from './TextDecoration.module.css';

const TextDecoration = () => {
    const [textDecorationLine, setTextDecorationLine] = useState(true);
    const [textDecorationShorthand, setTextDecorationShorthand] = useState(true);
    const [textDecorationLineColor, setTextDecorationLineColor] = useState(true);
    const [textDecorationLineStyle, setTextDecorationLineStyle] = useState(true);
    const [textDecorationLineThickness, setTextDecorationLineThickness] = useState(true);
    const [texttextShadow, setTexttextShadow] = useState(true);
    const [texttextShadowMore, setTexttextShadowMore] = useState(true);
    return (
        <Layout>
            <div className='name'>
                <h2>Text Decoration</h2>
            </div>
            <section className="section">
                <h2>text-decoration</h2>
                <p>The text-decoration property is a shorthand property</p>
                <p>All links in HTML are underlined by default. Sometimes you see that links are styled with no underline. The text-decoration: none; is used to remove the underline from links, like this.</p>
                <div className="codeDiv">
                    <code>
                        <span className='seclector'>.first_text</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>text-decoration-line</span>: <span className='cssTextvalue'>underline</span>; <span className='cssComment'>&#47;* (required) *&#47;</span><br />

                        &nbsp;&nbsp;<span className='cssName'>text-decoration-color</span>: <span className='cssTextvalue'>red</span>; <span className='cssComment'>&#47;* (optional) *&#47;</span><br />

                        &nbsp;&nbsp;<span className='cssName'>text-decoration-style</span>: <span className='cssTextvalue'>wavy</span>; <span className='cssComment'>&#47;* (optional) *&#47;</span><br />
                        &nbsp;&nbsp;<span className='cssName'>text-decoration-thickness</span>: <span className='cssTextvalue'>8px</span>; <span className='cssComment'>&#47;* (optional) *&#47;</span><br />
                        &#125;<br /><br />

                        <span className='seclector'>.second_text</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>text-decoration</span>: <span className='cssTextvalue'>underline red wavy 8px</span>;<br />
                        &#125;<br /><br />

                        <p className='cssComment'>All links in HTML are underlined by default. Sometimes you see that links are styled with no underline. The text-decoration: none; is used to remove the underline from links, like this.</p>
                        <span className='seclector'>.link_text</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>text-decoration</span>: <span className='cssTextvalue'>none</span>;<br />
                        &#125;<br /><br />
                    </code>
                    {
                        textDecorationShorthand ? <button className="seeCodeButton" onClick={() => setTextDecorationShorthand(!textDecorationShorthand)}>hide output</button> : <button className="seeCodeButton" onClick={() => setTextDecorationShorthand(!textDecorationShorthand)}>output</button>
                    }
                </div>
                {
                    textDecorationShorthand && <div>
                        <div className="codeRunDiv">
                            <p className={styles.fistText}>This is first Text.</p><br />
                            <p className={styles.secondText}>This is second Text.</p><br />
                            <a className={styles.thirdText} href="#">This is a link</a> &nbsp; <span className='cssComment'>&#47;* text-decoration: none; *&#47;</span>
                        </div>
                    </div>
                }
            </section>
            <section className="section">
                <h2>text-decoration-line</h2>
                <div className="codeDiv">
                    <code>
                        <span className='cssComment'>&#47;* text-decoration-line *&#47;</span><br />
                        <span className='seclector'>.line</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>ext-decoration-line</span>: <span className='cssTextvalue'>line-through</span>;<br />
                        &#125;<br /><br />
                        <span className='seclector'>.line</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>ext-decoration-line</span>: <span className='cssTextvalue'>overline</span>;<br />
                        &#125;<br /><br />
                        <span className='seclector'>.line</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>ext-decoration-line</span>: <span className='cssTextvalue'>underline</span>; <span className='cssComment'>&#47;* It is not recommended to underline text that is not a link, as this often confuses the reader. *&#47;</span><br />
                        &#125;<br /><br />
                        <span className='seclector'>.line</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>ext-decoration-line</span>: <span className='cssTextvalue'>overline underline</span>;<br />
                        &#125;<br /><br />
                    </code>
                    {
                        textDecorationLine ? <button className="seeCodeButton" onClick={() => setTextDecorationLine(!textDecorationLine)}>hide output</button> : <button className="seeCodeButton" onClick={() => setTextDecorationLine(!textDecorationLine)}>output</button>
                    }
                </div>
                {
                    textDecorationLine && <div>
                        <div className="codeRunDiv">
                            <p className={styles.p_a}> text-decoration-line: line-through</p>
                            <p className={styles.p_b}>text-decoration-line: overline</p>
                            <p className={styles.p_c}>text-decoration-line: underline</p>
                            <p className={styles.p_d}>text-decoration-line: overline underline</p>
                        </div>
                    </div>
                }

                <hr />
                <h2>Specify a Color for the Decoration Line</h2>
                <div className="codeDiv">
                    <code>
                        <span className='cssComment'>&#47;* Specify a Color for the Decoration Line *&#47;</span><br />
                        <span className='seclector'>.line</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>ext-decoration-line</span>: <span className='cssTextvalue'>line-through</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>text-decoration-color</span>: <span className='cssTextvalue'>red</span>;<br />
                        &#125;<br /><br />

                        <span className='seclector'>.line</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>ext-decoration-line</span>: <span className='cssTextvalue'>overline</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>text-decoration-color</span>: <span className='cssTextvalue'>blue</span>;<br />
                        &#125;<br /><br />

                        <span className='seclector'>.line</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>ext-decoration-line</span>: <span className='cssTextvalue'>underline</span>; <span className='cssComment'>&#47;* It is not recommended to underline text that is not a link, as this often confuses the reader. *&#47;</span><br />
                        &nbsp;&nbsp;<span className='cssName'>ext-decoration-color</span>: <span className='cssTextvalue'>yellow</span>;<br />
                        &#125;<br /><br />

                        <span className='seclector'>.line</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>ext-decoration-line</span>: <span className='cssTextvalue'>overline underline</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>ext-decoration-color</span>: <span className='cssTextvalue'>green</span>;<br />
                        &#125;<br /><br />
                    </code>
                    {
                        textDecorationLineColor ? <button className="seeCodeButton" onClick={() => setTextDecorationLineColor(!textDecorationLineColor)}>hide output</button> : <button className="seeCodeButton" onClick={() => setTextDecorationLineColor(!textDecorationLineColor)}>output</button>
                    }
                </div>
                {
                    textDecorationLineColor && <div>
                        <div className="codeRunDiv">
                            <p className={styles.p_e}> text-decoration-line: line-through AND text-decoration-color: red</p>
                            <p className={styles.p_f}>text-decoration-line: overline AND text-decoration-color: blue</p>
                            <p className={styles.p_g}>text-decoration-line: underline AND text-decoration-color: yellow</p>
                            <p className={styles.p_h}>text-decoration-line: overline underline AND text-decoration-color: green</p>
                        </div>
                    </div>
                }


                <hr />
                <h2>Style for the Decoration Line</h2>
                <div className="codeDiv">
                    <code>
                        <span className='cssComment'>&#47;* Style for the Decoration Line *&#47;</span><br />
                        <span className='seclector'>.line_a</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>ext-decoration-line</span>: <span className='cssTextvalue'>underline</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>text-decoration-color</span>: <span className='cssTextvalue'>yellow</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>text-decoration-style</span>: <span className='cssTextvalue'>solid</span>;<br />
                        &#125;<br /><br />

                        <span className='seclector'>.line_b</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>ext-decoration-line</span>: <span className='cssTextvalue'>underline</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>text-decoration-color</span>: <span className='cssTextvalue'>yellow</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>text-decoration-style</span>: <span className='cssTextvalue'>double</span>;<br />
                        &#125;<br /><br />

                        <span className='seclector'>.line_c</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>ext-decoration-line</span>: <span className='cssTextvalue'>underline</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>ext-decoration-color</span>: <span className='cssTextvalue'>yellow</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>text-decoration-style</span>: <span className='cssTextvalue'>dotted</span>;<br />
                        &#125;<br /><br />

                        <span className='seclector'>.line_d</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>ext-decoration-line</span>: <span className='cssTextvalue'>underline</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>ext-decoration-color</span>: <span className='cssTextvalue'>yellow</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>text-decoration-style</span>: <span className='cssTextvalue'>dashed</span>;<br />
                        &#125;<br /><br />

                        <span className='seclector'>.line_d</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>ext-decoration-line</span>: <span className='cssTextvalue'>underline</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>ext-decoration-color</span>: <span className='cssTextvalue'>yellow</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>text-decoration-style</span>: <span className='cssTextvalue'>wavy</span>;<br />
                        &#125;<br /><br />
                    </code>
                    {
                        textDecorationLineStyle ? <button className="seeCodeButton" onClick={() => setTextDecorationLineStyle(!textDecorationLineStyle)}>hide output</button> : <button className="seeCodeButton" onClick={() => setTextDecorationLineStyle(!textDecorationLineStyle)}>output</button>
                    }
                </div>
                {
                    textDecorationLineStyle && <div>
                        <div className="codeRunDiv">
                            <p className={styles.p_i}>text-decoration-style: solid</p>
                            <p className={styles.p_j}>text-decoration-style: double</p>
                            <p className={styles.p_k}>text-decoration-style: dotted</p>
                            <p className={styles.p_l}>text-decoration-style: dashed</p>
                            <p className={styles.p_m}>text-decoration-style: wavy</p>
                        </div>
                    </div>
                }


                <hr />
                <h2>Thickness for the Decoration Line</h2>
                <div className="codeDiv">
                    <code>
                        <span className='cssComment'>&#47;* Thickness for the Decoration Line *&#47;</span><br />
                        <span className='seclector'>.line_a</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>ext-decoration-line</span>: <span className='cssTextvalue'>underline</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>text-decoration-color</span>: <span className='cssTextvalue'>yellow</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>text-decoration-style</span>: <span className='cssTextvalue'>solid</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>text-decoration-thickness</span>: <span className='cssTextvalue'>auto</span>;<br />
                        &#125;<br /><br />

                        <span className='seclector'>.line_b</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>ext-decoration-line</span>: <span className='cssTextvalue'>underline</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>text-decoration-color</span>: <span className='cssTextvalue'>yellow</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>text-decoration-style</span>: <span className='cssTextvalue'>double</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>text-decoration-thickness</span>: <span className='cssTextvalue'>5px</span>;<br />
                        &#125;<br /><br />

                        <span className='seclector'>.line_c</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>ext-decoration-line</span>: <span className='cssTextvalue'>underline</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>ext-decoration-color</span>: <span className='cssTextvalue'>yellow</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>text-decoration-style</span>: <span className='cssTextvalue'>dotted</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>text-decoration-thickness</span>: <span className='cssTextvalue'>50%</span>;<br />
                        &#125;<br /><br />
                    </code>
                    {
                        textDecorationLineThickness ? <button className="seeCodeButton" onClick={() => setTextDecorationLineThickness(!textDecorationLineThickness)}>hide output</button> : <button className="seeCodeButton" onClick={() => setTextDecorationLineThickness(!textDecorationLineThickness)}>output</button>
                    }
                </div>
                {
                    textDecorationLineThickness && <div>
                        <div className="codeRunDiv">
                            <p className={styles.p_n}>text-decoration-thickness: auto;</p>
                            <p className={styles.p_o}>text-decoration-thickness: 5px;</p>
                            <p className={styles.p_p}>text-decoration-style: 50%</p>
                        </div>
                    </div>
                }
            </section>

            <section className="section">
                <section className="section">
                    <h2>Text Shadow</h2>
                    <div className="codeDiv">
                        <code>
                            <span className='seclector'>.first_text</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>text-shadow</span>: <span className='cssTextvalue'>2px 2px</span>; <span className='cssComment'>&#47;* horizontal shadow (2px) and the vertical shadow (2px) *&#47;</span><br />
                            &#125;<br /><br />

                            <span className='seclector'>.second_text</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>text-shadow</span>: <span className='cssTextvalue'>2px 2px red</span>;<br />
                            &#125;<br /><br />

                            <span className='seclector'>.link_text</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>text-shadow</span>: <span className='cssTextvalue'>2px 2px 5px red</span>; <span className="cssComment">Add a blur effect 5px.</span><br />
                            &#125;<br /><br />
                        </code>
                        {
                            texttextShadow ? <button className="seeCodeButton" onClick={() => setTexttextShadow(!texttextShadow)}>hide output</button> : <button className="seeCodeButton" onClick={() => setTexttextShadow(!texttextShadow)}>output</button>
                        }
                    </div>
                    {
                        texttextShadow && <div>
                            <div className="codeRunDiv">
                                <h2 className={styles.text_a}>This is first Text.</h2>
                                <h2 className={styles.text_b}>This is first Text.</h2>
                                <h2 className={styles.text_c}>This is first Text.</h2>
                            </div>
                        </div>
                    }
                </section>
                <section className="section">
                    <h2>Text Shadow</h2>
                    <div className="codeDiv">
                        <code>
                            <span className='seclector'>.first_text</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>color</span>: <span className='cssTextvalue'>#39475a</span>; <br />
                            &nbsp;&nbsp;<span className='cssName'>text-shadow</span>: <span className='cssTextvalue'>2px 2px 4px #ffffff</span>; <br />
                            &#125;<br /><br />

                            <span className='seclector'>.second_text</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>color</span>: <span className='cssTextvalue'>black</span>; <br />
                            &nbsp;&nbsp;<span className='cssName'>text-shadow</span>: <span className='cssTextvalue'>0 0 3px #FF0000</span>; <br />
                            &#125;<br /><br />

                            <span className='seclector'>.third_text</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>color</span>: <span className='cssTextvalue'>black</span>; <br />
                            &nbsp;&nbsp;<span className='cssName'>text-shadow</span>: <span className='cssTextvalue'>0 0 3px #FF0000, 0 0 5px #0000FF</span>; <br />
                            &#125;<br /><br />

                            <span className='seclector'>.fourth_text</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>color</span>: <span className='cssTextvalue'>#39475a</span>; <br />
                            &nbsp;&nbsp;<span className='cssName'>text-shadow</span>: <span className='cssTextvalue'>1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue</span>; <br />
                            &#125;<br /><br />

                        </code>
                        {
                            texttextShadowMore ? <button className="seeCodeButton" onClick={() => setTexttextShadowMore(!texttextShadowMore)}>hide output</button> : <button className="seeCodeButton" onClick={() => setTexttextShadowMore(!texttextShadowMore)}>output</button>
                        }
                    </div>
                    {
                        texttextShadowMore && <div>
                            <div className="codeRunDiv">
                                <h2 className={styles.text_d}>This is a paragraph.</h2>
                                <h2 className={styles.text_e}>This is a paragraph.</h2>
                                <h2 className={styles.text_f}>This is a paragraph.</h2>
                                <h2 className={styles.text_g}>This is a paragraph.</h2>
                            </div>
                        </div>
                    }
                </section>
            </section>
            
        </Layout>
    );
};

export default TextDecoration;