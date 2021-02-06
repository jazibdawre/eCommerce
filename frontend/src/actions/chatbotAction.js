import { useQuery } from '@apollo/client';
import {
  CHATBOT_CREATE_FAIL,
  CHATBOT_CREATE_SUCCESS,
  CHATBOT_CREATE_REQUEST,
} from '../constants/chatbotConstants';

export const getChat = (query) => async (dispatch) => {
  dispatch({
    type: CHATBOT_CREATE_REQUEST,
  });

  const { loading, error, data } = useQuery(query);

  console.log(data);

  if (error) {
    dispatch({
      type: CHATBOT_CREATE_FAIL,
      payload: error,
    });
  } else {
    dispatch({
      type: CHATBOT_CREATE_SUCCESS,
      payload: data,
    });
  }
};
