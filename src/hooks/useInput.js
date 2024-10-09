import { useReducer } from "react";

const useInput = function (condition) {
  const formReducer = (prevState, action) => {
    switch (action.type) {
      case "INPUT_ENTER":
        return {
          ...prevState,
          inputValue: action.value,
          isInputValid: condition(action.value),
          // isInputValid: action.value.trim() !== "",
        };
      case "INPUT_BLUR":
        return {
          ...prevState,
          isInputClicked: action.value,
          isInputValid: condition(prevState.inputValue),
          //isInputValid: prevState.inputValue.trim() !== "",
        };
      case "RESET_INPUT":
        return {
          ...prevState,
          inputValue: "",
          isInputValid: false,
          isInputClicked: false,
        };
      default:
        return prevState;
    }
  };

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValue: "",
    isInputValid: false,
    isInputClicked: false,
  });

  const changeInputHandler = (e) => {
    dispatchFormState({ type: "INPUT_ENTER", value: e.target.value });
  };

  const blurInputHandler = () => {
    dispatchFormState({ type: "INPUT_BLUR", value: true });
  };

  const resetValues = () => {
    dispatchFormState({ type: "RESET_INPUT" });
  };

  return {
    value: formState.inputValue,
    isValid: formState.isInputValid,
    isClicked: formState.isInputClicked,
    changeInputHandler,
    blurInputHandler,
    resetValues,
  };
};

export default useInput;
