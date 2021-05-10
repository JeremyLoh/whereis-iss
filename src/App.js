import './App.css';
import { ISS_ICON_PARAMS } from "./common/constants";
import Position from "./view/Position";
import Satellite from "./model/satellite";
import { useEffect, useState } from 'react';

function App() {
  const [satellite, setSatellite] = useState({});

  useEffect(() => {
    function infinite() {
      async function fetchData() {
        const info = await Satellite.getIssInfo();
        setSatellite(info);
      };

      setTimeout(() => {
        fetchData();
        infinite();
      }, 2000);
    };

    infinite();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        whereis the ISS?
      </header>
      <div>
        <Position satellite={satellite} iconParams={ISS_ICON_PARAMS} />
      </div>
    </div>
  );
}

export default App;
