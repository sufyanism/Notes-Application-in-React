import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import AddNotesPage from './Pages/AddNotesPage.jsx'
import EditNotesPage from './Pages/EditNotesPage.jsx'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div className='w-full h-full'>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Add' element={<AddNotesPage/>}/>
        <Route path='/Edit/:id' element={<EditNotesPage/>}/>
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App