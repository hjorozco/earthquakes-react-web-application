import React from 'react';
import logo from '../../logo.svg';

const LoadingMessage = () => {
    return (
        <div className="Loading">
                <div className="LoadingStatus">Loading Earthquakes</div>
                <img className="Logo" width="45" height="45" src={logo} alt="House shaking" />
        </div>
    );
}

export default LoadingMessage;