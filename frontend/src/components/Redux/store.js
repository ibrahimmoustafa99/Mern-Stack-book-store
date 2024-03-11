import { configureStore } from '@reduxjs/toolkit'

import DetailsSlice from './DetailsSlice'

export const store = configureStore({
  reducer: {
    detailsSlice:DetailsSlice
  },
})