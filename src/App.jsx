
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Bookclass from './pages/Bookclass'
import Mybookings from './pages/Mybookings'
import Trainers from './pages/Trainers'
import Pnf from './pages/Pnf'



function App() {
 

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/classbooking/:id' element={<Bookclass/>}/>
        <Route path='/mybookings/:id' element={<Mybookings/>}/>
        <Route path='/trainers' element={<Trainers/>}/>
        <Route path='/*' element={<Pnf/>}/>
       
      </Routes>
      
      <Footer/>
    </>
  )
}

export default App