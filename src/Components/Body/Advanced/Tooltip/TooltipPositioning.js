import React, { useState } from 'react';
import styles from './Tooltip.module.css';

const TooltipPositioning = () => {
    const [right, setRight] = useState(false);
    const [left, setLeft] = useState(false);
    const [top, setTop] = useState(false);
    const [bottom, setBottom] = useState(false);
    return (
        <section className="section">
            <h2>Tooltip Position</h2>
            <section className="section">
                <h3>Right tooltip</h3>
                <div className="codeRunDiv" style={{textAlign: "center"}}>
                    <div className={styles.tooltipRight}> Hover over me
                        <span className={styles.tooltiptextRight} >tooltip text</span>
                    </div>

                    {
                        right ? <button className='seeCodeButton' onClick={() => setRight(!right)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setRight(!right)}>Output</button>
                    }
                </div>
                {
                    right && <div className="codeDiv">
                        <code>
                            <span className='seclector'>.tooltip</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> position</span>: <span className='cssTextvalue'>relative</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> display</span>: <span className='cssTextvalue'>inline-block</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> border-bottom</span>: <span className='cssTextvalue'>1px dotted black</span>;<br />
                            &#125;<br /><br />

                            <span className='seclector'>.tooltip .tooltiptext</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> visibility</span>: <span className='cssTextvalue'>hidden</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> width</span>: <span className='cssTextvalue'>120px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> background-color</span>: <span className='cssTextvalue'>black</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>color</span>: <span className='cssTextvalue'>#fff</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>text-align</span>: <span className='cssTextvalue'>center</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>border-radius</span>: <span className='cssTextvalue'>6px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>padding</span>: <span className='cssTextvalue'>5px 0</span>;<br /><br />

                            &nbsp; <span className='cssComment'>/* Position the tooltip */</span><br />
                            &nbsp;&nbsp;<span className='cssName'>position</span>: <span className='cssTextvalue'>absolute</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>z-index</span>: <span className='cssTextvalue'>1</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>left</span>: <span className='cssTextvalue'>105%</span>;<span className='cssComment'>/* Position right */</span><br />
                            &#125;<br /><br />

                            <span className='seclector'>.tooltip:hover .tooltiptext</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> visibility</span>: <span className='cssTextvalue'>visible</span>;<br />
                            &#125;<br /><br /><br />


                            &lt;div class='tooltip' &gt; Hover over me <br />
                            &nbsp; &nbsp; &lt;span class='tooltiptext' &gt; Tooltip text &lt;/span&gt;<br />
                            &lt;/div&gt;


                        </code>
                    </div>
                }
            </section>

            <section className="section">
                <h3>Left tooltip</h3>
                <div className="codeRunDiv" style={{textAlign: "center"}}>
                    <div className={styles.tooltipLeft}> Hover over me
                        <span className={styles.tooltiptextLeft} >tooltip text</span>
                    </div>

                    {
                        left ? <button className='seeCodeButton' onClick={() => setLeft(!left)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setLeft(!left)}>Output</button>
                    }
                </div>
                {
                    left && <div className="codeDiv">
                        <code>
                            <span className='seclector'>.tooltip</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> position</span>: <span className='cssTextvalue'>relative</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> display</span>: <span className='cssTextvalue'>inline-block</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> border-bottom</span>: <span className='cssTextvalue'>1px dotted black</span>;<br />
                            &#125;<br /><br />

                            <span className='seclector'>.tooltip .tooltiptext</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> visibility</span>: <span className='cssTextvalue'>hidden</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> width</span>: <span className='cssTextvalue'>120px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> background-color</span>: <span className='cssTextvalue'>black</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>color</span>: <span className='cssTextvalue'>#fff</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>text-align</span>: <span className='cssTextvalue'>center</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>border-radius</span>: <span className='cssTextvalue'>6px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>padding</span>: <span className='cssTextvalue'>5px 0</span>;<br /><br />

                            &nbsp; <span className='cssComment'>/* Position the tooltip */</span><br />
                            &nbsp;&nbsp;<span className='cssName'>position</span>: <span className='cssTextvalue'>absolute</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>z-index</span>: <span className='cssTextvalue'>1</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>right</span>: <span className='cssTextvalue'>105%</span>;<span className='cssComment'>/* Position left */</span><br />
                            &#125;<br /><br />

                            <span className='seclector'>.tooltip:hover .tooltiptext</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> visibility</span>: <span className='cssTextvalue'>visible</span>;<br />
                            &#125;<br /><br /><br />


                            &lt;div class='tooltip' &gt; Hover over me <br />
                            &nbsp; &nbsp; &lt;span class='tooltiptext' &gt; Tooltip text &lt;/span&gt;<br />
                            &lt;/div&gt;


                        </code>
                    </div>
                }
            </section>


            <section className="section">
                <h3>Top tooltip</h3>
                <div className="codeRunDiv" style={{textAlign: "center"}}>
                    <div className={styles.tooltipTop}> Hover over me
                        <span className={styles.tooltiptextTop} >tooltip text</span>
                    </div>

                    {
                        top ? <button className='seeCodeButton' onClick={() => setTop(!top)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setTop(!top)}>Output</button>
                    }
                </div>
                {
                    top && <div className="codeDiv">
                        <code>
                            <span className='seclector'>.tooltip</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> position</span>: <span className='cssTextvalue'>relative</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> display</span>: <span className='cssTextvalue'>inline-block</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> border-bottom</span>: <span className='cssTextvalue'>1px dotted black</span>;<br />
                            &#125;<br /><br />

                            <span className='seclector'>.tooltip .tooltiptext</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> visibility</span>: <span className='cssTextvalue'>hidden</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> width</span>: <span className='cssTextvalue'>120px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> background-color</span>: <span className='cssTextvalue'>black</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>color</span>: <span className='cssTextvalue'>#fff</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>text-align</span>: <span className='cssTextvalue'>center</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>border-radius</span>: <span className='cssTextvalue'>6px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>padding</span>: <span className='cssTextvalue'>5px 0</span>;<br /><br />

                            &nbsp; <span className='cssComment'>/* Position the tooltip */</span><br />
                            &nbsp;&nbsp;<span className='cssName'>position</span>: <span className='cssTextvalue'>absolute</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>z-index</span>: <span className='cssTextvalue'>1</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>bottom</span>: <span className='cssTextvalue'>100%</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>left</span>: <span className='cssTextvalue'>50%</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>margin-left</span>: <span className='cssTextvalue'>-60px</span>;<span className='cssComment'>/* Use half of the width (120/2 = 60), to center the tooltip */</span><br />
                            &#125;<br /><br />

                            <span className='seclector'>.tooltip:hover .tooltiptext</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> visibility</span>: <span className='cssTextvalue'>visible</span>;<br />
                            &#125;<br /><br /><br />


                            &lt;div class='tooltip' &gt; Hover over me <br />
                            &nbsp; &nbsp; &lt;span class='tooltiptext' &gt; Tooltip text &lt;/span&gt;<br />
                            &lt;/div&gt;


                        </code>
                    </div>
                }
            </section>


            <section className="section">
                <h3>Bottom tooltip</h3>
                <div className="codeRunDiv" style={{textAlign: "center"}}>
                    <div className={styles.tooltipBottom}> Hover over me
                        <span className={styles.tooltiptextBottom} >tooltip text</span>
                    </div>

                    {
                        bottom ? <button className='seeCodeButton' onClick={() => setBottom(!bottom)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setBottom(!bottom)}>Output</button>
                    }
                </div>
                {
                    bottom && <div className="codeDiv">
                        <code>
                            <span className='seclector'>.tooltip</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> position</span>: <span className='cssTextvalue'>relative</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> display</span>: <span className='cssTextvalue'>inline-block</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> border-bottom</span>: <span className='cssTextvalue'>1px dotted black</span>;<br />
                            &#125;<br /><br />

                            <span className='seclector'>.tooltip .tooltiptext</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> visibility</span>: <span className='cssTextvalue'>hidden</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> width</span>: <span className='cssTextvalue'>120px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> background-color</span>: <span className='cssTextvalue'>black</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>color</span>: <span className='cssTextvalue'>#fff</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>text-align</span>: <span className='cssTextvalue'>center</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>border-radius</span>: <span className='cssTextvalue'>6px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>padding</span>: <span className='cssTextvalue'>5px 0</span>;<br /><br />

                            &nbsp; <span className='cssComment'>/* Position the tooltip */</span><br />
                            &nbsp;&nbsp;<span className='cssName'>position</span>: <span className='cssTextvalue'>absolute</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>z-index</span>: <span className='cssTextvalue'>1</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>top</span>: <span className='cssTextvalue'>100%</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>left</span>: <span className='cssTextvalue'>50%</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>margin-left</span>: <span className='cssTextvalue'>-60px</span>;<span className='cssComment'>/* Use half of the width (120/2 = 60), to center the tooltip */</span><br />
                            &#125;<br /><br />

                            <span className='seclector'>.tooltip:hover .tooltiptext</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> visibility</span>: <span className='cssTextvalue'>visible</span>;<br />
                            &#125;<br /><br /><br />


                            &lt;div class='tooltip' &gt; Hover over me <br />
                            &nbsp; &nbsp; &lt;span class='tooltiptext' &gt; Tooltip text &lt;/span&gt;<br />
                            &lt;/div&gt;


                        </code>
                    </div>
                }
            </section>
        </section>
    );
};

export default TooltipPositioning;