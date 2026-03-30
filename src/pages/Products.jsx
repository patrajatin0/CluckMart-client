import axios from "axios"
import { useState, useEffect } from "react"
function Products() {
    const [product, setProduct] = useState([])
    useEffect(() => {
        const productFetching = async () => {
            try {
                const res = await axios.get("https://cluckmart-server.onrender.com/api/product")
                const filterProduct = setProduct(res?.data.map((c) => (c.category)))
                console.log(filterProduct)
            } catch (error) {
                console.log(error)
            }

        }
        productFetching()
    }, [])
    return (
        <div>
            <div>{product}</div>
        </div>
    )
}

export default Products