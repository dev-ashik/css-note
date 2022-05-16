import React, { useState } from 'react';
import styles from './Transforms2D.module.css';

const Rotate = () => {
    const [rotate, setRotate] = useState(true);
    return (
        <div>
            <section className="section">
                <h3>Rotate method</h3>
                <div className="codeRunDiv">
                    <div className={styles.rotate_1}>rotate</div>
                    <div className={styles.rotate_2}>rotate</div>

                    {
                        rotate ? <button className='seeCodeButton' onClick={() => setRotate(!rotate)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setRotate(!rotate)}>Output</button>
                    }
                </div>
                {
                    rotate && <div className="codeDiv">
                        <code>
                            <span className='seclector'>.rotate_1</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> width</span>: <span className='cssTextvalue'>150px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> height</span>: <span className='cssTextvalue'>150px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> background-color</span>: <span className='cssTextvalue'>green</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> transform</span>: <span className='cssTextvalue'>rotate(30deg)</span>;<br />
                            &#125;<br /><br />

                            <span className='seclector'>.rotate_2</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> width</span>: <span className='cssTextvalue'>150px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> height</span>: <span className='cssTextvalue'>150px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> background-color</span>: <span className='cssTextvalue'>green</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> transform</span>: <span className='cssTextvalue'>rotate(-30deg)</span>;<br />
                            &#125;<br /><br />
                            
                        </code>
                    </div>
                }
            </section>
        </div>
    );
};

export default Rotate;