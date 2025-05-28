import { createAction, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "filters",
    initialState: { name: "" },
    reducers: {
        changeFilter: (state, action) => {
            state.name = action.payload;
        }
  }
})

export const { changeFilter } = slice.actions;

export default slice.reducer;



// const initialState = {
//     name: ""
// };

// export const changeFilter = createAction('name/changeFilter')

// export const changeFilterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'name/changeFilter':
//         return {
//         ...state,
//         name: action.payload,
//       };

//     default:
//       return state;
//   }
// };