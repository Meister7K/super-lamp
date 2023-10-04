import React from 'react'
import ReactDOM from 'react-dom/client'
import { lazy, Suspense } from 'react'
const  App = lazy(()=> import('./App')) 
import './index.scss'
import { HashRouter } from 'react-router-dom'
import { Loading } from './components/loading/Loading'
// import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Suspense fallback={<Loading/>}>
        <App />
      </Suspense>
    </HashRouter>
  </React.StrictMode>,
)
