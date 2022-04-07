import React, { useState } from 'react';
import Layout from '../../Layout/Layout';
import styles from './ImageSprites.module.css';
import stars from '../../../images/stars.png';
import transparent from '../../../images/transparent_image.png';
import './Styles.css';

const ImageSprites = () => {
    const [first, setFirst] = useState(false);
    return (
        <Layout>
            <div className='name'>
                <h2>Image Sprites</h2>
            </div>
            <section className="section">
                <div className="codeRunDiv">
                    <div>
                        <p>full image</p>
                        <img src={stars} alt="stars" height='100' width='300'/>
                    </div>
                    <div className={styles.floatClear}>
                        <div className={styles.imageDiv}>
                            <p>yellow star</p>
                            <img src={transparent} alt="yello star" id={styles.yellowStar} height='1' width='1'/>
                        </div>
                        
                        <div className={styles.imageDiv}>
                            <p>blue star</p>
                            <img src={transparent} alt="blue star" id={styles.blueStar} height='1' width='1'/>
                        </div>
                        
                        <div className={styles.imageDiv}>
                            <p>gray star</p>
                            <img src={transparent} alt="blue star" id={styles.grayStar} height='1' width='1'/>
                        </div>
                    </div>
                    

                    {
                        first ? <button className="seeCodeButton" onClick={() => setFirst(!first)}>hide code</button> : <button className="seeCodeButton" onClick={() => setFirst(!first)}>code</button>
                    }
                </div>

                
                {
                    first && <div className="codeDiv">
                    <code>
                        <span className='cssComment'>&#47;* css *&#47;</span><br />
                        <span className='seclector'>#yellowStar</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>height</span>: <span className='cssTextvalue'>100px</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>width</span>: <span className='cssTextvalue'>100px</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>background</span>: <span className='cssTextvalue'>url(../../../images/stars.png) 0 0</span>;<br />
                        &#125;
                        <br /><br />

                        <span className='seclector'>#blueStar</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>height</span>: <span className='cssTextvalue'>100px</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>width</span>: <span className='cssTextvalue'>100px</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>background</span>: <span className='cssTextvalue'>url(../../../images/stars.png) -100px 0</span>;<br />
                        &#125;
                        <br /><br />

                        <span className='seclector'>#grayStar</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>height</span>: <span className='cssTextvalue'>100px</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>width</span>: <span className='cssTextvalue'>100px</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>background</span>: <span className='cssTextvalue'>url(../../../images/stars.png) -200px 0</span>;<br />
                        &#125;
                        <br /><br />



                        <br /><br /><br />
                        <span className='cssComment'>&#47;* html *&#47;</span><br />
                        &lt;div&gt;<br />
                        &nbsp; &nbsp; &lt;img id="yellowStar" src="transparent_image.png" width="1" height="1"&gt;<br />
                        &nbsp; &nbsp; &lt;img id="blueStar" src="transparent_image.png" width="1" height="1"&gt;<br />
                        &nbsp; &nbsp; &lt;img id="grayStar" src="transparent_image.png" width="1" height="1"&gt;<br />
                        &lt;/div&gt;
                    </code>
                </div>
                }
               
            </section>
        </Layout>
    );
};

export default ImageSprites;