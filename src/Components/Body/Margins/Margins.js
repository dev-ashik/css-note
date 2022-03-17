import React, { useState } from 'react';
import Layout from '../../Layout/Layout';
import styles from './Margins.module.css';

const Margins = () => {
    const [marginAllside, setMarginAllside] = useState(false);
    const [marginIndividualSides, setMarginIndividualSides] = useState(false);
    const [marginpropertiesLength, setMarginpropertiesLength] = useState(false);
    const [marginpropertiesPercent, setMarginpropertiesPercent] = useState(false);
    const [marginpropertiesAuto, setMarginpropertiesAuto] = useState(true);
    const [marginPropertiesInherit, setMarginPropertiesInherit] = useState(true);
    return (
        <Layout>
            <div className='name'>
                <h2>Border</h2>
            </div>
            <p>Margins are used to create space around elements, outside of any defined borders.</p>
            <h4>All the margin properties can have the following values</h4>
            <ul>
                <li>auto - the browser calculates the margin</li>
                <li>length - specifies a margin in px, pt, cm, etc.</li>
                <li>% - specifies a margin in % of the width of the containing element</li>
                <li>inherit - specifies that the margin should be inherited from the parent element</li>
            </ul>

            <section className="section">
                <div className="codeDiv">
                    <code>
                        <span className='cssComment'>&#47;* margin *&#47;</span><br />
                        <span className='seclector'>p</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>margin</span>: <span className='cssTextvalue'>100px</span>;<br />
                        &#125;<br /><br />
                        <span className='seclector'>p</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>margin</span>: <span className='cssTextvalue'>50px 100px</span>; <span className='cssComment'>&nbsp; &#47;* 50px top and bottom, 100px left and right *&#47;</span><br />
                        &#125;<br /><br />
                        <span className='seclector'>p</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>margin</span>: <span className='cssTextvalue'>50px 150px 80px</span>; <span className='cssComment'>&nbsp; &#47;* 50px top , 150px left and right, 80px bottom *&#47;</span><br />
                        &#125;<br /><br />
                        <span className='seclector'>p</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>margin</span>: <span className='cssTextvalue'>50px 80px 120px 150px</span>; <span className='cssComment'>&nbsp; &#47;* 50px top , 80px right, 120px bottom, 150px left *&#47;</span><br />
                        &#125;<br />
                    </code>
                    {
                        marginAllside ? <button className="seeCodeButton" onClick={() => setMarginAllside(!marginAllside)}>hide output</button> : <button className="seeCodeButton" onClick={() => setMarginAllside(!marginAllside)}>output</button>
                    }
                </div>
                {
                    marginAllside && <div>
                        <div className="codeRunDiv">
                            <p className={styles.marginAllside}>margin: 100px;</p>
                        </div>
                        <div className="codeRunDiv">
                            <p className={styles.marginTwoValue}>margin: 50px 100px;</p>
                        </div>
                        <div className="codeRunDiv">
                            <p className={styles.marginThreeValue}>margin: 50px 150px 80px;</p>
                        </div>
                        <div className="codeRunDiv">
                            <p className={styles.marginFourValue}>margin: 50px 80px 120px 150px;</p>
                        </div>
                    </div>
                }
            </section>
            <section className="section">
            <h2>Individual Sides</h2>
                <div className="codeDiv">
                    <code>
                        <span className='seclector'>margin_top</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>margin-top</span>: <span className='cssTextvalue'>50px</span>;<br />
                        &#125;<br />
                        <span className='seclector'>margin_right</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>margin-right</span>: <span className='cssTextvalue'>200px</span>;<br />
                        &#125;<br />
                        <span className='seclector'>margin_bottom</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>margin-bottom</span>: <span className='cssTextvalue'>80px</span>;<br />
                        &#125;<br />
                        <span className='seclector'>margin_left</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>margin-left</span>: <span className='cssTextvalue'>50px</span>;<br />
                        &#125;
                    </code>
                    {
                        marginIndividualSides ? <button className="seeCodeButton" onClick={() => setMarginIndividualSides(!marginIndividualSides)}>hide output</button> : <button className="seeCodeButton" onClick={() => setMarginIndividualSides(!marginIndividualSides)}>output</button>
                    }
                </div>
                {
                    marginIndividualSides && <div className="codeRunDiv">
                        <hr />
                        <p className={styles.marginIndividualSidesOne}>margin-top: 50px;</p><hr />
                        <p className={styles.marginIndividualSidesTwo}>margin-right: 200px;</p><hr />
                        <p className={styles.marginIndividualSidesThree}>margin-bottom: 80px;</p><hr />
                        <p className={styles.marginIndividualSidesFour}>margin-left: 50px;</p><hr />
                    </div>
                }
            </section>
            <section className="section">
                <h2>margin properties value</h2>
                <section className="section">
                    <h2>length (px, pt, cm)</h2>
                    <div className="codeDiv">
                        <code>
                            <span className='seclector'>margin_one</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>margin</span>: <span className='cssTextvalue'>5px</span>;<br />
                            &#125;<br />
                            <span className='seclector'>margin_tow</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>margin</span>: <span className='cssTextvalue'>5pt</span>;<br />
                            &#125;<br />
                            <span className='seclector'>margin_three</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>margin</span>: <span className='cssTextvalue'>5cm</span>;<br />
                            &#125;<br />
                        </code>
                        {
                            marginpropertiesLength ? <button className="seeCodeButton" onClick={() => setMarginpropertiesLength(!marginpropertiesLength)}>hide output</button> : <button className="seeCodeButton" onClick={() => setMarginpropertiesLength(!marginpropertiesLength)}>output</button>
                        }
                    </div>
                    {
                        marginpropertiesLength && 
                            <div className="codeRunDiv">
                                <div className={styles.marginValueLength_p}>
                                    <p className={styles.marginValueLength} styles={{margin: '20px'}}>margin: 5px;</p>
                                </div><br />
                                <div className={styles.marginValueLength_p}>
                                    <p className={styles.marginValueLengthPt} styles={{margin: '20px'}}>margin: 5pt;</p>
                                </div><br />
                                <div className={styles.marginValueLength_p}>
                                    <p className={styles.marginValueLengthCm} styles={{margin: '20px'}}>margin: 5cm;</p>
                                </div>
                            </div>
                    }
                </section>
                <section className="section">
                    <h2>%</h2>
                    <div className="codeDiv">
                        <code>
                            <span className='seclector'>margin_one</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>margin</span>: <span className='cssTextvalue'>2%</span>;<br />
                            &#125;<br />
                            <span className='seclector'>margin_tow</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>margin</span>: <span className='cssTextvalue'>5%</span>;<br />
                            &#125;<br />
                        </code>
                        {
                            marginpropertiesPercent ? <button className="seeCodeButton" onClick={() => setMarginpropertiesPercent(!marginpropertiesPercent)}>hide output</button> : <button className="seeCodeButton" onClick={() => setMarginpropertiesPercent(!marginpropertiesPercent)}>output</button>
                        }
                    </div>
                    {
                        marginpropertiesPercent && 
                            <div className="codeRunDiv">
                                <div className={styles.marginValueLength_p}>
                                    <p className={styles.marginValuepersentone} styles={{margin: '20px'}}>margin: 2%;</p>
                                </div><br />
                                <div className={styles.marginValueLength_p}>
                                    <p className={styles.marginValuepersenttwo} styles={{margin: '20px'}}>margin: 5%;</p>
                                </div>
                            </div>
                    }
                </section>
                <section className="section">
                    <h2>margin: auto</h2>
                    <p>You can set the margin property to auto to horizontally center the element within its container. The element will then take up the specified width, and the remaining space will be split equally between the left and right margins.</p>
                    <div className="codeDiv">
                        <code>
                            <span className='seclector'>margin_one</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>margin</span>: <span className='cssTextvalue'>auto</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>width</span>: <span className='cssTextvalue'>200px</span>;<br />
                            &#125;<br /><br />
                            <span className='seclector'>margin_two</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>margin-left</span>: <span className='cssTextvalue'>auto</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>width</span>: <span className='cssTextvalue'>200px</span>;<br />
                            &#125;<br /><br />
                            <span className='seclector'>margin_three</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>margin-right</span>: <span className='cssTextvalue'>auto</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>width</span>: <span className='cssTextvalue'>200px</span>;<br />
                            &#125;<br />
                        </code>
                        {
                            marginpropertiesAuto ? <button className="seeCodeButton" onClick={() => setMarginpropertiesAuto(!marginpropertiesAuto)}>hide output</button> : <button className="seeCodeButton" onClick={() => setMarginpropertiesAuto(!marginpropertiesAuto)}>output</button>
                        }
                    </div>
                    {
                        marginpropertiesAuto && 
                            <div className="codeRunDiv">
                                <div className={styles.marginValueLength_p}>
                                    <p className={styles.marginValueAutoOne} styles={{margin: '20px'}}>margin: auto;</p>
                                </div><br />
                                <div className={styles.marginValueLength_p}>
                                    <p className={styles.marginValueLeftAuto} styles={{margin: '20px'}}>margin-left: auto;</p>
                                </div><br />
                                <div className={styles.marginValueLength_p}>
                                    <p className={styles.marginValueRightAuto} styles={{margin: '20px'}}>margin-right: auto;</p>
                                </div>
                            </div>
                    }
                </section>
                <section className="section">
                    <h2>margin: inherit</h2>
                    <p> specifies that the margin should be inherited from the parent element</p>
                    <div className="codeDiv">
                        <code>
                            <span className='seclector'>parents</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>margin</span>: <span className='cssTextvalue'>20px</span>;<br />
                            &#125;<br /><br />
                            <span className='seclector'>child</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>margin</span>: <span className='cssTextvalue'>inherit</span>; &nbsp; <span className='cssComment'>/* margin: 20px; */</span><br />
                            &#125;<br /><br />
                        </code>
                        {
                            marginPropertiesInherit ? <button className="seeCodeButton" onClick={() => setMarginPropertiesInherit(!marginPropertiesInherit)}>hide output</button> : <button className="seeCodeButton" onClick={() => setMarginPropertiesInherit(!marginPropertiesInherit)}>output</button>
                        }
                    </div>
                    {
                        marginPropertiesInherit && 
                            <div className="codeRunDiv">
                                <div className={styles.marginValueInherit}>
                                    <div className={styles.marginValueInherit_p}>
                                        <p className={styles.marginValueInheritOne}>margin: inherit;</p>
                                    </div>
                                </div>
                            </div>
                    }
                </section>
            </section>
        </Layout>
    );
};

export default Margins;