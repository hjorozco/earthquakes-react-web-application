import React, { useContext } from 'react';
import PinnedDetails from './PinnedDetails';
import PinnedList from './PinnedList';
import GoogleMap from '../common/GoogleMap';
import { PinnedEarthquakesContext } from '../../App'

const PinnedPage = props => {

    const context = useContext(PinnedEarthquakesContext);

    const handleDeleteAllButtonClick = () => {
        context.dispatch({ type: "set", payload: [] });
        props.setSelectedPinnedEarthquake({});
    }

    return (
        <div className="EarthquakesPage">
            <div className="EarthquakesTitle">Your pinned earthquakes</div>
            <div className="EarthquakesFilters">
                <button className="Button" onClick={handleDeleteAllButtonClick}>
                    Delete all
                </button>
            </div>
            <PinnedList
                selectedPinnedEarthquake={props.selectedPinnedEarthquake}
                handlePinnedEarthquakeClick={props.handlePinnedEarthquakeClick} />
            <PinnedDetails
                selectedPinnedEarthquake={props.selectedPinnedEarthquake}
                setSelectedPinnedEarthquake={props.setSelectedPinnedEarthquake}
            />
            <GoogleMap status={"successful"} selectedEarthquake={props.selectedPinnedEarthquake} />
        </div>
    );
}

export default PinnedPage;