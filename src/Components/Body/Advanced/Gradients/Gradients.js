import React from 'react';
import Layout from '../../../Layout/Layout';
import ConicGradients from './ConicGradients';
import LinearGradients from './LinearGradients';
import RadialGradients from './RadialGradients';

const Gradients = () => {
    return (
        <Layout>
            <div className='name'>
                <h2>Gradients</h2>
            </div>
            <LinearGradients/>
            <RadialGradients/>
            <ConicGradients/>
        </Layout>
    );
};

export default Gradients;