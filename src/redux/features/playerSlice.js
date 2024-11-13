// src/redux/features/playerSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: "",
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song;
      state.currentSongs = action.payload.data;
      state.currentIndex = action.payload.i;
      state.isActive = true;
    },
    nextSong: (state, action) => {
      const nextIndex = state.currentIndex + 1;
      if (nextIndex < state.currentSongs.length) {
        state.currentIndex = nextIndex;
        state.activeSong = state.currentSongs[nextIndex];
        state.isActive = true;
      }
    },
    prevSong: (state, action) => {
      const prevIndex = state.currentIndex - 1;
      if (prevIndex >= 0) {
        state.currentIndex = prevIndex;
        state.activeSong = state.currentSongs[prevIndex];
        state.isActive = true;
      }
    },
    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },
    playSong: (state, action) => {
      state.activeSong = action.payload;
      state.isPlaying = true;
      state.isActive = true;
    },
    pauseSong: (state) => {
      state.isPlaying = false;
    },
  },
});

export const {
  setActiveSong,
  nextSong,
  prevSong,
  playPause,
  playSong,
  pauseSong,
} = playerSlice.actions;

export default playerSlice.reducer;
