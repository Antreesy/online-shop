import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Roles } from "shared/enums/roles"
import type { RootState } from "../store"

export type AuthState = {
  role: Roles
}

const initialState: AuthState = {
  role: Roles.NONE,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeRole: (state, action: PayloadAction<Roles>) => {
      state.role = action.payload
    },
  },
})

export const { changeRole } = authSlice.actions

export const authRole = (state: RootState) => state.auth.role

export default authSlice.reducer
