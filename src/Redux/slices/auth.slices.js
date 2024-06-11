// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { userInstance } from "../instance.js"
// import { toast } from 'react-toastify'

// const auth_token = localStorage.getItem('auth_token');

// if (auth_token) {
//   userInstance.defaults.headers.common['x-auth-token'] = auth_token;
// }

// export const loginUser = createAsyncThunk(
//   "auth/login",
//   async (data, { rejectWithValue }) => {
//     try {
//       const response = await userInstance.post("/login", data, {
//         "Content-Type": "body/json"
//       });
//       toast.success(response.data?.message, { theme: 'colored', style: { padding: '3%' } })
//       console.log("data from redux", response.data)
//       return response.data;
//     } catch (error) {
//       console.log("error from redux", error.response.data)
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const signupUser = createAsyncThunk(
//   "auth/signup",
//   async (data, { rejectWithValue }) => {
//     try {
//       const formData = new FormData();
//       formData.append("firstName", data.firstName);
//       formData.append("lastName", data.lastName);
//       formData.append("email", data.email);
//       formData.append("password", data.password);
//       formData.append("confirmPassword", data.confirmPassword);

//       const response = await userInstance.post("/auth/signup", formData, {
//         "Content-Type": "body/json"
//       });
//       toast.success(response.data?.message, { theme: 'colored', style: { padding: '3%' } })
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
     
//     }
//   }
// );

// export const authenticatedUser = createAsyncThunk(
//   "/profile",
//   async (data, { rejectWithValue }) => {
//     try {
//       const response = await userInstance.get("/");
//       console.log("response", response.data)
//       return response.data;
//     } catch (error) {
//       console.log("error", error.response.data)
//       return rejectWithValue(error.response.data);
//     }
//   }
// );


// const initialState = {
//   isLoading: null,
//   token: localStorage.getItem("auth_token"),
//   isAuthenticated: false,
//   error: null,
//   user: null,
// };

// export const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     logoutUser: (state) => {
//       localStorage.removeItem("auth_token");
//       state.isLoading = false;
//       state.error = null;
//       state.isAuthenticated = false;
//       state.user = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginUser.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//         state.isAuthenticated = false;
//         state.user = null;
//       })
//       .addCase(loginUser.fulfilled, (state, { payload }) => {
//         localStorage.setItem("auth_token", payload?.token);
//         state.isLoading = false;
//         state.error = null;
//         state.isAuthenticated = true;
//         state.user = null;
//       })
//       .addCase(loginUser.rejected, (state, { payload }) => {
//         localStorage.removeItem("auth_token");
//         state.isLoading = false;
//         state.error = payload;
//         state.isAuthenticated = false;
//         state.user = null;
//       })
//       .addCase(signupUser.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//         state.isAuthenticated = false;
//         state.user = null;
//       })
//       .addCase(signupUser.fulfilled, (state, { payload }) => {
//         localStorage.setItem("auth_token", payload?.token);
//         state.isLoading = false;
//         state.error = null;
//         state.isAuthenticated = true;
//         state.user = null;
//       })
//       .addCase(signupUser.rejected, (state, { payload }) => {
//         localStorage.removeItem("auth_token");
//         state.isLoading = false;
//         state.error = payload;
//         state.isAuthenticated = false;
//         state.user = null;
//       })
//       .addCase(authenticatedUser.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//         state.isAuthenticated = false;
//         state.user = null;
//       })
//       .addCase(authenticatedUser.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = null;
//         state.isAuthenticated = true;
//         state.user = payload;
//       })
//       .addCase(authenticatedUser.rejected, (state, { payload }) => {
//         //localStorage.removeItem("auth_token");
//         state.isLoading = false;
//         state.error = payload;
//         state.isAuthenticated = false;
//         state.user = null;
//       })
//       .addDefaultCase((state) => {
//         state.isLoading = null;
//         state.token = localStorage.getItem("auth_token");
//         state.isAuthenticated = false;
//         state.error = null;
//         state.user = null;
//       });
//   },
// });

// export const {
//   logoutUser
// } = authSlice.actions;

// export default authSlice.reducer;