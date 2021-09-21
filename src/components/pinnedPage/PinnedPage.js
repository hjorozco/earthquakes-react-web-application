import React from 'react';
import PinnedDetails from './PinnedDetails';
import PinnedList from './PinnedList';

const PinnedPage = props => {

    return (
        <div className="EarthquakesPage">
            <div className="EarthquakesTitle">Your pinned earthquakes</div>
            <div>Delete all pinned earthquakes</div>
            <PinnedList
                selectedPinnedEarthquake={props.selectedPinnedEarthquake}
                handlePinnedEarthquakeClick={props.handlePinnedEarthquakeClick} />
            <PinnedDetails
                selectedPinnedEarthquake={props.selectedPinnedEarthquake}
                setSelectedPinnedEarthquake = {props.setSelectedPinnedEarthquake}
            />
            {/* <EarthquakeDetails
                status={props.status}
                selectedEarthquake={props.selectedEarthquake}
                changeSelectedEarthquakePinnedStatus= {props.changeSelectedEarthquakePinnedStatus}
            /> */}
        </div>
    );
}

export default PinnedPage;