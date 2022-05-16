import React, { useState } from 'react';
import styles from './Transforms2D.module.css';

const Matrix = () => {
    const [matrix, setMatrix] = useState(true);
    return (
        <div>
            <section className="section">
                <h3>matrix(scaleX(),skewY(),skewX(),scaleY(),translateX(),translateY()) method</h3>
                <div className="codeRunDiv">
                    <div className={styles.matrix_1}>normal</div>
                    <div className={styles.matrix_2}>matrix</div>

                    {
                        matrix ? <button className='seeCodeButton' onClick={() => setMatrix(!matrix)}>hide Output</button> : <button className='seeCodeButton' onClick={() => setMatrix(!matrix)}>Output</button>
                    }
                </div>
                {
                    matrix && <div className="codeDiv">
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
                            &nbsp;&nbsp;<span className='cssName'> transform</span>: <span className='cssTextvalue'>matrix(1, -0.3, 0, 1, 0, 0)</span>;<br />
                            &#125;<br /><br />
                        </code>
                    </div>
                }
            </section>
        </div>
    );
};

export default Matrix;