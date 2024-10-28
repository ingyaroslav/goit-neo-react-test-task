import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    vehicleEquipment: {
      AC: false,
      bathroom: false,
      kitchen: false,
      transmission: false,
      TV: false,
      radio: false,
      refrigerator: false,
      microwave: false,
      gas: false,
      water: false,
    },
    vehicleType: null,
  },
  reducers: {
    setLocation(state, { payload }) {
      state.location = payload;
    },
    setVehicleEquipment(state, { payload }) {
      state.vehicleEquipment[payload] = !state.vehicleEquipment[payload];
    },
    setVehicleType(state, { payload }) {
      state.vehicleType = payload;
    }    
  }
});

export default filtersSlice.reducer;
export const { setLocation, setVehicleEquipment, setVehicleType } =
  filtersSlice.actions;