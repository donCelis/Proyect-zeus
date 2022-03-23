import React from 'react'
import ReactDOM from 'react-dom'
import './Style/Main.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Routes/LadingPage'
import ProductComic from './Routes/Product'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/Comic' element={<ProductComic />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
)
