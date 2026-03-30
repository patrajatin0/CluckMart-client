import axios from "axios"
import { useEffect, useState } from "react"
import Shimmer from "../util/Shimmer"
function Home() {
    const [homeData, setHomeData] = useState([])
    const [product, setProduct] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://cluckmart-server.onrender.com/api/product")
                console.log(res)
                setHomeData(res?.data)
                setProduct([res])
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
    if (!product) {
        return <Shimmer />

    }

    return (
        <div>
            <div className="flex flex-wrap gap-4">{homeData.map((data) => (
                <div key={data?._id} className=" cursor-pointer w-90 text-center mt-10 bg-pink-100 p-2 rounded-lg">

                    <img className="w-90 h-60 rounded-lg" src={data?.imageUrl} alt="" />
                    <h1 className="text-2xl font-bold text-pink-500"> {data?.name}</h1>
                    <p className="text-gray-600 h-14">{data?.description}</p>
                    <div className="bg-gray-200 rounded">
                        <div className="flex justify-around mt-8 mb-4">
                            <p className="text-pink-500">perpose: {data?.category}</p>
                            <p className="text-pink-500">Stock:Yes</p>
                        </div>

                        <div className="flex justify-around">
                            <p className="text-pink-500 ">₹ {data?.price}</p>
                            <button className="bg-pink-500 px-4 my-2 rounded-lg text-gray-100">BUY</button>

                        </div>

                    </div>


                </div>))}</div>
        </div>

    )
}

export default Home