import React from 'react'
import { MessageCircle } from 'lucide-react'

const NoNotesContainer = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
        <MessageCircle className='text-primary size-[50px]' size={24}/>
        <h1 className='text-primary text-3xl font-semibold'>Please select a note to read it </h1>
    </div>
  )
}

export default NoNotesContainer