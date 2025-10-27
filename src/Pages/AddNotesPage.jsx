import React, { useState } from 'react'
import Navbar from '../Components/Navbar.jsx'
import { add } from '../lib/dummyData.js'
import toast from 'react-hot-toast'

const AddNotesPage = () => {
  const [form, setform] = useState({
    title:"",
    description:"",
  })
  const handleSubmit = async(e)=>{
    e.preventDefault();
    await add(form);
    toast.success("added a note")
    setform({
      title:"",
      description:"",
    })
  }
  return (
    <div className='w-full h-full flex flex-col'>
    <Navbar/>
    <div className='h-[calc(100vh-57px)] w-full bg-light flex justify-center items-center'>
      <form onSubmit={handleSubmit} className='h-[50%] lg:w-[50%] w-[95%] bg-accent rounded-2xl'>
        <input type="text" value={form.title} onChange={(e)=>setform({...form,title:e.target.value})} className='p-3 h-[20%] w-full text-3xl text-primary font-bold bg-accent rounded-t-2xl focus:outline-none focus:ring-0' placeholder='Enter Title'/>
        <textarea value={form.description} onChange={(e)=>setform({...form,description:e.target.value})} className='h-[65%] w-full p-3 text-xl text-primary font-semibold bg-accent focus:outline-none focus:ring-0' placeholder='Enter Description'></textarea>
        <button type='submit' className='w-full h-[15%] p-2 bg-primary text-light hover:bg-secondary hover:text-accent transition-all text-2xl font-bold rounded-b-2xl'>Submit</button>
      </form>
    </div>
    </div>
  )
}

export default AddNotesPage