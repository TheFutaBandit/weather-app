import "./styles.css"
import {weather_extraction} from "./weatherConfig.js";

let toggleTemp = (temp) => {
    return (((temp - 32) * 5)/9);
}

let data = await weather_extraction("New Delhi");
console.log(data.temperature_current());
console.log(data);

const temperature = document.querySelector(".temperature");
temperature.textContent = toggleTemp(data.temperature_current()).toFixed(1);

const location = document.querySelector(".location");
location.textContent = data.address_current();

const condition = document.querySelector(".status");
condition.textContent = data.condition_current();

const time = document.querySelector(".time");
time.textContent = data.time_current();

console.log(data.icon_current());

const getWeatherArray = (days) => {
    let day_0 = days[0];
    let day_1 = days[1];

    let time_array = day_0.hours.concat(...day_1.hours);

    let current_hour = data.time_current().slice(0,2);

    let hour_array = time_array.map((item) => {
            return item.datetime.slice(0,2);
    });

    let hour_index = hour_array.indexOf(current_hour)

    let result_array = [...time_array.splice(hour_index+1,6)];

    console.log(result_array);

    return result_array;
}

const udpateWeatherArray = (() => {
    let weather_array = getWeatherArray(data.day_array());

    
})();


// data.data_current();
// console.log(data.weather_current().conditions);

// console.log(data);
// let hi = data.sayHello();
// console.log(hi);
// let b = await data.weather_current();
// console.log(b);



