import "./ItemModal.css";
import closeBtn from "../../assets/close-btn.png";

function ItemModal({ isOpen, onCloseBtn, card, onDeleteClick }) {
  const handleDeleteClick = () => {
    onDeleteClick(card._id);
  };

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_image">
        <button onClick={onCloseBtn} type="button" className="modal__close">
          <img
            src={closeBtn}
            alt="close button"
            className="modal__close-image modal__close-image_prev"
            type="button"
          />
        </button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <h2 className="modal__weather">Weather: {card.weather}</h2>
          <button
            onClick={handleDeleteClick}
            type="button"
            className="modal__delete-btn"
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
