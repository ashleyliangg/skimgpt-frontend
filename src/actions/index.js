import axios from 'axios';

const ROOT_URL = 'https://skimgpt-mongo.onrender.com/api';
const currentUrl = window.location.href;
const data = { url: currentUrl };

// keys for actiontypes
export const ActionTypes = {
  FETCH_SUMMARY: 'FETCH_SUMMARY',
};

export function fetchSummary() {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${ROOT_URL}/summarizers`, data);
      console.log(response.data);
      dispatch({
        type: ActionTypes.FETCH_SUMMARY,
        payload: response.data,
      });
    } catch (error) {
      console.log(`fetch posts api error: ${error}`);
      throw error;
    }
  };
}
