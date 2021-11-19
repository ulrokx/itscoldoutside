import constants from "../globals";
const getTemperature = async () => {
  try {
    const response = await fetch(constants.currentURL);
    const afterJSON = await response.json();
    if (!afterJSON) {
      return "failed to load";
    }
    return afterJSON.current.temp_f;
  } catch (error) {
    console.error(error);
  }
};

export default getTemperature;
