import {createSlice} from "@reduxjs/toolkit";

interface States {
	productCategories: Array<string>;
	categoryMouseOver: boolean;
	categoryPreviousHtmlElement: React.HTMLElementType;
	categoryNextHtmlElement: React.HTMLElementType;
	categoryName: string;
}

const initialState = {
	productCategories: [],
	categoryMouseOver: false,
	categoryPreviousHtmlElement: Object(),
	categoryNextHtmlElement: Object(),
	categoryName: ""
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
		changeCategoryPreviousHtmlElement: (state, action) => {
			state.value.categoryPreviousHtmlElement = action.payload;
		},
		changeCategoryNextHtmlElement: (state, action) => {
			state.value.categoryNextHtmlElement = action.payload;
		},
		changeCategoryName: (state, action) => {
			state.value.categoryName = action.payload;
		},
	},
});

export const {changeProductCategories, changeCategoryMouseOver, changeCategoryPreviousHtmlElement, changeCategoryNextHtmlElement, changeCategoryName} = States1Slice.actions;

export default States1Slice.reducer;
