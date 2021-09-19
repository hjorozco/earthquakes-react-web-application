import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import EarthquakesPage from './components/earthquakePage/EarthquakesPage';
import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";
import { useEffect, useState } from 'react';
import Footer from './components/Footer';

const App = () => {

  const [earthquakesData, setEarthquakesData] = useState({});

  const [status, setStatus] = useState("loading");

  const [selectedEarthquake, setSelectedEarthquake] = useState({});

  const [filters, setFilters] = useState({
    minMagnitude: 6,
    maxMagnitude: 10,
    getCloseEarthquakes: false,
  });

  const [location, setLocation] = useState({});

  const [locationAvailable, setLocationAvailable] = useState(true);

  // When the App component mounts, fetch earthquakes data and location
  useEffect(() => {
    console.log("Fetching data on mount")
    // Fetch data from the USGS API
    fetchDataFromUSGS();
    // Fetch data from the GeoLocation API
    fetchDataFromGeoAPI();
  }, []);

  const handleFiltersChange = e => {
    if (e.target.id === "getCloseEarthquakes") {
      let getCloseEarthquakes = !filters.getCloseEarthquakes;
      setFilters({ ...filters, [e.target.id]: getCloseEarthquakes });
    } else {
      setFilters({ ...filters, [e.target.id]: e.target.value.trimLeft() })
    }
  }

  const handleEarthquakeClick = index => {
    setSelectedEarthquake({
      feature: earthquakesData.features[index],
      index: index,
    });
  }

  const updateEarthquakes = () => {
    console.log("Fetching data on update");
    setStatus("loading");
    // Fetch data from the USGS API
    fetchDataFromUSGS();
  }

  const fetchDataFromUSGS = () => {
    let usgsArguments = [filters.minMagnitude, filters.maxMagnitude];
    if (locationAvailable && filters.getCloseEarthquakes) {
      usgsArguments.push(location);
    }
    fetchData(usgsArguments).then(result => {
      if (result !== null) {
        setEarthquakesData(result);
        setSelectedEarthquake({
          feature: result.features[0],
          index: 0,
        })
        setStatus("successful");
      } else {
        setEarthquakesData({});
        setStatus("failed");
      }
    });
  }

  const fetchDataFromGeoAPI = () => {
    fetchData().then(result => {
      if (result !== null) {
        setLocation({
          latitude: result.latitude,
          longitude: result.longitude,
        });
        setLocationAvailable(true);
      } else {
        setLocationAvailable(false);
      }
    });
  }

  return (
    <HashRouter>

      <NavBar />

      <Switch>
        <Route path="/glosary">
          <Glosary />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <EarthquakesPage
            status={status}
            earthquakesData={earthquakesData}
            selectedEarthquake={selectedEarthquake}
            handleEarthquakeClick={handleEarthquakeClick}
            updateEarthquakes={updateEarthquakes}
            handleFiltersChange={handleFiltersChange}
            filters={filters}
            locationAvailable={locationAvailable}
          />
        </Route>
      </Switch>

      <Footer />

    </HashRouter>
  );
}

export default App;

/**
 * Asynchronous funtion that fetches data from an API.
 * @param  {...any} args Arguments passed to the function.
 * @returns A JSON object containing the data fetched, or null if an error occurs.
 */
const fetchData = async (...args) => {

  let fetchUrl;

  if (args.length === 0) {
    // Fetch data from the GeoLocation API.
    fetchUrl = "https://geolocation-db.com/json/";
  } else {
    // Fetch data from USGS API.
    let limit = 20000;
    let minMagnitude = args[0][0];
    let maxMagnitude = args[0][1];
    const usgsEarthquakesApiEndpoint = "https://earthquake.usgs.gov/fdsnws/event/1/query";
    const queryParameters =
      `?format=geojson&limit=${limit}&minmagnitude=${minMagnitude}&maxmagnitude=${maxMagnitude}`
      + "&orderby=time";

    let locationFilters = "";
    if (args[0].length === 3) {
      locationFilters = `&latitude=${args[0][2].latitude}&longitude=${args[0][2].longitude}&maxradiuskm=2000`;
    }
    fetchUrl = usgsEarthquakesApiEndpoint + queryParameters + locationFilters;
    console.log(fetchUrl);
  }

  try {
    const response = await fetch(fetchUrl);
    if (response.ok) {
      try {
        const data = await response.json();
        return data;
      } catch (e) {
        return null;
      }
    } else {
      throw new Error(`${response.status} (${response.statusText})`);
    }
  } catch (e) {
    return null;
  }
}

function Glosary(props) {
  return <h2>Glosary</h2>;
}

function Contact(props) {
  return <h2>Contact</h2>;
}
