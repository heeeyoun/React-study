import React, { useEffect, useState } from "react";
import  Styled, { isStyledComponent } from "styled-components";
import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import '../About.css';
function AboutPage(props){
    let {id}=useParams();
    let founded =props.shoes.find((x)=> x.id == id)
    //유저가 라우트 파라미터자리에 입력한거 가져옴
    const [time,setTime]=useState(true);
    
    const[write,setWrite]=useState('');

    const[tap,setTap]=useState(0);

    const [fade,setFade]=useState('');

    useEffect(()=>{
      setTimeout(()=>{setFade('end')},10)
      return()=>{
        setFade('')
      }
    
    },[tap])

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
          {/* 2초후 사라지는 광고창 만들기 */}
       {time==true?<div className="timer">구매후 50% 할인!</div>:null}


  <div className={" row start "+fade}>
    <div className="col-md-6">
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
    </div>
    <div className="col-md-6">
      <h4 className="pt-5">{props.shoes[id].title}</h4>
      <p>{props.shoes[id].content}</p>
      <p>{props.shoes[id].price}</p>

      {/* 숫자만 입력하고 나머지는 경고띄우는 입력창 만들기 */}
      <button className="btn btn-danger">주문하기</button> 
      <input onChange={(e)=>{setWrite(e.target.value)}}></input>
      <p>{write}</p>
    </div>
  </div>

  <Nav variant="tabs"  defaultActiveKey="link0">
    <Nav.Item>
      <Nav.Link onClick={()=>{setTap(0)}} eventKey="link0" >버튼0</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link onClick={()=>{setTap(1)}} eventKey="link1">버튼1</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link onClick={()=>{setTap(2)}} eventKey="link2">버튼2</Nav.Link>
    </Nav.Item>
</Nav>
  <Tapkey tap={tap}/>


</div> 
    )

}
function Tapkey({tap}){
const [fade,setFade]=useState('');

useEffect(()=>{
  setTimeout(()=>{setFade('end')},10)
  return()=>{
    setFade('')
  }

},[tap])
return<div className={" start "+fade}>{[<div>내용이 안뜨나요</div>,<div>내용1</div>,<div>내용2</div>][tap]
}</div>
}

export default AboutPage;