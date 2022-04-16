import React, {useState} from 'react';
import Layout from '../../../Layout/Layout';
import styles from './BorderImages.module.css';

const BorderImages = () => {

    const [ borderImages, setBorderImages ] = useState(false);

    return (
        <Layout>
            <div className='name'>
                <h2>Border Images</h2>
            </div>
            <section className="section">
                {/* border width */}
                <h2>Border Width</h2>
                <p>The width can be set as a specific size (in px, pt, cm, em, etc) or by using one of the three pre-defined values: thin, medium, or thick.</p>
                
                <div className="codeRunDiv">
                        <div className={styles.firstSection}></div>

                            <br /><br />
                        {
                        borderImages ? <button className="seeCodeButton" onClick={() => setBorderImages(!borderImages)}>hide output</button> : <button className="seeCodeButton" onClick={() => setBorderImages(!borderImages)}>output</button>
                        }
                    </div>
                {
                    borderImages && <div className="codeDiv">
                    <code>
                        <span className='seclector'>.firstSection</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>border</span>: <span className='cssTextvalue'>70px solid black</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>height</span>: <span className='cssTextvalue'>400px</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>width</span>: <span className='cssTextvalue'>400px</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>border-image</span>: <span className='cssTextvalue'>url('borderImage.png') 33% round</span>;<br />
                        &#125;<br />

                        <br /><br />

                        &lt;div class='firstSection' &gt; &lt;/div&gt;
                    </code>
                </div>
                }
            </section>
        </Layout>
    );
};

export default BorderImages;