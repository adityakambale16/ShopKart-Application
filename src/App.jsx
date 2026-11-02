import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Login from './pages/Login'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Products from './pages/Products'
import { useContext } from 'react'
import { ThemeContext, ThemeProvider } from './components/ThemeContext'
import { CartProvider } from './components/CartContext'
import Contact from './pages/Contact'
import About from './pages/About'
import Reg from './pages/Reg'

function AppContent() {

  const { theme } = useContext(ThemeContext)

  return (
    <div className={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Login />} />
            <Route path='/product' element={<Products />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/home' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About/>} />
            <Route path='/signup' element={<Reg />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function App() {
  return (
    <CartProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </CartProvider>
  )
}

export default App
