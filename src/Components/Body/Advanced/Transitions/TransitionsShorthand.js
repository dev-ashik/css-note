import React, { useState } from 'react';
import styles from './Transitions.module.css';

const TransitionsShorthand = () => {
    const [open, setOpen] = useState(true);
    return (
        <div>
            <section className="section">
                <h3>Short hand</h3>
                <div className="codeRunDiv">
                    <div className={styles.transitionShorhand_1}>Hover me</div>

                    {
                        open ? <button className='seeCodeButton' onClick={() => setOpen(!open)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setOpen(!open)}>Output</button>
                    }
                </div>
                {
                    open && <div className="codeDiv">
                        <code>
                            <span className='seclector'>.transitionShorhand_1</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> width</span>: <span className='cssTextvalue'>150px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> height</span>: <span className='cssTextvalue'>150px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> background-color</span>: <span className='cssTextvalue'>green</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> transition</span>: <span className='cssTextvalue'>width 2s linear 1s</span>;<br />
                            &#125;<br /><br />

                            <span className='seclector'>.transitionShorhand_1:hover</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>  width</span>: <span className='cssTextvalue'>200px</span>;<br />
                            &#125;<br />
                        </code>
                    </div>
                }
            </section>
        </div>
    );
};

export default TransitionsShorthand;