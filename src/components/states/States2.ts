import {createSlice} from "@reduxjs/toolkit";

interface States {
	slideShowStateActive: boolean;
}

const initialState = {
	slideShowStateActive: false,
} as States;

export const States2Slice = createSlice({
	name: "States2",
	initialState: {value: initialState},
	reducers: {
		changeSlideShowState: (state, action) => {
			state.value.slideShowStateActive = action.payload;
		},
	},
});

export const {changeSlideShowState} = States2Slice.actions;

export default States2Slice.reducer;
