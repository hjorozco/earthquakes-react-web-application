import React from 'react';
import EarthquakeDetails from './EarthquakeDetails';
import EarthquakeMap from './EarthquakeMap';
import EarthquakesFilters from './EarthquakesFilters';
import EarthquakesList from './EarthquakesList';
import './EarthquakesPage.css'

const EarthquakesPage = props => {

    return (
        <div className="EarthquakesPage">
            <div className="EarthquakesPageTitle">Latest earthquakes in the world</div>
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
            <EarthquakeDetails status={props.status} feature={props.selectedEarthquake.feature} />
            <EarthquakeMap status={props.status} earthquakesData={props.earthquakesData} feature={props.selectedEarthquake.feature} />
        </div>
    );
}

export default EarthquakesPage;