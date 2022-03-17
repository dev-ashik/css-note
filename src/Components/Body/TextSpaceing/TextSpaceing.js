import React, { useState } from 'react';
import Layout from '../../Layout/Layout';
import styles from './TextSpaceing.module.css';

const TextSpaceing = () => {
    const [spaceing, setSpaceing] = useState(true);
    const [indentation, setIndentation] = useState(true);
    const [letterSpacing, setLetterSpacing] = useState(true);
    const [wordSpacing, setWordSpacing] = useState(true);
    const [lineHeight, setLineHeight] = useState(true);
    const [whiteSpace, setWhiteSpace] = useState(true);
    return (
        <Layout>
            <div className='name'>
                <h2>Text Spaceing</h2>
            </div>
            <section className="section">
                <div className="codeDiv">
                    <code>
                        <span className='cssComment'>&#47;* Color *&#47;</span><br />
                        <span className='seclector'>.redColor</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>color</span>: <span className='cssTextvalue'>red</span>;<br />
                        &#125;<br /><br />
                        <span className='seclector'>.redColor</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>color</span>: <span className='cssTextvalue'>green</span>;<br />
                        &#125;<br /><br />
                    </code>
                    {
                        spaceing ? <button className="seeCodeButton" onClick={() => setSpaceing(!spaceing)}>hide output</button> : <button className="seeCodeButton" onClick={() => setSpaceing(!spaceing)}>output</button>
                    }
                </div>
                {
                    spaceing && <div>
                        <div className="codeRunDiv">
                            <p className={styles.redColor}>
                                color: red;
                            </p>
                            <p className={styles.greenColor}>
                                color: green;
                            </p>
                        </div>
                    </div>
                }
            </section>

            <section className="section">
                <section className="section">
                    <h2>Text Indentation</h2>
                    <p>The text-indent property is used to specify the indentation of the first line of a text</p>
                    <div className="codeDiv">
                        <code>
                            <span className='seclector'>.first_p</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>text-indent</span>: <span className='cssTextvalue'>50px</span>;<br />
                            &#125;<br /><br />
                            <span className='seclector'>.second_p</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>text-indent</span>: <span className='cssTextvalue'>100px</span>;<br />
                            &#125;<br /><br />
                        </code>
                        {
                            indentation ? <button className="seeCodeButton" onClick={() => setIndentation(!indentation)}>hide output</button> : <button className="seeCodeButton" onClick={() => setIndentation(!indentation)}>output</button>
                        }
                    </div>
                    {
                        indentation && <div>
                            <div className="codeRunDiv">
                                <p className={styles.firstP}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt unde error nemo, fugiat magnam perspiciatis. Molestias necessitatibus dignissimos doloremque, vel, iste soluta ipsam ipsum illum exercitationem, odit possimus facilis. Placeat in rem cupiditate exercitationem, laudantium ipsa, eligendi, fuga ratione explicabo deserunt molestiae fugit amet voluptates suscipit animi adipisci excepturi id.</p>

                                <p className={styles.secondP}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt unde error nemo, fugiat magnam perspiciatis. Molestias necessitatibus dignissimos doloremque, vel, iste soluta ipsam ipsum illum exercitationem, odit possimus facilis. Placeat in rem cupiditate exercitationem, laudantium ipsa, eligendi, fuga ratione explicabo deserunt molestiae fugit amet voluptates suscipit animi adipisci excepturi id.</p>
                            </div>
                        </div>
                    }
                    
                </section>
                <section className="section">
                    <h2>Letter Spacing</h2>
                    <p>The letter-spacing property is used to specify the space between the characters in a text.</p>
                    <div className="codeDiv">
                        <code>
                            <span className='seclector'>.first_p</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>letter-spacing</span>: <span className='cssTextvalue'>5px</span>;<br />
                            &#125;<br /><br />
                            <span className='seclector'>.third_p</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>letter-spacing</span>: <span className='cssTextvalue'>-2px</span>;<br />
                            &#125;<br /><br />
                        </code>
                        {
                            letterSpacing ? <button className="seeCodeButton" onClick={() => setLetterSpacing(!letterSpacing)}>hide output</button> : <button className="seeCodeButton" onClick={() => setLetterSpacing(!letterSpacing)}>output</button>
                        }
                    </div>
                    {
                        letterSpacing && <div>
                            <div className="codeRunDiv">
                                <p >This is a paragraph.</p>
                                <p className={styles.p_one}>This is a paragraph.</p>
                                <p className={styles.p_two}>This is a paragraph.</p>
                            </div>
                        </div>
                    }
                    
                </section>
                <section className="section">
                    <h2>Line Height</h2>
                    <p>The line-height property is used to specify the space between lines.</p>
                    <div className="codeDiv">
                        <code>
                            <span className='seclector'>.first_p</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>line-height</span>: <span className='cssTextvalue'>0.8</span>;<br />
                            &#125;<br /><br />
                            <span className='seclector'>.second_p</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>line-height</span>: <span className='cssTextvalue'>1.8</span>;<br />
                            &#125;<br /><br />
                        </code>
                        {
                            lineHeight ? <button className="seeCodeButton" onClick={() => setLineHeight(!lineHeight)}>hide output</button> : <button className="seeCodeButton" onClick={() => setLineHeight(!lineHeight)}>output</button>
                        }
                    </div>
                    {
                        lineHeight && <div>
                            <div className="codeRunDiv">
                                <p className={styles.p_a}>This is a paragraph. <br /> This is a paragraph.</p>
                                <br />
                                <p className={styles.p_b}>This is a paragraph. <br /> This is a paragraph.</p>
                            </div>
                        </div>
                    }
                    
                </section>
                <section className="section">
                    <h2>Word Spacing</h2>
                    <p>The word-spacing property is used to specify the space between the words in a text.</p>
                    <div className="codeDiv">
                        <code>
                            <span className='seclector'>.first_p</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>word-spacing</span>: <span className='cssTextvalue'>10px</span>;<br />
                            &#125;<br /><br />
                            <span className='seclector'>.second_p</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>word-spacing</span>: <span className='cssTextvalue'>-4px</span>;<br />
                            &#125;<br /><br />
                        </code>
                        {
                            wordSpacing ? <button className="seeCodeButton" onClick={() => setWordSpacing(!wordSpacing)}>hide output</button> : <button className="seeCodeButton" onClick={() => setWordSpacing(!wordSpacing)}>output</button>
                        }
                    </div>
                    {
                        wordSpacing && <div>
                            <div className="codeRunDiv">
                                <p className={styles.p_c}>This is a paragraph With 10px word space.</p>
                                <p className={styles.p_d}>This is a paragraph. This is a paragraph With 10px word space.</p>
                            </div>
                        </div>
                    }
                    
                </section>
                <section className="section">
                    <h2>White Space</h2>
                    <p>The white-space property specifies how white-space inside an element is handled.</p>
                    <div className="codeDiv">
                        <code>
                            <span className='seclector'>.first_p</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>white-space</span>: <span className='cssTextvalue'>nowrap</span>;<br />
                            &#125;<br /><br />
                        </code>
                        {
                            wordSpacing ? <button className="seeCodeButton" onClick={() => setWordSpacing(!wordSpacing)}>hide output</button> : <button className="seeCodeButton" onClick={() => setWordSpacing(!wordSpacing)}>output</button>
                        }
                    </div>
                    {
                        wordSpacing && <div>
                            <div className="codeRunDiv">
                                <p className={styles.withWhiteSpace}>
                                    This is a paragraph.
                                    This is a paragraph.
                                    This is a paragraph.
                                    This is a paragraph.
                                    This is a paragraph.
                                    This is a paragraph.
                                    This is a paragraph.
                                    This is a paragraph.
                                    This is a paragraph.
                                    This is a paragraph.
                                    This is a paragraph.
                                    This is a paragraph.
                                    This is a paragraph.
                                    This is a paragraph.
                                    This is a paragraph.
                                    This is a paragraph.
                                    This is a paragraph.
                                    This is a paragraph.
                                    This is a paragraph.
                                    This is a paragraph.
                                    This is a paragraph.
                                    This is a paragraph.
                                    This is a paragraph.
                                    This is a paragraph.
                                    This is a paragraph.
                                    This is a paragraph.
                                    This is a paragraph.
                                    This is a paragraph.
                                    This is a paragraph.
                                    This is a paragraph.
                                </p>
                            </div>
                        </div>
                    }
                    
                </section>
                
            </section>
            
        </Layout>
    );
};

export default TextSpaceing;