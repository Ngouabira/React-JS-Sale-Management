import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import User from "../models/user.model";
import axios from "axios";
import LoginRequest from "../models/request/login.request";
import { saveToken } from "../../utils/helper";
import { API_URL, HEADER } from "../../utils/const";

export interface AuthState {
    isLoading: boolean,
    isAuthenticated: boolean,
    user: User | null,
    errors: any
}

const initialState: AuthState = {
    isLoading: false,
    isAuthenticated: false,
    user: null,
    errors: null
}

export const login = createAsyncThunk('login', async (user: LoginRequest) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, user);
        // const response = await request.data;
        saveToken(response.data.access_token);
        return response.data;
    } catch (error) {
        return isRejectedWithValue(error)
    }

})

export const logout = createAsyncThunk('logout', async () => {
    const response = await axios.post(`${API_URL}/auth/logout`, {
        headers: { ...HEADER }
    });
    return response.data;
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.isAuthenticated = false;
            state.isLoading = true;
            state.user = null;
            state.errors = null;
        }).addCase(login.fulfilled, (state, action) => {
            state.isAuthenticated = true;
            state.isLoading = false;
            state.user = action.payload;
            state.errors = null;
        })
            .addCase(login.rejected, (state, action) => {
                state.isAuthenticated = false;
                state.isLoading = false;
                state.user = null;
                state.errors = action.error.message;
            }).addCase(logout.pending, (state) => {
                state.isLoading = true;
            }).addCase(logout.fulfilled, (state) => {
                state.isAuthenticated = false;
                state.isLoading = false;
                state.user = null;
                state.errors = null;
            })
            .addCase(logout.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.error.message;
            })
    }

})

export default authSlice.reducer