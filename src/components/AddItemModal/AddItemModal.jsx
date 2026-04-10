import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ isOpen, onAddItem, onCloseBtn }) => {
  const defaultValues = {
    name: "",
    link: "",
    weather: "",
  };
  const { values, handleChange } = useForm(defaultValues);

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddItem(values);
  }

  return (
    /* Don't forget to pass appropriate props to ModalWithForm */
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      name="add-garment"
      isOpen={isOpen}
      onCloseBtn={onCloseBtn}
      onSubmit={handleSubmit}
    >
      <>
        <label className="modal__label">
          Name
          <input
            type="text"
            name="name"
            className="modal__input"
            id="name"
            placeholder="Name"
            required
            minLength="1"
            maxLength="30"
            value={values.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="imageURL" className="modal__label">
          Image
          <input
            type="url"
            name="link"
            className="modal__input"
            id="imageURL"
            placeholder="Image URL"
            required
            value={values.link}
            onChange={handleChange}
          />
        </label>
        <fieldset className="modal__radio-buttons">
          <legend className="modal__legend">Select the weather type:</legend>
          <label htmlFor="hot" className="modal__label modal__label_type_radio">
            <input
              id="hot"
              type="radio"
              className="modal__radio-input"
              name="weather"
              value="hot"
              onChange={handleChange}
            />
            Hot
          </label>
          <label
            htmlFor="warm"
            className="modal__label modal__label_type_radio"
          >
            <input
              id="warm"
              type="radio"
              className="modal__radio-input"
              name="weather"
              value="warm"
              onChange={handleChange}
            />
            Warm
          </label>
          <label
            htmlFor="cold"
            className="modal__label modal__label_type_radio"
          >
            <input
              id="cold"
              type="radio"
              className="modal__radio-input"
              name="weather"
              value="cold"
              onChange={handleChange}
            />
            Cold
          </label>
        </fieldset>
      </>
    </ModalWithForm>
  );
};

export default AddItemModal;
