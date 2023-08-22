import React, { useEffect, useState } from 'react'
import Guestcard from '../component/Guestcard'
import axios from 'axios'

export default function Brand() {
    const [brands, setbrands] = useState([])

    useEffect(() => {
        axios.get('/api/getallbrands')
            .then(json => setbrands(json.data.brands))
            .catch(err => alert(err.message))
    }, [])




    return (
        <>
        <div>
             <div className="text-center">
                <h2 className="text-secondary">Brands</h2>
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
                <div className='w-50'>
                     <img  src="https://7esl.com/wp-content/uploads/2020/12/Electronic-Devices-1.jpg" alt="" srcSet="" style={{ height: '114vh'}} />
    
                         </div>
                    </div>
        </div>

            <div className="container my-5">
           

                <div className="row my-5">
                {
                    brands.map((val, key) => <Guestcard key={key} image={val.Brandimage} name={val.Brandname} />)
                }

            </div>
        </div>
        </>

    )
}
