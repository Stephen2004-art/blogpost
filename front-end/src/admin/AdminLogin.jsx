import React, {useState} from 'react';
import Cookies from 'js-cookie';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import publicApi from '../api/publicApi';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () =>{
    const [validated, setValidated] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);
    const navigate = useNavigate()
    const [formData, setFormData] = useState({email: '', password: ''});

    const loginAdmin = async (e) =>{
        e.preventDefault()
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        }
    
        setValidated(true);
        try {
            setErrorMsg(null)
            const { data } = await publicApi.post('/admin/signin', formData)
            console.log(data)
            if(data.message === 'Admin Authenticated'){
                console.log('success')
                Cookies.set('adminToken', data.token)
                window.open('/admin/home','_self')
            }
        } catch (error) {
            setErrorMsg('Something went wrong! Try again later.')
            console.log(error)
        }
    }

    return(
        <div className="bg" style={styled.all}>
            <div style={styled.all1}>
                <div style={styled.head}>
                    <h1 className="sign">Welcome Blogger!!!</h1>
                </div>
                <Form noValidate validated={validated} onSubmit={loginAdmin}>
                    <div style={styled.num1}>
                    <Form.Group className="mb-3">
                        <Form.Label style={styled.topic}>E-mail.</Form.Label>
                        <Form.Control style={styled.input} type="email" placeholder="Email Address" value={formData.email} onChange={(e)=> {setFormData({...formData, email: e.target.value})}} required/>
                        <Form.Control.Feedback type="invalid">
                            Please insert your E-mail.
                        </Form.Control.Feedback>
                    </Form.Group>
                    </div>
                    <div style={styled.num2}>
                    <Form.Group className="mb-3">
                        <Form.Label style={styled.topic}>Password.</Form.Label>
                        <Form.Control style={styled.input} type="password" placeholder="Password" value={formData.password} onChange={(e)=> {setFormData({...formData, password: e.target.value})}} required/>
                        <Form.Control.Feedback type="invalid">
                            Please insert your password.
                        </Form.Control.Feedback> 
                    </Form.Group>
                    </div>
                    <div style={styled.pass}>
                    <p style={styled.pass1} className="button"  onClick={()=> navigate('/password')}>? Forgot Password</p>
                    </div>
                    {errorMsg? <p style={{color: 'red', fontSize: '0.8em'}}>{errorMsg}</p>: null}
                    <div style={styled.btn}>
                        <Button style={styled.btn1} variant="primary" type="submit">
                            Log In
                        </Button>
                    </div>
                </Form>
                <div style={styled.name}>
                    <p style={styled.name1}  onClick={()=> navigate('/aboutcompany')} className="button">By Stephen & Co.</p>
                </div>
            </div>
        </div>
    )
}

const styled = {
    all: {
        margin: '-20px -2px 0px -2px',
    },
    head: {
        display: 'flex', 
        justifyContent: 'center',
        marginTop: '20px',
        paddingTop: '100px'
    },
    num1: {
        display: 'flex', 
        justifyContent: 'center',
        fontSize: '20px'
    },
    num2: {
        display: 'flex', 
        justifyContent: 'center',
        fontSize: '20px'
    },
    pass: {
        display: 'flex', 
        justifyContent: 'center'
    },
    topic: {
        color: 'white'
    },
    input: {
        opacity: '0.5',
        border: '1px solid black',
        width: '500px',
        height: '40px'
    },
    pass1: {
        color: 'white'
    },
    btn: {
        display: 'flex', 
        justifyContent: 'center',
        margin: '20px'
    },
    btn1: {
        background: 'rgb(108 53 151)',
        width: '200px',
        height: '30px',
        borderRadius: '10px',
        border: '0px solid black',
        color: 'white',
        fontSize: '15px'
    },
    name: {
        margin: '140px 0px 0px 75%',
        fontSize: '20px',
        letterSpacing: '7px',
        fontWeight: '500'
    },
    name1: {
        color: 'purple',
        paddingBottom: '20px'
    }
}

export default AdminLogin