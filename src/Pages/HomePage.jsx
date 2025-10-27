import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar.jsx'
import { Search,Pencil,Trash2 } from 'lucide-react'
import { getAllData,deleteDB } from '../lib/dummyData.js'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import NotesContainer from '../Components/NotesContainer.jsx'
import NoNotesContainer from '../Components/NoNotesContainer.jsx'

const HomePage = () => {
    const [data, setdata] = useState([])
    const [query, setquery] = useState("")
    const [status, setstatus] = useState("all")
    const [result, setresult] = useState([])
    const [id, setid] = useState("")
    const navigate = useNavigate();
    useEffect(() => {
        (async()=>{
            const allData = await getAllData();
            setdata(allData);
        })();
    }, [])
    const handleSubmit = (e)=>{
        e.preventDefault();
        const filterData = data.filter((d)=>(d.title.toLowerCase().includes(query.toLowerCase()))||(d.description.toLowerCase().includes(query.toLowerCase())))
        if(filterData.length===0) return;
        setresult(filterData)
        setstatus("query")
    }
    let content;
    if(status==="all"){
        content = data.map((d)=>(
            <div className='flex'>
            <button className=' w-[60%] text-2xl font-semibold flex justify-center items-center text-black transition-colors' onClick={()=>setid(d.id)}>
                <h1 className='w-full p-2 flex justify-center items-center'>
                    {d.title}
                </h1>
            </button>
            <button className='w-[20%] hover:bg-light flex justify-center items-center transition-colors' onClick={()=>navigate(`/Edit/${d.id}`)}>
                <Pencil className='text-black' size={24}/>
            </button>
            <button className='w-[20%] hover:bg-light flex justify-center items-center transition-colors' onClick={async()=>{await deleteDB(d.id); toast.success("deletd successfully"); const allData = await getAllData();setdata(allData);}}>
                <Trash2 className='text-black' size={24}/>
            </button>
            </div>
        ))
    }
    else if(status==="query"){
        content = result.map((d)=>(
            <div className='flex'>
            <button className=' w-[60%] text-2xl font-semibold flex justify-center items-center text-black transition-colors ' onClick={()=>setid(d.id)}>
                <h1 className='w-full p-2 flex justify-center items-center'>
                    {d.title}
                </h1>
            </button>
            <button className='w-[20%] hover:bg-light flex justify-center items-center transition-colors' onClick={()=>navigate(`/Edit/${d.id}`)}>
                <Pencil className='text-black' size={24}/>
            </button>
            <button className='w-[20%] hover:bg-light flex justify-center items-center transition-colors' onClick={async()=>{await deleteDB(d.id); toast.success("deletd successfully"); const allData = await getAllData();setdata(allData);}}>
                <Trash2 className='text-black' size={24}/>
            </button>
            </div>
        ))
    }


  return (
    <div className='w-full h-screen'>
        <Navbar/>
        <div className='h-[calc(100vh-64px)] w-full bg-light flex flex-col justify-center items-center'>
            <div className='h-[80%] w-full flex justify-center items-center'>
                <div className='h-[95%] rounded-xl lg:w-[70%] w-[95%] flex justify-center items-center bg-white'>
                    <div className='w-[35%] p-3 h-full'>
                    <form onSubmit={handleSubmit} className='flex relative w-full items-center h-[15%] justify-center gap-4'>
                        <input type="text" className='w-[95%] bg-white border-2 border-black text-xl font-bold py-2 px-5 rounded-full' placeholder='Search here..' value={query} onChange={(e)=>setquery(e.target.value)} />
                        <button type='submit' className='absolute top-7 right-6'><Search className='text-primary font-bold' size={24}/></button>
                    </form>
                    <div className='w-full h-[80%] flex flex-col items-start justify-start p-5'>
                        <div className='w-[95%] border border-primary'></div>
                        <div className='w-full overflow-y-auto'>
                        {content}
                        </div>
                    </div>
                    </div>
                    <div className='w-[65%] h-full'>
                        {!(id.length===0)?<NotesContainer id={id}/>:<NoNotesContainer/>}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage