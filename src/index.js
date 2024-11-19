import "./styles.css"
import clearDay from "./WeatherIcons-PNG/Set/clear-day.png"
import {weather_extraction} from "./weatherConfig.js";




const weather_application = async (location) => {
    let data = await weather_extraction(location);

    let toggleTemp = (temp) => {
        return (((temp - 32) * 5)/9).toFixed(1);
    }

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
    
        return result_array;
    }
    
    const makeWeatherTile = (icon,temp,time) => {
        const weather_tile = document.createElement("div");
        weather_tile.classList.add("weather-tile");
    
        const tile_icon = document.createElement("div");
        tile_icon.className = "tile icon";
        
        console.log(icon);
    
        const img_icon = document.createElement("img");
        img_icon.src = clearDay;
        tile_icon.appendChild(img_icon);
    
        const tile_temp = document.createElement("div");
        tile_temp.className = "tile temp";
        tile_temp.textContent = temp;
    
        const tile_time = document.createElement("div");
        tile_time.className = "tile time";
        tile_time.textContent = time;
    
        weather_tile.appendChild(tile_icon);
        weather_tile.appendChild(tile_temp);
        weather_tile.appendChild(tile_time);
    
        const parent = document.querySelector(".tile-body");
        parent.appendChild(weather_tile);
    }
    
    const udpateWeatherArray = (() => {
        const parent = document.querySelector(".tile-body");
        parent.innerHTML = "";
        let weather_array = getWeatherArray(data.day_array());
        for(let i = 0;i<6;i++) {
            let df = weather_array[i];
            makeWeatherTile(df.icon,toggleTemp(df.temp),df.datetime.slice(0,5));
        }
        console.log(weather_array[0]);
    })();

    const current_temperature_control = (() => {
        const temperature = document.querySelector(".temperature");
        temperature.textContent = toggleTemp(data.temperature_current());
    })();

    const current_location_control = (() => {
        const location = document.querySelector(".location");
        location.textContent = data.address_current();
    })();
    
    const current_condition_control = (() => {
        const condition = document.querySelector(".status");
        condition.textContent = data.condition_current();
    })();
    
    const current_time_control = (() => {
        const time = document.querySelector(".time");
        time.textContent = data.time_current();
    })();

}

let boot_up = weather_application("Vietnam");
boot_up;

const user_input = (() => {
    const description_body = document.querySelector(".description-tile");
    description_body.addEventListener("click", () => {
        let user_location = prompt("Please Enter new Location");
        let toggle_boot = weather_application(user_location);
        toggle_boot;
    })
})();




