import React from "react";
import Tooltip from '@material-ui/core/Tooltip';

class EarthquakesFilters extends React.Component {

    handleInputChange = e => {
        this.props.handleFiltersChange(e);
    }

    handleButtonClick = e => {
        e.preventDefault();
        this.props.updateEarthquakes();
    }

    render() {
        return (
            <form className="EarthquakesFilters" onSubmit={this.handleButtonClick}>
                <div className="MagnitudeContainer">
                    <label htmlFor="minMagnitude">Minimum Magnitude</label>
                    <input
                        id="minMagnitude"
                        className="Input magnitudeInput"
                        onChange={this.handleInputChange}
                        min="0"
                        max="10"
                        step="1"
                        value={this.props.filters.minMagnitude}
                        type="number"
                        required
                    />
                </div>
                <div className="MagnitudeContainer">
                    <label htmlFor="maxMagnitude">Maximum magnitude</label>
                    <input
                        id="maxMagnitude"
                        className="Input magnitudeInput"
                        onChange={this.handleInputChange}
                        min="0"
                        max="10"
                        step="1"
                        value={this.props.filters.maxMagnitude}
                        type="number"
                        required
                    />
                </div>
                {this.props.locationAvailable ?
                    <Tooltip title="Show earthquakes within a 2,000 km radius" arrow>
                        <div>
                            <label htmlFor="getCloseEarthquakes">Close</label>
                            <input
                                id="getCloseEarthquakes"
                                className="Input"
                                onChange={this.handleInputChange}
                                checked={this.props.filters.getCloseEarthquakes}
                                type="checkbox"
                            />
                        </div>
                    </Tooltip> :
                    null}
                <button className="Button SubmitButton" type="submit">Update</button>
            </form>
        );
    }
}

export default EarthquakesFilters;