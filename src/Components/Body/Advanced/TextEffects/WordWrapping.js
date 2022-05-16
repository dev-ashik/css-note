import React, { useState } from 'react';
import styles from './TextEffects.module.css';

const WordWrapping = () => {
    const [wordwrapping, setWordWraping] = useState(true);
    return (
        <div>
            <section className="section">
                <h3>Word Wrapping</h3>
                <div className="codeRunDiv">
                    <p className={styles.wordWrapping_1}>Lorem ipsum dolor sitametconsecteturadipisicingelitVeniam ullam dolorum voluptate dicta amet quaerat molestiae molestias ab id quam.</p>
                    <p className={styles.wordWrapping_2}>Lorem ipsum dolor sitametconsecteturadipisicingelitVeniam ullam dolorum voluptate dicta amet quaerat molestiae molestias ab id quam.</p>

                    {
                        wordwrapping ? <button className='seeCodeButton' onClick={() => setWordWraping(!wordwrapping)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setWordWraping(!wordwrapping)}>Output</button>
                    }
                </div>
                {
                    wordwrapping && <div className="codeDiv">
                        <code>
                            <span className='seclector'>wordWrapping_1</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> width</span>: <span className='cssTextvalue'>11em</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> border</span>: <span className='cssTextvalue'>2px solid gray</span>;<br />
                            &#125;<br /><br />

                            <span className='seclector'>wordWrapping_2</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> width</span>: <span className='cssTextvalue'>11em</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> border</span>: <span className='cssTextvalue'>2px solid gray</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> word-wrap</span>: <span className='cssTextvalue'>break-word</span>;<br />
                            &#125;<br /><br />


                        </code>

                    </div>
                }
            </section>

            <section className="section">
                <h3>Word Breaking</h3>
                <div className="codeRunDiv">
                    <p className={styles.wordBreaking_1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit odio eaque quis suscipit nesciunt illum itaque id quas ut sunt.</p>

                    <p className={styles.wordBreaking_2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit odio eaque quis suscipit nesciunt illum itaque id quas ut sunt.</p>

                    {
                        wordwrapping ? <button className='seeCodeButton' onClick={() => setWordWraping(!wordwrapping)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setWordWraping(!wordwrapping)}>Output</button>
                    }
                </div>
                {
                    wordwrapping && <div className="codeDiv">
                        <code>
                            <span className='seclector'>wordBreaking_1</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> width</span>: <span className='cssTextvalue'>140px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> border</span>: <span className='cssTextvalue'>2px solid gray</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> word-break</span>: <span className='cssTextvalue'>keep-all</span>;<br />
                            &#125;<br /><br />

                            <span className='seclector'>wordBreaking_2</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> width</span>: <span className='cssTextvalue'>140px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> border</span>: <span className='cssTextvalue'>2px solid gray</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> word-break</span>: <span className='cssTextvalue'>break-all</span>;<br />
                            &#125;<br /><br />
                        </code>

                    </div>
                }
            </section>
        </div>
    );
};

export default WordWrapping;