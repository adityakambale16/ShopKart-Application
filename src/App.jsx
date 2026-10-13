import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Login from './pages/Login'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Reg from './pages/Reg'
import Products from './pages/Products'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Layout />}>
        <Route index element = {<Home />}/>
        <Route path='/product' element = {<Products/>}/>
        <Route path='/cart' element = {<Cart/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/Register' element = {<Reg/>}/> 
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
