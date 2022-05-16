import React, { useState } from 'react';
import styles from './Tooltip.module.css';

const TooltipArrow = () => {
    const [arrow, setArrow] = useState(false);
    return (
        <section className="section">
            <h2>Tooltip Arrows</h2>
            <section className="section">
                <h3>right tooltip Arrow</h3>
                <div className="codeRunDiv" style={{textAlign: "center"}}>
                    <div className={`${styles.tooltipRight} ${styles.tooltipRightArrow}`}> Hover over me
                        <span className={`${styles.tooltiptextRight} ${styles.tooltiptextRightArrow}`} >tooltip text</span>
                    </div>

                    {
                        arrow ? <button className='seeCodeButton' onClick={() => setArrow(!arrow)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setArrow(!arrow)}>Output</button>
                    }
                </div>
                {
                    arrow && <div className="codeDiv">
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


                            <span className='seclector'>.tooltip .tooltiptext:after</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> content</span>: <span className='cssTextvalue'>" "</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> position</span>: <span className='cssTextvalue'>absolute</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> top</span>: <span className='cssTextvalue'>50%</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>right</span>: <span className='cssTextvalue'>100%</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>margin-top</span>: <span className='cssTextvalue'>-5px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>border-width</span>: <span className='cssTextvalue'>5px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>border-style</span>: <span className='cssTextvalue'>solid</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>border-color</span>: <span className='cssTextvalue'>transparent black transparent transparent</span>;<br />
                            &#125;<br /><br /><br />

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

export default TooltipArrow;