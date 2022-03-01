import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("cards/getUser", async () => {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    console.log(data)
    return data.results[0];
  });

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    activeCard: {
      cardholder: "",
      cardnumber: "1234123412341234",
      expiry: "2121",
      cvc: "212",
      type: "VISA",
      active: true,
    },
    cards: [
      {
        cardholder: "",
        cardnumber: "4545 4545 4545 4545",
        expiry: "2121",
        cvc: "212",
        type: "VISA",
        active: true,
      },
      {
        cardholder: "",
        cardnumber: "4545 4545 4545 4545",
        expiry: "2121",
        cvc: "212",
        type: "VISA",
        active: false,
      },
    ],
    myData: null,
    status: null,
  },
  reducers: {
    addCard: (state, action) => {
      if(state.cards.length === 3){
        alert("Could not add another credit card. Please remove one of your cards in order to add a new one.")
      } else {
        state.cards = state.cards.concat(action.payload)
        console.log(state.cards)
      }
    },
      updateCard: (state, action) => {
        //TODO: Gör klart den här reducern
        state.cards = action.payload;
        console.log(state.cards)
      },
      deleteCard: (state, action) => {
        
      }
  },
  extraReducers: {
    [getUser.pending]: (state, action) => {
      state.status = "Loading...";
      console.log(state.status)
    },
    [getUser.fulfilled]: (state, action) => {
      //state.myData = action.payload;
      state.cards.forEach((card) => {
        card.cardholder = action.payload.name.first
      })

      //state.activeCard.cardholder = action.payload.name.first
      //console.log(action.payload.name.first)
      state.status = "Completed!";

      //TODO: Byt ut vart API:n ska hamna
      //console.log(state.myData)

    },
    [getUser.rejected]: (state, action) => {
        state.status = "Failed to fetch data";
        console.log("Failed data")
    }
  }
});

export const {updateCard, addCard} = cardSlice.actions;

export default cardSlice.reducer;
