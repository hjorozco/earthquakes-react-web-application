import React, { useContext } from 'react';
import { PinnedEarthquakesContext } from '../../App'

const selectedBox =
    "rgba(0, 0, 0, 0.16) 0px 1px 3px, rgb(93, 64, 55) 0px 0px 0px 2px";
const notSelectedBox = "rgba(0, 0, 0, 0.08) 0px 4px 12px"

const PinnedList = props => {

    const context = useContext(PinnedEarthquakesContext)

    return (
        <div
            className="EarthquakesList">
            <div>

                <div className="Status">
                    {context.pinnedEarthquakes.length} pinned earthquakes
                </div>

                {context.pinnedEarthquakes.map((feature, index) =>
                    <div id={index} key={index} className="EarthquakesListItem"
                        onClick={() => props.handlePinnedEarthquakeClick(index)}
                        style={{
                            boxShadow:
                                props.selectedPinnedEarthquake !== undefined ?
                                    props.selectedPinnedEarthquake.index === index ? selectedBox : notSelectedBox :
                                    notSelectedBox
                        }}>
                        <div className="EarthquakeListItemTitle">{feature.properties.title}</div>
                        <div className="EarthquakeListItemDate">{String(new Date(feature.properties.time))}</div>
                    </div>)}
            </div>

        </div>

    );

}

export default PinnedList;