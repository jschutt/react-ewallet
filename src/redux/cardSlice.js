import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { setAutoFreeze } from "immer";
// setAutoFreeze(false)

export const getUser = createAsyncThunk("cards/getUser", async () => {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    console.log(data)
    return data.results[0];
  });

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [
      {
        id: 1,
        cardholder: "",
        cardnumber: "4545 4545 4545 4545",
        expiry: "2121",
        cvc: "212",
        type: "VISA",
        active: true,
      },
      {
        id: 2,
        cardholder: "",
        cardnumber: "3535 3535 4545 4545",
        expiry: "2121",
        cvc: "212",
        type: "VISA",
        active: false,
      },
    ],
    latestId: 2,
    status: null,
  },
  reducers: {
    addCard: (state, action) => {
      if(state.cards.length === 4){
        alert("Could not add another credit card. Please remove one of your cards in order to add a new one.")
      } else {
        state.cards = state.cards.concat(action.payload)
        state.latestId += 1;
        console.log(state.cards)
      }
    },
      setActiveCard: (state, action) => {
        state.cards.forEach((card) => {
          card.active = false;
        })
        state.cards = state.cards.filter((card) => card.id !== action.payload.id);
        state.cards.push(action.payload)
        console.log(state.cards)
      },
      deleteCard: (state, action) => {
        state.cards = state.cards.filter((card) => card.id !== action.payload)
        console.log(state.cards)
      }
  },
  extraReducers: {
    [getUser.pending]: (state, action) => {
      state.status = "Loading...";
      console.log(state.status)
    },
    [getUser.fulfilled]: (state, action) => {
      state.cards.forEach((card) => {
        card.cardholder = `${action.payload.name.first} ${action.payload.name.last}`
      })
      state.status = "Completed!";
    },
    [getUser.rejected]: (state, action) => {
        state.status = "Failed to fetch data";
        console.log("Failed data")
    }
  }
});

export const {setActiveCard, addCard, deleteCard} = cardSlice.actions;

export default cardSlice.reducer;
