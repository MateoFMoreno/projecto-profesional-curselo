import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {},
    },
    reducers: {
        setUser: (state, action) => { state.user = action.payload },
        logoutUser: (state, action) => { state.user = {} },
    }
})

export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;