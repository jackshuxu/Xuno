// src/redux/actions/trackActions.js

import axios from "axios";
import {
  GENERATE_MUSIC_REQUEST,
  GENERATE_MUSIC_SUCCESS,
  GENERATE_MUSIC_FAILURE,
} from "./actionTypes";

// Action to generate music
export const generateMusic = (formData) => async (dispatch) => {
  dispatch({ type: GENERATE_MUSIC_REQUEST });
  try {
    // Replace with your actual API endpoint
    const response = await axios.post("/api/generate-music", formData);

    // Assuming the API returns the generated track data
    dispatch({
      type: GENERATE_MUSIC_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GENERATE_MUSIC_FAILURE,
      payload: error.message,
    });
  }
};
