import React from "react";

const EarthquakeMap = props => {

    let content;
    if (props.status === "successful") {

        content = <div>
            Map!
        </div>
    }

    return (
        <div className="EarthquakesMap">{content}</div>
    );
}

export default EarthquakeMap;