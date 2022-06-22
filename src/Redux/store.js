import {configureStore} from "@reduxjs/toolkit"
import login from "./login/user"
import user from "./userInfos/user"

export const store = configureStore({
    reducer:{
      login,
      user
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
})