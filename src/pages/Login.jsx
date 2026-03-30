

import axios from "axios"
import { useState } from 'react'
import { Link } from "react-router-dom"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    async function login() {


        try {
            const res = await axios.post("https://cluckmart-server.onrender.com/api/auth/login", { email, password }, { withCredentials: true })
            console.log(res)
            alert(res?.data?.message)

        } catch (error) {
            alert("Invalid Credential")
            console.log(error)
        }

    }
    return (
        <div>
            <div className=' flex justify-center items-center h-lvh'>
                <div className='w-90 h-90  bg-pink-500 rounded-lg flex flex-col items-center justify-center'>
                    <div>
                        <h1 className='text-2xl text-white font-bold mb-6'>Login </h1>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-white' htmlFor="email">Email:</label>
                        <input required={true} className='outline-none bg-gray-50 px-4 rounded h-8' type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-white' htmlFor="password">Password:</label>
                        <input required={true} className='outline-none bg-gray-50 px-4 rounded h-8' type="password" placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Link className="mx-auto" to={"/home"}>
                            <button className='bg-white w-20  mt-7 rounded p-2 text-gray-500 font-bold hover:text-pink-500 cursor-pointer ' onClick={login}>Login</button>
                        </Link>

                    </div>
                    <div className='mt-4 text-white flex  gap-2'>
                        <p>NewUser RegisterHere?</p> <Link to={"/signup"}><span className="text-blue-500 underline cursor-pointer">SignUP.</span></Link>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Login