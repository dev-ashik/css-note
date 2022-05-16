import React, { useState } from 'react';
import Layout from '../../../Layout/Layout';
import styles from './Transforms3D.module.css';

const Transforms3D = () => {
    const [rotate, setRotate] = useState(true);
    return (
        <Layout>
            <div className='name'>
                <h2>3D Transforms</h2>
            </div>
            <section className='section'>
                <section className="section">
                    <h3>rotateX() method</h3>
                    <div className="codeRunDiv">
                        <div className={styles.rotateX_1}>normal</div>
                        <div className={styles.rotateX_2}> Hello rotateX</div>
                        <div className={styles.rotateX_3}> Hello rotateY</div>
                        <div className={styles.rotateX_4}> Hello rotateZ</div>

                        {
                            rotate ? <button className='seeCodeButton' onClick={() => setRotate(!rotate)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setRotate(!rotate)}>Output</button>
                        }
                    </div>
                    {
                        rotate && <div className="codeDiv">
                            <code>
                                <span className='seclector'>.matrix_1</span> &#123; <br />
                                &nbsp;&nbsp;<span className='cssName'> width</span>: <span className='cssTextvalue'>150px</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'> height</span>: <span className='cssTextvalue'>150px</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'> background-color</span>: <span className='cssTextvalue'>green</span>;<br />
                                &#125;<br /><br />

                                <hr />

                                <span className='seclector'>.matrix_2</span> &#123; <br />
                                &nbsp;&nbsp;<span className='cssName'> width</span>: <span className='cssTextvalue'>150px</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'> height</span>: <span className='cssTextvalue'>150px</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'> background-color</span>: <span className='cssTextvalue'>green</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'> transform</span>: <span className='cssTextvalue'>rotateX(150deg)</span>;<br />
                                &#125;<br /><br />

                                <span className='seclector'>.matrix_3</span> &#123; <br />
                                &nbsp;&nbsp;<span className='cssName'> width</span>: <span className='cssTextvalue'>150px</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'> height</span>: <span className='cssTextvalue'>150px</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'> background-color</span>: <span className='cssTextvalue'>green</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'> transform</span>: <span className='cssTextvalue'>rotateY(150deg)</span>;<br />
                                &#125;<br /><br />

                                <span className='seclector'>.matrix_4</span> &#123; <br />
                                &nbsp;&nbsp;<span className='cssName'> width</span>: <span className='cssTextvalue'>150px</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'> height</span>: <span className='cssTextvalue'>150px</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'> background-color</span>: <span className='cssTextvalue'>green</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'> transform</span>: <span className='cssTextvalue'>rotateZ(150deg)</span>;<br />
                                &#125;<br /><br />
                            </code>
                        </div>
                    }
                </section>
            </section>

        </Layout>
    );
};

export default Transforms3D;