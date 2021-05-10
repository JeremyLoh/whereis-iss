const { SATELLITES_ENDPOINT, ISS_NORAD_CATALOG_ID } = require("../common/constants");

const getIssInfo = async () => {
  try {
    const issId = ISS_NORAD_CATALOG_ID;
    const response = await fetch(SATELLITES_ENDPOINT + issId);
    const json = await response.json();
    return json;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

module.exports.getIssInfo = getIssInfo;