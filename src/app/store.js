import { configureStore } from '@reduxjs/toolkit'
import { cryptoApi } from '../service/cryptoApi'
import { cryptoNewsApi } from '../service/newsApi'

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            cryptoApi.middleware,
            cryptoNewsApi.middleware
        )
})
