import "./ModalWithForm.css"
import closeBtn from "../../assets/close-btn.png"

function ModalWithForm({children, title, buttonText, activeModal, onCloseBtn }) {
    return ( 
    <div className={`modal ${activeModal === "add-garment" && "modal_opened"}`}> 
    <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onCloseBtn} type="button" className="modal__close">
        <img src={closeBtn} alt="close button" className="modal__close-image" />
        </button>
        <form className="modal__form">
            {children}
        <button type="submit" className="modal__submitbtn">
            {buttonText}
        </button>
        </form>
     </div>
    </div>
 );
}

export default ModalWithForm;

