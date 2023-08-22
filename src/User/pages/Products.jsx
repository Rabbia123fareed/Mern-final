import React, { useEffect, useState } from 'react'
import Cards from '../component/Cards'
import axios from 'axios'

export default function Products() {
    const [products, setProducts] = useState('')
    useEffect(() => {
        axios.get('/api/getallproduct')
            .then(json => setProducts(json.data.product))
            .catch(err => console.log(err))
    }, [products])

    return (
        <div className="container my-5">
            <div className="text-center">
                <h2>Products</h2>
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
            </div>

            <div className="row my-5">
                {
                     products &&  products.length > 0 &&
                    products.map((val, key) => <Cards key={key} image={val.thumbnail} name={val.name} url={`/products/${val._id}`} />)
                }

            </div>
        </div>
    )
}