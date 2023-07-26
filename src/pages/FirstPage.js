import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


import data from '../data';

function FirstPage({shoes}) {
  const publicUrl = process.env.PUBLIC_URL;
  

  return (
    <>
      <div
        className="main-bg"
        style={{ backgroundImage: `url(${publicUrl}/img/img2.jpg)` }}
      />
      <div className="container">
        <Row>
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
