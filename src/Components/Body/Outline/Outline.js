import React, { useState } from 'react';
import Layout from '../../Layout/Layout';
import styles from './Outline.module.css';

const Outline = () => {
    const [outline, setOutline] = useState(true);
    const [outlineStyle, setOutlineStyle] = useState(true);
    const [outlineWidth, setOutlineWidth] = useState(false);
    const [outlineWidthOverlap, setOutlineWidthOverlap] = useState(true);
    const [outlineColor, setOutlineColor] = useState(true);
    const [outlineOffset, setOutlineOffset] = useState(true);
    return (
        <Layout>
            <div className='name'>
                <h2>Height &#38; Width</h2>
            </div>
            <p>An outline is a line drawn outside the element's border. An outline is a line that is drawn around elements, OUTSIDE the borders, to make the element "stand out".</p>
            <section className="section">
                <div className="codeDiv">
                    <code>
                        <span className='cssComment'>&#47;* Outline *&#47;</span><br />
                        <span className='seclector'>p</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>outline</span>: <span className='cssTextvalue'>10px solid #8d0202</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>border</span>: <span className='cssTextvalue'>10px solid #017701</span>;<br />
                        &#125;<br /><br />
                    </code>
                    {
                        outline ? <button className="seeCodeButton" onClick={() => setOutline(!outline)}>hide output</button> : <button className="seeCodeButton" onClick={() => setOutline(!outline)}>output</button>
                    }
                </div>
                {
                    outline && <div>
                        <div className="codeRunDiv">
                            <p className={styles.outline}>
                                outline: 10px solid #8d0202;<br />
                                border: 10px solid #017701;
                            </p>
                        </div>
                    </div>
                }
            </section>


            <section className="section">
                <h2>Outline Offset</h2>
                <p>The outline-offset property adds space between an outline and the edge/border of an element. The space between an element and its outline is transparent.</p>
                <div className="codeDiv">
                    <code>
                        <span className='cssComment'>&#47;* Outline Offset *&#47;</span><br />
                        <span className='seclector'>.outlineOffset</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>border</span>: <span className='cssTextvalue'>5px solid green</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>outline</span>: <span className='cssTextvalue'>5px solid red</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>outline-offset</span>: <span className='cssTextvalue'>5px</span>;<br />
                        &#125;<br /><br />
                    </code>
                    {
                        outlineOffset ? <button className="seeCodeButton" onClick={() => setOutlineOffset(!outlineOffset)}>hide output</button> : <button className="seeCodeButton" onClick={() => setOutlineOffset(!outlineOffset)}>output</button>
                    }
                </div>
                {
                    outlineOffset && <div>
                        <div className="codeRunDiv">
                            <p className={styles.outlineOffset}>
                                border: 5px solid green;<br />
                                outline: 5px solid red;<br />
                                outline-offset: 5px;
                            </p>
                        </div>
                    </div>
                }
            </section>

            <section className="section">
                <h2>Outline style</h2>
                <div className="codeDiv">
                    <code>
                        <span className='cssComment'>&#47;* Outline *&#47;</span><br />
                        <span className='seclector'>outline_dotted</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>border</span>: <span className='cssTextvalue'>10px solid green</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>outline</span>: <span className='cssTextvalue'>5px dotted red</span>;<br />
                        &#125;<br /><br />

                        <span className='seclector'>outline_dashed</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>border</span>: <span className='cssTextvalue'>10px solid green</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>outline</span>: <span className='cssTextvalue'>5px dashed red</span>;<br />
                        &#125;<br /><br />

                        <span className='seclector'>outline_solid</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>border</span>: <span className='cssTextvalue'>10px solid green</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>outline</span>: <span className='cssTextvalue'>5px solid red</span>;<br />
                        &#125;<br /><br />

                        <span className='seclector'>utline_double</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>border</span>: <span className='cssTextvalue'>10px solid green</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>outline</span>: <span className='cssTextvalue'>5px double red</span>;<br />
                        &#125;<br /><br />

                        <span className='seclector'>outline_groove</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>border</span>: <span className='cssTextvalue'>10px solid green</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>outline</span>: <span className='cssTextvalue'>5px groove red</span>;<br />
                        &#125;<br /><br />

                        <span className='seclector'>outline_ridge</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>border</span>: <span className='cssTextvalue'>10px solid green</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>outline</span>: <span className='cssTextvalue'>5px ridge red</span>;<br />
                        &#125;<br /><br />

                        <span className='seclector'>outline_inset</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>border</span>: <span className='cssTextvalue'>10px solid green</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>outline</span>: <span className='cssTextvalue'>5px inset red</span>;<br />
                        &#125;<br /><br />

                        <span className='seclector'>outline_outset</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>border</span>: <span className='cssTextvalue'>10px solid green</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>outline</span>: <span className='cssTextvalue'>5px outset red</span>;<br />
                        &#125;<br /><br />
                    </code>
                    {
                        outlineStyle ? <button className="seeCodeButton" onClick={() => setOutlineStyle(!outlineStyle)}>hide output</button> : <button className="seeCodeButton" onClick={() => setOutlineStyle(!outlineStyle)}>output</button>
                    }
                </div>
                {
                    outlineStyle && <div>
                        <div className="codeRunDiv">
                            <p className={styles.outline_dotted}>
                                border: 10px solid green;<br />
                                outline: 5px dotted red;
                            </p>
                            <p className={styles.outline_dashed}>
                                border: 10px solid green;<br />
                                outline: 5px dashed red;
                            </p>
                            <p className={styles.outline_solid}>
                                border: 10px solid green;<br />
                                outline: 5px solid red;
                            </p>
                            <p className={styles.outline_double}>
                                border: 10px solid green;<br />
                                outline: 5px double red;
                            </p>
                            <p className={styles.outline_groove}>
                                order: 10px solid green;<br />
                                outline: 5px groove red;
                            </p>
                            <p className={styles.outline_ridge}>
                                border: 10px solid green;<br />
                                outline: 5px ridge red;
                            </p>
                            <p className={styles.outline_inset}>
                                border: 10px solid green;<br />
                                outline: 5px inset red;
                            </p>
                            <p className={styles.outline_outset}>
                                border: 10px solid green;<br />
                                outline: 5px outset red;
                            </p>
                        </div>
                    </div>
                }
            </section>

            <section className="section">
                <h2>Outline Width</h2>
                <div className="codeDiv">
                    <code>
                        <span className='seclector'>outline_thinWidth</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>outline</span>: <span className='cssTextvalue'>solid red</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>outline-width</span>: <span className='cssTextvalue'>thin</span>;<br />
                        &#125;<br /><br />

                        <span className='seclector'>outline_thinWidth</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>outline</span>: <span className='cssTextvalue'>solid red</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>outline-width</span>: <span className='cssTextvalue'>medium</span>;<br />
                        &#125;<br /><br />

                        <span className='seclector'>outline_thickWidth</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>outline</span>: <span className='cssTextvalue'>solid red</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>outline-width</span>: <span className='cssTextvalue'>thick</span>;<br />
                        &#125;<br /><br />

                        <span className='seclector'>outline_lengthWidth</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>outline</span>: <span className='cssTextvalue'>solid red</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>outline-width</span>: <span className='cssTextvalue'>10px</span>;<br />
                        &#125;<br /><br />

                        
                    </code>
                    {
                        outlineWidth ? <button className="seeCodeButton" onClick={() => setOutlineWidth(!outlineWidth)}>hide output</button> : <button className="seeCodeButton" onClick={() => setOutlineWidth(!outlineWidth)}>output</button>
                    }
                </div>
                {
                    outlineWidth && <div>
                        <div className="codeRunDiv">
                            <p className={styles.outline_thinWidth}>
                                outline: solid red;<br />
                                outline-width: thin;
                            </p>
                            <p className={styles.outline_mediumWidth}>
                                outline: solid red;<br />
                                outline-width: medium;
                            </p>
                            <p className={styles.outline_thickWidth}>
                                outline: solid red;<br />
                                outline-width: thick;
                            </p>
                            <p className={styles.outline_lengthWidth}>
                                outline: solid red;<br />
                                outline-width: 10px;
                            </p>
                        </div>
                    </div>
                }
            </section>
            <section className="section">
                <h2>Outline Overlap</h2>
                <div className="codeDiv">
                    <code>
                        <span className='seclector'>.outline_overlap</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>outline</span>: <span className='cssTextvalue'>20px solid red</span>;<br />
                        &#125;<br /><br />
                    </code>
                    {
                        outlineWidthOverlap ? <button className="seeCodeButton" onClick={() => setOutlineWidthOverlap(!outlineWidthOverlap)}>hide output</button> : <button className="seeCodeButton" onClick={() => setOutlineWidthOverlap(!outlineWidthOverlap)}>output</button>
                    }
                </div>
                {
                    outlineWidthOverlap && <div>
                        <div className="codeRunDiv">
                            <p className={styles.pStyle}>
                                This is a paragraph.
                            </p>
                            <p className={styles.outline_overlap}>
                                outline: 20px solid red;
                            </p>
                            
                        </div>
                    </div>
                }
            </section>

            <section className="section">
                <h2>Outline Color</h2>
                <div className="codeDiv">
                    <code>
                        <span className='seclector'>.firstColor</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>outline</span>: <span className='cssTextvalue'>10px solid</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>outline-color</span>: <span className='cssTextvalue'>blueviolet</span>;<br />
                        &#125;<br /><br />

                        <span className='seclector'>.secondColor</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>outline</span>: <span className='cssTextvalue'>10px solid</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>outline-color</span>: <span className='cssTextvalue'>burlywood</span>;<br />
                        &#125;<br /><br />
                    </code>
                    {
                        outlineColor ? <button className="seeCodeButton" onClick={() => setOutlineColor(!outlineColor)}>hide output</button> : <button className="seeCodeButton" onClick={() => setOutlineColor(!outlineColor)}>output</button>
                    }
                </div>
                {
                    outlineColor && <div>
                        <div className="codeRunDiv">
                            <p className={styles.firstColor}>
                                outline: 10px solid ;<br />
                                outline-color: blueviolet;
                            </p>
                            <p className={styles.secondColor}>
                                outline: 10px solid;<br />
                                outline-color: burlywood;
                            </p>
                            
                        </div>
                    </div>
                }
            </section>
        </Layout>
    );
};

export default Outline;