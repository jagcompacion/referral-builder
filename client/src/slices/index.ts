import { combineSlices } from "@reduxjs/toolkit";
import referralsSlice from "./referralsSlice";

const rootReducer = combineSlices(referralsSlice);

export default rootReducer;
