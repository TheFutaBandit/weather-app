import "./styles.css"
import {weather_extraction} from "./weatherConfig.js";

// const temp = document.querySelector("h1");

let data = await weather_extraction("New Delhi");
console.log(data.temperature_current());
console.log(data);
// data.data_current();
// console.log(data.weather_current().conditions);

// console.log(data);
// let hi = data.sayHello();
// console.log(hi);
// let b = await data.weather_current();
// console.log(b);



