import React, { useEffect, useState } from 'react';
import Guestcard from '../component/Guestcard'
import axios from 'axios'

export default function Category() {
    const [category, setCategory] = useState();

    useEffect(() => {
        axios.get('/api/getallcategory')
        .then(json => {
            console.log(json.data.category);
            setCategory(json.data.category);
        })
        .catch(err => alert(err.message))
    }, []);
    

    return (
    <>
        <div className="container my-5">
            <div className="text-center">
                <h2>Category</h2>
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
                <div className='w-50'>
                     <img  src="https://www.aplustopper.com/wp-content/uploads/2021/10/Household-Appliances.png" alt="" srcSet="" style={{ height: '110vh'}} />
    
                        
                    </div>
            </div>

            <div className="row my-5">
              
            {
    category && category.length > 0 &&
    category.map((val, key) => (
        <Guestcard key={key} image={val.CategoryImage} name={val.CategoryName} />
    ))
}

                    
                
            </div>
        </div>
    </>
    );
}