function Position({ satellite }) {
  return (
    <>
      <h1>{satellite.latitude}</h1>
      <h1>{satellite.longitude}</h1>
      <h1>{satellite.altitude}</h1>
      <h1>{satellite.velocity}</h1>
    </>
  );
}

export default Position;