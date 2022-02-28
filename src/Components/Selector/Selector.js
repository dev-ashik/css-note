import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';

import GitHubIcon from '@mui/icons-material/GitHub';

const Selector = () => {
    return (
        <Layout>
            <h1>Selector</h1>
            <p>A CSS selector selects the HTML element(s) you want to style.</p>
        
        <hr />
        <section>
            <h2>element Selector</h2>
            <p>p, h1, input etc</p> 
            <a href="https://github.com/dev-ashik/css-note/blob/main/src/Components/Selector/Code/style.css" className='githubLinkButton'><GitHubIcon/>View Code on Github</a>
        </section>
        <hr />

        </Layout>
    );
};

export default Selector;