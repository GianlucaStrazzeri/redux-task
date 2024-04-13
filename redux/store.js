//Nos dirá cuales son los estados con los que iremos a trabajar

import { configureStore } from "@reduxjs/toolkit"; //importo configurestore desde el toolkit de redux
import useReducer from "./todosSlice"






//Los reducer son los estados que vamos a estar controlando que dividiremos en porciones (slice)
//todas las configuaraciones o la gran mayoría de ellas van en un objeto
export const store = configureStore(
    {
    reducer: userReducer
}
)