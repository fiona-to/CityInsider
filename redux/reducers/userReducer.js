import { TOGGLE_LANGUAGE } from "../actions/userActions";

const initialState = {
  isVN: false,
};

const UserReducer = (state = initialState, { type }) => {
  switch (type) {
    case TOGGLE_LANGUAGE:
      const toggleLanguage = !state.isVN;
      return { ...state, isVN: toggleLanguage };

    default:
      return state;
  }
};

export default UserReducer;
