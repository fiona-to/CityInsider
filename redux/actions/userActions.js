export const TOGGLE_LANGUAGE = "TOGGLE_LANGUAGE";

export const toggleLanguage = () => {
  return (dispatch) => {
    dispatch({ type: TOGGLE_LANGUAGE });
  };
};
