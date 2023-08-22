import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
import {storage} from '../Utils/FirebaseConfig'
import {  ref, uploadBytes, getDownloadURL } from "firebase/storage";


function CategoryModal({newcategory}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [CategoryName, setCategoryName] = useState("")
    const [CategoryImage, setCategoryImage] = useState(null)


const AddCategory = (e) => {
    e.preventDefault();
    if( CategoryImage){
        const payload = { CategoryName: CategoryName, CategoryImage: CategoryImage }

        console.log(payload)
        // const storageRef = ref(storage, 'some-child');
        console.log( CategoryImage.name)
        const storageRef = ref(storage, `images/brand/${CategoryImage.name}`);
        uploadBytes(storageRef,CategoryImage ).then((snapshot) => {
            console.log('uploded a files',snapshot)
            getDownloadURL(snapshot.ref)
                .then((url) => {
                    console.log(url)
                    const payload = {CategoryName , CategoryImage: url }
                    console.log(payload)
                    axios.post('/api/createcategory', payload)
                        .then((json) => {
                            console.log(json.data)
                            setShow(true);
                        })
                        .catch(err => alert(err.message))

                })
                .catch((error) => alert(error.message));
        });
    }else{
        alert(error.message)
    }






   
}

    return (
        <>
            <Button variant="dark" onClick={handleShow}>
                Add Category
            </Button>

            <Modal show={show} onHide={handleClose} centered backdrop="static" className='bg-secondary'>
                <Modal.Header closeButton className='bg-warning'>
                    <Modal.Title>Add Category</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-warning'>

                    <form onSubmit={AddCategory}>
                        <div className="mb-3">
                            <label htmlFor="CategoryName" className="form-label">
                                Category Name
                            </label>
                            <input
                                value={CategoryName}
                                onChange={(e) => setCategoryName(e.target.value)}
                                type="text"
                                className="form-control"
                                id="CategoryName"
                                aria-describedby="emailHelp"
                            />

                        </div>

                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">
                                Category Image
                            </label>
                            <input className="form-control" onChange={(e) => setCategoryImage(e.target.files[0])} type="file" id="formFile" />
                        </div>



                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>


                </Modal.Body>

            </Modal>
        </>
    );
}

export default CategoryModal;