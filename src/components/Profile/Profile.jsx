import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import Sidebar from "../SideBar/SideBar";

export default function Profile({
  clothingItems,
  handleCardClick,
  handleAddBtnClick,
  isOwn,
  editProfileClick,
  logOutClick,
  setLoggedIn,
}) {
  return (
    <section className="profile">
      <Sidebar
        editProfileClick={editProfileClick}
        logOut={logOutClick}
        setLoggedIn={setLoggedIn}
      />
      <ClothesSection
        clothingItems={clothingItems}
        handleCardClick={handleCardClick}
        handleAddBtnClick={handleAddBtnClick}
        isOwn={isOwn}
      />
    </section>
  );
}
