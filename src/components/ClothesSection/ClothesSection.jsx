import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function ClothesSection({
  clothingItems,
  handleCardClick,
  handleAddBtnClick,
  isOwn,
  onCardLike,
  isLoggedIn,
}) {
  const currentUser = useContext(CurrentUserContext);

  const currentUserItems = currentUser
    ? clothingItems.filter((item) => item.owner === currentUser._id)
    : [];

  return (
    <div className="clothes-section">
      <div className="clothes-section__row">
        <p className="clothes-section__text">Your items</p>
        <button
          onClick={handleAddBtnClick}
          type="button"
          className="clothes-section__btn"
        >
          + Add new
        </button>
      </div>
      <ul className="clothes-section__list">
        {currentUserItems?.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={handleCardClick}
              onCardLike={onCardLike}
              isLoggedIn={isLoggedIn}
            />
          );
        })}
      </ul>
    </div>
  );
}
