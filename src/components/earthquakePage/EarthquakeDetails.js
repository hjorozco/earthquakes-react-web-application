import React from 'react';

const EarthquakeDetails = props => {

    let content;
    let showDetails = props.status === "successful" && props.feature !== undefined;

    if (showDetails) {
        let properties = props.feature.properties;
        let coordinates = props.feature.geometry.coordinates;
        content =
            <div>
                <div className="DetailContainer">
                    <div className="BoldText">Magnitude on Ritcher scale</div>
                    <div className="Detail">
                        {properties["mag"] === null ? "No magnitude" : properties["mag"]}
                    </div>
                </div>
                <div className="DetailContainer">
                    <div className="BoldText">Location</div>
                    <div className="Detail">
                        {properties["place"] === null ? "No location" : properties["place"]}
                    </div>
                </div>
                <div className="DetailContainer">
                    <div className="BoldText">Date</div>
                    <div className="Detail">
                        {properties["time"] === null ? "No date" : String(new Date(properties["time"]))}
                    </div>
                </div>
                <div className="DetailContainer">
                    <div className="BoldText">Intensity on Modified Mercalli scale</div>
                    <div className="Detail">
                        {`reported ${properties["cdi"] === null ? "no" : properties["cdi"]}, estimated ` +
                            `${properties["mmi"] === null ? "no" : properties["mmi"]}`}
                    </div>
                </div>
                <div className="DetailContainer">
                    <div className="BoldText">Alert</div>
                    <div className="Detail">
                        {properties["alert"] === null ? "No alert" : properties["alert"].toUpperCase()}
                    </div>
                </div>
                <div className="DetailContainer">
                    <div className="BoldText">Tsunami</div>
                    <div className="Detail">
                        {properties["tsunami"] === 1 ?
                            "Danger of a tsunami in close costal areas" :
                            "No danger of a tsunami"}
                    </div>
                </div>
                <div className="DetailContainer">
                    <div className="BoldText">Felt reports</div>
                    <div className="Detail">
                        {properties["felt"] === null ? "0" : properties["felt"]}
                    </div>
                </div>
                <div className="DetailContainer">
                    <div className="BoldText">Epicenter (latitude, longitude, depth)</div>
                    <div className="Detail">
                        {`${coordinates[1] === null ? "No latitude" : coordinates[1]}, ` +
                            `${coordinates[0] === null ? "No longitude" : coordinates[0]}, ` +
                            `${coordinates[2] === null ? "No depth" : coordinates[2] + "km"}`}
                    </div>
                </div>
                <div className="BoldText LastDetail">
                    {properties["url"] === null ? "No website" : <a href={properties.url} target="_blank">Visit the USGS website for this earthquake</a>}
                </div>
            </div>
    }

    return (
        <div
            className="EarthquakeDetails"
            style={showDetails ? { border: "1px solid black" } : { border: "none" }}
        >
            {content}
        </div>
    );
}

export default EarthquakeDetails;