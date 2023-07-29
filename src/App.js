
import './App.css';
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import data from './data';
import { Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import FirstPage from './pages/FirstPage';
import AboutPage from './pages/AboutPage';

function App() {
  const publicUrl = process.env.PUBLIC_URL; // 프로덕션 환경에서 정적 파일을 로드하기 위한 변수
  let [shoes,setShoes] = useState(data);
  let navigate = useNavigate();
  
  

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Link to="/">
            <Navbar.Brand href="#home" className="nav-brand" >
              H:Y
            </Navbar.Brand>
          </Link>

          <Nav className="nav-menu">
          
              <Nav.Link onClick={()=>{navigate('/detail')}}>About</Nav.Link>
            
            
              <Nav.Link onClick={()=>{navigate('/products')}}>Products</Nav.Link>
          
           
              <Nav.Link onClick={()=>{navigate('/events')}}>Events</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
      

      <Routes>
  <Route path="/" element={<FirstPage shoes={shoes} setShoes={setShoes}/>} />
  <Route path="/events" element={<Event />}>
    <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
    <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
  </Route>
  
  <Route path="/detail/:id" element={<AboutPage shoes={shoes} />} />
  {/* <Route path="/*" element={<div>없는 페이지야</div>} /> */}
</Routes>

    </div>
  
  );
}


function Event (){
  return(
    <div>
      <br/>
      <h2>오늘의 이벤트</h2>
      <Outlet></Outlet>
    </div>

  )
}
export default App;
