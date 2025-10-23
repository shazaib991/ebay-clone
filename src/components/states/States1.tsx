import {createSlice} from "@reduxjs/toolkit";

interface States {
	productCategories: Array<string>;
}

const initialState = {
	productCategories: [],
} as States;

export const States1Slice = createSlice({
	name: "States1",
	initialState: {value: initialState},
	reducers: {
		changeProductCategories: (state, action) => {
			state.value.productCategories = action.payload;
		},
	},
});

// eslint-disable-next-line react-refresh/only-export-components
export const {changeProductCategories} = States1Slice.actions;

export default States1Slice.reducer;
