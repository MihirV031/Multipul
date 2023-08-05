import { configureStore } from '@reduxjs/toolkit'
import File1 from './redexmul/File1'
import File2 from './redexmul/File2'
import File3 from './redexmul/File3'
import File4 from './redexmul/File4'

export const store = configureStore({
  reducer: {
    counter: File1,
    counter1:File2,
    count3:File3,
    plus1:File4,
  },
})