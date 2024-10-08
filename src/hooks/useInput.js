const useInput = function (inputs) {
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
};

export default useInput;
