import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';

import GitHubIcon from '@mui/icons-material/GitHub';
import '../../App.css';

const Selector = () => {
    const [classSelector, setClassSelector] = useState('none')


    return (
        <Layout className='body'>
            <div className='name'>
                <h2>Selector</h2>
            </div>

            <p>A CSS selector selects the HTML element(s) you want to style.</p>

            <section className='section'>
                <h2 className='sectionTitle'>element Selector</h2>
                <p>p, h1, input etc</p>
                <div className="codeDiv">
                    <code>
                        <span className='cssComment'>&#47;* element Selector *&#47;</span><br />
                        <span className='seclector'>p</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>color</span>: <span className='cssTextvalue'>black</span>;<br />
                        &#125;
                    </code>
                </div>
                <a href="https://github.com/dev-ashik/css-note/blob/main/src/Components/Selector/Code/style.css" className='githubLinkButton' target="_blank"><GitHubIcon />View Code on Github</a>
            </section>

            <section className='section'>
                <h2 className='sectionTitle'>id Selector</h2>
                <p>The id selector uses the id attribute of an HTML element to select a specific element. </p>
                <p>To select an element with a specific id, write a hash (#) character, followed by the id of the element.</p>
                <div className="codeDiv">
                    <code>
                        <span className='cssComment'>&#47;* id Selector *&#47;</span><br />
                        <span className='seclector'>#my_id</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>color</span>: <span className='cssTextvalue'>black</span>;<br />
                        &#125;
                    </code>
                </div>
                <a href="https://github.com/dev-ashik/css-note/blob/main/src/Components/Selector/Code/style.css" target="_blank" className='githubLinkButton' ><GitHubIcon />View Code on Github</a>
            </section>

            <section className='section'>
                <h2 className='sectionTitle'>class Selector</h2>
                <p>To select elements with a specific class, write a period (.) character, followed by the class name..</p>
                <p>You can also specify that only specific HTML elements should be affected by a class.</p>
                <p>HTML elements can also refer to more than one class.</p>
                <div className="codeDiv">
                    <code>
                        <span className='cssComment'>&#47;* class Selector *&#47;</span><br />
                        <span className='seclector'>.my_class</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>color</span>: <span className='cssTextvalue'>black</span>;<br />
                        &#125;
                    </code>
                </div>
                <div className="codeDiv">
                    <code>
                        <p>&#60;<span className='htmlElement'>p</span> <span className='htmlAttribute'>class</span>=<span className='htmlAttributeValue'>"my_class"</span>&#62; This is first paragraph. &#60;<span className='htmlElement'>/p</span>&#62; </p>
                        <span className='cssComment'>&#47;* In this example only &#60;p&#62; elements with class="center" will be red *&#47;</span><br />
                        <span className='seclector'>p.my_class</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>color</span>: <span className='cssTextvalue'>lightsalmon</span>;<br />
                        &#125;
                    </code>
                    <br /><br />
                    {
                        classSelector && <button className='seeCodeButton' onClick={()=>setClassSelector(!classSelector)}>output</button>
                    }
                </div>
                <div className={`codeRunDiv`} style={{display: classSelector}}>
                    <p style={{color: "lightsalmon"}}>This is first paragraph.</p>
                </div>
                <a href="https://github.com/dev-ashik/css-note/blob/main/src/Components/Selector/Code/style.css" className='githubLinkButton' target="_blank"><GitHubIcon />View Code on Github</a>
            </section>

            <section className='section'>
                <h2 className='sectionTitle'>Universal Selector</h2>
                <p>The universal selector (*) selects all HTML elements on the page.</p>
                <div className="codeDiv">
                    <code>
                        <span className='cssComment'>&#47;* Universal Selector *&#47;</span><br />
                        <span className='seclector'>*</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>color</span>: <span className='cssTextvalue'>black</span>;<br />
                        &#125;
                    </code>
                </div>
                <a href="https://github.com/dev-ashik/css-note/blob/main/src/Components/Selector/Code/style.css" className='githubLinkButton' target="_blank"><GitHubIcon />View Code on Github</a>
            </section>

            <section className='section'>
                <h2 className='sectionTitle'>Grouping Selector</h2>
                <p>The grouping selector selects all the HTML elements with the same style definitions. To group selectors, separate each selector with a comma (,).</p>
                <div className="codeDiv">
                    <code>
                        <span className='cssComment'>&#47;* Grouping Selector *&#47;</span><br />
                        <span className='seclector'>h1, p, small</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>color</span>: <span className='cssTextvalue'>black</span>;<br />
                        &#125;
                    </code>
                </div>
                <a href="https://github.com/dev-ashik/css-note/blob/main/src/Components/Selector/Code/style.css" className='githubLinkButton' target="_blank"><GitHubIcon />View Code on Github</a>
            </section>

        </Layout>
    );
};

export default Selector;