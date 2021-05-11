import "./SatelliteStat.css";

function SatelliteStat({ satellite }) {
  return (
    <>
      <div className="stat-div">
        <div>
          <h2>Latitude, Longitude: [{satellite.latitude && satellite.latitude.toFixed(3)}, {satellite.longitude && satellite.longitude.toFixed(3)}]</h2>
          <h2>Altitude: {satellite.altitude && satellite.altitude.toFixed(3)} km</h2>
          <h2>Speed: {satellite.velocity && satellite.velocity.toFixed(3)} km/h</h2>
        </div>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Worldmap_northern.svg" className="stat-img" alt="A polar projection of the northern hemisphere of Earth, with national borders" />
        </div>
      </div>
    </>
  );
};

export default SatelliteStat;
