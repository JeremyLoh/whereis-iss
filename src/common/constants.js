const API_URL = "https://api.wheretheiss.at/v1/";
const SATELLITES_ENDPOINT = "https://api.wheretheiss.at/v1/satellites/";
const COORDINATES_ENDPOINT = "https://api.wheretheiss.at/v1/coordinates/";
const ISS_NORAD_CATALOG_ID = "25544";
const OPENSTREETMAP_ATTRIBUTION = "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors";
const TILE_URL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

const ISS_ICON_PARAMS = {
  iconUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d0/International_Space_Station.svg",
  iconSize: [50, 32],
  iconAnchor: [25, 16],
};

module.exports.API_URL = API_URL;
module.exports.SATELLITES_ENDPOINT = SATELLITES_ENDPOINT;
module.exports.COORDINATES_ENDPOINT = COORDINATES_ENDPOINT
module.exports.ISS_NORAD_CATALOG_ID = ISS_NORAD_CATALOG_ID;
module.exports.OPENSTREETMAP_ATTRIBUTION = OPENSTREETMAP_ATTRIBUTION;
module.exports.TILE_URL = TILE_URL;
module.exports.ISS_ICON_PARAMS = ISS_ICON_PARAMS;