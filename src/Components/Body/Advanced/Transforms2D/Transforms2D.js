import React from 'react';
import Layout from '../../../Layout/Layout';
import Matrix from './Matrix';
import Rotate from './Rotate';
import Scale from './Scale';
import Skew from './Skew';
import TranslateMethod from './TranslateMethod';

const Transforms2D = () => {
    return (
        <Layout>
            <div className='name'>
                <h2>2D Transforms</h2>
            </div>
            <TranslateMethod/>
            <Rotate/>
            <Scale/>
            <Skew/>
            <Matrix/>
        </Layout>
    );
};

export default Transforms2D;