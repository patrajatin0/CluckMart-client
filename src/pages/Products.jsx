import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
function Products() {
    const [product, setProduct] = useState([])
    const [meat, setMeat] = useState([])
    const [lowPrice, setLowPrice] = useState([])
    const [highPrice, setHighPrice] = useState([])

    useEffect(() => {
        const productFetching = async () => {
            try {
                const res = await axios.get("https://cluckmart-server.onrender.com/api/product")
                const filterProduct = res?.data.filter((products) => (products?.category === "Milk"))
                const meatFilter = res?.data.filter((meat) => (meat?.category === "Meat"))
                const lowPriceFilter = res?.data.filter((lowPrice) => (lowPrice?.price <= 15000))
                const highPriceFilter = res?.data.filter((highPrice) => (highPrice?.price >= 12000))
                setProduct(filterProduct)
                setMeat(meatFilter)
                setLowPrice(lowPriceFilter)
                setHighPrice(highPriceFilter)


            } catch (error) {
                console.log(error)
            }

        }
        productFetching()
    }, [])
    return (
        <div className="m-8">

            <div>
                <h1 className=" text-2xl text-pink-500 mb-2">All Products </h1>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
                <div className="">
                    <div className="w-80 h-80 flex flex-wrap rounded-lg  bg-gray-100 p-2">{product.map((names) => (<div className="p-2 bg-gray-300 m-3 w-32 h-32 rounded-lg shadow-4xl" key={names?._id}>
                        <img className="w-28 h-28 rounded-lg " src={names?.imageUrl} alt="" />
                    </div>))}</div>
                    <div className="flex w-80 justify-center">
                        <Link to={"/home"}>
                            <button className="p-1 bg-pink-500 rounded m-2 text-gray-50 font-sans shadow-2xl cursor-pointer">View Products</button>
                        </Link>

                    </div>
                </div>
                <div className="">
                    <div className="w-80 h-80 flex flex-wrap rounded-lg  bg-gray-100 p-2 overflow-hidden">{meat.map((names) => (<div className="p-2 bg-gray-300 m-3 w-32 h-32 rounded-lg shadow-4xl" key={names?._id}>
                        <img className="w-28 h-28 rounded-lg " src={names?.imageUrl} alt="" />
                    </div>))}</div>
                    <div className="flex w-80 justify-center">
                        <Link to={"/home"}>
                            <button className="p-1 bg-pink-500 rounded m-2 text-gray-50 font-sans shadow-2xl cursor-pointer">View Products</button>
                        </Link>

                    </div>
                </div>
                <div className="">
                    <div className="w-80 h-80 flex flex-wrap rounded-lg  bg-gray-100 p-2 overflow-hidden">{lowPrice.map((names) => (<div className="p-2 bg-gray-300 m-3 w-32 h-32 rounded-lg shadow-4xl" key={names?._id}>
                        <img className="w-28 h-28 rounded-lg" src={names?.imageUrl} alt="" />
                    </div>))}</div>
                    <div className="flex w-80 justify-center">
                        <Link to={"/home"}>
                            <button className="p-1 bg-pink-500 rounded m-2 text-gray-50 font-sans shadow-2xl cursor-pointer">View Products</button>
                        </Link>

                    </div>
                </div>
                <div className="">
                    <div className="w-80 h-80 flex flex-wrap rounded-lg  bg-gray-100 p-2 overflow-hidden">{highPrice.map((names) => (<div className="p-2 bg-gray-300 m-3 w-32 h-32 rounded-lg shadow-4xl" key={names?._id}>
                        <img className="w-28 h-28 rounded-lg " src={names?.imageUrl} alt="" />
                    </div>))}</div>
                    <div className="flex w-80 justify-center">
                        <Link to={"/home"}>
                            <button className="p-1 bg-pink-500 rounded m-2 text-gray-50 font-sans shadow-2xl cursor-pointer">View Products</button>
                        </Link>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Products