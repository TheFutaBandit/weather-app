import "./styles.css"
import {weather_extraction} from "./weatherConfig.js";

// const temp = document.querySelector("h1");

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


// data.data_current();
// console.log(data.weather_current().conditions);

// console.log(data);
// let hi = data.sayHello();
// console.log(hi);
// let b = await data.weather_current();
// console.log(b);



