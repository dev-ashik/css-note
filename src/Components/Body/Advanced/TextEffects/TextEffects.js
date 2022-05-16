import React from 'react';
import Layout from '../../../Layout/Layout';
import TextOverflow from './TextOverflow';
import WordWrapping from './WordWrapping';
import WritingMode from './WritingMode';

const TextEffects = () => {
    return (
        <Layout>
            <div className='name'>
                <h2>Shadow Effect</h2>
            </div>
            <TextOverflow/>
            <WordWrapping/>
            <WritingMode/>
        </Layout>
    );
};

export default TextEffects;