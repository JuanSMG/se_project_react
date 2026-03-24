import "./WeatherCard.css"
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";

function WeatherCard({ weatherData, roundedTemp }) {
    const filteredOptions = weatherOptions.filter((option) => {
        return (
        option.day === weatherData.isDay && 
        option.condition === weatherData.condition
    );
    });

    let weatherOption;
    if (filteredOptions.length === 0) {
        weatherOption = defaultWeatherOptions[weatherData.isDay ? "day" : "night"];
    } else {
        weatherOption = filteredOptions[0];
    }
    

    return <section className="weather-card">
        <p className="weather-card_temp">{roundedTemp}&deg;F</p>
        <img src={weatherOption?.url} 
        alt={`Image of ${weatherOption?.day ? "day" : "night"}time 
        ${weatherOption ? weatherOption?.condition : ""
        } weather`} 
        className="weather-card__image" />
    </section>
}

export default WeatherCard;