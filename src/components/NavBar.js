import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";

const NavBar = () => {

    let history = useHistory();

    // When Navigation Bar mounts, make the browser navigate to the home page
    useEffect(() => {
        history.push("/");
    }, [history]);

    // State: Array that holds a boolean for each of the options on the Navigation Bar. That boolean
    // is true if that option is active, false otherwise.
    const [active, setActive] = useState([true]);

    /**
     * Activates (changes background and color) the clicked option by setting its value on the state 
     * to true
     * @param {Event} e Event with information about the clicked object.
     */
    const handleClick = e => {
        let tempActive = [];
        tempActive[e.currentTarget.id] = true;
        setActive(tempActive);
    }

    const background = activeIndex =>
        active[activeIndex] ?
            { backgroundColor: "#3E2723" } :  // Brown 900
            { backgroundColor: "#5D4037" }    // Brown 700

    const fontWeight = activeIndex =>
        active[activeIndex] ?
            { color: "#FFF8E1" } :           // Amber 50
            { color: "#FFD54F" }             // Amber 300

    // render() {
    return (
        <nav className="NavBar">
            <ul>
                <li id="0" onClick={handleClick} style={background(0)}>
                    <Link to="/">
                        <span style={fontWeight(0)}>Earthquakes</span>
                    </Link>
                </li>
                <li id="1" onClick={handleClick} style={background(1)}>
                    <Link to="/pinned">
                        <span style={fontWeight(1)}>Pinned</span>
                    </Link>
                </li>
                <li id="2" onClick={handleClick} style={background(2)}>
                    <Link to="/glosary">
                        <span style={fontWeight(2)}>Glosary</span>
                    </Link>
                </li>
                <li id="3" onClick={handleClick} style={background(3)}>
                    <Link to="/contact">
                        <span style={fontWeight(3)}>Contact</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );

}

export default NavBar;