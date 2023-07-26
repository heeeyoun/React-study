import React, { useEffect, useState } from "react";
import  Styled, { isStyledComponent } from "styled-components";
import { useParams } from "react-router-dom";
import '../About.css';
function AboutPage(props){
    let {id}=useParams();
    let founded =props.shoes.find((x)=> x.id == id)
    //유저가 라우트 파라미터자리에 입력한거 가져옴
    const [time,setTime]=useState(true);
    
    const[write,setWrite]=useState('');

    useEffect(()=>{
      setTimeout(() => {
        setTime(false)
      },2000);
    },[])

      useEffect(()=>{
        if(isNaN(write)==true){alert("그러지 마")}
      },[write])
    return(
        <div className="container">
       {time==true?<div className="timer">구매후 50% 할인!</div>:null}
  <div className="row">
    <div className="col-md-6">
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
    </div>
    <div className="col-md-6">
      <h4 className="pt-5">{props.shoes[id].title}</h4>
      <p>{props.shoes[id].content}</p>
      <p>{props.shoes[id].price}</p>
      <button className="btn btn-danger">주문하기</button> 
      <input onChange={(e)=>{setWrite(e.target.value)}}></input>
      <p>{write}</p>
    </div>
  </div>
</div> 
    )

}



export default AboutPage;