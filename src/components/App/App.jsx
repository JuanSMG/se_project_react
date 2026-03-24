import { useEffect, useState } from "react";

import './App.css';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, APIkey } from "../../utils/constants";

function App() {
  const [weatherData, setWeatherData] = useState({ 
    type: "", 
    temp: { F: 999 },
    city: "", 
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});


  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };


  const handleAddBtnClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  }

  const roundedTemp = Math.round(weatherData.temp.F)

  useEffect(() => {
    getWeather(coordinates, APIkey)
    .then((data) => {
      const filterData = filterWeatherData(data);
      setWeatherData(filterData);
    })
    .catch(console.error)
  }, []);

  return (
  <div className="page">
    <div className="page__wrapper">
      <Header handleAddBtnClick={handleAddBtnClick} weatherData = {weatherData} />
      <Main weatherData={weatherData} handleCardClick={handleCardClick} roundedTemp={roundedTemp} />
      <Footer />
    </div>
    <ModalWithForm 
    title="New garment" 
    buttonText="Add garment" 
    activeModal={activeModal}
    onCloseBtn={closeActiveModal}
    >
      <label htmlFor="name" className="modal__label">
              Name 
              <input
             type="text" 
             className="modal__input" 
             id="name" 
             placeholder="Name"/>
        </label>
        <label htmlFor="imageURL" className="modal__label">
            Image
            <input
             type="url" 
             className="modal__input" 
             id="imageURL" 
             placeholder="Image URL"/>
        </label>
        <fieldset className="modal__radio-buttons">
            <legend className="modal__legend">Select the weather type:</legend>
            <label htmlFor="hot" className="modal__label modal__label_type_radio">
                <input
                 id="hot" 
                 type="radio" 
                 className="modal__radio-input" /> Hot
            </label>
            <label htmlFor="warm" className="modal__label modal__label_type_radio">
                <input 
                 id="warm" 
                 type="radio" 
                 className="modal__radio-input" /> Warm
            </label>
            <label htmlFor="cold" className="modal__label modal__label_type_radio">
                <input  
                 id="cold"  
                 type="radio" 
                 className="modal__radio-input" /> Cold
            </label>
        </fieldset>
    </ModalWithForm>
    <ItemModal activeModal={activeModal} 
    card={selectedCard} 
    onCloseBtn={closeActiveModal} />
  </div>
  )
}

export default App;
