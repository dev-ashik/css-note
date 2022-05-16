import React, { useState } from 'react';
import styles from './Transforms2D.module.css';

const TranslateMethod = () => {
    const [translate, setTranslate] = useState(true);
    return (
        <section className="section">
            <section className="section">
                <h3>translate</h3>
                <div className="codeRunDiv">
                    <p className={styles.translate_1}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                    {
                        translate ? <button className='seeCodeButton' onClick={() => setTranslate(!translate)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setTranslate(!translate)}>Output</button>
                    }
                </div>
                {
                    translate && <div className="codeDiv">
                        <code>
                            <span className='seclector'>.translate_1</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> width</span>: <span className='cssTextvalue'>200px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> height</span>: <span className='cssTextvalue'>200px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> background-color</span>: <span className='cssTextvalue'>green</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> border</span>: <span className='cssTextvalue'>medium solid gray</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> transform</span>: <span className='cssTextvalue'>translate(10px,10px)</span>;<br />
                            &#125;<br /><br />
                            
                        </code>

                    </div>
                }
            </section>
        </section>
    );
};

export default TranslateMethod;