export const weather_extraction = async (location) => {
    let weather_data_object = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/New Delhi?key=DCZD5EQRWC7NRZQN93UXQFWFA")
    let weather_data = await weather_data_object.json();

    const weather_current = async () => {
        return await weather_data.currentConditions;
    }

    console.log(weather_data);
    // console.log(weather_data.currentConditions.conditions);
    console.log()

    return {
        weather_current,
    }
}

// class weather_extraction {
//     constructor(location) {
//         this.location = location;
//     }

//     async weather_extraction() {
//         let weather_data_object = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/New Delhi?key=DCZD5EQRWC7NRZQN93UXQFWFA")
//         let weather_data = await weather_data_object.json();
//     }
// }

