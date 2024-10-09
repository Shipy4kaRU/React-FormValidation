import { useReducer } from "react";

const useInput = function (func) {
  const inputStateReducer = (prevState, action) => {
    switch (action.type) {
      case "INPUT_BLUR":
        return {
          ...prevState,
          isBlur: true,
          isValid: func(prevState.value),
        };
      case "INPUT_CHANGE":
        return {
          ...prevState,
          value: action.value,
          isValid: func(action.value),
        };
      case "INPUT_RESET":
        return { ...prevState, value: "", isBlur: false, isValid: false };
      default:
        return { ...prevState };
    }
  };

  const [inputState, dispatchInputState] = useReducer(inputStateReducer, {
    value: "",
    isBlur: false,
    isValid: false,
  });

  const blurInputHandler = () => {
    dispatchInputState({ type: "INPUT_BLUR" });
  };

  const changeInputHandler = (e) => {
    dispatchInputState({ type: "INPUT_CHANGE", value: e.target.value });
  };

  const resetInputHandler = () => {
    dispatchInputState({ type: "INPUT_RESET" });
  };

  return {
    value: inputState.value,
    isBlur: inputState.isBlur,
    isValid: inputState.isValid,
    blurInputHandler,
    changeInputHandler,
    resetInputHandler,
  };
};

export default useInput;
