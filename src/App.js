import logo from './logo.svg';
import './App.css';
import Position from "./view/Position";
import Satellite from "./model/satellite";
import { useEffect, useState } from 'react';

function App() {
  const [satellite, setSatellite] = useState({});

  useEffect(() => {
    async function fetchData() {
      const info = await Satellite.getIssInfo();
      setSatellite(info);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        whereis the ISS?
      </header>
      <div>
        <Position satellite={satellite} />
      </div>
    </div>
  );
}

export default App;
