import React, { useState } from 'react';
import styles from './TextEffects.module.css';

const TextOverflow = () => {
    const [textOverflow, setTextOverflow] = useState(true);
    return (
        <section className="section">
            <section className="section">
                <h3>Text Overflow</h3>
                <div className="codeRunDiv">
                    <p className={styles.textOverflow_1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ullam dolorum voluptate dicta amet quaerat molestiae molestias ab id quam.</p>
                    <p className={styles.textOverflow_2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ullam dolorum voluptate dicta amet quaerat molestiae molestias ab id quam.</p>
                    <p className={styles.textOverflow_3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ullam dolorum voluptate dicta amet quaerat molestiae molestias ab id quam.</p>

                    {
                        textOverflow ? <button className='seeCodeButton' onClick={() => setTextOverflow(!textOverflow)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setTextOverflow(!textOverflow)}>Output</button>
                    }
                </div>
                {
                    textOverflow && <div className="codeDiv">
                        <code>
                            <span className='seclector'>textOverflow_1</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> white-space</span>: <span className='cssTextvalue'>nowrap</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> width</span>: <span className='cssTextvalue'>200px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> border</span>: <span className='cssTextvalue'>2px solid gray</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> overflow</span>: <span className='cssTextvalue'>hidden</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> text-overflow</span>: <span className='cssTextvalue'>clip</span>;<br />
                            &#125;<br /><br />


                            <span className='seclector'>textOverflow_2</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> height</span>: <span className='cssTextvalue'>120px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> width</span>: <span className='cssTextvalue'>200px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> border</span>: <span className='cssTextvalue'>2px solid gray</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> overflow</span>: <span className='cssTextvalue'>hidden</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> text-overflow</span>: <span className='cssTextvalue'>clip</span>;<br />
                            &#125;<br /><br />


                            <span className='seclector'>textOverflow_3</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> white-space</span>: <span className='cssTextvalue'>nowrap</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> width</span>: <span className='cssTextvalue'>200px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> border</span>: <span className='cssTextvalue'>2px solid gray</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> overflow</span>: <span className='cssTextvalue'>hidden</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> text-overflow</span>: <span className='cssTextvalue'>ellipsis</span>;<br />
                            &#125;<br /><br />
                        </code>

                    </div>
                }
            </section>

            <section className="section">
                <div className="codeRunDiv">
                    <p className={styles.textOverflow_4}>hover over me. hover over me.</p>
                    

                    {
                        textOverflow ? <button className='seeCodeButton' onClick={() => setTextOverflow(!textOverflow)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setTextOverflow(!textOverflow)}>Output</button>
                    }
                </div>
                {
                    textOverflow && <div className="codeDiv">
                        <code>
                            <span className='seclector'>textOverflow_4</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> white-space</span>: <span className='cssTextvalue'>nowrap</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> width</span>: <span className='cssTextvalue'>110px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> overflow</span>: <span className='cssTextvalue'>hidden</span>;<br />
                            &#125;<br /><br />


                            <span className='seclector'>textOverflow_4:hover</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> overflow</span>: <span className='cssTextvalue'>visible</span>;<br />
                            &#125;<br /><br />
                        </code>
                    </div>
                }
            </section>
        </section>
    );
};

export default TextOverflow;