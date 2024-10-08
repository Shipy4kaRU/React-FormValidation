import { useReducer } from "react";

const SomeInput = (props) => {
  const formReducer = (prevState, action) => {
    switch (action.type) {
      case "NAME_INPUT":
        return {
          ...prevState,
          nameValue: action.value,
          isNameValid: action.value.trim() !== "",
          isFormValid: action.value.trim() !== "" && prevState.isEmailValid,
        };
      case "EMAIL_INPUT":
        return {
          ...prevState,
          emailValue: action.value,
          isEmailValid: action.value.includes("@"),
          isFormValid: prevState.isNameValid && action.value.includes("@"),
        };
      case "NAME_BLUR":
        return {
          ...prevState,
          isNameClicked: action.value,
          isNameValid: prevState.nameValue.trim() !== "",
        };
      case "EMAIL_BLUR":
        return {
          ...prevState,
          isEmailClicked: action.value,
          isEmailValid: prevState.emailValue.includes("@"),
        };
      case "FORM_SUBMIT":
        return {
          ...prevState,
          nameValue: "",
          emailValue: "",
          isNameValid: false,
          isEmailValid: false,
          isNameClicked: false,
          isEmailClicked: false,
          isFormValid: false,
        };
      default:
        return prevState;
    }
  };

  const [formState, dispatchFormState] = useReducer(formReducer, {
    nameValue: "",
    emailValue: "",
    isNameValid: false,
    isEmailValid: false,
    isNameClicked: false,
    isEmailClicked: false,
    isFormValid: false,
  });

  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log("SENDING");
    dispatchFormState({ type: "FORM_SUBMIT" });
  };

  const blurNameHandler = () => {
    dispatchFormState({ type: "NAME_BLUR", value: true });
  };

  const blurEmailHandler = () => {
    dispatchFormState({ type: "EMAIL_BLUR", value: true });
  };

  const changeNameHandler = (e) => {
    dispatchFormState({ type: "NAME_INPUT", value: e.target.value });
  };

  const changeEmailHandler = (e) => {
    dispatchFormState({ type: "EMAIL_INPUT", value: e.target.value });
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div
        className={`form-control ${
          formState.isNameClicked && !formState.isNameValid
            ? "invalid input"
            : ""
        }`}
      >
        <label htmlFor="name">Введите Имя</label>
        <input
          type="text"
          id="name"
          onChange={changeNameHandler}
          value={formState.nameValue}
          onBlur={blurNameHandler}
        />
      </div>
      {formState.isNameClicked && !formState.isNameValid ? (
        <p className="error-text">Обязательное поле</p>
      ) : (
        ""
      )}
      <div
        className={`form-control ${
          formState.isEmailClicked && !formState.isEmailValid
            ? "invalid input"
            : ""
        }`}
      >
        <label htmlFor="name">Введите email</label>
        <input
          type="email"
          id="name"
          onChange={changeEmailHandler}
          value={formState.emailValue}
          onBlur={blurEmailHandler}
        />
      </div>
      {formState.isEmailClicked && !formState.isEmailValid ? (
        <p className="error-text">Обязательное поле</p>
      ) : (
        ""
      )}
      <div className="form-actions">
        <button disabled={!formState.isFormValid}>Отправить</button>
      </div>
    </form>
  );
};

export default SomeInput;
