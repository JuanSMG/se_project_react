import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";

function Main({ weatherData, handleCardClick, roundedTemp }) {
    return ( 
    <main>
        <WeatherCard weatherData = {weatherData} roundedTemp={roundedTemp} />
        <section className="cards">
            <p className="cards__text">
                Today is {roundedTemp}&deg; F / You may want to wear:
            </p>
            <ul className="cards__list">
                {defaultClothingItems
                 .filter((item) => {
                     return item.weather === weatherData.type;
                 })
                .map((item) => {
                    return <ItemCard 
                    key={item._id} 
                    item={item} 
                    onCardClick={handleCardClick} />;
                })}
            </ul>
        </section>
        </main>
    );
}

export default Main;