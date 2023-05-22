import React, {useState} from 'react'
import Cookies from 'js-cookie'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import publicApi from '../../api/publicApi';

const Login = () => {
    const [validated, setValidated] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null)
    const [formData, setFormData] = useState({email: '', password: ''})
    const loginUser = async (e) =>{
        e.preventDefault()
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        }
    
        setValidated(true);
        try {
            setErrorMsg(null)
            const { data } = await publicApi.post('/signin', formData)
            console.log(data)
            if(data.message === 'User Authenticated'){
                console.log('success')
                Cookies.set('token', data.token)
                window.open('/home','_self')
            }
        } catch (error) {
            setErrorMsg('Something went wrong! Try again later.')
            console.log(error)
        }
    }
    return(
        <div style={stylees.box}>
            <div style={stylees.page}>
                <h2 style={stylees.wel}>Welcome !!!</h2>
                <Form noValidate validated={validated} onSubmit={loginUser}>
                    <Form.Group className="mb-3">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control type="email" placeholder="Email Address" value={formData.email} onChange={(e)=> {setFormData({...formData, email: e.target.value})}} required/>
                        <Form.Control.Feedback type="invalid">
                            Please insert your E-mail.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={formData.password} onChange={(e)=> {setFormData({...formData, password: e.target.value})}} required/>
                        <Form.Control.Feedback type="invalid">
                            Please insert your password.
                        </Form.Control.Feedback> 
                    </Form.Group>
                    <p>? Forgot Password</p>
                    {errorMsg? <p style={{color: 'red', fontSize: '0.8em'}}>{errorMsg}</p>: null}
                    <div style={stylees.btn}>
                        <Button variant="primary" type="submit" style={stylees.btn2}>
                            Log In
                        </Button>
                    </div>
                </Form>
                <p style={stylees.inc}>by Stephen & Co.</p>
            </div>
        </div>
    )
}

const stylees = {
//     divv: {
//         
//     },
    page: {
        border: '1px solid gray',
        width: '500px',
        height: 'max-content',
        borderRadius: '10px'
    },
    box: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
    },
    wel: {
        display: 'flex',
        justifyContent: 'center'
    },
    inc: {
        display: 'flex',
        justifyContent: 'end',
        fontSize: '7px'
    },
    btn: {
        display: 'flex',
        justifyContent: 'center'
    },
    btn2: {
        width: '200px'
    }
}



export default Login
