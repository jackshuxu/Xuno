// src/redux/reducers/trackReducer.js

import {
  GENERATE_MUSIC_REQUEST,
  GENERATE_MUSIC_SUCCESS,
  GENERATE_MUSIC_FAILURE,
} from "../actions/actionTypes";

const initialState = {
  generatedTracks: [],
  loading: false,
  error: null,
};

const trackReducer = (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_MUSIC_REQUEST:
      return { ...state, loading: true, error: null };
    case GENERATE_MUSIC_SUCCESS:
      return {
        ...state,
        loading: false,
        generatedTracks: [action.payload, ...state.generatedTracks],
      };
    case GENERATE_MUSIC_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default trackReducer;
