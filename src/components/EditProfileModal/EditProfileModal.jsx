import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const EditProfile = ({
  isOpen,
  onEditProfile,
  onCloseBtn,
  editProfileClick,
}) => {
  const defaultValues = {
    name: "",
    avatar: "",
  };
  const { values, handleChange, handleReset } = useForm(defaultValues);

  function handleSubmit(evt) {
    evt.preventDefault();
    onEditProfile(values);
    handleReset(evt);
  }

  return (
    <ModalWithForm
      title="Edit Profile"
      buttonText="Save Changes"
      name="edit-profile"
      isOpen={isOpen}
      onCloseBtn={onCloseBtn}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name*
        <input
          id="name"
          type="text"
          placeholder="Name"
          required
          minLength="1"
          maxLength="30"
          className="modal__input"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="avatar" className="modal__label">
        Avatar
        <input
          id="avatar"
          type="url"
          required
          placeholder="Avatar URL"
          className="modal__input"
          name="avatar"
          value={values.avatar}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default EditProfile;
