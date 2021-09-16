import './App.css';
import NavBar from './components/NavBar';
import EarthquakesPage from './components/EarthquakesPage';
import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {

  /**
 * Asynchronous funtion that fetches data from the USGS Earthquakes API.
 * 
 * @param {String} minMagnitude The minimum magnitude of the earthquakes to fetch.
 * @param {String} maxMagnitude The maximum magnitude of the earthquakes to fetch.
 * @returns A JSON object containing the list of earthquakes fetched, or null if an error occurs.
 */
  // const fetchDataFromUsgs = async (minMagnitude, maxMagnitude) => {
  //   let limit = 20000;
  //   const alertErrorMessage = "Error on the connection to the United States Geological Survey";
  //   const usgsEarthquakesApiEndpoint = "https://earthquake.usgs.gov/fdsnws/event/1/query";
  //   const queryParameters =
  //     `?format=geojson&limit=${limit}&minmagnitude=${minMagnitude}&maxmagnitude=${maxMagnitude}`
  //     + "&orderby=time";
  //   const fetchUrl = usgsEarthquakesApiEndpoint + queryParameters;
  //   console.log("URL used to fetch data from USGS Earthquakes API:\n" + fetchUrl);

  //   disableButton(true, document.getElementById("update-button"));
  //   document.getElementById("list-title").innerHTML = "Loading earthquakes list";
  //   document.getElementById("list-content").innerHTML = "";
  //   document.getElementById("details-content").style.display = "none";
  //   document.getElementById("map-content").style.display = "none";
  //   document.getElementById("details-container").style.border = "none";

  //   try {
  //     const response = await fetch(fetchUrl);
  //     if (response.ok) {
  //       try {
  //         const data = await response.json();
  //         return data;
  //       } catch (error) {
  //         alert(alertErrorMessage);
  //         return null;
  //       }
  //     } else {
  //       throw new Error(`${response.status} (${response.statusText})`);
  //     }
  //   } catch (error) {
  //     alert(alertErrorMessage);
  //     return null;
  //   }
  // }

  return (
    <HashRouter>

      <NavBar />

      <Switch>
        <Route path="/pinned">
          <Pinned />
        </Route>
        <Route path="/glosary">
          <Glosary />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <EarthquakesPage />
        </Route>
      </Switch>

    </HashRouter>
  );
}

export default App;

function Pinned(props) {
  return <h2>Pinned</h2>;
}

function Glosary(props) {
  return <h2>Glosary</h2>;
}

function Contact(props) {
  return <h2>Contact</h2>;
}
