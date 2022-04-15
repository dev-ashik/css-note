import React, { useState } from 'react';
import Layout from '../../Layout/Layout';
import styles from './DropDown.module.css';
import wave from '../../../images/weav.jpg';

const DropDown = () => {
    const [basicDropdown, setBasicDropdown] = useState(false);
    const [dropdownMenu, setDropdownMenu] = useState(false);
    const [imageDropdown, setImageDropdown] = useState(true);
    return (
        <Layout>
            <div className='name'>
                <h2>Dropdown</h2>
            </div>
            <section className="section">
                <h2>Basic Dropdown</h2>

                <div className="codeRunDiv">
                    
                    <div className={styles.dropdown}>
                        <span className={styles.dropdownButton}>Mouse hober me</span>
                        <div className={styles.dropdown_content}>
                            <p>Hello</p>
                        </div>
                    </div>


                    {
                        basicDropdown ? <button className="seeCodeButton" onClick={() => setBasicDropdown(!basicDropdown)}>hide code</button> : <button className="seeCodeButton" onClick={() => setBasicDropdown(!basicDropdown)}>code</button>
                    }
                </div>

                
                {
                    basicDropdown && <div className="codeDiv">
                    <code>
                        <span className='cssComment'>&#47;* css *&#47;</span><br />
                        <span className='seclector'>.dropdown</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>position</span>: <span className='cssTextvalue'>relative</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>display</span>: <span className='cssTextvalue'>inline-block</span>;<br />
                        &#125;
                        <br /><br />

                        <span className='seclector'>.dropdown_content</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>display</span>: <span className='cssTextvalue'>none</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>position</span>: <span className='cssTextvalue'>absolute</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>background-color</span>: <span className='cssTextvalue'>#b3b3b3</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>min-width</span>: <span className='cssTextvalue'>160px</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>box-shadow</span>: <span className='cssTextvalue'>0px 8px 16px 0px rgba(0,0,0,0.2)</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>padding</span>: <span className='cssTextvalue'>12px 16px</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>z-index</span>: <span className='cssTextvalue'>1</span>;<br />
                        &#125;
                        <br /><br />

                        <span className='seclector'>.dropdown:hover .dropdown_content</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>display</span>: <span className='cssTextvalue'>block</span>;<br />
                        &#125;


                        <br /><br /><br />
                        <span className='cssComment'>&#47;* html *&#47;</span><br />
                        &lt;div class='dropdown'&gt;<br />
                            &nbsp; &nbsp; &lt;span&gt;Mouse hober me&lt;/span&gt;<br />
                            &nbsp; &nbsp; &lt;div class='dropdown_content'&gt;<br />
                            &nbsp; &nbsp; &nbsp; &nbsp; &lt;p&gt;hello&lt;/p&gt;<br />
                            &nbsp; &nbsp; &lt;/div&gt;<br />
                        &lt;/div&gt;
                    </code>
                </div>
                }
               
            </section>
            <section className="section">
                <h2>Dropdown menu</h2>

                <div className="codeRunDiv">
                    
                    <div className={styles.dropdown2}>
                        <span className={styles.dropdownButton2}>Mouse hober me</span>
                        <div className={styles.dropdown_content2}>
                            <a href="">item-1</a>
                            <a href="">item-2</a>
                            <a href="">item-3</a>
                            <a href="">itme-4</a>
                        </div>
                    </div>


                    {
                        dropdownMenu ? <button className="seeCodeButton" onClick={() => setDropdownMenu(!dropdownMenu)}>hide code</button> : <button className="seeCodeButton" onClick={() => setDropdownMenu(!dropdownMenu)}>code</button>
                    }
                </div>

                
                {
                    dropdownMenu && <div className="codeDiv">
                    <code>
                        <span className='cssComment'>&#47;* css *&#47;</span><br />
                        <span className='seclector'>.dropdown</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>position</span>: <span className='cssTextvalue'>relative</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>display</span>: <span className='cssTextvalue'>inline-block</span>;<br />
                        &#125;
                        <br /><br />

                        <span className='seclector'>.dropdown_content</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>display</span>: <span className='cssTextvalue'>none</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>position</span>: <span className='cssTextvalue'>absolute</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>background-color</span>: <span className='cssTextvalue'>#b3b3b3</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>min-width</span>: <span className='cssTextvalue'>160px</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>box-shadow</span>: <span className='cssTextvalue'>0px 8px 16px 0px rgba(0,0,0,0.2)</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>padding</span>: <span className='cssTextvalue'>12px 16px</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>z-index</span>: <span className='cssTextvalue'>1</span>;<br />
                        &#125;
                        <br /><br />

                        <span className='seclector'>.dropdown_content a</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>display</span>: <span className='cssTextvalue'>block</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>text-decoration</span>: <span className='cssTextvalue'>none</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>color</span>: <span className='cssTextvalue'>black</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>text-align</span>: <span className='cssTextvalue'>center</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>padding</span>: <span className='cssTextvalue'>10px</span>;<br />
                        &#125;
                        <br /><br />

                        <span className='seclector'>.dropdown:hover .dropdown_content</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>display</span>: <span className='cssTextvalue'>block</span>;<br />
                        &#125;


                        <br /><br /><br />
                        <span className='cssComment'>&#47;* html *&#47;</span><br />
                        &lt;div class='dropdown'&gt;<br />
                            &nbsp; &nbsp; &lt;span&gt;Mouse hober me&lt;/span&gt;<br />
                            &nbsp; &nbsp; &lt;div class='dropdown_content'&gt;<br />
                            &nbsp; &nbsp; &nbsp; &nbsp; &lt;a href=""&gt;item-1&lt;/a&gt;<br />
                            &nbsp; &nbsp; &nbsp; &nbsp; &lt;a href=""&gt;item-2&lt;/a&gt;<br />
                            &nbsp; &nbsp; &nbsp; &nbsp; &lt;a href=""&gt;item-3&lt;/a&gt;<br />
                            &nbsp; &nbsp; &nbsp; &nbsp; &lt;a href=""&gt;item-4&lt;/a&gt;<br />
                            &nbsp; &nbsp; &lt;/div&gt;<br />
                        &lt;/div&gt;
                    </code>
                </div>
                }
            </section>
            <section className="section">
                <h2>Image Dropdown</h2>

                <div className="codeRunDiv">
                    
                    <div className={styles.image_dropdown}>
                        <img className={styles.image_dropdownButton} src={wave} alt="" height="60" width="100"/>
                        <div className={styles.image_dropdown_content}>
                            <img className={styles.image_dropdownButton} src={wave} alt="" height="300" width="300"/>
                            <p className={styles.image_text}>Beautiful Photo</p>
                        </div>
                    </div>


                    {
                        imageDropdown ? <button className="seeCodeButton" onClick={() => setImageDropdown(!imageDropdown)}>hide code</button> : <button className="seeCodeButton" onClick={() => setImageDropdown(!imageDropdown)}>code</button>
                    }
                </div>

                
                {
                    imageDropdown && <div className="codeDiv">
                    <code>
                        <span className='cssComment'>&#47;* css *&#47;</span><br />
                        <span className='seclector'>.dropdown</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>position</span>: <span className='cssTextvalue'>relative</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>display</span>: <span className='cssTextvalue'>inline-block</span>;<br />
                        &#125;
                        <br /><br />

                        <span className='seclector'>.dropdown_content</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>display</span>: <span className='cssTextvalue'>none</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>position</span>: <span className='cssTextvalue'>absolute</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>background-color</span>: <span className='cssTextvalue'>#b3b3b3</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>min-width</span>: <span className='cssTextvalue'>160px</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>box-shadow</span>: <span className='cssTextvalue'>0px 8px 16px 0px rgba(0,0,0,0.2)</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>padding</span>: <span className='cssTextvalue'>12px 16px</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>z-index</span>: <span className='cssTextvalue'>1</span>;<br />
                        &#125;
                        <br /><br />

                        <span className='seclector'>.dropdown_content a</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>display</span>: <span className='cssTextvalue'>block</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>text-decoration</span>: <span className='cssTextvalue'>none</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>color</span>: <span className='cssTextvalue'>black</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>text-align</span>: <span className='cssTextvalue'>center</span>;<br />
                        &nbsp;&nbsp;<span className='cssName'>padding</span>: <span className='cssTextvalue'>10px</span>;<br />
                        &#125;
                        <br /><br />

                        <span className='seclector'>.dropdown:hover .dropdown_content</span> &#123; <br />
                        &nbsp;&nbsp;<span className='cssName'>display</span>: <span className='cssTextvalue'>block</span>;<br />
                        &#125;


                        <br /><br /><br />
                        <span className='cssComment'>&#47;* html *&#47;</span><br />
                        &lt;div class='dropdown'&gt;<br />
                            &nbsp; &nbsp; &lt;img src='../../../images/weav.jpg' alt="" height="300" width="300"/&gt;<br />
                            &nbsp; &nbsp; &lt;div class='dropdown_content'&gt;<br />
                            &nbsp; &nbsp; &nbsp; &nbsp; &lt;img src='../../../images/weav.jpg' alt="" height="300" width="300"/&gt;<br />
                            &nbsp; &nbsp; &nbsp; &nbsp; &lt;p&gt;Beautiful Photo&lt;/p&gt;<br />
                            &nbsp; &nbsp; &lt;/div&gt;<br />
                        &lt;/div&gt;
                    </code>
                </div>
                }
            </section>
        </Layout>
    );
};

export default DropDown;