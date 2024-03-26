/* import { configureStore, createAction, createReducer  } from "@reduxjs/toolkit";

interface StateType{
    count:number
}

const increment=createAction("increment")
const decrement=createAction("decrement")

const initialState:StateType = {
    count:0
}

const rootReducer = createReducer(initialState,(builder)=>{
builder.addCase(increment,(state)=>{
    state.count+=1
})
.addCase(decrement,(state)=>{
    state.count-=1
})
})

export const store = configureStore({reducer:rootReducer}) */

//USING createslice

import { configureStore, createAction, createReducer  } from "@reduxjs/toolkit";

interface StateType{
    count:number
}

const increment=createAction("increment")
const decrement=createAction("decrement")

const initialState:StateType = {
    count:0
}

const rootReducer = createReducer(initialState,(builder)=>{
builder.addCase(increment,(state)=>{
    state.count+=1
})
.addCase(decrement,(state)=>{
    state.count-=1
})
})

export const store = configureStore({reducer:rootReducer})