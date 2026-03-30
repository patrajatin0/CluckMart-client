
import FRONT_LOGO from "../assets/CluckMart_logo.png"
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [log, setLog] = useState("Login")

    return (
        <div className='flex justify-around items-center p-4 bg-pink-500 '>
            <div className='rounded-full border-none   p-4  '>
                <img src={FRONT_LOGO} alt="" className='w-18 h-18   ' />

            </div>
            <div >
                <ul className='flex gap-2'>
                    <li className='mx-2 text-white'>Home</li>
                    <li className='mx-2 text-white'>About</li>
                    <li className='mx-2 text-white'>cart</li>

                </ul>

            </div>
            <div>
                <Link to={"/login"}>
                    <button className='mx-2  text-white' onClick={() => (setLog(log === "Login" ? "Logout" : "Login"))}>{log}</button>
                </Link>

            </div>
        </div>
    )
}

export default Navbar