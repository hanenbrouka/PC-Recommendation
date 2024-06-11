// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   items: [],
// };

// const favoriteSlice = createSlice({
//   name: 'favorites',
//   initialState,
//   reducers: {
//     addFavorite: (state, action) => {
//       console.log('Reducer addFavorite called:', action.payload); // Log pour vérifier l'action
//       state.items.push(action.payload);
//     },
//     removeFavorite: (state, action) => {
//       state.items = state.items.filter(item => item.id !== action.payload.id);
//     },
//   },
// });

// export const { addFavorite, removeFavorite } = favoriteSlice.actions;
// export default favoriteSlice.reducer;
