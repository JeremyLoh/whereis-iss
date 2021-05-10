import L from "leaflet";
import { useEffect } from "react";
import "./Map.css";

function Map() {
  useEffect(() => {
    const mymap = L.map('mapid').setView([51.505, -0.09], 13);
  }, []);

  return (
    <>
      <div id="mapid"></div>
    </>
  );
}

export default Map;