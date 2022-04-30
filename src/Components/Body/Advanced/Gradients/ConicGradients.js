import React, { useState } from 'react';
import styles from './Gradients.module.css';

const ConicGradients = () => {
    const [gradientTopToBottom, setGradientTopToBottom] = useState(true);
    return (
        <section className="section">
            <h3>Conic Gradients</h3>
            <h4>Syntex</h4>
            <p>background-image: conic-gradient([from angle] [at position,] color [degree], color [degree], ...);</p>
            <section className="section">
                
                <div className="codeRunDiv">
                    <div className={styles.div10}></div>
                    {
                        gradientTopToBottom ? <button className='seeCodeButton' onClick={() => setGradientTopToBottom(!gradientTopToBottom)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setGradientTopToBottom(!gradientTopToBottom)}>Output</button>
                    }
                </div>
                {
                    gradientTopToBottom && <div className="codeDiv">
                        <code>
                            <span className='seclector'>div</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> background-image</span>: <span className='cssTextvalue'>background-image: conic-gradient(red, yellow, green)</span>;<br />
                            &#125;
                        </code>

                    </div>
                }
            </section>

            <section className="section">
                <div className="codeRunDiv">
                    <div className={styles.div11}></div>
                    {
                        gradientTopToBottom ? <button className='seeCodeButton' onClick={() => setGradientTopToBottom(!gradientTopToBottom)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setGradientTopToBottom(!gradientTopToBottom)}>Output</button>
                    }
                </div>
                {
                    gradientTopToBottom && <div className="codeDiv">
                        <code>
                            <span className='seclector'>div</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> background-image</span>: <span className='cssTextvalue'>conic-gradient(red 45deg, yellow 90deg, green 210deg)</span>;<br />
                            &#125;
                        </code>
                    </div>
                }
            </section>
        </section>
    );
};

export default ConicGradients;