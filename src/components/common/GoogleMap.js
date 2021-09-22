import React from 'react';

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const style = {
    marginBottom: "60px",
    marginRight: "60px",
    marginLeft: "20px",
}

const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    padding: "20px",
}

export class GoogleMap extends React.Component {

    render() {
        return (
            this.props.status === "successful" && this.props.selectedEarthquake.feature !== undefined ?
                <Map
                    google={this.props.google} zoom={6} className="Map"
                    containerStyle={containerStyle} style={style}
                    initialCenter={{
                        lat: this.props.selectedEarthquake.feature.geometry.coordinates[1],
                        lng: this.props.selectedEarthquake.feature.geometry.coordinates[0]
                    }}
                    center={{
                        lat: this.props.selectedEarthquake.feature.geometry.coordinates[1],
                        lng: this.props.selectedEarthquake.feature.geometry.coordinates[0]
                    }}>
                    <Marker
                        title={'The marker`s title will appear as a tooltip.'}
                        name={'SOMA'}
                        position={{ lat: this.props.selectedEarthquake.feature.geometry.coordinates[1], lng: this.props.selectedEarthquake.feature.geometry.coordinates[0] }} />

                    <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>
                            <h1>Hector</h1>
                        </div>
                    </InfoWindow>
                </Map> :
                null
        );
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
})(GoogleMap)