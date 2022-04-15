import React, { useState } from 'react';
import Layout from '../../Layout/Layout';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Icons.module.css';

const Icons = () => {
    const [fontAwesomeIcon, setFontAwesomeIcon] = useState(true);
    const [bootstapeIcon, setBootstapeIcon] = useState(true);
    const [googleIcon, setGoogleIcon] = useState(true);
    return (
        <Layout>
            <div className='name'>
                <h2>Icons</h2>
            </div>
            <section className="section">
                <h2>Font Awesome Icons</h2>
                <p>To use font awesome visit <a href="https://fontawesome.com/">fontawesome.com</a></p>
                <div className="codeDiv">
                    <code>
                        <span className='cssComment'>&#47;* font size *&#47;</span><br />
                        <span className='seclector'>.fs_px</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>font-size</span>: <span className='cssTextvalue'>20px</span>;<br />
                        &#125;<br /><br /><br />

                        <span className='cssComment'>&#47;* many developers use em instead of pixels. calculated from pixels to em using this formula: pixels/16=em *&#47;</span><br />
                        <span className='seclector'>.fs_em</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>font-size</span>: <span className='cssTextvalue'>1em</span>; <span className="cssComment">&#47;* 16px/16 = 1em *&#47;</span><br />
                        &#125;<br /><br />

                        <span className='seclector'>.fs_percent</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>font-size</span>: <span className='cssTextvalue'>100%</span>; <span className="cssComment">&#47;* fontsize 1em or 16px *&#47;</span><br />
                        &#125;<br /><br />
                        
                    </code>
                    {
                        fontAwesomeIcon ? <button className="seeCodeButton" onClick={() => setFontAwesomeIcon(!fontAwesomeIcon)}>hide output</button> : <button className="seeCodeButton" onClick={() => setFontAwesomeIcon(!fontAwesomeIcon)}>output</button>
                    }
                </div>
                {
                    fontAwesomeIcon &&
                        <div className="codeRunDiv">
                            {/* <FontAwesomeIcon icon="fa-solid fa-house-chimney" /> */} 
                        </div>
                }
            </section>

            <section className="section">
                <h2>Bootstrap Icons</h2>
                <p></p>
                <div className="codeDiv">
                    <code>
                        <span className='cssComment'>&#47;* font size *&#47;</span><br />
                        <span className='seclector'>.fs_px</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>font-size</span>: <span className='cssTextvalue'>20px</span>;<br />
                        &#125;<br /><br /><br />

                        <span className='cssComment'>&#47;* many developers use em instead of pixels. calculated from pixels to em using this formula: pixels/16=em *&#47;</span><br />
                        <span className='seclector'>.fs_em</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>font-size</span>: <span className='cssTextvalue'>1em</span>; <span className="cssComment">&#47;* 16px/16 = 1em *&#47;</span><br />
                        &#125;<br /><br />

                        <span className='seclector'>.fs_percent</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>font-size</span>: <span className='cssTextvalue'>100%</span>; <span className="cssComment">&#47;* fontsize 1em or 16px *&#47;</span><br />
                        &#125;<br /><br />
                        
                    </code>
                    {
                        bootstapeIcon ? <button className="seeCodeButton" onClick={() => setBootstapeIcon(!bootstapeIcon)}>hide output</button> : <button className="seeCodeButton" onClick={() => setBootstapeIcon(!bootstapeIcon)}>output</button>
                    }
                </div>
                {
                    bootstapeIcon &&
                        <div className="codeRunDiv">
                            {/* <FontAwesomeIcon icon="fa-solid fa-house-chimney" /> */} 
                        </div>
                }
            </section>

            <section className="section">
                <h2>Google Icons</h2>
                <p></p>
                <div className="codeDiv">
                    <code>
                        <span className='cssComment'>&#47;* font size *&#47;</span><br />
                        <span className='seclector'>.fs_px</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>font-size</span>: <span className='cssTextvalue'>20px</span>;<br />
                        &#125;<br /><br /><br />

                        <span className='cssComment'>&#47;* many developers use em instead of pixels. calculated from pixels to em using this formula: pixels/16=em *&#47;</span><br />
                        <span className='seclector'>.fs_em</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>font-size</span>: <span className='cssTextvalue'>1em</span>; <span className="cssComment">&#47;* 16px/16 = 1em *&#47;</span><br />
                        &#125;<br /><br />

                        <span className='seclector'>.fs_percent</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>font-size</span>: <span className='cssTextvalue'>100%</span>; <span className="cssComment">&#47;* fontsize 1em or 16px *&#47;</span><br />
                        &#125;<br /><br />
                        
                    </code>
                    {
                        googleIcon ? <button className="seeCodeButton" onClick={() => setGoogleIcon(!googleIcon)}>hide output</button> : <button className="seeCodeButton" onClick={() => setGoogleIcon(!googleIcon)}>output</button>
                    }
                </div>
                {
                    googleIcon &&
                        <div className="codeRunDiv">
                            {/* <FontAwesomeIcon icon="fa-solid fa-house-chimney" /> */} 
                        </div>
                }
            </section>
        </Layout>
    );
};

export default Icons;