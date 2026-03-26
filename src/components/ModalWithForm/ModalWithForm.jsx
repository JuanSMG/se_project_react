import "./ModalWithForm.css";
import closeBtn from "../../assets/close-form-btn.png";

function ModalWithForm({
  children,
  title,
  buttonText,
  isOpen,
  name,
  onCloseBtn,
}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""} modal_type_${name}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onCloseBtn} type="button" className="modal__close">
          <img
            src={closeBtn}
            alt="close button"
            className="modal__close-image"
          />
        </button>
        <form className="modal__form" name={name}>
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
