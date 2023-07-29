import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Users from './Pages/Users';
import ErrorPage from './Pages/ErrorPage';



const App = () => {

  return (
    <Routes>

      <Route path='/' element={<Users/>
      }></Route>

      {/* Error Page incase user hit wrong pages */}
      <Route path='*' element={<ErrorPage/>}></Route>
    </Routes>
  )
}

export default App