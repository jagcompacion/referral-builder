import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import axios from "axios";
import Referral from "@/types/Referral";

type ReferralsState = {
  data: Referral[];
  isLoading: boolean;
};

const initialState: ReferralsState = {
  data: [],
  isLoading: false,
};

const API_URL = import.meta.env.VITE_API_URL;

export const getReferrals = createAsyncThunk(
  "referrals/getRefferals",
  async () => {
    const response = await axios.get(`${API_URL}/referrals`);
    const data = response.data;
    return data;
  }
);

export const createReferral = createAsyncThunk(
  "referrals/createReferral",
  async (referral: Referral) => {
    const response = await axios.post(`${API_URL}/referrals`, referral);
    const data = response.data;
    return data;
  }
);

export const updateReferral = createAsyncThunk(
  "referrals/updateReferral",
  async (referral: Referral) => {
    const response = await axios.put(
      `${API_URL}/referrals/${referral._id}`,
      referral
    );
    const data = response.data;
    return data;
  }
);

export const deleteReferral = createAsyncThunk(
  "referrals/deleteReferral",
  async (id: string) => {
    await axios.delete(`${API_URL}/referrals/${id}`);
    return id;
  }
);

const referralsSlice = createSlice({
  name: "referrals",
  initialState,
  reducers: {
    setReferral: (state, action) => {
      const { _id } = action.payload;
      const referralsState = state.data;
      const updatedReferral = action.payload;
      if (!state.data.find((referral) => referral._id === _id)) {
        state.data = [
          ...state.data,
          {
            _id: "temp",
            ...updatedReferral,
          },
        ];
      } else {
        state.data = referralsState.map((referral) =>
          referral._id === _id ? { ...updatedReferral } : referral
        );
      }
    },
    removeTempReferral: (state) => {
      const referralsState = state.data;
      state.data = referralsState.filter((referral) => referral._id !== "temp");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReferrals.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(createReferral.fulfilled, (state, action) => {
        const updatedReferral = action.payload;
        state.isLoading = false;
        state.data = state.data.map((referral) =>
          referral._id === "temp" ? { ...updatedReferral } : referral
        );
      })
      .addCase(deleteReferral.fulfilled, (state, action) => {
        state.data = state.data.filter(
          (referral) => referral._id !== action.payload
        );
      });
    builder
      .addMatcher(
        isAnyOf(
          getReferrals.pending,
          createReferral.pending,
          updateReferral.pending,
          deleteReferral.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getReferrals.rejected,
          createReferral.rejected,
          updateReferral.pending,
          deleteReferral.pending
        ),
        (state) => {
          state.isLoading = false;
        }
      );
  },
});

export const { setReferral, removeTempReferral } = referralsSlice.actions;

export default referralsSlice;
