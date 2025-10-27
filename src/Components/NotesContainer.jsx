import React, { useEffect, useState } from 'react'
import { getOneDB } from '../lib/dummyData.js'

const NotesContainer = ({id}) => {
    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")
    useEffect(() => {
        (async()=>{
          const noteId = Number(id);
          const data = await getOneDB(noteId);
          setdescription(data.description)
          settitle(data.title)
        })();
      }, [id])
    
  return (
    <div className='h-full w-full bg-accent flex justify-center items-center rounded-r-2xl'>
    <form className='h-full w-full bg-light border-l-[3px] border-l-primary rounded-r-2xl'>
      <input disabled={true} value={title} type="text" className='p-3 h-[20%] w-full text-3xl text-black font-bold bg-white rounded-tr-2xl focus:outline-none focus:ring-0' placeholder='Enter Title'/>
      <textarea disabled={true} value={description} className='h-[80%] w-full p-3 text-xl text-black font-semibold bg-white rounded-br-2xl focus:outline-none focus:ring-0' placeholder='Enter Description'></textarea>
    </form>
  </div>
  )
}

export default NotesContainer