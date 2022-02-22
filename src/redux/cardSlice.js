import {createSlice} from '@reduxjs/toolkit'

const cardSlice = createSlice({
    name: "cardSlice",
    initialState: {
        cards: [
            {
                cardholder: "Jonna",
                cardnumber: "1234 1234 1234 1234",
                expiry: "12/23",
                ccv: "123",
                type: "VISA",
                active: true
            },
        ]
    },
    reducers: {
        addCard: (state, action) => {
            state.cards.push(action.payload);
        }
    }
})

export const {addCard} = cardSlice.actions;

export default cardSlice.reducer;