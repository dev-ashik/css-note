import React, { useState } from 'react';

const Transparent = () => {
    const [transparentColor, setTransparentColor] = useState(true)
    return (
        <div>
            <section className="section">
                {/* Background Shorthand */}
                <h2>Transparent</h2>
                <h1>Code wrong</h1>
                <div className="codeDiv">
                    <code>
                        
                        <span className='seclector'>div</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>background-color</span>: <span className='cssTextvalue'>#8b7878</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>background-image</span>: <span className='cssTextvalue'>url("bg.png")</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>background-repeat</span>: <span className='cssTextvalue'>no-repeat</span>;<br />
                            &nbsp;&nbsp;<span className='cssName'>background-position</span>: <span className='cssTextvalue'>right top</span>;<br />
                        &#125;
                    </code>
                </div>
                <div className="codeDiv">
                    <code>
                        <span className='cssComment'>/* Background Shorthand */</span><br />
                        <span className='seclector'>div</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>background</span>: <span className='cssTextvalue'>#8b7878 url("bg.png") no-repeat right top</span>;<br />
                        &#125;
                    </code>
                    {
                        transparentColor ? <button className='seeCodeButton' onClick={() => setTransparentColor(!transparentColor)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setTransparentColor(!transparentColor)}>Output</button>
                    }
                </div>
                {
                        transparentColor && <div className="codeRunDiv">
                            <div style={{minHeight: '90px'}}>
                                Background Shorthand
                            </div>
                        </div>
                    }

            </section>
        </div>
    );
};

export default Transparent;