import React from "react";
import AboutForm from "./AboutForm";

const AboutPage = () => {

    return (
        <div className="Background">
            <div className="AboutPage">
                <div className="AboutParagraph">
                    <span className="BoldText">This website shows information about earthquakes located and
                        registered by the <a href="https://www.usgs.gov/" target="_blank"
                            rel="noopener noreferrer">United States Geological Survey</a> and its
                        contributing agencies,</span> that happened in the world on the last 30 days,
                    filtered by a minimum, maximum magnitude and distance from you.
                </div>
                <div className="AboutParagraph">
                    <span className="BoldText">It is important to note that the USGS does not locate all
                        earthquakes in the world.</span> The USGS registers earthquakes worldwide of
                    magnitude 5.0 and larger in 30 minutes or less. It may not rapidly register
                    earthquakes smaller than 5.0 outside the United States unless they have caused
                    significant damage or are widely felt. Earthquakes occurring outside the US and
                    smaller than magnitude 4.5 can be difficult for the USGS to register if there are
                    not enough data. The USGS locates earthquakes with magnitude 4.0 and larger within
                    the contiguous US and populated regions of Alaska within 30 minutes. There are many
                    regional networks around the world that can record smaller earthquakes
                    in their region than the USGS global network can, and in many cases these regional
                    networks do not share their data with the USGS.
                </div>
                <div className="AboutParagraph BoldText">
                    Check with your regional network for more comprehensive earthquakes information on
                    your region.
                </div>
                <div className="AboutParagraph">
                    <span className="BoldText">Warning! If you delete your browser data your pinned 
                    earthquakes will be deleted too.</span> Pinned earthquakes are saved on your 
                    device local storage and are associated with the browser you are using now. They 
                    will not show up on a different device or browser.
                </div>

                <hr />

                <div className="CommentsFormTitle">
                    Get in touch!
                </div>

                <AboutForm/>                
            </div>
        </div>
    );
}

export default AboutPage;