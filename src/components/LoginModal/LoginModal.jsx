import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const Login = ({ isOpen, onLogin, onCloseBtn, onSignupClick }) => {
  const defaultValues = {
    email: "",
    password: "",
  };
  const { values, handleChange } = useForm(defaultValues);

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin(values);
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
      <label htmlFor="login-email" className="modal__label">
        Email
        <input
          type="email"
          name="email"
          className="modal__input"
          id="login-email"
          placeholder="Email"
          required
          minLength="1"
          maxLength="30"
          value={values.email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="login-password" className="modal__label">
        Password
        <input
          type="password"
          name="password"
          className="modal__input"
          id="login-password"
          placeholder="Password"
          required
          value={values.password}
          onChange={handleChange}
        />
      </label>
      <div className="modal__login_signin">
        <button onClick={onSignupClick} className="modal__login_register-btn">
          or Register
        </button>
      </div>
    </ModalWithForm>
  );
};

export default Login;
