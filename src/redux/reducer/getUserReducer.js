import { createReducer } from "@reduxjs/toolkit"

export const getDetailsReducer = createReducer({}, (builder) => {
    builder
        .addCase("getDetailsRequest", (state) => {
            state.loading = true;
        })
        .addCase("getDetailsSuccess", (state, action) => {
            state.loading = false;
            state.newConditionUnits = action.payload.newConditionUnits;
            state.usedConditionUnits = action.payload.usedConditionUnits;
            state.cpoConditionUnits = action.payload.cpoConditionUnits;
            state.newConditionMsrp = action.payload.newConditionMsrp;
            state.usedConditionMsrp = action.payload.usedConditionMsrp;
            state.cpoConditionMsrp = action.payload.cpoConditionMsrp;
            state.newConditionAverage = action.payload.newConditionAverage;
            state.cpoConditionAverage = action.payload.cpoConditionAverage;
            state.usedConditionAverage = action.payload.usedConditionAverage;
            state.infoGraphSatsticalData = action.payload.infoGraphSatsticalData;

        })
        .addCase("getDetailsFail", (state, action) => {
            state.loading = false;
            state.error = action.payload
        })
        .addCase("clearError", (state) => {
            state.error = null
        })
})