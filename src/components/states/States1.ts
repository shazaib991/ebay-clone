import {createSlice} from "@reduxjs/toolkit";

interface States {
	productCategories: Array<string>;
	categoryMouseOver: boolean;
	categoryPopOverInside: boolean,
}

const initialState = {
	productCategories: [],
	categoryMouseOver: false,
	categoryPopOverInside: false,
} as States;

export const States1Slice = createSlice({
	name: "States1",
	initialState: {value: initialState},
	reducers: {
		changeProductCategories: (state, action) => {
			state.value.productCategories = action.payload;
		},
		changeCategoryMouseOver: (state, action) => {
			state.value.categoryMouseOver = action.payload;
		},
		changeCategoryPopOverInside: (state, action) => {
			state.value.categoryPopOverInside = action.payload;
		},
	},
});

export const {changeProductCategories, changeCategoryMouseOver, changeCategoryPopOverInside} = States1Slice.actions;

export default States1Slice.reducer;
