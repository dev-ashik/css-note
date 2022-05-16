import React, { useState } from 'react';
import styles from './Transforms2D.module.css';

const Scale = () => {
    const [scale, setScale] = useState(true);
    return (
        <section className="section">
            <section className="section">
                <h3>scale(width, height) method</h3>
                <div className="codeRunDiv">
                    <div className={styles.scale_1}>hover me</div>
                    <div className={styles.scale_2}>hover me</div>

                    {
                        scale ? <button className='seeCodeButton' onClick={() => setScale(!scale)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setScale(!scale)}>Output</button>
                    }
                </div>
                {
                    scale && <div className="codeDiv">
                        <code>
                            <span className='seclector'>.scale_1</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> width</span>: <span className='cssTextvalue'>150px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> height</span>: <span className='cssTextvalue'>150px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> background-color</span>: <span className='cssTextvalue'>green</span>;<br />
                            &#125;<br /><br />

                            <span className='seclector'>.scale_1:hover</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> transform</span>: <span className='cssTextvalue'>scale(2, 2)</span>;<br />
                            &#125;<br /><br />

                            <hr />

                            <span className='seclector'>.scale_2</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> width</span>: <span className='cssTextvalue'>150px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> height</span>: <span className='cssTextvalue'>150px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> background-color</span>: <span className='cssTextvalue'>green</span>;<br />
                            &#125;<br /><br />

                            <span className='seclector'>.scale_2:hover</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> transform</span>: <span className='cssTextvalue'>scale(0.5, 0.5)</span>;<br />
                            &#125;<br /><br />
                            
                        </code>
                    </div>
                }
            </section>

            <section className="section">
                <h3>scaleX(width) method, scaleY(Height) method</h3>
                <div className="codeRunDiv">
                    <div className={styles.scale_3}>hover me</div>
                    <div className={styles.scale_4}>hover me</div>

                    {
                        scale ? <button className='seeCodeButton' onClick={() => setScale(!scale)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setScale(!scale)}>Output</button>
                    }
                </div>
                {
                    scale && <div className="codeDiv">
                        <code>
                            <span className='seclector'>.scale_3</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> width</span>: <span className='cssTextvalue'>150px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> height</span>: <span className='cssTextvalue'>150px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> background-color</span>: <span className='cssTextvalue'>green</span>;<br />
                            &#125;<br /><br />

                            <span className='seclector'>.scale_3:hover</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> transform</span>: <span className='cssTextvalue'>scaleX(2)</span>;<br />
                            &#125;<br /><br />

                            <hr />


                            <span className='seclector'>.scale_4</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> width</span>: <span className='cssTextvalue'>150px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> height</span>: <span className='cssTextvalue'>150px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> background-color</span>: <span className='cssTextvalue'>green</span>;<br />
                            &#125;<br /><br />

                            <span className='seclector'>.scale_4:hover</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> transform</span>: <span className='cssTextvalue'>scaleY(2)</span>;<br />
                            &#125;<br /><br />
                        </code>
                    </div>
                }
            </section>
        </section>
    );
};

export default Scale;