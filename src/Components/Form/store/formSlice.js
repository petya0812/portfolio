import { createSlice } from "@reduxjs/toolkit"

const formSlice = createSlice({
  name: 'formSlice',
  initialState:{
    message:'',
    name: '',
    lastname: '',
  },
  reducers: {
    setMessage(state, action){
      state.message = action.payload
    },
    setName(state, action){
      state.name = action.payload
    },
    setLastname(state, action){
      state.lastname = action.payload
    },
  }
})

export const {setMessage, setName, setLastname} = formSlice.actions

export default formSlice.reducer