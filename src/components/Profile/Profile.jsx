import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import Sidebar from "../SideBar/SideBar";

export default function Profile({
  clothingItems,
  handleCardClick,
  handleAddBtnClick,
  isLoggedIn,
  isOwn,
  editProfileClick,
  logOutClick,
  setIsLoggedIn,
  onCardLike,
}) {
  return (
    <section className="profile">
      <Sidebar
        editProfileClick={editProfileClick}
        logOut={logOutClick}
        setLoggedIn={setIsLoggedIn}
      />
      <ClothesSection
        clothingItems={clothingItems}
        handleCardClick={handleCardClick}
        handleAddBtnClick={handleAddBtnClick}
        isOwn={isOwn}
        isLoggedIn={isLoggedIn}
        onCardLike={onCardLike}
      />
    </section>
  );
}
