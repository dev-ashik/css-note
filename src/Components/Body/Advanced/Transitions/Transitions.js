import React, { useState } from 'react';
import Layout from '../../../Layout/Layout';
import styles from './Transitions.module.css';
import TransitionsShorthand from './TransitionsShorthand';
import TransitionTransformation from './TransitionTransformation';

const Transitions = () => {
    const [transitions, setTransitions] = useState(true);


    return (
        <Layout>
            <div className='name'>
                <h2>Transitions</h2>
            </div>
            <div>
                <ul>
                    <li>transition</li>
                    <li>transition-delay</li>
                    <li>transition-duration</li>
                    <li>transition-property</li>
                    <li>transition-timing-function</li>
                </ul>
            </div>
            <TransitionsShorthand/>
            <section className="section">
                <h3></h3>
                <div className="codeRunDiv">
                    <div className={styles.transitions_1}>transition: width 2s;</div>
                    <div className={styles.transitions_2}> transition: width 2s, height 4s;</div>

                    {
                        transitions ? <button className='seeCodeButton' onClick={() => setTransitions(!transitions)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setTransitions(!transitions)}>Output</button>
                    }
                </div>
                {
                    transitions && <div className="codeDiv">
                        <code>
                            <span className='seclector'>.transitions_1</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> width</span>: <span className='cssTextvalue'>150px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> height</span>: <span className='cssTextvalue'>150px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> background-color</span>: <span className='cssTextvalue'>green</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> transition</span>: <span className='cssTextvalue'>width 2s</span>;<br />
                            &#125;<br /><br />

                            <span className='seclector'>.transitions_1:hover</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> width</span>: <span className='cssTextvalue'>300px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> height</span>: <span className='cssTextvalue'>300px</span>;<br />
                            &#125;<br />

                            <hr />

                            <span className='seclector'>.transitions_2</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> width</span>: <span className='cssTextvalue'>150px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> height</span>: <span className='cssTextvalue'>150px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> background-color</span>: <span className='cssTextvalue'>green</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> transition</span>: <span className='cssTextvalue'>width 2s, height 4s</span>;<br />
                            &#125;<br /><br />

                            <span className='seclector'>.transitions_2:hover</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'> width</span>: <span className='cssTextvalue'>300px</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'> height</span>: <span className='cssTextvalue'>300px</span>;<br />
                            &#125;<br />
                        </code>
                    </div>
                }
            </section>
            <TransitionTransformation/>
        </Layout>
    );
};

export default Transitions;