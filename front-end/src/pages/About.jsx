import React from 'react';
import { useNavigate } from 'react-router-dom';


const About= () => {

    const navigate = useNavigate()
    return(
        <div>
            <h1 style={style.hedd}>Correo.</h1><p>short history</p>
            <div style={style.help}>
            Stephen & Co., a renowned IT company, boasts a rich and inspiring history that has shaped the technological landscape for over four decades. Established in 1980 by visionary entrepreneur Stephen Muthuo, the company initially focused on providing software development services to local businesses. With a dedicated team of brilliant minds, Stephen & Co. quickly gained a reputation for delivering innovative and cutting-edge solutions, propelling them to the forefront of the industry. As the digital revolution gained momentum, the company expanded its scope to include hardware manufacturing, networking solutions, and cybersecurity services. Throughout its history, Stephen & Co. has remained committed to pushing boundaries and embracing emerging technologies, earning them numerous accolades and a loyal customer base. With a steadfast dedication to excellence and a forward-thinking approach, Stephen & Co. continues to shape the future of IT, making it a trusted and influential player in the ever-evolving technology sector.
            </div>
            <button onClick={()=> navigate('/home')} style={style.btn2} className="button button1">Go Back to Home</button>
        </div>
    )
}

const style= {
    hedd: {
        letterSpacing: '10px',
        display: 'flex',
        justifyContent: 'center',
        textDecoration: 'underline'
    },
    help: {
        display: 'flex',
        justifyContent: 'center',
        // TextAlign: 'center',
        fontSize: '20px'
    },
    btn2: {
        margin: '50px',
        marginLeft: '450px',
        width: '500px',
        height: '50px',
        border: '1px solid black',
        borderRadius: '10px',
        letterSpacing: '10px',
        background: 'rgb(108 53 151)',
        color: 'white'
    }
}

export default About