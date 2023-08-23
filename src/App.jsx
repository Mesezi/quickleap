import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Details from './components/Details'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import logo from './assets/logo.png'

function App() {

  const Home = () =>{
    return <>
     <Header />
      <Hero />
      <Details />
      <Footer />
    </>
  }

  const Dashboard = ()=>{
return <>
<Header />
<div className='dashboard'>
  <img src={logo} alt="" />
  <h1>Welcome to <span>Quick Leap</span></h1>
</div>
</>

  }

  return (

    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </Router>
   

  )
}

export default App

{/* <Router>
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="product" element={<ProductPage />} />
    <Route path="product/edit" element={<EditProductPage />} />
  </Route>
</Routes>
</Router> */}
