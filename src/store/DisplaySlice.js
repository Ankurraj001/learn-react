import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
}

export const displaySlice = createSlice({
  name: 'display',
  initialState,
  reducers: {
    getData: (state, action) => {
        return {
            ...state,
            data: action.payload
        }

    },
  },
})

export const { getData } = displaySlice.actions

export default displaySlice.reducer