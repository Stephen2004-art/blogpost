import React from 'react';
import { useNavigate } from 'react-router-dom';

const Password = () =>{

    const navigate = useNavigate()
    return(
        <div>
            <div style={style.help}>
                Unable to connect due to network error. Check again Later.
            </div>
            <button onClick={()=> navigate('/login')} style={style.btn2} className="button button1">Go Back</button>
        </div>
    )
}

const style= {
    help: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '20px'
    },
    btn2: {
        margin: '50px',
        marginLeft: '400px',
        width: '500px',
        height: '50px',
        border: '1px solid black',
        borderRadius: '10px',
        letterSpacing: '10px',
        background: 'rgb(108 53 151)',
        color: 'white'
    }
}

export default Password