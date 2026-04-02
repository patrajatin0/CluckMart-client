
import { useState } from 'react'
import axios from 'axios'

function Register() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")
    const [uiUpdate, setUiUpdate] = useState("")
    async function registerData() {
        try {
            const res = await axios.post("https://cluckmart-server.onrender.com/api/auth/signup", { name, email, password, role }, { withCredentials: true })
            console.log(res)
            setUiUpdate(res?.data?.message)
        } catch (error) {
            console.log(error)
        }
    }
    return (

        <div className='flex flex-col items-center'>
            <div><span>{uiUpdate}</span></div>
            <div className='flex justify-center items-center h-lvh'>

                <div className='flex justify-center items-center w-90  '>
                    <form onSubmit={async (e) => { e.preventDefault(); await registerData(); }} className='rounded-lg bg-pink-500 flex flex-col justify-center items-center w-90 h-96  gap-4'>

                        <div className='flex flex-col'>
                            <label className='text-gray-50' htmlFor="name">name</label>
                            <input required={true} className='outline-none bg-gray-50 rounded px-2 w-60 h-8' type="text" placeholder='Name...' value={name} onChange={(e) => (setName(e.target.value))} />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-gray-50' htmlFor="Email">email</label>
                            <input required={true} className='outline-none bg-gray-50 rounded px-2 w-60 h-8' type="email" placeholder='Email...' value={email} onChange={(e) => (setEmail(e.target.value))} />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-gray-50' htmlFor="password">password</label>
                            <input required={true} className='outline-none bg-gray-50 rounded px-2 w-60 h-8' type="password" placeholder='password..' value={password} onChange={(e) => (setPassword(e.target.value))} />
                        </div>
                        <div className='flex flex-col' >
                            <label className='text-gray-50' htmlFor="roll">role</label>
                            <input required={true} className='outline-none bg-gray-50 rounded px-2 w-60 h-8' type="text" placeholder='role...' value={role} onChange={(e) => (setRole(e.target.value))} />
                        </div>
                        <div>
                            <button className='bg-gray-50 p-1 rounded w-20 text-pink-400 font-bold hover:text-gray-500 hover:bg-pink-600 border-none outline-none cursor-pointer ' >submit</button>
                        </div>


                    </form>
                </div>
            </div >
        </div>
    )
}

export default Register