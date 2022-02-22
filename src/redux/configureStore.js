import {configureStore} from '@reduxjs/toolkit';
import cardSlice from './cardSlice.js'

const store = configureStore({
    reducer: {
        cards: cardSlice
    }
})

export default store;