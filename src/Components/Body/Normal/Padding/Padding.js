import React, { useState } from 'react';
import Layout from '../../../Layout/Layout';
import styles from './Padding.module.css';

const Padding = () => {
    const [padding, setPadding] = useState(false);
    const [SidePadding, setSidePadding] = useState(false);
    const [PaddingValues, setPaddingValues] = useState(false);
    const [PaddingAndElementWidth, setPaddingAndElementWidth] = useState(false);
    return (
        <Layout>
            <div className='name'>
                <h2>Padding</h2>
            </div>
            <p>Padding is used to create space around an element's content, inside of any defined borders. Negative values are not allowed.</p>
            <h4>Padding properties values</h4>
            <ul>
                <li>length (px, pt, cm, etc.)</li>
                <li>%</li>
                <li>inherit ( specifies that the padding should be inherited from the parent element)</li>
            </ul>
            <section className="section">
                <div className="codeDiv">
                    <code>
                        <span className='cssComment'>&#47;* padding *&#47;</span><br />
                        <span className='seclector'>p</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>padding</span>: <span className='cssTextvalue'>50px</span>;<br />
                        &#125;<br /><br />
                        <span className='seclector'>p</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>padding</span>: <span className='cssTextvalue'>50px 100px</span>; <span className='cssComment'>&nbsp; &#47;* 50px top and bottom, 100px left and right *&#47;</span><br />
                        &#125;<br /><br />
                        <span className='seclector'>p</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>padding</span>: <span className='cssTextvalue'>50px 150px 80px</span>; <span className='cssComment'>&nbsp; &#47;* 50px top , 150px left and right, 80px bottom *&#47;</span><br />
                        &#125;<br /><br />
                        <span className='seclector'>p</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>padding</span>: <span className='cssTextvalue'>20px 50px 80px 100px</span>; <span className='cssComment'>&nbsp; &#47;* 20px top , 50px right, 80px bottom, 100px left *&#47;</span><br />
                        &#125;<br />
                    </code>
                    {
                        SidePadding ? <button className="seeCodeButton" onClick={() => setSidePadding(!SidePadding)}>hide output</button> : <button className="seeCodeButton" onClick={() => setSidePadding(!SidePadding)}>output</button>
                    }
                </div>
                {
                    SidePadding && <div>
                        <div className="codeRunDiv">
                            <p className={styles.addPadding}>padding: 50px;</p>
                        </div>
                        <div className="codeRunDiv">
                            <p className={styles.addPaddingTwoValue}>padding: 50px 100px;</p>
                        </div>
                        <div className="codeRunDiv">
                            <p className={styles.addPaddingThreeValue}>padding: 50px 150px 80px;</p>
                        </div>
                        <div className="codeRunDiv">
                            <p className={styles.addPaddingFourValue}>padding: 20px 50px 80px 100px;</p>
                        </div>
                    </div>
                }
            </section>

            <section className="section">
                <h2>Individual Sides padding</h2>
                <div className="codeDiv">
                    <code>
                        <span className='cssComment'>&#47;* padding *&#47;</span><br />
                        <span className='seclector'>padding_top</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>padding-top</span>: <span className='cssTextvalue'>50px</span>;<br />
                        &#125;<br /><br />
                        <span className='seclector'>padding_right</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>padding-right</span>: <span className='cssTextvalue'>50px</span>;<br />
                        &#125;<br /><br />
                        <span className='seclector'>padding_bottom</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>padding-bottom</span>: <span className='cssTextvalue'>50px</span>;<br />
                        &#125;<br /><br />
                        <span className='seclector'>padding_left</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>padding-left</span>: <span className='cssTextvalue'>50px</span>;<br />
                        &#125;<br />
                    </code>
                    {
                        padding ? <button className="seeCodeButton" onClick={() => setPadding(!padding)}>hide output</button> : <button className="seeCodeButton" onClick={() => setPadding(!padding)}>output</button>
                    }
                </div>
                {
                    padding && <div>
                        <div className="codeRunDiv">
                            <p className={styles.addPadding_top}>padding-top: 50px;</p>
                            <p className={styles.addPadding_right}>padding-right: 50px;</p>
                            <p className={styles.addPadding_bottom}>padding-bottom: 50px;</p>
                            <p className={styles.addPadding_left}>padding-left: 50px;</p>
                        </div>
                    </div>
                }
            </section>

            <section className="section">
                <h2>padding values</h2>
                <div className="codeDiv">
                    <code>
                        <span className='seclector'>add_padding</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>padding</span>: <span className='cssTextvalue'>20px</span>;<br />
                        &#125;<br /><br />
                        <span className='seclector'>add_padding</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>padding</span>: <span className='cssTextvalue'>50px</span>;<br />
                        &#125;<br /><br />
                        <hr />
                        <span className='seclector'>add_padding</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>padding</span>: <span className='cssTextvalue'>10%</span>;<br />
                        &#125;<br /><br />
                        <br />
                        <hr />
                        <span className='seclector'>parents</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>padding</span>: <span className='cssTextvalue'>50px</span>;<br />
                        &#125;<br />
                        <span className='seclector'>child</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>padding</span>: <span className='cssTextvalue'>inherit</span>;<br />
                        &#125;<br />
                    </code>
                    {
                        PaddingValues ? <button className="seeCodeButton" onClick={() => setPaddingValues(!PaddingValues)}>hide output</button> : <button className="seeCodeButton" onClick={() => setPaddingValues(!PaddingValues)}>output</button>
                    }
                </div>
                {
                    PaddingValues && <div>
                        <div className="codeRunDiv">
                            <p className={styles.addPadding_lengthvalueOne}>padding: 20px;</p>
                            <p className={styles.addPadding_lengthvalueTwo}>padding: 50px;</p>
                        </div>
                        <div className="codeRunDiv">
                            <p className={styles.addPadding_lengthvaluePercentOne}>padding: 10%;</p>
                        </div>
                        <div className="codeRunDiv">
                            <div className={styles.addPadding_p}>
                                <p className={styles.addPadding_chield}>padding: inherit;</p>
                            </div>
                        </div>
                    </div>
                }
            </section>

            <section className="section">
                <h2>Padding and Element Width</h2>
                <div className="codeDiv">
                    <code>
                        <span className='seclector'>add_padding</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>width</span>: <span className='cssTextvalue'>300px</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>padding</span>: <span className='cssTextvalue'>30px</span>;<br />
                        &#125;<br /><br />
                        <hr />
                        <span className='seclector'>add_padding</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>width</span>: <span className='cssTextvalue'>300px</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>padding</span>: <span className='cssTextvalue'>30px</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>box-sizing</span>: <span className='cssTextvalue'>border-box</span>;<br />
                        &#125;<br /><br />
                        <br />
                    </code>
                    {
                        PaddingAndElementWidth ? <button className="seeCodeButton" onClick={() => setPaddingAndElementWidth(!PaddingAndElementWidth)}>hide output</button> : <button className="seeCodeButton" onClick={() => setPaddingAndElementWidth(!PaddingAndElementWidth)}>output</button>
                    }
                </div>
                {
                    PaddingAndElementWidth && <div>
                        
                        <div className="codeRunDiv">
                            <p className={styles.addStyle}>fix size</p>
                            <p className={styles.addPaddingAndWidthOne}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="codeRunDiv">
                                <p className={styles.addStyle}>fix size</p>
                                <p className={styles.addPaddingAndWidthTwo}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                }
            </section>
        </Layout>
    );
};

export default Padding;