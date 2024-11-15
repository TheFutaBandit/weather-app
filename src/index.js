import "./styles.css"
import {weather_extraction} from "./weatherConfig.js";

const temp = document.querySelector("h1");

let data = weather_extraction();
let b = data.weather_current;
console.log(b);


