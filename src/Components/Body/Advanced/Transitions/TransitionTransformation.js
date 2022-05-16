import React, { useState } from 'react';
import styles from './Transitions.module.css';

const TransitionTransformation = () => {
    const [open, setOpen] = useState(true);
    return (
        <div>
            <section className="section">
                <h3>Transition + Transformation</h3>
                <div className="codeRunDiv">
                    <div className={styles.TransitionTransformation_1}>Hover me</div>
                    <div className={styles.TransitionTransformation_2}> hover me</div>

                    {
                        open ? <button className='seeCodeButton' onClick={() => setOpen(!open)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setOpen(!open)}>Output</button>
                    }
                </div>
                {
                    open && <div className="codeDiv">
                        <code>
                            <span className='seclector'>.TransitionTransformation_1</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> width</span>: <span className='cssTextvalue'>150px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> height</span>: <span className='cssTextvalue'>150px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> background-color</span>: <span className='cssTextvalue'>green</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> transition</span>: <span className='cssTextvalue'>transform 2s</span>;<br />
                            &#125;<br /><br />

                            <span className='seclector'>.TransitionTransformation_1:hover</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> transform</span>: <span className='cssTextvalue'>rotate(180deg)</span>;<br />
                            &#125;<br />

                            <hr />

                            <span className='seclector'>.transitionTransformation_2</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> width</span>: <span className='cssTextvalue'>150px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> height</span>: <span className='cssTextvalue'>150px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> background-color</span>: <span className='cssTextvalue'>green</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> transition</span>: <span className='cssTextvalue'>width 2s, height 2s, transform 2s</span>;<br />
                            &#125;<br /><br />

                            <span className='seclector'>.TransitionTransformation_2:hover</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> width</span>: <span className='cssTextvalue'>300px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> height</span>: <span className='cssTextvalue'>300px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> transform</span>: <span className='cssTextvalue'>rotate(180deg)</span>;<br />
                            &#125;<br />
                        </code>
                    </div>
                }
            </section>
        </div>
    );
};

export default TransitionTransformation;