import React from 'react';
import EarthquakesFilters from './EarthquakesFilters';
import EarthquakeDetails from './EarthquakeDetails';
import EarthquakesList from './EarthquakesList';
import GoogleMap from '../common/GoogleMap';

const EarthquakesPage = props => {

    return (
        <div className="EarthquakesPage">
            <div className="EarthquakesTitle">Earthquakes in last 30 days</div>
            <EarthquakesFilters
                updateEarthquakes={props.updateEarthquakes}
                handleFiltersChange={props.handleFiltersChange}
                filters={props.filters}
                locationAvailable={props.locationAvailable}
            />
            <EarthquakesList
                status={props.status}
                earthquakesData={props.earthquakesData}
                selectedEarthquakeIndex={props.selectedEarthquake.index}
                handleEarthquakeClick={props.handleEarthquakeClick}
            />
            <EarthquakeDetails
                status={props.status}
                selectedEarthquake={props.selectedEarthquake}
                changeSelectedEarthquakePinnedStatus={props.changeSelectedEarthquakePinnedStatus}
            />
            <GoogleMap status={props.status} selectedEarthquake={props.selectedEarthquake} />
        </div>
    );
}

export default EarthquakesPage;