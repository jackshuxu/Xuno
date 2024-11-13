import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import mockData from "../../components/mockData";
import { v4 as uuidv4 } from "uuid";

import DefaultCoverArt from "../../assets/images/defult.png";

axios.defaults.baseURL = "http://localhost:5001";

export const generateTrack = createAsyncThunk(
  "tracks/generateTrack",
  async (formData, { rejectWithValue }) => {
    try {
      const { prompt, modelVersion, outputFormat, normalizationStrategy } =
        formData;

      console.log("Sending formData to API:", {
        prompt,
        modelVersion,
        outputFormat,
        normalizationStrategy,
      });

      const response = await axios.post("/api/music/generate", {
        prompt,
        modelVersion,
        outputFormat,
        normalizationStrategy,
      });

      console.log("API Response:", response.data);

      if (!response.data.audioUrl) {
        return rejectWithValue("No audio URL returned from MusicGEN API.");
      }

      return {
        key: uuidv4(),
        title: formData.title || "Untitled Track",
        subtitle: formData.persona || "User",
        images: { coverart: DefaultCoverArt },
        artists: [{ adamid: "user-artist" }],
        url: response.data.audioUrl,
        styles: formData.prompt
          ? formData.prompt.split(",").map((s) => s.trim())
          : [],
      };
    } catch (error) {
      console.error("Error generating track:", error);

      if (error.response) {
        console.error("Error Data:", error.response.data);
        console.error("Error Status:", error.response.status);
      }

      return rejectWithValue(
        error.response?.data?.message || "Failed to generate music."
      );
    }
  }
);

const initialState = {
  tracks: mockData,
  loading: false,
  error: null,
};

const trackSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(generateTrack.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(generateTrack.fulfilled, (state, action) => {
        state.loading = false;
        state.tracks.unshift(action.payload);
      })
      .addCase(generateTrack.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default trackSlice.reducer;
