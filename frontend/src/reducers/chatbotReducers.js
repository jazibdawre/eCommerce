import { useQuery } from '@apollo/client';
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
      return { loading: false, error: action.payload };
    case CHATBOT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
