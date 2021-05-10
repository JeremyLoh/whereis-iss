import L from "leaflet";
import { useEffect, useState } from "react";
import { OPENSTREETMAP_ATTRIBUTION, TILE_URL } from "../common/constants";
import "./Map.css";

function Map({ latitude, longitude, iconParams }) {
  const [currentMarker, setMarker] = useState(undefined);

  useEffect(() => {
    const map = L.map('mapid').setView([0, 0], 1);
    const tiles = L.tileLayer(TILE_URL, {
      attribution: OPENSTREETMAP_ATTRIBUTION,
      maxZoom: 12,
    });
    tiles.addTo(map);

    const myIcon = L.icon(iconParams);
    const marker = L.marker([0, 0], {
      icon: myIcon,
    }).addTo(map);
    setMarker(marker);
    return () => map.remove();
  }, [iconParams]);

  useEffect(() => {
    if (currentMarker && latitude && longitude) {
      currentMarker.setLatLng([latitude, longitude]);
    }
  }, [latitude, longitude, currentMarker]);

  return (
    <>
      <div id="mapid"></div>
    </>
  );
}

export default Map;