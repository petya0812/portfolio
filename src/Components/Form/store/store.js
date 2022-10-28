import { configureStore } from "@reduxjs/toolkit";

import formReduser from './formSlice'

export default configureStore({
  reducer:{
    form: formReduser,
  }
})