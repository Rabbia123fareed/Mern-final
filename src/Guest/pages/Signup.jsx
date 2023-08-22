import { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2'
const Signup = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState('')


  const handleSubmit = (e) => {
      e.preventDefault();
      const payload = { email, password, username }

      axios.post('/api/signup', payload)
          .then((json) => console.log(json.data))
          .catch(err => console.log(err))


      Swal.fire({
        title: 'Signup!',
        text: 'Thanks for Login',
        icon: 'success',
        confirmButtonText: 'Continue'
      })
  }
  return (
    <div  className="d-flex justify-content-center align-items-center ">

<div>
    <img className='img-fluid' src="https://cdna.artstation.com/p/assets/images/images/027/682/158/original/liz-gross-signup.gif?1592246526" alt="" srcSet="" />
    
</div>
<div className="container d-flex mt-5 ">
    <div className="childcontainer mt-3 ">
      
        <Form onSubmit={handleSubmit} className='m-5'>
           
        <h1 className="text-primary"><strong>Signup</strong></h1>

            <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="Name"
                    placeholder="Enter your name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="email">
                <Form.Label>Your Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="termsAgreed">
                <Form.Check
                    type="checkbox"
                    label="Rememberme"

                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Sign Up
            </Button>

            <p>
                Have an account? <Link to="/Login">Login</Link>
            </p>
        </Form>
  
    </div>

  </div>
    </div>
  

  )
}

export default Signup 