import React from 'react';
import FailedMessage from './FailedMessage';
import List from './List';
import LoadingMessage from './LoadingMessage';

const EarthquakesList = props => {

    let content;
    switch (props.status) {
        case "loading":
            content =
                <LoadingMessage />
            break;
        case "successful":
            content =
                <List
                    earthquakesData={props.earthquakesData}
                    selectedEarthquakeIndex={props.selectedEarthquakeIndex}
                    handleEarthquakeClick={props.handleEarthquakeClick}
                />
            break;
        case "failed":
            content = <FailedMessage />
            break;
        default:
            content = null;
    }

    return (
        <div 
        className="EarthquakesList">
            {content}
        </div>

    );

}

export default EarthquakesList;