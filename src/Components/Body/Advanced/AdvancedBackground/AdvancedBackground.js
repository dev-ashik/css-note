import React, { useState } from 'react';
import Layout from '../../../Layout/Layout';
import styles from './AdvancedBackground.module.css';

const AdvancedBackground = () => {
    const [multipleBackgrund, setMultipleBackgrund] = useState(false)
    const [backgrundSize, setBackgrundSize] = useState(false)
    const [backgrundClip, setBackgrundClip] = useState(false)
    return (
        <Layout>
            <div className='name'>
                <h2>Background</h2>
            </div>

            <section className="section">
                <h2 className='sectionTitle'>Multiple Backgrounds</h2>

                <div className="codeRunDiv">
                    <div className={styles.multipleBackgroundImage} >

                    </div>


                    {
                        multipleBackgrund ? <button className='seeCodeButton' onClick={() => setMultipleBackgrund(!multipleBackgrund)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setMultipleBackgrund(!multipleBackgrund)}>Output</button>
                    }
                </div>

                {
                    multipleBackgrund && <div className="codeDiv">
                        <code>
                            <span className='seclector'>.div1</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>background-image</span>: <span className='cssTextvalue'>url('flower.png'), url('background_wall.jpg')</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>background-position</span>: <span className='cssTextvalue'>right bottom, left top</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>background-repeat</span>: <span className='cssTextvalue'>no-repeat, repeat</span>;<br />
                            &#125;
                            <br /><br />

                            <p>In one line</p>
                            <span className='seclector'>.div1</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>background</span>: <span className='cssTextvalue'>url('flower.png') right bottom no-repeat, url('background_wall.jpg') top left repeat</span>;<br />
                            &#125;
                        </code>
                    </div>

                }
            </section>


            <section className="section">
                <h2 className='sectionTitle'>Backgrounds size</h2>
                <section className="section">
                    <h3 className='sectionTitle'>Backgrounds size (px)</h3>

                    <div className="codeRunDiv">
                        <div className={styles.backgrundSize} >

                        </div>


                        {
                            backgrundSize ? <button className='seeCodeButton' onClick={() => setBackgrundSize(!backgrundSize)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setBackgrundSize(!backgrundSize)}>Output</button>
                        }
                    </div>

                    {
                        backgrundSize && <div className="codeDiv">
                            <code>
                                <span className='seclector'>.div1</span> &#123; <br />
                                &nbsp;&nbsp;<span className='cssName'>background</span>: <span className='cssTextvalue'>url('flower.png') right bottom no-repeat</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>background-size</span>: <span className='cssTextvalue'>200px 300px</span>;<br />
                                &#125;
                                <br /><br />

                                <p>In one line</p>
                                <span className='seclector'>.div1</span> &#123; <br />
                                &nbsp;&nbsp;<span className='cssName'>background</span>: <span className='cssTextvalue'>url('flower.png') right bottom no-repeat, url('background_wall.jpg') top left repeat</span>;<br />
                                &#125;
                            </code>
                        </div>

                    }
                </section>
                <section className="section">
                    <h2 className='sectionTitle'>Backgrounds size (contain, cover)</h2>

                    <div className={`codeRunDiv`}>
                        <div className={`${styles.floatClear}`}>
                            <div className={styles.backgrundContain} >
                                background-size: contain;
                            </div>
                            <div className={styles.backgrundCover} >
                                background-size: cover;
                            </div>
                            <div className={styles.backgrundNormal} >
                                normal
                            </div>
                        </div>


                        {
                            backgrundSize ? <button className='seeCodeButton' onClick={() => setBackgrundSize(!backgrundSize)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setBackgrundSize(!backgrundSize)}>Output</button>
                        }
                    </div>

                    {
                        backgrundSize && <div className="codeDiv">
                            <code>
                                <span className='seclector'>.div1</span> &#123; <br />
                                &nbsp;&nbsp;<span className='cssName'>background</span>: <span className='cssTextvalue'>url('flower.png') no-repeat</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>background-size</span>: <span className='cssTextvalue'>contain</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>min-height</span>: <span className='cssTextvalue'>200px</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>width</span>: <span className='cssTextvalue'>150px</span>;<br />
                                &#125;
                                <br /><br />

                                <span className='seclector'>.div2</span> &#123; <br />
                                &nbsp;&nbsp;<span className='cssName'>background</span>: <span className='cssTextvalue'>url('flower.png') no-repeat</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>background-size</span>: <span className='cssTextvalue'>cover</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>min-height</span>: <span className='cssTextvalue'>200px</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>width</span>: <span className='cssTextvalue'>150px</span>;<br />
                                &#125;
                                <br /><br />

                                <span className='seclector'>.div3</span> &#123; <br />
                                &nbsp;&nbsp;<span className='cssName'>background</span>: <span className='cssTextvalue'>url('flower.png') no-repeat</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>min-height</span>: <span className='cssTextvalue'>200px</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>width</span>: <span className='cssTextvalue'>150px</span>;<br />
                                &#125;
                                <br /><br />
                            </code>
                        </div>

                    }
                </section>
            </section>
            <section className="section">
                    <h2 className='sectionTitle'>Backgrounds origin</h2>

                    <div className={`codeRunDiv`}>
                        <div className={`${styles.floatClear}`}>
                            <div className={styles.backgrundOriginBorder} >
                                background-origin: border-box;
                            </div>
                            <div className={styles.backgrundOriginContent} >
                                background-origin: content-box;
                            </div>
                            <div className={styles.backgrundNormal} >
                                normal
                            </div>
                        </div>


                        {
                            backgrundSize ? <button className='seeCodeButton' onClick={() => setBackgrundSize(!backgrundSize)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setBackgrundSize(!backgrundSize)}>Output</button>
                        }
                    </div>

                    {
                        backgrundSize && <div className="codeDiv">
                            <code>
                                <span className='seclector'>.div1</span> &#123; <br />
                                &nbsp;&nbsp;<span className='cssName'>background</span>: <span className='cssTextvalue'>url('flower.png') no-repeat</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>background-size</span>: <span className='cssTextvalue'>contain</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>min-height</span>: <span className='cssTextvalue'>200px</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>width</span>: <span className='cssTextvalue'>150px</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>padding</span>: <span className='cssTextvalue'>20px</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>background-origin</span>: <span className='cssTextvalue'>border-box</span>;<br />
                                &#125;
                                <br /><br />

                                <span className='seclector'>.div2</span> &#123; <br />
                                &nbsp;&nbsp;<span className='cssName'>background</span>: <span className='cssTextvalue'>url('flower.png') no-repeat</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>background-size</span>: <span className='cssTextvalue'>cover</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>min-height</span>: <span className='cssTextvalue'>200px</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>width</span>: <span className='cssTextvalue'>150px</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>padding</span>: <span className='cssTextvalue'>20px</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>background-origin</span>: <span className='cssTextvalue'>content-box</span>;<br />
                                &#125;
                                <br /><br />

                                <span className='seclector'>.div3</span> &#123; <br />
                                &nbsp;&nbsp;<span className='cssName'>background</span>: <span className='cssTextvalue'>url('flower.png') no-repeat</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>min-height</span>: <span className='cssTextvalue'>200px</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>width</span>: <span className='cssTextvalue'>150px</span>;<br />
                                &#125;
                                <br /><br />
                            </code>
                        </div>
                    }
                </section>
            <section className="section">
                    <h2 className='sectionTitle'>Backgrounds clip</h2>

                    <div className={`codeRunDiv`}>
                        <div className={`${styles.floatClear}`}>
                            <div className={styles.backgrundClipPadding} >
                                background-clip: border-box;
                            </div>
                            <div className={styles.backgrundClipContant} >
                                background-clip: content-box;
                            </div>
                            <div className={styles.backgrundClipNormal} >
                                normal
                            </div>
                        </div>


                        {
                            backgrundSize ? <button className='seeCodeButton' onClick={() => setBackgrundClip(!backgrundClip)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setBackgrundClip(!backgrundClip)}>Output</button>
                        }
                    </div>

                    {
                        backgrundClip && <div className="codeDiv">
                            <code>
                                <span className='seclector'>.div1</span> &#123; <br />
                                &nbsp;&nbsp;<span className='cssName'>background</span>: <span className='cssTextvalue'>blue</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>background-size</span>: <span className='cssTextvalue'>contain</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>min-height</span>: <span className='cssTextvalue'>200px</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>width</span>: <span className='cssTextvalue'>150px</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>padding</span>: <span className='cssTextvalue'>20px</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>background-clip</span>: <span className='cssTextvalue'>border-box</span>;<br />
                                &#125;
                                <br /><br />

                                <span className='seclector'>.div2</span> &#123; <br />
                                &nbsp;&nbsp;<span className='cssName'>background</span>: <span className='cssTextvalue'>blue</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>background-size</span>: <span className='cssTextvalue'>cover</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>min-height</span>: <span className='cssTextvalue'>200px</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>width</span>: <span className='cssTextvalue'>150px</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>padding</span>: <span className='cssTextvalue'>20px</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>background-clip</span>: <span className='cssTextvalue'>content-box</span>;<br />
                                &#125;
                                <br /><br />

                                <span className='seclector'>.div3</span> &#123; <br />
                                &nbsp;&nbsp;<span className='cssName'>background</span>: <span className='cssTextvalue'>blue</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>min-height</span>: <span className='cssTextvalue'>200px</span>;<br />
                                &nbsp;&nbsp;<span className='cssName'>width</span>: <span className='cssTextvalue'>150px</span>;<br />
                                &#125;
                                <br /><br />
                            </code>
                        </div>
                    }
                </section>

        </Layout>
    );
};

export default AdvancedBackground;