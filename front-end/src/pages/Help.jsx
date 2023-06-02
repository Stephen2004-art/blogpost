import React from 'react';
import { useNavigate } from 'react-router-dom';

const Help = () =>{

    const navigate = useNavigate()
    return(
        <div>
            <div style={style.help}>
                We can't help you at the moment due to technical difficulties. Check again Later.
            </div>
            <button onClick={()=> navigate('/')} style={style.btn2} className="button button1">Go Back</button>
        </div>
    )
}

const style= {
    help: {
        display: 'flex',
        justifyContent: 'center',
        // TextAlign: 'center',
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

export default Help