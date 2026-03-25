import "./ItemModal.css"
import closeBtn from "../../assets/close-btn.png"

function ItemModal({ isOpen, onCloseBtn, card }) {
    return (
       <div className={`modal ${isOpen ? 'modal__opened' : ''}`}>
            <div className="modal__content modal__content_type_image">
                <button onClick={onCloseBtn} type="button" className="modal__close">
                        <img src={closeBtn} alt="close button" className="modal__close-image" />
                </button>
                <img src={card.link} alt={card.name} className="modal__image" />
                <div className="modal__footer">
                    <h2 className="modal__caption">{card.name}</h2>
                    <p className="modal__weather">Weather: {card.weather}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemModal