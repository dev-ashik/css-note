import React from 'react';
import Layout from '../../../Layout/Layout';
import BoxShadow from './BoxShadow';
import TextShadow from './TextShadow';

const Shadow = () => {
    return (
        <Layout>
            <div className='name'>
                <h2>Shadow Effect</h2>
            </div>
            <TextShadow/>
            <BoxShadow/>
        </Layout>
    );
};

export default Shadow;