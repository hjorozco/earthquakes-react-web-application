import './App.css';
import NavBar from './components/NavBar';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {

  return (
    <BrowserRouter>

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
          <Earthquakes />
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;

function Earthquakes(props) {
  return <h2>Earthquakes</h2>;
}

function Pinned(props) {
  return <h2>Pinned</h2>;
}

function Glosary(props) {
  return <h2>Glosary</h2>;
}

function Contact(props) {
  return <h2>Contact</h2>;
}
