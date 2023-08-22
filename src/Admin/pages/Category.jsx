import React, { useEffect, useState } from 'react'
import CategoryModal from '../component/categoryModel'
import axios from 'axios'
import { BsFillPencilFill } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'

export default function Category() {

    const [category, setCategory] = useState([])

    useEffect(() => {
        axios.get('/api/getallcategory')
            .then((json) => setCategory(json.data.category))
            .catch((err) => console.log(err))

    }, [])

 const deleteProduct = (CategoryName) => { console.log(CategoryName) }


    return (
        
        <div className="container">
            <div className="d-flex justify-content-between align-items-center bg-info p-3 mb-4 rounded">
                <span className='fs-4 fw-bold text-white'>Categories</span>
                <CategoryModal recallData={setCategory} />
            </div>

            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Category Name</th>
                            <th scope="col">Category Image</th>
                            <th scope="col">Update/Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                    {
                            category?.map((val, key) =>
                                <tr key={key}>
                                    <th scope="row">{val._id}</th>
                                    <td>{val.CategoryName}</td>
                                    <td><img src={val.CategoryImage} className='img-fluid' style={{ height: '5vh', objectFit: 'contain' }} alt="" srcSet="" /></td>
                                    <td>
                                        <button className="btn btn-dark mx-1"><BsFillPencilFill /></button>
                                        <button className="btn btn-dark mx-1" onClick={() => deleteProduct(val.CategoryName)}><AiFillDelete /></button>
                                    </td>
                                </tr>)
                        }


                    </tbody>
                </table>
                {/* <button className='btn btn-dark'>Add Category</button> */}

            </div>
        </div>
    )
}