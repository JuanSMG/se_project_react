import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect } from "react";

const Register = ({ isOpen, onSignUp, onCloseBtn, onLoginClick }) => {
  const defaultValues = {
    email: "",
    password: "",
    name: "",
    avatar: "",
  };
  const { values, handleChange, handleReset } = useForm(defaultValues);

  function handleSubmit(evt) {
    evt.preventDefault();
    onSignUp(values);
    handleReset(evt);
  }

  useEffect(() => {
    if (isOpen) {
      handleReset();
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Next"
      name="sign-up"
      isOpen={isOpen}
      onCloseBtn={onCloseBtn}
      onSubmit={handleSubmit}
    >
      <label htmlFor="register-email" className="modal__label">
        Email*
        <input
          type="email"
          name="email"
          className="modal__input"
          id="register-email"
          placeholder="Email"
          required
          value={values.email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="register-password" className="modal__label">
        Password*
        <input
          type="password"
          name="password"
          className="modal__input"
          id="register-password"
          placeholder="Password"
          required
          value={values.password}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="register-name" className="modal__label">
        Name*
        <input
          id="register-name"
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
      <label htmlFor="register-avatarUrl" className="modal__label">
        Avatar URL*
        <input
          id="register-avatarUrl"
          type="url"
          required
          placeholder="Avatar URL"
          className="modal__input"
          name="avatar"
          value={values.avatar}
          onChange={handleChange}
        />
      </label>
      <div className="modal__register_signin">
        <button
          onClick={onLoginClick}
          type="button"
          className="modal__register_login-btn"
        >
          or Log in
        </button>
      </div>
    </ModalWithForm>
  );
};

export default Register;
