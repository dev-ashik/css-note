import React, { useState } from 'react';
import styles from './Gradients.module.css';

const RadialGradients = () => {
    const [gradientTopToBottom, setGradientTopToBottom] = useState(true);
    return (
        <section className="section">
            <h3>Radial Gradients</h3>
            <h4>Syntex</h4>
            <p>background-image: radial-gradient(shape size at position, start-color, ..., last-color);</p>
            <section className="section">
                
                <div className="codeRunDiv">
                    <div className={styles.div8}></div>
                    {
                        gradientTopToBottom ? <button className='seeCodeButton' onClick={() => setGradientTopToBottom(!gradientTopToBottom)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setGradientTopToBottom(!gradientTopToBottom)}>Output</button>
                    }
                </div>
                {
                    gradientTopToBottom && <div className="codeDiv">
                        <code>
                            <span className='seclector'>div</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> background-image</span>: <span className='cssTextvalue'>radial-gradient(red, yellow, green)</span>;<br />
                            &#125;
                        </code>

                    </div>
                }
            </section>

            <section className="section">
                <p>Radial Gradient - Differently Spaced Color Stops</p>
                <div className="codeRunDiv">
                    <div className={styles.div9}></div>
                    {
                        gradientTopToBottom ? <button className='seeCodeButton' onClick={() => setGradientTopToBottom(!gradientTopToBottom)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setGradientTopToBottom(!gradientTopToBottom)}>Output</button>
                    }
                </div>
                {
                    gradientTopToBottom && <div className="codeDiv">
                        <code>
                            <span className='seclector'>div</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> background-image</span>: <span className='cssTextvalue'>radial-gradient(red, yellow, green)</span>;<br />
                            &#125;
                        </code>

                    </div>
                }
            </section>
        </section>
    );
};

export default RadialGradients;