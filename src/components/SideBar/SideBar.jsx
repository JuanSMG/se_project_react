import "./SideBar.css";
import avatar from "../../assets/Avatar.svg";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function Sidebar({ editProfileClick, logOut, setLoggedIn }) {
  const user = useContext(CurrentUserContext);

  const userInitial = user.name?.charAt(0).toUpperCase();

  return (
    <aside className="sidebar">
      <div className="sideBar__profile-container">
        <p className="sideBar__username">{user.name}</p>
        {user.avatar ? (
          <img
            src={user.avatar}
            alt="Users avatar"
            className="sideBar__avatar"
          />
        ) : (
          <div className="sideBar__avatar-placeholder">{userInitial}</div>
        )}
      </div>
      <div className="sideBar__Profile-control">
        <button
          onClick={editProfileClick}
          type="button"
          className="sideBar__edit-profile-btn"
        >
          Change profile data
        </button>
        <button onClick={logOut} className="side__logout-btn" type="button">
          Log out
        </button>
      </div>
    </aside>
  );
}
