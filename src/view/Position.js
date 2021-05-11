import Map from "./Map";

function Position({ satellite, iconParams }) {
  return (
    <>
      <Map key={satellite} latitude={satellite.latitude} longitude={satellite.longitude} iconParams={iconParams} />
    </>
  );
}

export default Position;