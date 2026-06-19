import { useContext, useState, useEffect } from "react";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { NavLink } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import "./Header.css";
import logo from "../../assets/logo.svg";

function Header({
  handleAddBtnClick,
  weatherData,
  handleSignupClick,
  handleLoginClick,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const user = useContext(CurrentUserContext);

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (user.name) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [user.name]);

  const userInitial = user.name?.charAt(0).toUpperCase();
  console.log(user);
  return (
    <header className="header">
      <NavLink to="/">
        <img className="header__logo" alt="WTWR logo" src={logo} />
      </NavLink>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />
      {loggedIn && (
        <button
          onClick={handleAddBtnClick}
          type="button"
          className="header__add-clothes-btn"
        >
          + Add Clothes
        </button>
      )}
      {!loggedIn && (
        <button onClick={handleSignupClick} className="header__register-btn">
          Sign Up
        </button>
      )}

      {!loggedIn && (
        <button onClick={handleLoginClick} className="header__login-btn">
          Log In
        </button>
      )}
      <NavLink className="header__nav-link" to="/profile">
        <div className="header__user-container">
          <p className="header__username">{user.name}</p>
          {user.avatar ? (
            <img
              src={user.avatar || ""}
              alt="Users avatar"
              className={loggedIn ? "header__avatar" : ""}
            />
          ) : (
            <div className={loggedIn ? "header__avatar-placeholder" : ""}>
              {userInitial}
            </div>
          )}
        </div>
      </NavLink>
    </header>
  );
}

export default Header;
