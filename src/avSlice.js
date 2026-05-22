import { createSlice } from "@reduxjs/toolkit";
import ProjectorImg from "./assets/Projector.jpg";
import SpeakersImg from "./assets/Speakers.jpg";
import MicrophoneImg from "./assets/Microphone.jpg";
import WhiteboardImg from "./assets/Whiteboard.jpg";
import SignsImg from "./assets/Signs.jpg";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
    img: ProjectorImg,
    name: "Projectors",
    cost: 200,
    quantity: 0,
  },
    {
    img: SpeakersImg,
    name: "Speaker",
    cost: 35,
    quantity: 0,
    },
    {
    img: MicrophoneImg,
    name: "Microphones",
    cost: 45,
    quantity: 0,
    },
    {
    img: WhiteboardImg,
    name: "Whiteboards",
    cost: 80,
    quantity: 0,
    },

    {
    img: SignsImg,
    name: "Signage",
    cost: 80,
    quantity: 0,
    },

    
  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item) {
        item.quantity++;
      }
},

    decrementAvQuantity: (state, action) => {
	    const item = state[action.payload];
	    if (item && item.quantity > 0) {
		    item.quantity--;
	  }
},

  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
