import React from 'react';
import Layout from '../Layout/Layout';

const Addcss = () => {
    return (
        <Layout>
            <div className='name'>
                <h2>Add CSS</h2>
            </div>

            <p>When a browser reads a style sheet, it will format the HTML document according to the information in the style sheet.</p>
            <h3>Three Ways to Insert CSS. (1) External CSS (2) Internal CSS (3) Inline CSS</h3>
            <h2>Cascading Order</h2>
            <p>What style will be used when there is more than one style specified for an HTML element?</p>
            <h4>The highest priority:</h4>
            <ol>
                <li>Inline style (inside an HTML element)</li>
                <li>External and internal style sheets (in the head section)</li>
                <li>Browser default</li>
            </ol>

            <section className='section'>
                <h2 className='sectionTitle'>External CSS</h2>
                <div className='codeDiv'>
                    &#60;!DOCTYPE html&#62;<br />
                    &#60;html lang="en"&#62;<br />
                    &#60;head&#62;<br />
                    &nbsp; &nbsp; &#60;title&#62;Document&#60;/title&#62;<br />
                    &nbsp; &nbsp; &#60;<span className='htmlElement'>link</span> <span className='htmlAttribute'>rel</span>=<span className='cssTextvalue'>"stylesheet"</span> <span className='htmlAttribute'>href</span>=<span className='cssTextvalue'>"./style.css"</span>&#62;<br />
                    &#60;/head&#62;<br />
                    &#60;body&#62;<br />
                    &nbsp; &nbsp; &#60;<span className='htmlElement'>p</span> <span className='htmlAttribute'>class</span>=<span className='cssTextvalue'>"externalStyle"</span> &#62; Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, repellendus. &#60;<span className='htmlElement'>/p</span>&#62;<br />
                    &#60;/body&#62;<br />
                    &#60;/html&#62;
                </div>
            </section>
            <section className='section'>
                <h2 className='sectionTitle'>Internal CSS</h2>
                <div className='codeDiv'>
                    &#60;!DOCTYPE html&#62;<br />
                    &#60;html lang="en"&#62;<br />
                    &#60;head&#62;<br />
                    &nbsp; &nbsp; &#60;title&#62;Document&#60;/title&#62;<br />
                    &nbsp; &nbsp; <span className='seclector'>p</span> &#123; <br />
                    &nbsp; &nbsp; &nbsp; &nbsp; <span className='cssName'>color</span>: <span className='cssTextvalue'>black</span>;<br />
                    &nbsp; &nbsp; &#125;<br />
                    &#60;/head&#62;<br />
                    &#60;body&#62;<br />
                    &nbsp; &nbsp; &#60;<span className='htmlElement'>p</span> &#62; Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, repellendus. &#60;<span className='htmlElement'>/p</span>&#62;<br />
                    &#60;/body&#62;<br />
                    &#60;/html&#62;
                </div>
            </section>
            <section className='section'>
                <h2 className='sectionTitle'>Inline CSS</h2>
                <div className='codeDiv'>
                    &#60;!DOCTYPE html&#62;<br />
                    &#60;html lang="en"&#62;<br />
                    &#60;head&#62;<br />
                    &nbsp; &nbsp; &#60;title&#62;Document&#60;/title&#62;<br />
                    &#60;/head&#62;<br />
                    &#60;body&#62;<br />
                    &nbsp; &nbsp; &#60;<span className='htmlElement'>p</span> <span className='htmlAttribute'>style</span>=<span className='cssTextvalue'>"color:blue;text-align:center;"</span> &#62; Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, repellendus. &#60;<span className='htmlElement'>/p</span>&#62;<br />
                    &#60;/body&#62;<br />
                    &#60;/html&#62;
                </div>
            </section>
            <section className='section'>
                <h2 className='sectionTitle'>Multiple Style Sheets</h2>
                <p>If some properties have been defined for the same selector (element) in different style sheets, the value from the last read style sheet will be used. If the internal style is defined after the link to the external style sheet, the elements will be styled as internal style sit. If the internal style is defined before the link to the external style sheet, the elements will be styled as external style sit.</p>
                <div className='codeDiv'>
                    &#60;!DOCTYPE html&#62;<br />
                    &#60;html lang="en"&#62;<br />
                    &#60;head&#62;<br />
                    &nbsp; &nbsp; &#60;title&#62;Document&#60;/title&#62;<br />

                    &nbsp; &nbsp; &#60;<span className='htmlElement'>link</span> <span className='htmlAttribute'>rel</span>=<span className='cssTextvalue'>"stylesheet"</span> <span className='htmlAttribute'>href</span>=<span className='cssTextvalue'>"./style.css"</span>&#62;<br />

                    &nbsp; &nbsp; <span className='seclector'>p</span> &#123; <br />
                    &nbsp; &nbsp; &nbsp; &nbsp; <span className='cssName'>color</span>: <span className='cssTextvalue'>black</span>;<br />
                    &nbsp; &nbsp; &#125;<br />

                    &#60;/head&#62;<br />
                    &#60;body&#62;<br />
                    &nbsp; &nbsp; &#60;<span className='htmlElement'>p</span> <span className='htmlAttribute'>style</span>=<span className='cssTextvalue'>"color:blue;text-align:center;"</span> &#62; Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, repellendus. &#60;<span className='htmlElement'>/p</span>&#62;<br />
                    &#60;/body&#62;<br />
                    &#60;/html&#62;
                </div>
            </section>
        </Layout>
    );
};

export default Addcss;