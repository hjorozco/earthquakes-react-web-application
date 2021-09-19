import React from 'react';
import logo from '../../logo.svg';

const LoadingMessage = () => {
    return (
        <div className="LoadingMessage">
                <img className="Logo" width="80" height="80" src={logo} alt="House shaking" />
                <div className="LoadingStatus">Loading Earthquakes</div>
        </div>
    );
}

export default LoadingMessage;