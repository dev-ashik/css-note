import React, { useState } from 'react';
import styles from './Shadow.module.css';
import cardImage from '../../../../images/weav.jpg';

const BoxShadow = () => {
    const [boxShadow, setBoxShadow] = useState(true);
    const [inset, setInset] = useState(true);
    return (
        <section className="section">
            <h2>Box-shadow</h2>

            <section className="section">
                <h3>harizontal and a vartical shadow.</h3>
                <div className="codeRunDiv ">
                    <div className='d-flex'>
                        <div className={styles.div_1}>a div element with box shadow.</div>
                        <div className={styles.div_2}>a div element with blue box shadow.</div>
                        <div className={styles.div_3}>a div element with 5px blur and blue box shadow effect.</div>
                        <div className={styles.div_4}>A &lt;div&gt; element with a blurred, lightblue box-shadow, with a spread radius of 12px</div>
                    </div>

                    {
                        boxShadow ? <button className='seeCodeButton' onClick={() => setBoxShadow(!boxShadow)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setBoxShadow(!boxShadow)}>Output</button>
                    }
                </div>
                {
                    boxShadow && <div className="codeDiv">
                        <code>
                            <span className='seclector'>div_1</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> box-shadow</span>: <span className='cssTextvalue'>10px 10px</span>;<br />
                            &#125;<br /><br />

                            <span className='seclector'>div_2</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> box-shadow</span>: <span className='cssTextvalue'>10px 10px blue</span>;<br />
                            &#125;<br /><br />

                            <span className='seclector'>div_3</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> box-shadow</span>: <span className='cssTextvalue'>10px 10px 5px blue</span>;<br />
                            &#125;<br /><br />

                            <span className='seclector'>div_4</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> box-shadow</span>: <span className='cssTextvalue'>10px 10px 5px 10px blure</span>;<br />
                            &nbsp;&nbsp; <span className='cssComment'>/* horizontal  (10px) and the vertical (2px), 5px blur effect, 10px radius and blue color. */</span><br />
                            &#125;<br /><br />
                        </code>

                    </div>
                }
            </section>

            <section className="section">
                <h3>inset parameter</h3>
                <div className="codeRunDiv ">
                    <div className='d-flex'>
                        <div className={styles.div_5}>a div element with box shadow.</div>
                    </div>

                    {
                        inset ? <button className='seeCodeButton' onClick={() => setInset(!inset)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setInset(!inset)}>Output</button>
                    }
                </div>
                {
                    inset && <div className="codeDiv">
                        <code>
                            <span className='seclector'>div_5</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> box-shadow</span>: <span className='cssTextvalue'>10px 10px 5px blure inset</span>;<br />
                            &#125;<br /><br />
                        </code>

                    </div>
                }
            </section>

            <section className="section">
                <h3>Multiple shadow</h3>
                <div className="codeRunDiv ">
                    <div className='d-flex'>
                        <div className={styles.div_6}>a div element with multiple box shadow.</div>
                        <div className={styles.div_7}>a div element with multiple box shadow.</div>
                        <div className={styles.div_8}>a div element with multiple box shadow. inset</div>
                    </div>

                    {
                        inset ? <button className='seeCodeButton' onClick={() => setInset(!inset)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setInset(!inset)}>Output</button>
                    }
                </div>
                {
                    inset && <div className="codeDiv">
                        <code>
                            <span className='seclector'>div_6</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> box-shadow</span>: <span className='cssTextvalue'>5px 5px blue, 10px 10px red, 15px 15px green</span>;<br />
                            &#125;<br /><br />

                            <span className='seclector'>div_7</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> box-shadow</span>: <span className='cssTextvalue'>5px 5px 5px blue, 10px 10px 5px red, 15px 15px 5px green</span>;<br />
                            &#125;<br /><br />

                            <span className='seclector'>div_8</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> box-shadow</span>: <span className='cssTextvalue'>5px 5px blue inset, 10px 10px red inset, 15px 15px green inset</span>;<br />
                            &#125;<br /><br />
                        </code>

                    </div>
                }
            </section>

            <section className="section">
                <h3>card shadow</h3>
                <div className="codeRunDiv ">
                    <div className='d-flex'>
                        <div className={styles.card}>
                            <img src={cardImage} alt="card image" />
                            <div className={styles.cardBody}>
                                <p>card body</p>
                            </div>
                        </div>
                    </div>

                    {
                        inset ? <button className='seeCodeButton' onClick={() => setInset(!inset)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setInset(!inset)}>Output</button>
                    }
                </div>
                {
                    inset && <div className="codeDiv">
                        <code>
                            <span className='seclector'>.card</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> height</span>: <span className='cssTextvalue'>250px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> width</span>: <span className='cssTextvalue'>200px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> box-shadow</span>: <span className='cssTextvalue'>0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)</span>;<br />
                            &#125;<br /><br />

                            <span className='seclector'>.card img</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> height</span>: <span className='cssTextvalue'>70%</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> width</span>: <span className='cssTextvalue'>100%</span>;<br />
                            &#125;<br /><br />

                            <span className='seclector'>.cardBody</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> text-align</span>: <span className='cssTextvalue'>center</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> padding</span>: <span className='cssTextvalue'>20px</span>;<br />
                            &#125;<br /><br />
                        </code>

                    </div>
                }
            </section>
        </section>
    );
};

export default BoxShadow;