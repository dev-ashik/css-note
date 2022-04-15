import React, { useState } from 'react';
import Layout from '../../../Layout/Layout';
import styles from './Links.module.css';

const Links = () => {
    const [link, setLink] = useState(true);
    const [linkStates, setLinkStates] = useState(true);
    const [textdecoration, setTextdecoration] = useState(true);
    const [linkButton, setLinkButton] = useState(true);
    return (
        <Layout>
            <div className='name'>
                <h2>Links</h2>
            </div>
            <section className="section">
                <div className="codeDiv">
                    <code>
                        <span className='cssComment'>&#47;* link styles *&#47;</span><br />
                        <span className='seclector'>.a</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>color</span>: <span className='cssTextvalue'>red</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>padding</span>: <span className='cssTextvalue'>10px</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>border-radius</span>: <span className='cssTextvalue'>5px</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>text-decoration</span>: <span className='cssTextvalue'>none</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>background-color</span>: <span className='cssTextvalue'>black</span>;<br />
                        
                        &#125;<br /><br /><br />

                        
                    </code>
                    {
                        link ? <button className="seeCodeButton" onClick={() => setLink(!link)}>hide output</button> : <button className="seeCodeButton" onClick={() => setLink(!link)}>output</button>
                    }
                </div>
                {
                    link &&
                        <div className="codeRunDiv">
                            <a href="#" className={styles.linkStyleOne}>Click me</a><br /><br />

                            <a href="#" className={styles.linkStyleTwo}>Click me</a>
                        </div>
                }
            </section>
            <section className="section">
                <h2>links states</h2>
                <p>The four links states are</p>
                <ol>
                    <li>a:link (a normal, unvisited link)</li>
                    <li>a:visited (a link the user has visited)</li>
                    <li>a:hover (a link when the user mouses over it)</li>
                    <li>a:active (a link the moment it is clicked)</li>
                </ol>
                <p>When setting the style for several link states, there are some order rules:</p>
                <ul>
                    <li>a:hover MUST come after a:link and a:visited</li>
                    <li>a:active MUST come after a:hover</li>
                </ul>
                <div className="codeDiv">
                    <code>
                        <span className='cssComment'>&#47;* link styles *&#47;</span><br />
                        <span className='seclector'>.a</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>color</span>: <span className='cssTextvalue'>red</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>padding</span>: <span className='cssTextvalue'>10px</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>border-radius</span>: <span className='cssTextvalue'>5px</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>text-decoration</span>: <span className='cssTextvalue'>none</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>background-color</span>: <span className='cssTextvalue'>black</span>;<br />
                        &#125;<br /><br /><br />

                        <span className='seclector'>.a:hover</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>color</span>: <span className='cssTextvalue'>lightgreen</span>;<br />
                        &#125;<br /><br /><br />

                        <span className='seclector'>.a:active</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>color</span>: <span className='cssTextvalue'>white</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>background-color</span>: <span className='cssTextvalue'>aqua</span>;<br />
                        &#125;<br /><br /><br />

                        <span className='seclector'>.a:visited</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>color</span>: <span className='cssTextvalue'>#838383</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>background-color</span>: <span className='cssTextvalue'>#3a076b</span>;<br />
                        
                        &#125;<br /><br /><br />

                        
                    </code>
                    {
                        linkStates ? <button className="seeCodeButton" onClick={() => setLinkStates(!linkStates)}>hide output</button> : <button className="seeCodeButton" onClick={() => setLinkStates(!linkStates)}>output</button>
                    }
                </div>
                {
                    linkStates &&
                        <div className="codeRunDiv">
                            <a href="#" className={styles.linkLink}>Click me</a><br /><br />
                            <a href="#" className={styles.linkVisited}>Visited</a><br /><br />
                        </div>
                }
            </section>


            <section className="section">
                <h2>Text Decoration</h2>
                <p>The text-decoration property is mostly used to remove underlines.</p>
                <div className="codeDiv">
                    <code>
                        <span className='cssComment'>&#47;* link styles *&#47;</span><br />
                        <span className='seclector'>.a</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>color</span>: <span className='cssTextvalue'>red</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>padding</span>: <span className='cssTextvalue'>10px</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>border-radius</span>: <span className='cssTextvalue'>5px</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>text-decoration</span>: <span className='cssTextvalue'>none</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>background-color</span>: <span className='cssTextvalue'>black</span>;<br />
                        &#125;<br /><br /><br />

                        <span className='seclector'>.a:hover</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>text-decoration</span>: <span className='cssTextvalue'>underline</span>;<br />
                        &#125;<br /><br /><br />
                        
                    </code>
                    {
                        textdecoration ? <button className="seeCodeButton" onClick={() => setTextdecoration(!textdecoration)}>hide output</button> : <button className="seeCodeButton" onClick={() => setTextdecoration(!textdecoration)}>output</button>
                    }
                </div>
                {
                    textdecoration &&
                        <div className="codeRunDiv">
                            <a href="#" className={styles.linkDecoration}>hover me</a>
                        </div>
                }
            </section>


            <section className="section">
                <h2>Link Buttons Styles</h2>
                <div className="codeDiv">
                    <code>
                        <span className='cssComment'>&#47;* link styles *&#47;</span><br />
                        <span className='seclector'>a:link, a:visited</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>color</span>: <span className='cssTextvalue'>red</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>padding</span>: <span className='cssTextvalue'>10px</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>border-radius</span>: <span className='cssTextvalue'>5px</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>text-decoration</span>: <span className='cssTextvalue'>none</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>background-color</span>: <span className='cssTextvalue'>black</span>;<br />
                        &#125;<br /><br /><br />

                        <span className='seclector'>a:hover, a:active</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>color</span>: <span className='cssTextvalue'>#bdbdbd</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>background-color</span>: <span className='cssTextvalue'>#355735</span>;<br />
                        &#125;<br /><br /><br />
                        
                    </code>
                    {
                        linkButton ? <button className="seeCodeButton" onClick={() => setLinkButton(!linkButton)}>hide output</button> : <button className="seeCodeButton" onClick={() => setLinkButton(!linkButton)}>output</button>
                    }
                </div>
                {
                    linkButton &&
                        <div className="codeRunDiv">
                            <a href="#" className={styles.linkButton}>hover me</a>
                        </div>
                }
            </section>
        </Layout>
    );
};

export default Links;