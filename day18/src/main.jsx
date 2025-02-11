/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Root from './routes/Root.jsx'

import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Product from './components/Product.jsx'
import Error from './components/Error.jsx'

const router = createBrowserRouter([
  {
    path:'/',element:<Root />,
    children:[
      {path:'/',element:<Home />},
      {path:'/about',element:<About />},
      {path:'/contact',element:<Contact />},
      {path:'/product',element:<Product />},
      {path:'*',element:<Error />}
    ]
  }
])
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
