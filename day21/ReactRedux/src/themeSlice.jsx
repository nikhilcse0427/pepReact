import {createSlice} from "@reduxjs/toolkit"

const themeSlice = createSlice({
  name: 'theme',
  initialState: {mode: 'light'},
  reducers: {
    toggleTheme: (state, action) => {
      if(action.payload){
        state.mode = action.payload
      } else {
        state.mode = state.mode === 'light' ? 'dark' : 'light'
      }
    }
  }
})

export const {toggleTheme} = themeSlice.actions
export default themeSlice.reducer
