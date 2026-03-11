
import './App.css'
import AddCustomer from './Components/AddCustomer';
import Customers from './Components/CustomersPage'
import TopBar from './Components/TopBar'
import { HashRouter, Routes, Route } from "react-router-dom";



function App() {
  

  return (
    <HashRouter>    
    <TopBar></TopBar>  
      <Routes>
        
        <Route path='/' element={<Customers></Customers>}></Route>
        <Route path='/addcustomer/' element={<AddCustomer />}></Route>
      </Routes>
      
    </HashRouter>
  )
}

export default App
