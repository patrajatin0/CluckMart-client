
import FONT_IMG from "./assets/caresol.jpg"
import { Link } from "react-router-dom"

import Products from "./pages/Products"
import Footer from "./components/Footer"


function Body() {
    return (
        <div>
            <div className="bg-pink-500 flex flex-row h-96">
                <div className="w-6/12 ">
                    <div>
                        <h1 className="text-6xl font-bold text-gray-200">HEALTHY GOAT DELIVERED FAST & SAFE</h1>
                    </div>

                    <div className="mt-18 flex flex-wrap gap-4 items-center">
                        <div>
                            <Link to={"/login"}>
                                <button className="px-4 border-2 border-gray-300  rounded py-2 text-gray-100 font-bold shadow-2xl absolute cursor-pointer">Shop Now</button>
                            </Link>
                        </div>
                        <div>
                            <Link to={"/home"}>
                                <button className="  absolute mx-40 bg-gray-300 px-4 rounded py-2 shadow-2xl text-pink-500 font-bold cursor-pointer">View Products</button>
                            </Link>
                        </div>

                    </div>


                </div>
                <div className="w-6/12">
                    <img className="h-full w-full" src={FONT_IMG} alt="" />
                </div>

            </div>
            <Products />

            <Footer />

        </div>
    )
}

export default Body