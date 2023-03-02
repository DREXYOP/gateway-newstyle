import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import Stats from "./components/Stats";
import { Commands } from "./components/Modules";
import Footer from "./components/Footer";
import { Raidmode } from './components/Raidmode';
import { Welcomecommands } from './components/Welcomecommands';
import { Antinukecommands } from './components/Antinukecommands';
import Abovefooter from './components/Abovefooter';
import Spacing from './components/Spacing';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
// import Premium from './components/Premium';

function App() {
  return (
    <div className="App">

      <NavBar />
      <Banner />
      <Stats />
      <Raidmode />
      <Welcomecommands />
      <Antinukecommands />
      {/* <Abovefooter /> */}
      {/* <Premium /> */}
      {/* <Commands /> */}
      <Footer />
    </div>
  );
}

export default App;
