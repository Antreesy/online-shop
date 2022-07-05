import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../store"

export type RouteState = {
  route: string
}

const initialState: RouteState = {
  route: "",
}

export const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    changeRoute: (state, action: PayloadAction<string>) => {
      state.route = action.payload
    },
  },
})

export const { changeRoute } = routeSlice.actions

export const route = (state: RootState) => state.route.route

export default routeSlice.reducer
