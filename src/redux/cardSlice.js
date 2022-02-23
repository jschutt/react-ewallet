import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("cards/getUser", async () => {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    //console.log(data.results)
    return data.results[0];
  });

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [
      {
        cardholder: "",
        cardnumber: "",
        expiry: "",
        ccv: "",
        type: "",
        active: true,
      },
    ],
    myData: null,
    status: null,
  },
  reducers: {
      updateCard: (state, action) => {
        state.cards = action.payload;
        console.log(state.cards)
      }
  },
  extraReducers: {
    [getUser.pending]: (state, action) => {
      state.status = "Loading...";
      console.log(state.status)
    },
    [getUser.fulfilled]: (state, action) => {
      state.myData = action.payload;
      state.status = "Completed!";

      //TODO: Byt ut vart API:n ska hamna
      console.log(state.myData)

    },
    [getUser.rejected]: (state, action) => {
        state.status = "Failed to fetch data";
        console.log("Failed data")
    }
  }
});

export const {updateCard} = cardSlice.actions;

export default cardSlice.reducer;
