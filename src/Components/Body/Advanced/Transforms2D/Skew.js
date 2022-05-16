import React, { useState } from 'react';
import styles from './Transforms2D.module.css';

const Skew = () => {
    const [skew, setSkew] = useState(true);
    return (
        <section className='section'>
            <section className="section">
                <h3>skew() method</h3>
                <div className="codeRunDiv">
                    <div className={styles.skew_1}>this is normal.</div>
                    <div className={styles.skew_2}>this is div with skew().</div>

                    {
                        skew ? <button className='seeCodeButton' onClick={() => setSkew(!skew)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setSkew(!skew)}>Output</button>
                    }
                </div>
                {
                    skew && <div className="codeDiv">
                        <code>
                            <span className='seclector'>.skew_1</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> width</span>: <span className='cssTextvalue'>150px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> height</span>: <span className='cssTextvalue'>150px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> background-color</span>: <span className='cssTextvalue'>green</span>;<br />
                            &#125;<br /><br />

                            <span className='seclector'>.skew_2</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> width</span>: <span className='cssTextvalue'>150px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> height</span>: <span className='cssTextvalue'>150px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> background-color</span>: <span className='cssTextvalue'>green</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> transform</span>: <span className='cssTextvalue'>skew(20deg, 10deg)</span>;<br />
                            &#125;<br /><br />

                            
                        </code>
                    </div>
                }
            </section>

            <section className="section">
                <h3>skewX(deg) method</h3>
                <div className="codeRunDiv">
                    <div className={styles.skew_3}>this is normal.</div>
                    <div className={styles.skew_4}>this is div with skewX().</div>

                    {
                        skew ? <button className='seeCodeButton' onClick={() => setSkew(!skew)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setSkew(!skew)}>Output</button>
                    }
                </div>
                {
                    skew && <div className="codeDiv">
                        <code>
                            <span className='seclector'>.skew_1</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> width</span>: <span className='cssTextvalue'>150px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> height</span>: <span className='cssTextvalue'>150px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> background-color</span>: <span className='cssTextvalue'>green</span>;<br />
                            &#125;<br /><br />

                            <span className='seclector'>.skew_2</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> width</span>: <span className='cssTextvalue'>150px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> height</span>: <span className='cssTextvalue'>150px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> background-color</span>: <span className='cssTextvalue'>green</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> transform</span>: <span className='cssTextvalue'>skewX(20deg)</span>;<br />
                            &#125;<br /><br />

                            
                        </code>
                    </div>
                }
            </section>

            <section className="section">
                <h3>skewY(deg) method</h3>
                <div className="codeRunDiv">
                    <div className={styles.skew_5}>this is normal.</div>
                    <div className={styles.skew_6}>this is div with skewY().</div>

                    {
                        skew ? <button className='seeCodeButton' onClick={() => setSkew(!skew)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setSkew(!skew)}>Output</button>
                    }
                </div>
                {
                    skew && <div className="codeDiv">
                        <code>
                            <span className='seclector'>.skew_1</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> width</span>: <span className='cssTextvalue'>150px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> height</span>: <span className='cssTextvalue'>150px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> background-color</span>: <span className='cssTextvalue'>green</span>;<br />
                            &#125;<br /><br />

                            <span className='seclector'>.skew_2</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> width</span>: <span className='cssTextvalue'>150px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> height</span>: <span className='cssTextvalue'>150px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> background-color</span>: <span className='cssTextvalue'>green</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> transform</span>: <span className='cssTextvalue'>skewY(20deg)</span>;<br />
                            &#125;<br /><br />

                            
                        </code>
                    </div>
                }
            </section>
        </section>
    );
};

export default Skew;