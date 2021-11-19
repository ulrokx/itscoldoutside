import constants from  '../globals'

const getHumidity = async ():Promise<number | string> => {
  try {
    const response = await fetch(constants.currentURL);
    const afterJSON = await response.json();
    if (!afterJSON) {
        return "failed to load";
    }
    return afterJSON.current.humidity;
  } catch(error) {
    console.error(error);
    return "failed to load";
  }
}
export default getHumidity;