import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
    },
    reducers: {
        fetchUser: (state, action) => {
            return { users: action.payload };
        },

        addUser: (state, action) => {
            return { users: [...state.users, action.payload] };
        },

        deleteUser: (state, action) => {
            return {
                users: state.users.filter((u) => u.id !== action.payload),
            };
        },

        updateUser: (state, action) => {
            return {
                users: state.users.map((u) => {
                    return u.id === action.payload.id ? action.payload : u;
                }),
            };
        },
    },
});

export const { fetchUser, addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
