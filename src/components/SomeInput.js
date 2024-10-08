import { useState } from "react";

const SomeInput = (props) => {
  const [nameInput, setNameInput] = useState("");
  const [click, setClick] = useState(false);

  const isNameValid = nameInput.trim() !== "";
  const isInputNotValid = click && !isNameValid;

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (isNameValid) console.log("SENDING");
  };

  const blurInputHandler = () => {
    setClick(true);
  };

  const changeNameHandler = (e) => {
    setNameInput(e.target.value);
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className={`form-control ${isInputNotValid ? "invalid input" : ""}`}>
        <label htmlFor="name">Введите Имя</label>
        <input
          type="text"
          id="name"
          onChange={changeNameHandler}
          value={nameInput}
          onBlur={blurInputHandler}
        />
      </div>
      {isInputNotValid ? <p className="error-text">Обязательное поле</p> : ""}
      <div className="form-actions">
        <button disabled={!isNameValid}>Отправить</button>
      </div>
    </form>
  );
};

export default SomeInput;
