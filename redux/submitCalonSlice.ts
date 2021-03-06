import { RootState } from './globalStore';
import {createSlice} from '@reduxjs/toolkit'

const submiteCalonSlice = createSlice({
    name: 'submit',
    initialState: {
        status: true ,
    },
    reducers: {
        changeSubmit: (state,action) => {
            state.status = action.payload;
        },
    },
});

export const {changeSubmit} = submiteCalonSlice.actions;

export const selectSubmitCalonValue = (state: RootState) => state.submit.status;

export default submiteCalonSlice.reducer;