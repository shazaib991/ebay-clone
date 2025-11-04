import {createSlice} from "@reduxjs/toolkit";

interface States {
	slideShowStateActive: boolean;
	currentIndex: number;
	slideTransitionEnabled: boolean;
}

const initialState = {
	slideShowStateActive: true,
	currentIndex: 0,
	slideTransitionEnabled: true,
} as States;

export const States2Slice = createSlice({
	name: "States2",
	initialState: {value: initialState},
	reducers: {
		changeSlideShowState: (state, action) => {
			state.value.slideShowStateActive = action.payload;
		},
		changeCurrentIndex: (state, action) => {
			state.value.currentIndex = action.payload;
		},
		changeSlideTransitionEnabled: (state, action) => {
			state.value.slideTransitionEnabled = action.payload;
		},
	},
});

export const {changeSlideShowState, changeCurrentIndex, changeSlideTransitionEnabled} = States2Slice.actions;

export default States2Slice.reducer;
