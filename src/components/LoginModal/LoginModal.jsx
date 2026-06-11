import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const Login = ({ isOpen, onLogin, onCloseBtn, onSignupClick }) => {
  const defaultValues = {
    email: "",
    password: "",
  };
  const { values, handleChange, handleReset } = useForm(defaultValues);

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin(values);
    handleReset(evt);
  }

  return (
    <ModalWithForm
      title="Log in"
      buttonText="Log in"
      name="Log-in"
      isOpen={isOpen}
      onCloseBtn={onCloseBtn}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          name="email"
          className="modal__input"
          id="email"
          placeholder="Email"
          required
          minLength="1"
          maxLength="30"
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="imageURL" className="modal__label">
        Password
        <input
          type="password"
          name="password"
          className="modal__input"
          id="password"
          placeholder="Password"
          required
          value={values.imageUrl}
          onChange={handleChange}
        />
      </label>
      <div className="login__signin">
        <button onClick={onSignupClick} className="login__register-btn">
          or Register
        </button>
      </div>
    </ModalWithForm>
  );
};

export default Login;
