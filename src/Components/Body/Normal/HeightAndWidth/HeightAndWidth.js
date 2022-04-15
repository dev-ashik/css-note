import React, { useState } from 'react';
import Layout from '../../../Layout/Layout';
import styles from './HeightAndWidth.module.css';

const HeightAndWidth = () => {
    const [heightWidth, setHeightWidth] = useState(false);
    const [heightWidthValueLength, setHeightWidthValueLength] = useState(true);
    const [heightWidthValueAuto, setHeightWidthValueAuto] = useState(true);
    const [heightWidthValuePercent, setHeightWidthValuePercent] = useState(true);
    const [heightWidthValueInitial, setHeightWidthValueInitial] = useState(true);
    const [heightWidthValueInherit, setHeightWidthValueInherit] = useState(true);
    const [maxWidth, setMaxWidth] = useState(true);
    return (
        <Layout>
            <div className='name'>
                <h2>Height &#38; Width</h2>
            </div>
            <h5>height and width Values</h5>
            <ul>
                <li>auto (This is default. The browser calculates the height and width)</li>
                <li>length (px, cm etc)</li>
                <li>%</li>
                <li>initial (Sets the height/width to its default value)</li>
                <li>initial (The height/width will be inherited from its parent value)</li>
            </ul>
            <h5>Note: Remember that the height and width properties do not include padding, borders, or margins! They set the height/width of the area inside the padding, border, and margin of the element!</h5>
            <p>When you set the width and height properties of an element with CSS, you just set the width and height of the content area. To calculate the full size of an element, you must also add padding, borders and margins.</p>
            <section className="section">
                <div className="codeDiv">
                    <code>
                        <span className='cssComment'>&#47;* height and width *&#47;</span><br />
                        <span className='seclector'>p</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>height</span>: <span className='cssTextvalue'>300px</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>width</span>: <span className='cssTextvalue'>300px</span>;<br />
                        &#125;<br /><br />
                    </code>
                    {
                        heightWidth ? <button className="seeCodeButton" onClick={() => setHeightWidth(!heightWidth)}>hide output</button> : <button className="seeCodeButton" onClick={() => setHeightWidth(!heightWidth)}>output</button>
                    }
                </div>
                {
                    heightWidth && <div>
                        <div className="codeRunDiv">
                            <p className={styles.heightAndWidth}>
                                height: 300px;<br />
                                width: 300px;
                            </p>
                        </div>
                    </div>
                }
            </section>


            <section className="section">
                <h2>height and width Values</h2>
                <section className="section">
                    <h3>length</h3>
                    <div className="codeDiv">
                        <code>
                            <span className='seclector'>p</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>height</span>: <span className='cssTextvalue'>300px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>width</span>: <span className='cssTextvalue'>300px</span>;<br />
                            &#125;<br /><br />
                            <hr />
                            <span className='seclector'>p</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>height</span>: <span className='cssTextvalue'>8cm</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>width</span>: <span className='cssTextvalue'>8cm</span>;<br />
                            &#125;<br /><br />
                        </code>
                        {
                            heightWidthValueLength ? <button className="seeCodeButton" onClick={() => setHeightWidthValueLength(!heightWidthValueLength)}>hide output</button> : <button className="seeCodeButton" onClick={() => setHeightWidthValueLength(!heightWidthValueLength)}>output</button>
                        }
                    </div>
                    {
                        heightWidthValueLength && <div>
                            <div className="codeRunDiv">
                                <p className={styles.heightAndWidth}>
                                    height: 300px;<br />
                                    width: 300px;
                                </p>
                                <hr />
                                <p className={styles.heightAndWidthLengthValue}>
                                    height: 8cm;<br />
                                    width: 8cm;
                                </p>
                            </div>
                        </div>
                    }
                </section>

                <section className="section">
                    <h3>auto</h3>
                    <div className="codeDiv">
                        <code>
                            <span className='seclector'>p</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>height</span>: <span className='cssTextvalue'>300px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>width</span>: <span className='cssTextvalue'>300px</span>;<br />
                            &#125;<br /><br />
                        </code>
                        {
                            heightWidthValueAuto ? <button className="seeCodeButton" onClick={() => setHeightWidthValueAuto(!heightWidthValueAuto)}>hide output</button> : <button className="seeCodeButton" onClick={() => setHeightWidthValueAuto(!heightWidthValueAuto)}>output</button>
                        }
                    </div>
                    {
                        heightWidthValueAuto && <div>
                            <div className="codeRunDiv">
                                <p className={styles.heightAndWidthAuto}>
                                    height: auto;<br />
                                    width: auto;
                                </p>
                            </div>
                        </div>
                    }
                </section>

                <section className="section">
                    <h3>%</h3>
                    <div className="codeDiv">
                        <code>
                            <span className='seclector'>p</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>height</span>: <span className='cssTextvalue'>300px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>width</span>: <span className='cssTextvalue'>50%</span>;<br />
                            &#125;<br /><br />
                        </code>
                        {
                            heightWidthValuePercent ? <button className="seeCodeButton" onClick={() => setHeightWidthValuePercent(!heightWidthValuePercent)}>hide output</button> : <button className="seeCodeButton" onClick={() => setHeightWidthValuePercent(!heightWidthValuePercent)}>output</button>
                        }
                    </div>
                    {
                        heightWidthValuePercent && <div>
                            <div className="codeRunDiv">
                                <p className={styles.heightAndWidthPercent}>
                                    height: 300px;<br />
                                    width: 50%;
                                </p>
                            </div>
                        </div>
                    }
                </section>
                <section className="section">
                    <h3>initial</h3>
                    <div className="codeDiv">
                        <code>
                            <span className='seclector'>p</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>height</span>: <span className='cssTextvalue'>initial</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>width</span>: <span className='cssTextvalue'>initial</span>;<br />
                            &#125;<br /><br />
                        </code>
                        {
                            heightWidthValueInitial ? <button className="seeCodeButton" onClick={() => setHeightWidthValueInitial(!heightWidthValueInitial)}>hide output</button> : <button className="seeCodeButton" onClick={() => setHeightWidthValueInitial(!heightWidthValueInitial)}>output</button>
                        }
                    </div>
                    {
                        heightWidthValueInitial && <div>
                            <div className="codeRunDiv">
                                <p className={styles.heightAndWidthInitial}>
                                    height: initial;<br />
                                    width: initial;
                                </p>
                            </div>
                        </div>
                    }
                </section>
                
                <section className="section">
                    <h3>initial</h3>
                    <div className="codeDiv">
                        <code>
                            <span className='seclector'>div_parents</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>height</span>: <span className='cssTextvalue'>300px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>width</span>: <span className='cssTextvalue'>300px</span>;<br />
                            &#125;<br /><br />
                            <span className='seclector'>div_child</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>height</span>: <span className='cssTextvalue'>inherit</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>width</span>: <span className='cssTextvalue'>inherit</span>;<br />
                            &#125;<br /><br />
                        </code>
                        {
                            heightWidthValueInherit ? <button className="seeCodeButton" onClick={() => setHeightWidthValueInherit(!heightWidthValueInherit)}>hide output</button> : <button className="seeCodeButton" onClick={() => setHeightWidthValueInherit(!heightWidthValueInherit)}>output</button>
                        }
                    </div>
                    {
                        heightWidthValueInherit && <div>
                            <div className="codeRunDiv">
                                <div className={styles.heightAndWidthInherit_p}>
                                    <p className={styles.heightAndWidthInherit_c}>
                                        height: inherit;<br />
                                        width: inherit;
                                    </p>
                                </div>
                            </div>
                        </div>
                    }
                </section>
                
            </section>

            <section className="section">
                    <h3>max-width</h3>
                    <p>Note: If you for some reason use both the width property and the max-width property on the same element, and the value of the width property is larger than the max-width property; the max-width property will be used (and the width property will be ignored).</p>
                    <p>The problem with the &lt;div&gt; above occurs when the browser window is smaller than the width of the element (500px). The browser then adds a horizontal scrollbar to the page.</p>
                    <div className="codeDiv">
                        <code>
                            <span className='seclector'>max_width</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>max-width</span>: <span className='cssTextvalue'>400px</span>;<br />
                            &#125;<br /><br />
                        </code>
                        {
                            maxWidth ? <button className="seeCodeButton" onClick={() => setMaxWidth(!maxWidth)}>hide output</button> : <button className="seeCodeButton" onClick={() => setMaxWidth(!maxWidth)}>output</button>
                        }
                    </div>
                    {
                        maxWidth && <div>
                            <div className="codeRunDiv">
                                    <p className={styles.max_width}>
                                        max-width: 400px;<br />
                                        <small style={{color: '#84a7b3'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, neque.</small>
                                    </p>
                            </div>
                        </div>
                    }
                </section>
                <h4>Total element width = width + left padding + right padding + left border + right border + left margin + right margin</h4>
                <h4>Total element height = height + top padding + bottom padding + top border + bottom border + top margin + bottom margin</h4>
        </Layout>
    );
};

export default HeightAndWidth;