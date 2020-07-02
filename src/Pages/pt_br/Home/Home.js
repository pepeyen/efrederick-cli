import React from 'react';
import About from '../About/About';
import Help from '../Help/Help';
import '../../index.scss';

function Home() {
    return (
        <div className = "default-output">
            <About />
            <Help /> 
        </div>
    );
}

export default Home;