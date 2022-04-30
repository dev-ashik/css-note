import React, { useState } from 'react';
import styles from './Gradients.module.css';

const LinearGradients = () => {
    const [gradientTopToBottom, setGradientTopToBottom] = useState(true);
    return (
        <div className="section">
            <h4>Syntax</h4>
            <p>background-image: linear-gradient(direction, color-stop1, color-stop2, ...);</p>
            <section className="section">
                <p>Direction - Top to Bottom (this is default)</p>
                <div className="codeRunDiv">
                    <div className={styles.div1}></div>
                    {
                        gradientTopToBottom ? <button className='seeCodeButton' onClick={() => setGradientTopToBottom(!gradientTopToBottom)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setGradientTopToBottom(!gradientTopToBottom)}>Output</button>
                    }
                </div>
                {
                    gradientTopToBottom && <div className="codeDiv">
                        <code>
                            <span className='seclector'>div</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> background-image</span>: <span className='cssTextvalue'>linear-gradient(red, yellow)</span>;<br />
                            &#125;
                        </code>

                    </div>
                }
            </section>

            <section className="section">
                <p>Direction - left to right</p>
                <div className="codeRunDiv">
                    <div className={styles.div2}></div>
                    {
                        gradientTopToBottom ? <button className='seeCodeButton' onClick={() => setGradientTopToBottom(!gradientTopToBottom)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setGradientTopToBottom(!gradientTopToBottom)}>Output</button>
                    }
                </div>
                {
                    gradientTopToBottom && <div className="codeDiv">
                        <code>
                            <span className='seclector'>div</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>background-image</span>: <span className='cssTextvalue'>linear-gradient(to right, red, yellow)</span>;<br />
                            &#125;
                        </code>

                    </div>
                }
            </section>


            <section className="section">
                <p>Direction - Diagonal</p>
                <div className="codeRunDiv">
                    <div className={styles.div3}></div>
                    {
                        gradientTopToBottom ? <button className='seeCodeButton' onClick={() => setGradientTopToBottom(!gradientTopToBottom)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setGradientTopToBottom(!gradientTopToBottom)}>Output</button>
                    }
                </div>
                {
                    gradientTopToBottom && <div className="codeDiv">
                        <code>
                            <span className='seclector'>div</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>background-image</span>: <span className='cssTextvalue'>linear-gradient(to right bottom, red, yellow)</span>;<br />
                            &#125;
                        </code>

                    </div>
                }
            </section>

            <section className="section">
                <p>Direction - DEG</p>
                <div className="codeRunDiv">
                    <div className={styles.div4}></div>
                    {
                        gradientTopToBottom ? <button className='seeCodeButton' onClick={() => setGradientTopToBottom(!gradientTopToBottom)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setGradientTopToBottom(!gradientTopToBottom)}>Output</button>
                    }
                </div>
                {
                    gradientTopToBottom && <div className="codeDiv">
                        <code>
                            <span className='seclector'>div</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>background-image</span>: <span className='cssTextvalue'>linear-gradient(150deg, red, yellow)</span>;<br />
                            &#125;
                        </code>

                    </div>
                }
            </section>

            <section className="section">
                <p>Direction - Multiple color</p>
                <div className="codeRunDiv">
                    <div className={styles.div5}></div>
                    {
                        gradientTopToBottom ? <button className='seeCodeButton' onClick={() => setGradientTopToBottom(!gradientTopToBottom)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setGradientTopToBottom(!gradientTopToBottom)}>Output</button>
                    }
                </div>
                {
                    gradientTopToBottom && <div className="codeDiv">
                        <code>
                            <span className='seclector'>div</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>background-image</span>: <span className='cssTextvalue'>linear-gradient(120deg, red, yellow, green)</span>;<br />
                            &#125;
                        </code>

                    </div>
                }
            </section>

            <section className="section">
                <p>Direction - Rainbo Background</p>
                <div className="codeRunDiv">
                    <div className={styles.div6}>Rainbow Background</div>
                    {
                        gradientTopToBottom ? <button className='seeCodeButton' onClick={() => setGradientTopToBottom(!gradientTopToBottom)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setGradientTopToBottom(!gradientTopToBottom)}>Output</button>
                    }
                </div>
                {
                    gradientTopToBottom && <div className="codeDiv">
                        <code>
                            <span className='seclector'>div</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>background-image</span>: <span className='cssTextvalue'>linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)</span>;<br />
                            &#125;
                        </code>
                    </div>
                }
            </section>

            <section className="section">
                <p>Repeating a linear-gradient</p>
                <div className="codeRunDiv">
                    <div className={styles.div7}></div>
                    {
                        gradientTopToBottom ? <button className='seeCodeButton' onClick={() => setGradientTopToBottom(!gradientTopToBottom)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setGradientTopToBottom(!gradientTopToBottom)}>Output</button>
                    }
                </div>
                {
                    gradientTopToBottom && <div className="codeDiv">
                        <code>
                            <span className='seclector'>div</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>background-image</span>: <span className='cssTextvalue'>repeating-linear-gradient(red, yellow 10%, green 20%)</span>;<br />
                            &#125;
                        </code>
                    </div>
                }
            </section>



        </div>
    );
};

export default LinearGradients;