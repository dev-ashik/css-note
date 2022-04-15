import React, { useState } from 'react';
import Layout from '../../Layout/Layout';
import styles from './Lists.module.css';

const Lists = () => {
    const [unorderListMarkars, setUnorderListMarkars] = useState(false);
    const [orderListMarkars, setOrderListMarkars] = useState(false);
    const [listImage, setListImage] = useState(true);
    const [listItemMarkersPosition, setListItemMarkersPosition] = useState(true);
    const [removedefault, setRemovedefault] = useState(true);
    const [shorthand, setShorthand] = useState(true);
    return (
        <Layout>
            <div className='name'>
                <h2>Lists</h2>
            </div>
            <p>In HTML, there are two main types of lists. ul(unorder lists) and ol(Order lists)</p>
            <div className={styles.topLists}>
                <div className={styles.topListsUnorderLists}>
                    <h3>Unorder lists</h3>
                    <ul>
                        <li>first</li>
                        <li>Second</li>
                        <li>Third</li>
                        <li>Fourth</li>
                    </ul> 
                </div>
                <div>
                    <h3>Order lists</h3>
                    <ol>
                        <li>first</li>
                        <li>Second</li>
                        <li>Third</li>
                        <li>Fourth</li>
                    </ol>
                </div>
            </div>
            
            
            <p>The CSS list properties allow you to:</p>
            <ul>
                <li>Set different list item markers for ordered lists</li>
                <li>Set different list item markers for unordered lists</li>
                <li>Set an image as the list item marker</li>
                <li>Add background colors to lists and list items</li>
            </ul>

            <section className="section">
                    <h3>List - Shorthand property</h3>
                    <div className="codeDiv">
                        <code>
                            <span className='cssComment'>&#47;* short hand Styles *&#47;</span><br />
                            <span className='seclector'>.shorthandStyles</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>list-style</span>: <span className='cssTextvalue'>square inside url('../../../images/smileImoji.png')</span>;<br />
                            &#125;<br /><br /><br />
                            
                        </code>
                        {
                            shorthand ? <button className="seeCodeButton" onClick={() => setShorthand(!shorthand)}>hide output</button> : <button className="seeCodeButton" onClick={() => setShorthand(!shorthand)}>output</button>
                        }
                    </div>
                    {
                        shorthand &&
                            <div className="codeRunDiv">
                                <p className='cssComment'>short hand</p>
                                <ul className={styles.shorthandStyles}>
                                    <li>first</li>
                                    <li>Second</li>
                                    <li>Third</li>
                                    <li>Fourth</li>
                                </ul> 

                                
                            </div>
                    }
                </section>

            <section className="section">
                <h2>List Item Markers</h2>
                <p>The list-style-type property specifies the type of list item marker.</p>
                <section className="section">
                    <h3>Unorder List Item Markers</h3>
                    <div className="codeDiv">
                        <code>
                            <span className='cssComment'>&#47;* Circle *&#47;</span><br />
                            <span className='seclector'>.styleCercle</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>list-style-type</span>: <span className='cssTextvalue'>circle</span>;<br />
                            &#125;<br /><br /><br />

                            <span className='cssComment'>&#47;* Square *&#47;</span><br />
                            <span className='seclector'>.styleSquard</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>list-style-type</span>: <span className='cssTextvalue'>square</span>; <br />
                            &#125;<br /><br />
                            
                        </code>
                        {
                            unorderListMarkars ? <button className="seeCodeButton" onClick={() => setUnorderListMarkars(!unorderListMarkars)}>hide output</button> : <button className="seeCodeButton" onClick={() => setUnorderListMarkars(!unorderListMarkars)}>output</button>
                        }
                    </div>
                    {
                        unorderListMarkars &&
                            <div className="codeRunDiv">
                                <ul>
                                    <li>first</li>
                                    <li>Second</li>
                                    <li>Third</li>
                                    <li>Fourth</li>
                                </ul>
                                <p className='cssComment'>Circle</p>
                                <ul className={styles.styleCercle}>
                                    <li>first</li>
                                    <li>Second</li>
                                    <li>Third</li>
                                    <li>Fourth</li>
                                </ul> 

                                <p className='cssComment'>Square</p>
                                 
                                <ul className={styles.styleSquard}>
                                    <li>first</li>
                                    <li>Second</li>
                                    <li>Third</li>
                                    <li>Fourth</li>
                                </ul> 
                            </div>
                    }
                </section>
                <section className="section">
                    <h3>Unorder List Item Markers</h3>
                    <div className="codeDiv">
                        <code>
                            <span className='cssComment'>&#47;* upper roman *&#47;</span><br />
                            <span className='seclector'>.styleUpperRoman</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>list-style-type</span>: <span className='cssTextvalue'>upper-roman</span>;<br />
                            &#125;<br /><br /><br />

                            <span className='cssComment'>&#47;* Lower Roman *&#47;</span><br />
                            <span className='seclector'>.styleLowerRoman</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>list-style-type</span>: <span className='cssTextvalue'>lower-roman</span>; <br />
                            &#125;<br /><br />

                            <span className='cssComment'>&#47;* Upper Alpha *&#47;</span><br />
                            <span className='seclector'>.styleUpperAlpha</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>list-style-type</span>: <span className='cssTextvalue'>upper-alpha</span>; <br />
                            &#125;<br /><br />

                            <span className='cssComment'>&#47;* Lower Alpha *&#47;</span><br />
                            <span className='seclector'>.styleLowerAlpha</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>list-style-type</span>: <span className='cssTextvalue'>lower-alpha</span>; <br />
                            &#125;<br /><br />

                            <span className='cssComment'>&#47;* Upper Latin *&#47;</span><br />
                            <span className='seclector'>.styleUpperLatin</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>list-style-type</span>: <span className='cssTextvalue'>upper-latin</span>; <br />
                            &#125;<br /><br />

                            <span className='cssComment'>&#47;* Lower Latin *&#47;</span><br />
                            <span className='seclector'>.styleLowerLatin</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>list-style-type</span>: <span className='cssTextvalue'>lower-latin</span>; <br />
                            &#125;<br /><br />
                            
                        </code>
                        {
                            orderListMarkars ? <button className="seeCodeButton" onClick={() => setOrderListMarkars(!orderListMarkars)}>hide output</button> : <button className="seeCodeButton" onClick={() => setOrderListMarkars(!orderListMarkars)}>output</button>
                        }
                    </div>
                    {
                        orderListMarkars &&
                            <div className="codeRunDiv">
                                <ol>
                                    <li>first</li>
                                    <li>Second</li>
                                    <li>Third</li>
                                    <li>Fourth</li>
                                </ol>
                                <p className='cssComment'>upper roman</p>
                                <ol className={styles.styleUpperRoman}>
                                    <li>first</li>
                                    <li>Second</li>
                                    <li>Third</li>
                                    <li>Fourth</li>
                                </ol> 

                                <p className='cssComment'>lower roman</p>
                                <ol className={styles.styleLowerRoman}>
                                    <li>first</li>
                                    <li>Second</li>
                                    <li>Third</li>
                                    <li>Fourth</li>
                                </ol> 

                                <p className='cssComment'>upper alpha</p>
                                <ol className={styles.styleUpperAlpha}>
                                    <li>first</li>
                                    <li>Second</li>
                                    <li>Third</li>
                                    <li>Fourth</li>
                                </ol> 

                                <p className='cssComment'>Lower Alpha</p>
                                <ol className={styles.styleLowerAlpha}>
                                    <li>first</li>
                                    <li>Second</li>
                                    <li>Third</li>
                                    <li>Fourth</li>
                                </ol> 

                                <p className='cssComment'>Upper Latin</p>
                                <ol className={styles.styleUpperLatin}>
                                    <li>first</li>
                                    <li>Second</li>
                                    <li>Third</li>
                                    <li>Fourth</li>
                                </ol> 

                                <p className='cssComment'>Lower Latin</p>
                                <ol className={styles.styleLowerLatin}>
                                    <li>first</li>
                                    <li>Second</li>
                                    <li>Third</li>
                                    <li>Fourth</li>
                                </ol> 
                            </div>
                    }
                </section>
            </section>

            <section className="section">
                    <h3>An Image List Style</h3>
                    <p>The list-style-image property specifies an image as the list item marker. this poperty will work on unorder list (ul) also order list (ol)</p>
                    <div className="codeDiv">
                        <code>
                            <span className='cssComment'>&#47;* style image *&#47;</span><br />
                            <span className='seclector'>ul, ol</span> &#123; <br />
                            &nbsp;&nbsp;<span className='cssName'>list-style-image</span>: <span className='cssTextvalue'>url('../../../images/smileImoji.png')</span>;<br />
                            &#125;<br /><br /><br />

                            

                            
                        </code>
                        {
                            listImage ? <button className="seeCodeButton" onClick={() => setListImage(!listImage)}>hide output</button> : <button className="seeCodeButton" onClick={() => setListImage(!listImage)}>output</button>
                        }
                    </div>
                    {
                        listImage &&
                            <div className="codeRunDiv">
                                <span className='cssComment'>&#47;* Unorder lists *&#47;</span>
                                <ul className={styles.ulStyleImage}>
                                    <li>first</li>
                                    <li>Second</li>
                                    <li>Third</li>
                                    <li>Fourth</li>
                                </ul>

                                <span className='cssComment'>&#47;* Order lists *&#47;</span>
                                <ol className={styles.ulStyleImage}>
                                    <li>first</li>
                                    <li>Second</li>
                                    <li>Third</li>
                                    <li>Fourth</li>
                                </ol>
                                
                            </div>
                    }
                </section>

                <section className="section">
                        <h3>Position The List Item Markers</h3>
                        <p>The list-style-position property specifies the position of the list-item markers. </p>
                        <div className="codeDiv">
                            <code>
                                <span className='cssComment'>&#47;* markers position *&#47;</span><br /><br />
                                <span className='seclector'>.outside</span> &#123; <br />
                                &nbsp;&nbsp;<span className='cssName'>list-style-position</span>: <span className='cssTextvalue'>outside</span>;<br />
                                &#125;<br /><br /><br />

                                <span className='seclector'>.inside</span> &#123; <br />
                                &nbsp;&nbsp;<span className='cssName'>list-style-position</span>: <span className='cssTextvalue'>inside</span>;<br />
                                &#125;<br /><br /><br />

                            </code>
                            {
                                listItemMarkersPosition ? <button className="seeCodeButton" onClick={() => setListItemMarkersPosition(!listItemMarkersPosition)}>hide output</button> : <button className="seeCodeButton" onClick={() => setListItemMarkersPosition(!listItemMarkersPosition)}>output</button>
                            }
                        </div>
                        {
                            listItemMarkersPosition &&
                                <div className="codeRunDiv">
                                    <span className='cssComment'>&#47;* outside *&#47;</span><br /><br />

                                    <ul className={styles.positionOutSide}>
                                        <li className={styles.li} >first</li>
                                        <li className={styles.li}>Second</li>
                                        <li className={styles.li}>Third</li>
                                        <li className={styles.li}>Fourth</li>
                                    </ul>
                                    
                                    <ol className={styles.positionOutSide}>
                                        <li className={styles.li} >first</li>
                                        <li className={styles.li}>Second</li>
                                        <li className={styles.li}>Third</li>
                                        <li className={styles.li}>Fourth</li>
                                    </ol>

                                    <hr />

                                    <span className='cssComment'>&#47;* inside *&#47;</span>
                                    <ul className={styles.positionInSide}>
                                        <li className={styles.li} >first</li>
                                        <li className={styles.li}>Second</li>
                                        <li className={styles.li}>Third</li>
                                        <li className={styles.li}>Fourth</li>
                                    </ul>
                                    <ol className={styles.positionInSide}>
                                        <li className={styles.li} >first</li>
                                        <li className={styles.li}>Second</li>
                                        <li className={styles.li}>Third</li>
                                        <li className={styles.li}>Fourth</li>
                                    </ol>

                                    
                                    
                                </div>
                        }
                    </section>



                    <section className="section">
                            <h3>Remove Default Settings</h3>
                            <p>The list-style-type:none property can also be used to remove the markers/bullets. Note that the list also has default margin and padding. To remove this, add margin:0 and padding:0 to ul or ol .</p>
                            <div className="codeDiv">
                                <code>
                                    <span className='cssComment'>&#47;* remove Default Style *&#47;</span><br /><br />
                                    <span className='seclector'>.removeDefaultStyle</span> &#123; <br />
                                    &nbsp;&nbsp;<span className='cssName'>list-style-type</span>: <span className='cssTextvalue'>none</span>;<br />
                                    &nbsp;&nbsp;<span className='cssName'>margin</span>: <span className='cssTextvalue'>0</span>;<br />
                                    &nbsp;&nbsp;<span className='cssName'>padding</span>: <span className='cssTextvalue'>0</span>;<br />
                                    &#125;<br /><br /><br />


                                </code>
                                {
                                    removedefault ? <button className="seeCodeButton" onClick={() => setRemovedefault(!removedefault)}>hide output</button> : <button className="seeCodeButton" onClick={() => setRemovedefault(!removedefault)}>output</button>
                                }
                            </div>
                            {
                                removedefault &&
                                    <div className="codeRunDiv">
                                        <span className='cssComment'>&#47;* outside *&#47;</span><br /><br />

                                        <ul className={styles.defaultStyle}>
                                            <li className={styles.li} >first</li>
                                            <li className={styles.li}>Second</li>
                                            <li className={styles.li}>Third</li>
                                            <li className={styles.li}>Fourth</li>
                                        </ul>
                                        
                                        <ul className={styles.removeDefaultStyle}>
                                            <li className={styles.li} >first</li>
                                            <li className={styles.li}>Second</li>
                                            <li className={styles.li}>Third</li>
                                            <li className={styles.li}>Fourth</li>
                                        </ul>

                                    </div>
                            }
                        </section>
        </Layout>
    );
};

export default Lists;