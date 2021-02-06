import {
  CHATBOT_CREATE_FAIL,
  CHATBOT_CREATE_SUCCESS,
  CHATBOT_CREATE_REQUEST,
} from '../constants/chatbotConstants';

export const chatbotReducer = (state = {}, action) => {
  switch (action.type) {
    case CHATBOT_CREATE_REQUEST:
      return { loading: true };
    case CHATBOT_CREATE_SUCCESS:
      console.log(action.payload);
      return { loading: false, data: action.payload };
    case CHATBOT_CREATE_FAIL:
      console.log(action.payload);
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
