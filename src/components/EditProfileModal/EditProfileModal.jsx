import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext, useEffect, useState } from "react";

const EditProfile = ({
  isOpen,
  onEditProfile,
  onCloseBtn,
  editProfileClick,
}) => {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser?.name || "");
  const [avatar, setAvatar] = useState(currentUser?.avatar || "");

  const handleName = (e) => {
    e.preventDefault();

    setName(e.target.value);
  };

  const handleAvatar = (e) => {
    e.preventDefault();

    setAvatar(e.target.value);
  };

  useEffect(() => {
    if (isOpen) {
      setName(currentUser?.name || "");
      setAvatar(currentUser?.avatar || "");
    }
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onEditProfile({ name, avatar: avatar });
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
      <label htmlFor="edit-profile-name" className="modal__label">
        Name*
        <input
          id="edit-profile-name"
          type="text"
          placeholder="Name"
          required
          minLength="1"
          maxLength="30"
          className="modal__input"
          name="name"
          value={name}
          onChange={handleName}
        />
      </label>
      <label htmlFor="edit-profile-avatar" className="modal__label">
        Avatar
        <input
          id="edit-profile-avatar"
          type="url"
          placeholder="Avatar URL"
          className="modal__input"
          name="avatar"
          value={avatar}
          onChange={handleAvatar}
        />
      </label>
    </ModalWithForm>
  );
};

export default EditProfile;
