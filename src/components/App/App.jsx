import { useEffect, useState, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import * as auth from "../../utils/auth";
import { getToken } from "../../utils/token";
import * as api from "../../utils/api";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import Register from "../RegisterModal/RegisterModal";
import Login from "../LoginModal/LoginModal";
import Profile from "../Profile/Profile";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, apiKey } from "../../utils/constants";

import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { addItem, getItems, deleteItem } from "../../utils/api";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
    isDay: false,
  });

  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(getToken());

  const [activeModal, setActiveModal] = useState("log-in");
  const [selectedCard, setSelectedCard] = useState({});

  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);

  useEffect(() => {
    getItems();
    setToken(token);
    auth
      .getUserContent(token)
      .then((currentUser) => {
        setCurrentUser(currentUser);
        setIsLoggedIn(true);
      })
      .catch(console.error);
  }, []);

  const handleSignupClick = () => {
    setActiveModal("sign-up");
  };

  const handleLoginClick = () => {
    setActiveModal("log-in");
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddBtnClick = () => {
    setActiveModal("add-garment");
  };

  const isOwn = selectedCard.owner === currentUser._id;

  const handleRegistration = ({ email, password, name, avatar }) => {
    auth
      .register({ email, password, name, avatar })
      .then(() => {
        return auth.authorize({ email, password });
      })
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        setIsLoggedIn(true);
        closeActiveModal();
        return auth.getUserContent(data.token);
      })
      .catch((err) => {
        const errorMessage = err.message || "Registration failed";
        console.error("Registration error:", err);
      });
  };

  const handleLogin = ({ email, password }) => {
    if (!email || !password) {
      return;
    }
    auth
      .authorize({ email, password })
      .then((res) => {
        console.log(res);
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          setCurrentUser(currentUser);
          setIsLoggedIn(true);
          closeActiveModal();
        }
      })
      .catch(console.error);
  };

  const onAddItem = (inputValues) => {
    addItem(inputValues, token)
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  const roundedWeatherTemp = Math.round(
    weatherData.temp[currentTemperatureUnit],
  );

  useEffect(() => {
    getWeather(coordinates, apiKey)
      .then((data) => {
        const filterData = filterWeatherData(data);
        setWeatherData(filterData);
      })
      .catch(console.error);

    getItems()
      .then((data) => {
        setClothingItems(data);
        data.reverse();
      })
      .catch(console.error);
  }, []);

  const handleCardDelete = () => {
    const id = selectedCard._id;
    deleteItem(id, token)
      .then(() => {
        setClothingItems((newList) =>
          newList.filter((item) => item._id !== id),
        );
        closeActiveModal();
        setSelectedCard({});
      })
      .catch(console.error);
  };

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <div className="page__wrapper">
            <Header
              handleSignupClick={handleSignupClick}
              handleLoginClick={handleLoginClick}
              handleAddBtnClick={handleAddBtnClick}
              weatherData={weatherData}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    clothingItems={clothingItems}
                    handleCardClick={handleCardClick}
                    roundedWeatherTemp={roundedWeatherTemp}
                    isLoggedIn={isLoggedIn}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      clothingItems={clothingItems}
                      handleCardClick={handleCardClick}
                      handleAddBtnClick={handleAddBtnClick}
                      isLoggedIn={isLoggedIn}
                      isOwn={isOwn}
                    />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <Footer />
          </div>
          <AddItemModal
            isloggedIn={isLoggedIn}
            isOpen={activeModal === "add-garment"}
            onCloseBtn={closeActiveModal}
            onAddItem={onAddItem}
          />
          <ItemModal
            isOpen={activeModal === "preview"}
            card={selectedCard}
            onCloseBtn={closeActiveModal}
            onDeleteClick={handleCardDelete}
            isOwn={isOwn}
          />
          <Register
            isOpen={activeModal === "sign-up"}
            onSignUp={handleRegistration}
            onCloseBtn={closeActiveModal}
            onLoginClick={handleLoginClick}
          />
          <Login
            isOpen={activeModal === "log-in"}
            onLogin={handleLogin}
            onCloseBtn={closeActiveModal}
            onSignupClick={handleSignupClick}
          />
        </div>
      </CurrentUserContext.Provider>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
