import constants from '../globals';

const getSunTimes = async () => {
    try
{    const response = await fetch(constants.forecastURL);
    const afterJSON = await response.json();
    return [afterJSON.forecast.forecastday[0].astro.sunrise, afterJSON.forecast.forecastday[0].astro.sunset];
 } catch (err) {{
     console.error(err);
 }}
}

export default getSunTimes;