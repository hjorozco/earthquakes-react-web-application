import React, { useContext } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { PinnedEarthquakesContext } from '../../App'

import map from '../../images/map.svg';
import webPage from '../../images/webPage.svg';
import pinned from '../../images/pinned.svg';

const PinnedDetails = props => {

    const webPageImageSize = "20";
    const mapImageSize = "30"
    const pinImageSize = "35";

    let content;
    let showDetails = props.selectedPinnedEarthquake.feature !== undefined;

    const context = useContext(PinnedEarthquakesContext);

    const handlePinIconClick = () => {
        context.dispatch({ type: "remove", payload: props.selectedPinnedEarthquake.feature })
        props.setSelectedPinnedEarthquake({});
    }

    if (showDetails) {
        let properties = props.selectedPinnedEarthquake.feature.properties;
        let coordinates = props.selectedPinnedEarthquake.feature.geometry.coordinates;
        content =
            <div>
                <div className="DetailsIcons">
                    <Tooltip title="Unpin" arrow>
                        <img className="Icon PinIcon" widht={pinImageSize} alt="Pin icon"
                            height={pinImageSize} src={pinned}
                            onClick={() => handlePinIconClick()}>
                        </img>
                    </Tooltip>
                </div>
                <div className="DetailLabel">Magnitude on Ritcher scale</div>
                <div className="Detail">
                    {properties["mag"] === null ? "No magnitude" : properties["mag"]}
                </div>

                <div className="DetailLabel">Location</div>
                <div className="Detail">
                    {properties["place"] === null ? "No location" : properties["place"]}
                </div>

                <div className="DetailLabel">Date</div>
                <div className="Detail">
                    {properties["time"] === null ? "No date" : String(new Date(properties["time"]))}
                </div>

                <div className="DetailLabel">Intensity on Modified Mercalli scale</div>
                <div className="Detail">
                    {`reported ${properties["cdi"] === null ? "no" : properties["cdi"]}, estimated ` +
                        `${properties["mmi"] === null ? "no" : properties["mmi"]}`}
                </div>

                <div className="DetailLabel">Alert</div>
                <div className="Detail">
                    {properties["alert"] === null ? "No alert" : properties["alert"].toUpperCase()}
                </div>

                <div className="DetailLabel">Tsunami</div>
                <div className="Detail">
                    {properties["tsunami"] === 1 ?
                        "Danger of a tsunami in close costal areas" :
                        "No danger of a tsunami"}
                </div>

                <div className="DetailLabel">Felt reports</div>
                <div className="Detail">
                    {properties["felt"] === null ? "0" : properties["felt"]}
                </div>

                <div className="DetailLabel">Epicenter (latitude, longitude, depth)</div>
                <div className="Detail">
                    {`${coordinates[1] === null ? "No latitude" : coordinates[1]}, ` +
                        `${coordinates[0] === null ? "No longitude" : coordinates[0]}, ` +
                        `${coordinates[2] === null ? "No depth" : coordinates[2] + "km"}`}
                </div>

                <div className="Detail LastDetail">

                    <div>
                        {properties["url"] === null ?
                            "No map available" :
                            <a href={properties.url + "/map"} target="_blank">
                                <img
                                    className="Icon MapIcon" widht={mapImageSize} height={mapImageSize}
                                    src={map} alt="Map icon">
                                </img>
                            </a>}
                    </div>
                    <div className="DetailLabel LastDetailLabel">Interactive Map</div>
                </div>

                <div className="Detail LastDetail">
                    <div>
                        {properties["url"] === null ?
                            "No more details available" :
                            <a href={properties.url} target="_blank">
                                <img
                                    className="Icon WebPageIcon" widht={webPageImageSize} height={webPageImageSize}
                                    src={webPage} alt="Web page icon">
                                </img>
                            </a>}
                    </div>
                    <div className="DetailLabel LastDetailLabel">More details</div>

                </div>

            </div>
    } else {
        content = <div>Here details will be shown</div>
    }

    return (
        <fieldset className="EarthquakeDetails">
            <legend>Details</legend>
            {content}
        </fieldset>
    );
}

export default PinnedDetails;