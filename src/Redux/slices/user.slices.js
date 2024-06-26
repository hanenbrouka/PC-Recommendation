// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { userInstance } from "../instance.js"


// export const getUser = createAsyncThunk(
//   "user/get",
//   async (data, { rejectWithValue }) => {
//     const { id } = data;
//     try {
//       const response = await userInstance.get(`/${id}`);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const getAllUser = createAsyncThunk(
//   "user/users",
//   async (data, { rejectWithValue }) => {
//     const { users} = data;
//     try {
//       const response = await userInstance.get(`/users}`);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const DeleteUser = createAsyncThunk(
//   "user/delete-user",
//   async (data, { rejectWithValue }) => {
//     const { id } = data;
//     try {
//       const response = await userInstance.put(`/delete-user/${id}`);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// const initialState = {
//   isLoading: null,
//   error: null,
//   userData: null,
//   userList: [],
// };

// export const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(addUser.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//         state.userData = null;
//         state.userList = [];
//       })
//       .addCase(addUser.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = null;
//         state.userList = [...state.userList, payload];
//       })
//       .addCase(addUser.rejected, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = payload;
//         state.userData = null;
//       })
//       .addCase(getUser.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//         state.userData = null;
//         state.userList = [];
//       })
//       .addCase(getUser.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = null;
//         state.userData = payload;
//       })
//       .addCase(getUser.rejected, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = payload;
//       })
//       .addCase(getUserListByType.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//         state.userData = null;
//         state.userList = [];
//       })
//       .addCase(getUserListByType.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = null;
//         state.userList = payload;
//       })
//       .addCase(getUserListByType.rejected, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = payload;
//       })
//       .addCase(removeUser.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//         state.userData = null;
//         state.userList = [];
//       })
//       .addCase(removeUser.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = null;
//         state.userList = state.userList.filter((el) => el._id !== payload);
//       })
//       .addCase(removeUser.rejected, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = payload;
//       });
//   },
// });

// export const {} = userSlice.actions;

// export default userSlice.reducer;