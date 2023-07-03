import React, {useState} from 'react'
import { Container } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import publicApi from '../../api/publicApi'

const Register = () =>{
    const [validated, setValidated] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null)
    const [formData, setFormData] = useState({firstName: '', lastName: '', country: '', phoneNumber: '', gender: '', email: '', password: ''})
    const registerUser = async (e) =>{
        e.preventDefault()
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        }
    
        setValidated(true);
    
        try {
            setErrorMsg(null)
            const { data } = await publicApi.post('/signup', formData)
            console.log(data)
            if(data.message === 'Created Account Successfully!'){
                window.open('/login','_self')
            }
        } catch (error) {
            setErrorMsg('Something went wrong')
            console.log(error)
        }
    }

    const navigate = useNavigate()
    return(
        <div className="bg" style={styless.div}>
            <div style={styless.sign}>
                <h1 className="sign">SIGN UP</h1>
            </div>
            <div style={styless.cont2}>
                <Container style={styless.cont} className="glass">
                    <Form noValidate validated={validated} onSubmit={registerUser} >
                        <div  style={styless.inputs}>
                            <div>
                                <Form.Group className="mb-3">
                                    <Form.Label>First Name.</Form.Label>
                                    <br/>
                                    <Form.Control  style={{width: '300px', height: '35px'}} type="text" placeholder="First Name" onChange={(e)=> {setFormData({...formData, firstName: e.target.value})}} required/>
                                    <Form.Control.Feedback type="invalid">
                                        Please write your first name.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </div>
                            <div  style={styless.input2}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Last Name.</Form.Label>
                                    <br/>
                                    <Form.Control style={{width: '300px', height: '35px'}} type="text" placeholder="Last Name" onChange={(e)=> {setFormData({...formData, lastName: e.target.value})}} required/>
                                    <Form.Control.Feedback type="invalid">
                                        Please write your last name.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </div>
                        </div>
                        <div  style={styless.inputs}>
                            <div> 
                                <Form.Group className="mb-3">
                                    <Form.Label>Country.</Form.Label>
                                    <br/>
                                    <Form.Control style={{width: '300px', height: '35px'}} type="text" placeholder="Enter Country"onChange={(e)=> {setFormData({...formData, country: e.target.value})}} required/>
                                    <Form.Control.Feedback type="invalid">
                                        Please select your country.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </div>
                            <div  style={styless.input3}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Phone Number.</Form.Label>
                                    <br/>
                                    <Form.Control style={{width: '300px', height: '35px'}} type="text" placeholder="Phone" onChange={(e)=> {setFormData({...formData, phoneNumber: e.target.value})}} required/>
                                    <Form.Control.Feedback type="invalid">
                                        Please insert your phone number.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </div>
                        </div>
                        <div   style={styless.inputs}>
                            <div>
                                <Form.Group className="mb-3">
                                    <Form.Label>E-mail.</Form.Label>
                                    <br/>
                                    <Form.Control style={{width: '300px', height: '35px'}} type="email" placeholder="Email Address" onChange={(e)=> {setFormData({...formData, email: e.target.value})}} required/>
                                    <Form.Control.Feedback type="invalid">
                                        Please insert your E-mail.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </div>
                            <div  style={styless.input4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Gender.</Form.Label>
                                    <br/>
                                    <Form.Select style={{width: '150px', height: '35px'}} onChange={(e)=> {setFormData({...formData, gender: e.target.value})}}>
                                        <option>Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </Form.Select>
                                </Form.Group>
                            </div>
                        </div>
                        <div  style={styless.inputs}>
                            <div>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password.</Form.Label>
                                    <br/>
                                    <Form.Control style={{width: '300px', height: '35px'}} type="password" placeholder="Password" onChange={(e)=> {setFormData({...formData, password: e.target.value})}} required/>
                                    <Form.Control.Feedback type="invalid">
                                        Please choose a strong password.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </div>
                            <div  style={styless.input5}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Re-enter Password.</Form.Label>
                                    <br/>
                                    <Form.Control style={{width: '300px', height: '35px'}} type="password" placeholder="Re-enter password" onChange={(e)=> {setFormData({...formData, password: e.target.value})}} required/>
                                    <Form.Control.Feedback type="invalid">
                                        Please choose a strong password.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </div>
                        </div>
                        <div  style={styless.inputs}>
                            <Form.Group className="mb-3">
                                <Form.Check type="checkbox" label="Check me out" required/>
                                <Form.Control.Feedback type="invalid">
                                    Select check box!
                                </Form.Control.Feedback>
                            </Form.Group>
                        </div>
                        {errorMsg? <p style={{color: 'red', fontSize: '0.8em'}}>{errorMsg}</p>: null}
                        <div  style={styless.btn}>
                            <Button  style={styless.btn1} variant="primary" type="submit" className="button button1">
                                SIGN UP
                            </Button>
                        </div>
                        <div style={styless.acc}>
                            <p className="button"  onClick={()=> navigate('/login')}>You already have an account? Log in.</p>
                        </div>
                    </Form>
                </Container>
            </div>
            <div style={styless.name}>
                <p style={styless.name1}  onClick={()=> navigate('/aboutcompany')} className="button">By Stephen & Co.</p>
            </div>
        </div>
    )
}

const styless= {
    div: {
        margin: '-20px -2px 0px -2px',
    },
    sign: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px'
    },
    cont: {
        border: '0px solid black',
        background: 'white',
        borderRadius: '5px',

    },
    cont2: {
        paddingBottom: '90px',
        display: 'flex',
        justifyContent: 'center'
    },
    inputs: {
        display : 'flex',
        justifyContent: 'space-between',
        margin: '20px',
        fontSize: '20px'
    },
    btn1: {
        background: 'rgb(108 53 151)',
        width: '250px',
        height: '30px',
        borderRadius: '10px',
        border: '0px solid black',
        color: 'white',
        letterSpacing: '5px'
    },
    btn: {
        display: 'flex',
        justifyContent: 'center',
        margin: '20px'

    },
    input2: {
        marginRight: '100px'
    },
    input3: {
        marginRight: '98px'
    },
    input4: {
        marginRight: '247px'
    },
    input5: {
        marginRight: '94px'
    },
    form: {
        display: 'inline-block'
    },
    acc: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '13px'
    },
    name: {
        margin: '-50px 0px 0px 75%',
        fontSize: '20px',
        letterSpacing: '7px',
        fontWeight: '500'
    },
    name1: {
        paddingBottom: '20px'
    }
}

export default Register
