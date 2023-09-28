import React from 'react'
import ReactDOM from 'react-dom/client'
import { lazy, Suspense } from 'react'
const  App = lazy(()=> import('./App')) 
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import { Loading } from './components/loading/Loading'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loading/>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
)
