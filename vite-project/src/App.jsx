import { lazy, Suspense } from 'react'
import { Routes, Route} from 'react-router-dom'
import './App.scss'
const  Home = lazy(()=> import('./pages/home/Home')) 
import {Nav} from './components/nav/Nav'
const  Projects = lazy(()=> import('./pages/projects/Projects')) 
const  About = lazy(()=> import('./pages/about/About')) 
const Blog = lazy(()=> import('./pages/blog/Blog'))
import { Loading } from './components/loading/Loading'
import { Logo } from './components/logo/Logo'
// import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {

  //!mobile testing
  const devInfo = navigator.userAgent;
  const regexDev = /android|iphone|kindle|ipad/i;

  const isMobileDev = regexDev.test(devInfo);
  console.log(isMobileDev)

  // const [mobileState, setMobileState] = useState(false)
  // if(isMobileDev){
  //   setMobileState(true)
  // }

  return (
    <>
    <Container fluid>
      <Logo/>
      <Row>
        <Col xs >
        <Nav/>
      </Col>
      <Col>
      <Suspense fallback={<Loading/>}>
        <Routes>
            <Route path='/' element={<Home/>}/>
         
            <Route path='/projects' element={<Projects/>}/>
         
            <Route path='/about' element={<About/>}/>

            <Route path='/blog' element={<Blog/>}/>
      </Routes>
      </Suspense>
        
      </Col>
      </Row>
      
    </Container>
      
     
    </>
  )
}

export default App
