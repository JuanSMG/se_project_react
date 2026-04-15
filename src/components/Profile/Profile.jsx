import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import Sidebar from "../SideBar/SideBar";

export default function Profile({ clothingItems, handleCardClick, handleAddBtnClick }) {
  return (
    <section className="profile">
      <Sidebar />
      <ClothesSection
        clothingItems={clothingItems}
        handleCardClick={handleCardClick}
        handleAddBtnClick={handleAddBtnClick}
      />
    </section>
  );
}
