import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit"
import authReducer from "./slices/authSlice"
import routeReducer from "./slices/routeSlice"
import counterReducer from "./slices/counterSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    route: routeReducer,
    counter: counterReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
