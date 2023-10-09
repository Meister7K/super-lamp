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
// import { mobileTest } from './helpers/MobileCheck'
import { setTheme, keepTheme } from './helpers/Theme'
import { Footer } from './components/footer/Footer'
import { Project } from './pages/projects/project/Project'


function App() {

  keepTheme()

  //!mobile testing
  const devInfo = navigator.userAgent;
  const regexDev = /android|iphone|kindle|ipad/i;

  const isMobileDev = regexDev.test(devInfo);
  console.log(isMobileDev)

  // const [mobileState, setMobileState] = useState(false)
  if(isMobileDev){
    document.documentElement.id = 'mobile'
} else{
    document.documentElement.id = 'desktop'
}
  // mobileTest()

  return (
    <>
    <Container fluid className='main-container'>
      <Logo/>  
        <Nav/>   
      <Suspense fallback={<Loading/>}>
        <Routes>
            <Route path='/' element={<Home/>}/>
         
            <Route path='/projects/*' element={<Projects/>}>
                <Route path=':id' element={<Project/>}/>
            </Route>
            {/* <Route path='/projects/*' element={<Project/>}/> */}
         
            <Route path='/about' element={<About/>}/>

            <Route path='/blog' element={<Blog/>}/>
      </Routes>
      </Suspense>
      {/* <Footer/> */}
    </Container>
      
     
    </>
  )
}

export default App
