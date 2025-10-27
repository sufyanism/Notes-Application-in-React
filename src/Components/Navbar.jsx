import React from 'react'
import { Link } from 'react-router-dom'
import { Home,Plus } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='w-full bg-primary flex justify-between items-center'>
        <div className='text-white hover:bg-secondary text-2xl p-4'>
            NOTES
        </div>
        <div className='flex justify-center items-center gap-2 text-white text-2xl'>
            <Link to='/' className='flex justify-center items-center gap-2 hover:bg-secondary p-4'><Home className='text-white' size={24}/> <h1 className='lg:block hidden'>Home</h1></Link>
            <Link to='/Add' className='flex justify-center items-center hover:bg-secondary gap-2 p-4'><Plus className='text-white' size={24}/> <h1 className='lg:block hidden'>Add Notes</h1></Link>
        </div>
    </div>
  )
}

export default Navbar