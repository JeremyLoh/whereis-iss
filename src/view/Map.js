import L from "leaflet";
import { useEffect, useState } from "react";
import { OPENSTREETMAP_ATTRIBUTION, TILE_URL } from "../common/constants";
import "./Map.css";

function Map({ latitude, longitude, iconParams }) {
  const [currentMarker, setMarker] = useState(undefined);
  const [currentMap, setMap] = useState(undefined);
  const [firstMapLoad, setFirstMapLoad] = useState(true);
  const [previousLocation, setPreviousLocation] = useState(undefined);
  const [polyline] = useState(new L.Polyline([], {
    color: 'red',
    weight: 3,
    opacity: 0.5,
    smoothFactor: 1
  }));

  useEffect(() => {
    const map = L.map('mapid', {
      worldCopyJump: true,
    });
    const tiles = L.tileLayer(TILE_URL, {
      attribution: OPENSTREETMAP_ATTRIBUTION,
      maxZoom: 12,
    });
    tiles.addTo(map);
    polyline.addTo(map);

    const myIcon = L.icon(iconParams);
    const marker = L.marker([0, 0], {
      icon: myIcon,
    }).addTo(map);
    setMarker(marker);
    setMap(map);
    return () => map.remove();
  }, [iconParams, polyline]);

  useEffect(() => {
    if (currentMap && previousLocation) {
      polyline.addLatLng(previousLocation);
    }
  }, [previousLocation, currentMap, polyline]);

  useEffect(() => {
    if (currentMarker && latitude && longitude) {
      currentMarker.setLatLng([latitude, longitude]);
      if (firstMapLoad) {
        currentMap.setView([latitude, longitude], 5);
        setFirstMapLoad(false);
      }
      // Add previous locations of ISS
      setPreviousLocation(new L.LatLng(latitude, longitude));
    }
  }, [latitude, longitude, currentMarker, currentMap, firstMapLoad]);

  return (
    <>
      <div id="mapid"></div>
    </>
  );
}

export default Map;