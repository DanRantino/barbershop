import { configureStore } from '@reduxjs/toolkit'
import AuthHeader from './Authorization'

export const store = configureStore({
    reducer: {
        auth: AuthHeader
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
