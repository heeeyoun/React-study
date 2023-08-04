import { Table } from "react-bootstrap"
import React from "react"

import { changeName,countAdd,increase } from "../store"
import { useDispatch, useSelector } from "react-redux"
function Cart(){
  let a =useSelector((state)=>state);
  let dispatch=useDispatch();
  
    return(
        <div>
          {a.user.name} {a.user.age}의 장바구니

            <Table>
  <thead>
    <tr>
      <th>#</th>
      <th>상품명</th>
      <th>수량</th>
      <th>변경하기</th>
    </tr>
  </thead>
  <tbody>
    {a.cart.map((cart,i)=>
  <tr>
     <td>{a.cart[i].id}</td>
     <td>{a.cart[i].name}</td>
     <td>{a.cart[i].count}</td>
     <td><button onClick={()=>{
    dispatch(countAdd(a.cart[i].id))
     }}>+</button></td>
    </tr>
  )}
  </tbody>
</Table> 

<button onClick={()=>{
  dispatch(increase(10))
}}>button</button>
        </div>
    )
}


export default Cart