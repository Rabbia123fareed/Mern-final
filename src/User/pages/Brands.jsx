import React, { useEffect, useState } from 'react'
import Cards from '../component/Cards'
import axios from 'axios'

export default function Brands() {
   

    const [data, setData] = useState([])
    
    useEffect(() => {
        axios.get('/api/getallbrands')
            .then(json => setData(json.data.brands))
            .catch(err => alert(err.message))
    }, [])




    return (
        <div className="container my-5">
            <div className="text-center">
                <h2>Brands</h2>
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
            </div>

            <div className="row my-5">
                {
                    data.map((val, key) => <Cards key={key} image={val.Brandimage} name={val.Brandname} />)
                }

            </div>
        </div>
    )
}