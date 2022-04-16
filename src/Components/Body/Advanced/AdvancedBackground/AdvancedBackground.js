import React, { useState } from 'react';
import Layout from '../../../Layout/Layout';
import styles from './AdvancedBackground.module.css';

const AdvancedBackground = () => {
    const [multipleBackgrund, setMultipleBackgrund] = useState(true)
    return (
        <Layout>
            <div className='name'>
                <h2>Background</h2>
            </div>
            <section className="section">
                    <h2 className='sectionTitle'>Background Image</h2>
                    <p>By default, the background-image property repeats an image both horizontally and vertically.</p>

                    <div className="codeRunDiv">
                        <div className={styles.backgroundImageRepeat} style={{minHeight: '90px'}}>
                            background image
                        </div>


                        {
                            multipleBackgrund ? <button className='seeCodeButton' onClick={() => setMultipleBackgrund(!multipleBackgrund)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setMultipleBackgrund(!multipleBackgrund)}>Output</button>
                        }
                    </div>
                    
                    {
                        multipleBackgrund && <div className="codeDiv">
                            <code>
                                <span className='seclector'>div</span> &#123; <br />
                                    &nbsp;&nbsp;<span className='cssName'>background-image</span>: <span className='cssTextvalue'>url("bg.png")</span>;<br />
                                &#125;
                            </code>
                        </div>

                    }    
                </section>
        </Layout>
    );
};

export default AdvancedBackground;