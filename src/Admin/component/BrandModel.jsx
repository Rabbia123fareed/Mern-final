import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
import {storage} from '../Utils/FirebaseConfig'
import {  ref, uploadBytes, getDownloadURL } from "firebase/storage";

function BrandModal({newBrands}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [ Brandname, setBrandname] = useState("")
    const [Brandimage, setBrandimage] = useState(null)

    const Addbrand = (e) => {
        e.preventDefault();
        if( Brandimage){
            const payload = { Brandname: Brandname, Brandimage: Brandimage }

            // console.log(payload)
            // const storageRef = ref(storage, 'some-child');
            console.log( Brandimage.name)
            const storageRef = ref(storage, `images/brand/${Brandimage.name}`);
            uploadBytes(storageRef,Brandimage ).then((snapshot) => {
                console.log('uploded a files',snapshot)
                getDownloadURL(snapshot.ref)
                    .then((url) => {
                        console.log(url)
                        const payload = {Brandname , Brandimage: url }
                        console.log(payload)
                        axios.post('/api/addbrands', payload)
                            .then((json) => {
                                
                                setShow(false);
                              recallData(json.data.brands)
                            })
                            .catch(err => alert(err.message))
    
                    })
                    .catch((error) => alert(error.message));
            });
        }else{
            alert(error.message)
        }


    



        // useEffect(() => {
            
        //     axios.post('http://localhost:3000/api/addbrands', payload)
        //     .then(json => {
        //         console.log(json.data)
        //        newBrands(json.data.Brands)
        //         setShow(false)

        //     })
        //     .catch(err => console.log(err))
           
        // }, [])
       
    }
    

    return (
        <>
            <Button variant="dark" onClick={handleShow}>
                Add Brand
            </Button>

            <Modal show={show} onHide={handleClose} centered backdrop="static" className='bg-info'>
                <Modal.Header closeButton  className='bg-danger'>
                    <Modal.Title>Add Brand</Modal.Title>
                </Modal.Header>
                <Modal.Body  className='bg-danger'>

                    <form onSubmit={Addbrand}>
                        <div className="mb-3">
                            <label htmlFor="Brandname" className="form-label">
                            Brand Name
                            </label>
                            <input
                                value={ Brandname}
                                onChange={(e) => setBrandname(e.target.value)}
                                type="text"
                                className="form-control"
                                id="Brandname"
                                aria-describedby="emailHelp"
                            />

                        </div>

                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">
                               Brand Image
                            </label>
                            <input className="form-control" onChange={(e) => setBrandimage(e.target.files[0])} type="file" id="formFile" />
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

export default BrandModal;