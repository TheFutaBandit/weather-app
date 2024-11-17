export const weather_extraction = async (location) => {
    let weather_data_object = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=DCZD5EQRWC7NRZQN93UXQFWFA`)
    let weather_data = await weather_data_object.json();
    let current_condition = weather_data.currentConditions;
    // console.log(current_condition);
    console.log(weather_data);

    const data_current = () => {
        console.log(weather_data);
    }

    const weather_current = () => {
        return current_condition;
    }

    const temperature_current = () => {
        return current_condition.temp;
    }

    const address_current = () => {
        return weather_data.address;
    }

    const condition_current = () => {
        return current_condition.conditions;
    }

    const time_current = () => {
        return current_condition.datetime;
    }

    const icon_current = () => {
        return current_condition.icon;
    }

    return {
        weather_current,
        temperature_current,
        data_current,
        address_current,
        condition_current,
        time_current,
        icon_current
    }

}

