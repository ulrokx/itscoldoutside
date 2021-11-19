import constants from  '../globals'

const getHighLow = async ():Promise<number[] | string> => {
  try {
    const response = await fetch(constants.forecastURL);
    const afterJSON = await response.json();
    if (!afterJSON) {
        return "failed to load";
    }
    return [afterJSON.forecast.forecastday[0].day.mintemp_f,afterJSON.forecast.forecastday[0].day.maxtemp_f];
  } catch(error) {
    console.error(error);
  }
}
export default getHighLow;