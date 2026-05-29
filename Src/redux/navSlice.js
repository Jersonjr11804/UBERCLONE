import { createSlice } from '@reduxjs/toolkit';

const navSlice = createSlice({
  name: 'nav',
  initialState: {
    origin: null,
    destination: null,
    travelTimeInfo: null,
  },
  reducers: {
    setOrigin: (state, action) => { state.origin = action.payload; },
    setDestination: (state, action) => { state.destination = action.payload; },
    setTravelTimeInfo: (state, action) => { state.travelTimeInfo = action.payload; },
  },
});

export const { setOrigin, setDestination, setTravelTimeInfo } = navSlice.actions;
export default navSlice.reducer;