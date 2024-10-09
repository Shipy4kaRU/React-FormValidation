import useInput from "../hooks/useInput";

const SomeInput = (props) => {
  const nameInput = useInput((value) => value.trim() !== "");
  const emailInput = useInput((value) => value.trim().includes("@"));

  return (
    <form onSubmit={nameInput.resetValues}>
      <div
        className={`form-control ${
          nameInput.isClicked && !nameInput.isValid ? "invalid input" : ""
        }`}
      >
        <label htmlFor="name">Введите Имя</label>
        <input
          type="text"
          id="name"
          onChange={nameInput.changeInputHandler}
          value={nameInput.value}
          onBlur={nameInput.blurInputHandler}
        />
      </div>
      {nameInput.isClicked && !nameInput.isValid ? (
        <p className="error-text">Обязательное поле</p>
      ) : (
        ""
      )}
      <div
        className={`form-control ${
          emailInput.isClicked && !emailInput.isValid ? "invalid input" : ""
        }`}
      >
        <label htmlFor="name">Введите email</label>
        <input
          type="email"
          id="name"
          onChange={emailInput.changeInputHandler}
          value={emailInput.value}
          onBlur={emailInput.blurInputHandler}
        />
      </div>
      {emailInput.isClicked && !emailInput.isValid && (
        <p className="error-text">Обязательное поле</p>
      )}
      <div className="form-actions">
        <button disabled={!emailInput.isValid}>Отправить</button>
      </div>
    </form>
  );
};

export default SomeInput;
