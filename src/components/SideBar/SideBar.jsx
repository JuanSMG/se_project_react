import "./SideBar.css";
import avatar from "../../assets/Avatar.svg";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sideBar__profile-container">
        <p className="sideBar__username">Terrence Tegegne</p>
        <img src={avatar} alt="User avatar" className="sideBar__avatar" />
      </div>
    </aside>
  );
}
