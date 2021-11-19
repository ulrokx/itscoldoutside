import constants from "../globals";

const getWind = async () => {
  try {
    const response = await fetch(constants.currentURL);
    const afterJSON = await response.json();
    if (!afterJSON) {
      return "failed to load";
    }
    return [afterJSON.current.wind_mph, afterJSON.current.wind_degree];
  } catch (error) {
    console.error(error);
  }
};

export default getWind;
