import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


import data from '../data';
import axios from 'axios';

function FirstPage() {
  const publicUrl = process.env.PUBLIC_URL;
  
  let [shoes,setShoes] = useState(data);

//버튼 누르면 더보기
 


return (
    <>
      <div
        className="main-bg"
        style={{ backgroundImage: `url(${publicUrl}/img/img2.jpg)` }}
      />
      <div className="container">
        <Row>

          {/* 버튼 누르면 더 보이기 */}
          <button onClick={()=>{
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((result)=>{{
              let copy=[...shoes,...result.data];
              setShoes(copy);
              }

            })
          }}>버튼</button>
          
        

          {shoes.map(function (a, index) {
            const i = index + 1;
            return (
              <Col sm>
                <img
                  src={`${publicUrl}/img/img${i}.jpg`}
                  width="80%"
                  
                />
                <h4>{a.title}</h4>
                <p>{a.content}</p>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
}

export default FirstPage;
