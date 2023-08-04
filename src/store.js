import { configureStore, createSlice } from '@reduxjs/toolkit'

let cart=createSlice({
  name:'cart',
  initialState:[
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers:{
    countAdd(state,action){
      let number = state.findIndex((a)=>{return a.id === action.payload});
      state[number].count++
    },
    addProducts(state,action){
      state.push(action.payload)
    }
  }
})
export let {countAdd,addProducts}=cart.actions;

let user =createSlice({
  name:'user',
  initialState:{name : 'kim', age : 20},
  reducers:{
    changeName(state){
      state.name = 'park'
    },
    increase(state,action){
      state.age += action.payload;
    }
    
  }
})

export let {changeName,increase}=user.actions
export default configureStore({
  reducer:{
    cart:cart.reducer,
    user:user.reducer
  }
}) 