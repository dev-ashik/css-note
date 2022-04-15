import React from 'react';
import Layout from '../../../Layout/Layout';

const Test = () => {
    return (
        <Layout >
            <div className='name'>
                <h2>Test</h2>
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ex, cum vero, obcaecati repudiandae enim dicta voluptates est dolore, consectetur in molestiae pariatur tempore minus ab! Possimus, ab error nihil nam labore esse mollitia perferendis quas, aut, id temporibus natus odit eveniet aspernatur! Dolorum nam rem veritatis sequi reiciendis in.</p>

            <section className='section'>
                <h2 className='sectionTitle'>section name</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis repellat excepturi ullam placeat. Id molestiae perspiciatis doloribus dolores. Numquam, qui?</p>
                <div className='codeDiv'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, soluta.
                </div>
                <div className='codeRunDiv'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, soluta.
                </div>
            </section>
        </Layout>
    );
};

export default Test;