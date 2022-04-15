import React, { useState } from 'react';
import Layout from '../../../Layout/Layout';
import styles from './Border.module.css';

const Border = () => {
    const [sorthand, setSorthand] = useState(true);
    const [details, setDetails] = useState(false);
    const [bStyles, setBStyles] = useState(true);
    const [bSide, setBSide] = useState(true);
    const [bWidth, setBWidth] = useState(true);
    const [bRound, setBRound] = useState(true);
    return (
        <Layout>
            <div className='name'>
                <h2>Border</h2>
            </div>
            <p>The CSS border properties allow you to specify the style, width, and color of an element's border.</p>
            <section className="section">
                <div className="codeDiv">
                    <code>
                        <span className='cssComment'>&#47;* short hand border *&#47;</span><br />
                        <span className='seclector'>p</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>border</span>: <span className='cssTextvalue'>2px solid red</span>;<br />
                        &#125;
                    </code>
                    {
                        sorthand ? <button className="seeCodeButton" onClick={() => setSorthand(!sorthand)}>hide output</button> : <button className="seeCodeButton" onClick={() => setSorthand(!sorthand)}>output</button>
                    }

                </div>
                {
                    sorthand && <div className="codeRunDiv">
                        <p className={styles.element}>Paragraph</p>
                    </div>
                }

                <h2>border-width, border-style, border-color, border-radius</h2>

                <div className="codeDiv">
                    <code>
                        <span className='cssComment'>&#47;* border *&#47;</span><br />
                        <span className='seclector'>p.dashed</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>border-color</span>: <span className='cssTextvalue'>green</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>border-width</span>: <span className='cssTextvalue'>3px</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>border-style</span>: <span className='cssTextvalue'>dashed</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>border-radius</span>: <span className='cssTextvalue'>5px</span>;<br />
                        &#125;
                    </code>
                    {
                        details ? <button className="seeCodeButton" onClick={() => setDetails(!details)}>hide output</button> : <button className="seeCodeButton" onClick={() => setDetails(!details)}>output</button>
                    }

                </div>
                {
                    details && <div className="codeRunDiv">
                        <p className={styles.elementBorder}>Paragraph</p>
                    </div>
                }

                {/* border Styles */}
                <h2>Border styles</h2>
                <div className="codeDiv">
                    <code>
                        <span className='seclector'>p.dotted</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>border-style</span>: <span className='cssTextvalue'>dotted</span>;<br />
                        &#125;<br />
                        <span className='seclector'>p.dashed</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>border-style</span>: <span className='cssTextvalue'>dashed</span>;<br />
                        &#125;<br />
                        <span className='seclector'>p.solid</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>border-style</span>: <span className='cssTextvalue'>solid</span>;<br />
                        &#125;<br />
                        <span className='seclector'>p.double</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>border-style</span>: <span className='cssTextvalue'>double</span>;<br />
                        &#125;<br />
                        <span className='seclector'>p.groove</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>border-style</span>: <span className='cssTextvalue'>groove</span>;<br />
                        &#125;<br />
                        <span className='seclector'>p.ridge</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>border-style</span>: <span className='cssTextvalue'>ridge</span>;<br />
                        &#125;<br />
                        <span className='seclector'>p.inset</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>border-style</span>: <span className='cssTextvalue'>inset</span>;<br />
                        &#125;<br />
                        <span className='seclector'>p.outset</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>border-style</span>: <span className='cssTextvalue'>outset</span>;<br />
                        &#125;<br />
                        <span className='seclector'>p.none</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>border-style</span>: <span className='cssTextvalue'>none</span>;<br />
                        &#125;<br />
                        <span className='seclector'>p.hidden</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>border-style</span>: <span className='cssTextvalue'>hidden</span>;<br />
                        &#125;<br />
                        <span className='seclector'>p.mixed</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>border-style</span>: <span className='cssTextvalue'>dotted dashed solid double</span>;
                        &nbsp; <span className='cssComment'>/* dotted top, dashed right, solid bottom, double left */</span>;
                        <br />
                        &#125;<br />

                        <span className='seclector'>p.mixedThreeValue</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>border-style</span>: <span className='cssTextvalue'>dotted dashed solid</span>;
                        &nbsp; <span className='cssComment'>/* dotted top, dashed right and left, solid bottom */</span>;
                        <br />
                        &#125;<br />

                        <span className='seclector'>p.style</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>border-top-style</span>: <span className='cssTextvalue'>dotted</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>border-right-style</span>: <span className='cssTextvalue'>solid</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>border-bottom-style</span>: <span className='cssTextvalue'>dashed</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>border-left-style</span>: <span className='cssTextvalue'>double</span>;<br />
                        &#125;<br />
                    </code>
                    {
                        bStyles ? <button className="seeCodeButton" onClick={() => setBStyles(!bStyles)}>hide output</button> : <button className="seeCodeButton" onClick={() => setBStyles(!bStyles)}>output</button>
                    }

                </div>
                {
                    bStyles && <div className="codeRunDiv">
                        <p className={styles.borderStyleDotted}>dotted</p>
                        <p className={styles.borderStyleDashed}>dashed</p>
                        <p className={styles.borderStyleSolid}>solid</p>
                        <p className={styles.borderStyleDouble}>double</p>
                        <p className={styles.borderStylegroove}>groove</p>
                        <p className={styles.borderStyleridge}>ridge</p>
                        <p className={styles.borderStyleinset}>inset</p>
                        <p className={styles.borderStyleoutset}>outset</p>
                        <p className={styles.borderStylenone}>none</p>
                        <p className={styles.borderStylehidden}>hidden</p>
                        <p className={styles.borderStyleMixedThreeValue}>mixed 3 value</p>
                        <p className={styles.borderStyleMixed}>mixed 4 value</p>
                        <p className={styles.borderTopStyle}>
                            border-top-style: dotted;<br />
                            border-right-style: solid;<br />
                            border-bottom-style: dashed;<br />
                            border-left-style: double;
                        </p>
                    </div>
                }
            </section>


            <section className="section">
                {/* border width */}
                <h2>Border Width</h2>
                <p>The width can be set as a specific size (in px, pt, cm, em, etc) or by using one of the three pre-defined values: thin, medium, or thick.</p>
                <div className="codeDiv">
                    <code>
                        <span className='seclector'>border_px</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>border-width</span>: <span className='cssTextvalue'>5px;</span>;<br />
                        &#125;<br />
                        <span className='seclector'>border_thin</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>border-width</span>: <span className='cssTextvalue'>thin</span>;<br />
                        &#125;<br />
                        <span className='seclector'>border_medium</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>border-width</span>: <span className='cssTextvalue'>medium</span>;<br />
                        &#125;<br />
                        <span className='seclector'>border_thick</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>border-width</span>: <span className='cssTextvalue'>thick</span>;<br />
                        &#125;<br />
                        <span className='seclector'>border_twovalue</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>border-width</span>: <span className='cssTextvalue'>20px 5px</span>;
                        &nbsp; <span className='cssComment'>/* 20px top and bottom, 5px left and right  */</span><br />
                        &#125;<br />
                        <span className='seclector'>border_fourvalue</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>border-width</span>: <span className='cssTextvalue'>3px 20px 10px 40px;</span>;
                        &nbsp; <span className='cssComment'>/* 3px top, 20px right, 10px bottom, 40px left  */</span>
                        <br />
                        &#125;<br />
                        
                    </code>
                    {
                        bWidth ? <button className="seeCodeButton" onClick={() => setBWidth(!bWidth)}>hide output</button> : <button className="seeCodeButton" onClick={() => setBWidth(!bWidth)}>output</button>
                    }

                </div>
                {
                    bWidth && <div className="codeRunDiv">
                        <p className={styles.borderPx}>border-width: 5px;</p>
                        <p className={styles.borderThin}>border-width: thin;</p>
                        <p className={styles.borderMedium}>border-width: medium;</p>
                        <p className={styles.borderThick}>border-width: thick;</p>
                        <p className={styles.borderTwoValue}>border-width: 20px 5px;</p>
                        <p className={styles.borderFourValue}>border-width: 3px 20px 10px 40px;</p>
                    </div>
                }
            </section>

            <section className="section">
                {/* border side */}
                <h2>Border Side</h2>
                <div className="codeDiv">
                    <code>
                        <span className='seclector'>border_top</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>border-top</span>: <span className='cssTextvalue'>5px solid red;</span>;<br />
                        &#125;<br />
                        <span className='seclector'>border_right</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>border-right</span>: <span className='cssTextvalue'>5px dashed red</span>;<br />
                        &#125;<br />
                        <span className='seclector'>border_bottom</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>border-bottom</span>: <span className='cssTextvalue'>5px groove red</span>;<br />
                        &#125;<br />
                        <span className='seclector'>border_left</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>border-left</span>: <span className='cssTextvalue'>5px double red</span>;<br />
                        &#125;<br />
                        
                    </code>
                    {
                        bSide ? <button className="seeCodeButton" onClick={() => setBSide(!bSide)}>hide output</button> : <button className="seeCodeButton" onClick={() => setBSide(!bSide)}>output</button>
                    }

                </div>
                {
                    bSide && <div className="codeRunDiv">
                        <p className={styles.borderTop}>Border Top</p>
                        <p className={styles.borderRihgt}>Border Right</p>
                        <p className={styles.borderBottom}>Border Bottom</p>
                        <p className={styles.borderLeft}>Border Left</p>
                    </div>
                }

            </section>

            <section className="section">
                {/* Rounded Borders */}
                <h2>Rounded Borders</h2>
                <p>The border-radius property is used to add rounded borders to an element.</p>
                <div className="codeDiv">
                    <code>
                        <span className='seclector'>border_rounded</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>border-radius</span>: <span className='cssTextvalue'>5px;</span>;<br />
                        &#125;<br />
                        <span className='seclector'>border_rounded</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>border-radius</span>: <span className='cssTextvalue'>10px</span>;<br />
                        &#125;<br />
                        <span className='seclector'>border_rounded</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>border-radius</span>: <span className='cssTextvalue'>30px</span>;<br />
                        &#125;<br />
                    </code>
                    {
                        bRound ? <button className="seeCodeButton" onClick={() => setBRound(!bRound)}>hide output</button> : <button className="seeCodeButton" onClick={() => setBRound(!bRound)}>output</button>
                    }

                </div>
                {
                    bRound && <div className="codeRunDiv">
                        <p className={styles.borderRoundOne}>border-radius: 5px;</p>
                        <p className={styles.borderRoundTwo}>border-radius: 10px;</p>
                        <p className={styles.borderRoundThree}>border-radius: 30px;</p>
                    </div>
                }
            </section>
        </Layout>
    );
};

export default Border;