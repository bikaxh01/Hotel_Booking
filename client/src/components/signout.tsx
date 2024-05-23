import React from 'react'
import { Button } from './ui/button'
import axios from 'axios'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

function Signout() {
    const navigate = useNavigate()

    const handleSubmit = async ()=>{
     const response= await axios.get(`${import.meta.env.VITE_BASE_URL}/auth/signout`,{
        withCredentials:true
     })
     navigate('/')
     toast.success(response.data.message)
    }

  return (
    <div>
        <Button onClick={handleSubmit} className=' bg-blue-800 hover:bg-blue-600'>Signout</Button>
    </div>
  )
}

export default Signout