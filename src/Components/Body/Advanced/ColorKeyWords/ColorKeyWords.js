import React from 'react';
import Layout from '../../../Layout/Layout';
import CurrentColor from './CurrentColor';
import Transparent from './Transparent';

const ColorKeyWords = () => {
    
    return (
        <Layout>
            <div className='name'>
                <h2>Color KeyWord</h2>
            </div>
            <Transparent/>
            <CurrentColor/>
        </Layout>
    );
};

export default ColorKeyWords;