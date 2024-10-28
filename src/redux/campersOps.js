import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const camperInstance = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/",
});

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (currentPage,thunkAPI) => {

    const {location, vehicleEquipment, vehicleType} = (thunkAPI.getState().filters);

    const buildEquipmentParams = (vehicleEquipment) => (
      Object.entries(vehicleEquipment)
        .reduce((acc, [key, value]) => {
          if (value) acc[key] = true;
          return acc;
        }, {})
    );
    
    const buildFilterParams = (location, vehicleType, vehicleEquipment) => {
      const equipmentParams = buildEquipmentParams(vehicleEquipment);
      const filterParams = { ...equipmentParams };
    
      if (location.trim()) filterParams.location = location;
      if (vehicleType) filterParams.form = vehicleType.toLowerCase().replace(" ", "");
    
      return filterParams;
    };

    const filterParams = buildFilterParams(location, vehicleType, vehicleEquipment);
    const defaultParams = {
      p: currentPage,
      limit: 4
    }          

    try {
      const { data } = await camperInstance.get('/campers', {params: {...defaultParams, ...filterParams}});     
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamper = createAsyncThunk(
  "camper/fetchCamper",
  async (camperId, thunkAPI) => {
    try {
      const { data } = await camperInstance.get(`/campers/${camperId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);