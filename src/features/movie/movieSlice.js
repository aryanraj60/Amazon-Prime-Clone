import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommended: null,
  newRelease: null,
  romance: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommended = action.payload.recommended;
      state.newRelease = action.payload.newRelease;
      state.romance = action.payload.romance;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectRecommeded = (state) => state.movie.recommended;
// export const selectNewDisney = (state) => state.movie.newDisney;
// export const selectOriginal = (state) => state.movie.original;
export const selectNewRelease = (state) => state.movie.newRelease;
export const selectRomace = (state) => state.movie.romance;

export default movieSlice.reducer;
