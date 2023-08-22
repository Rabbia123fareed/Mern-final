import React, { useEffect, useState } from 'react'
import BrandModal from '../component/BrandModel'
import axios from 'axios'
import { BsFillPencilFill } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'
export default function Brands() {

    const [Brands, setBrands] = useState([])

    useEffect(() => {
        axios.get('/api/getallbrands')
            .then((json) => setBrands(json.data.brands))
            .catch((err) => console.log(err))

    }, [])


    const deleteProduct = (Brandname) => { console.log(Brandname) }

    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center bg-warning p-3 mb-4 rounded">
                <span className='fs-4 fw-bold text-white'>Brands</span>
                <BrandModal recallData={setBrands} />
            </div>

            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Brand Name</th>
                            <th scope="col">Brand Image</th>
                            <th scope="col">Update/Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                     {
                        Brands.map((val,key)=>
                        <tr key={key}>
                        <th scope="row">{val._id}</th>
                        <td>{val.Brandname}</td>
                        <td><img src={val.Brandimage} className='img-fluid' style={{ height: '5vh', objectFit: 'contain' }} alt="" srcSet="" /></td>
                        <td>
                        <button className="btn btn-dark mx-1"><BsFillPencilFill /></button>
                         <button className="btn btn-dark mx-1" onClick={() => deleteProduct(val.Brandname)}><AiFillDelete /></button>
                                    </td>

                    </tr>
                        )
                     }


                    </tbody>
                </table>
             

            </div>
        </div>
    )
}