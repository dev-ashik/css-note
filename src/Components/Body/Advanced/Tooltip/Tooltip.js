import React, { useState } from 'react';
import Layout from '../../../Layout/Layout';
import styles from './Tooltip.module.css';
import TooltipArrow from './TooltipArrow';
import TooltipPositioning from './TooltipPositioning';

const Tooltip = () => {
    const [open, setOpen] = useState(true)
    return (
        <Layout>
            <div className='name'>
                <h2>Tooltip</h2>
            </div>
            <section className="section">
                {/* <h3>Short hand</h3> */}
                <div className="codeRunDiv">
                    <div className={styles.tooltip}> Hover over me
                        <span className={styles.tooltiptext} >tooltip text</span>
                    </div>

                    {
                        open ? <button className='seeCodeButton' onClick={() => setOpen(!open)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setOpen(!open)}>Output</button>
                    }
                </div>
                {
                    open && <div className="codeDiv">
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
            <TooltipPositioning/>
            <TooltipArrow/>
        </Layout>
    );
};

export default Tooltip;