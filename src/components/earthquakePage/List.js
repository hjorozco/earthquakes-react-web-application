import React from 'react';

const selectedBox =
    "rgba(0, 0, 0, 0.16) 0px 1px 3px, rgb(93, 64, 55) 0px 0px 0px 2px";
const notSelectedBox = "rgba(0, 0, 0, 0.08) 0px 4px 12px"

const List = props => {

    return (
        <div>
            <div className="status">
                {props.earthquakesData.metadata.count} earthquakes on the last 30 days.
            </div>
            <div>
                {props.earthquakesData.features.map((feature, index) =>
                    <div id={index} key={index} className="EarthquakesListItem"
                        onClick={() => props.handleEarthquakeClick(index)}
                        style={{
                            boxShadow:
                                props.selectedEarthquakeIndex === index ? selectedBox : notSelectedBox
                        }}>
                        <div className="EarthquakeListItemTitle">{feature.properties.title}</div>
                        <div className="EarthquakeListItemDate">{String(new Date(feature.properties.time))}</div>
                    </div>)}
            </div>
        </div>
    );
}

export default List;