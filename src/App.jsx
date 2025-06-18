import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Components/Home'
import AddEmployee from './Components/AddEmployee'
import EditEmployee from './Components/EditEmployee'
import ViewEmployee from './Components/ViewEmployee'
import ViewEmployeeByID from './Components/ViewEmployeeByID'
import Delete from './Components/Delete'
import Login from './Components/Login'
import ApiContext from './Components/ApiContext'
import Parent from './Components/HOC/Parent'
import PageNotFound from './Components/Main/PageNotFound'

  
const App = () => {
  // const url = "http://localhost:3000/Employee_Data"
  // converted to mockapi url
  const url = "https://685261e00594059b23cd416f.mockapi.io/Employee_Data"
  return (
    <>
    <ApiContext.Provider value={{url}}>
      <Parent/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='register' element={<AddEmployee/>}/>
        <Route path='edit/:id' element={<EditEmployee/>}/>
        <Route path='ViewEmployee' element={<ViewEmployee/>}/>
        <Route path='ViewEmployeeByID' element={<ViewEmployeeByID/>}/>
        <Route path='delete/:id' element={<Delete/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </ApiContext.Provider>
    </>
    
  )
}

export default App
