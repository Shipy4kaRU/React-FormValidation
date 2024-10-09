import useInput from "../hooks/useInput";

const SomeForm = (props) => {
  const firstNameInput = useInput((value) => value.trim() !== "");
  const lastNameInput = useInput((value) => value.trim() !== "");
  const emailInput = useInput((value) => value.trim().includes("@"));

  const isFormValid =
    firstNameInput.isValid && lastNameInput.isValid && emailInput.isValid;

  return (
    <form>
      <div className="control-group">
        <div
          className={`form-control ${
            firstNameInput.isBlur && !firstNameInput.isValid && "invalid"
          }`}
        >
          <label htmlFor="name">Введите Имя</label>
          <input
            type="text"
            id="name"
            onChange={firstNameInput.changeInputHandler}
            onBlur={firstNameInput.blurInputHandler}
            value={firstNameInput.value}
          />
          {firstNameInput.isBlur && !firstNameInput.isValid && (
            <p className="error-text">Поле должно быть заполнено!</p>
          )}
        </div>
        <div
          className={`form-control ${
            lastNameInput.isBlur && !lastNameInput.isValid && "invalid"
          }`}
        >
          <label htmlFor="name">Введите Фамилию</label>
          <input
            type="text"
            id="name"
            onChange={lastNameInput.changeInputHandler}
            onBlur={lastNameInput.blurInputHandler}
            value={lastNameInput.value}
          />
          {lastNameInput.isBlur && !lastNameInput.isValid && (
            <p className="error-text">Поле должно быть заполнено!</p>
          )}
        </div>
      </div>
      <div
        className={`form-control ${
          emailInput.isBlur && !emailInput.isValid && "invalid"
        }`}
      >
        <label htmlFor="name">Введите E-Mail</label>
        <input
          type="text"
          id="name"
          onChange={emailInput.changeInputHandler}
          onBlur={emailInput.blurInputHandler}
          value={emailInput.value}
        />
        {emailInput.isBlur && !emailInput.isValid && (
          <p className="error-text">Введите корректный email!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Отправить</button>
      </div>
    </form>
  );
};

export default SomeForm;
