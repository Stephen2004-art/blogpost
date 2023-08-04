import React from 'react';
import { useNavigate } from 'react-router-dom';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';

const ContactUs = () => {
    const navigate = useNavigate();

    return(
        <div className="about">
            <div style={styled.whole}>
                <div style={styled.head}>
                    <h1 style={styled.name} className="write">CORREO.</h1>
                    <h3 style={styled.name1}>Everything from anywhere, at once!</h3 >
                </div>
                <div style={styled.icon}>
                    <FilterVintageIcon style={styled.icon1}/>
                </div>
                <div style={styled.icon11}>
                    <FilterVintageIcon style={styled.icon111}/>
                </div>
                <div style={styled.div}></div>
                <p style={styled.write}>Company Name: Stephen & Co. ,</p>
                <p style={styled.write}>Address: 123 Tech Boulevard, Cyber City, Futurama. ,</p>
                <p style={styled.write}>Phone: +1 (555) 123-4567 ,</p>
                <p style={styled.write}>Email: <a href="http://www.gmail.com" target="_blank" className="blog blog1">info@stephenandco.com</a> ,</p>
                <p style={styled.write}>Website: <a onClick={()=> navigate(`/aboutcompany`)} className="blog blog1">www.stephenandco.com</a> ,</p>
                <p style={styled.write}>Instagram: <a href="http://www.instagram.com" target="_blank" className="blog blog1">@correobystephen</a> ,</p>
                <p style={styled.write}>Twitter: <a href="http://www.twitter.com" target="_blank" className="blog blog1">@correo</a> ,</p>
                <p style={styled.write}>FaceBook: <a href="http://www.facebook.com" target="_blank" className="blog blog1">Correo Blog</a> </p>
                <button onClick={()=> navigate(-1)} style={styled.bton}>Go Back</button>
            </div>
        </div>
    )
}

const styled= {
    write: {
        fontWeight: '700'
    },
    head: {
        display: 'block'
    },
    name: {
        display: 'flex',
        justifyContent: 'center',
        letterSpacing: '20px'
    },
    name1: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '20px',
        letterSpacing: '5px',
        fontWeight: '700'
    },
    icon: {
        marginLeft: '75%',
        marginTop: '-80px'
    },
    icon1: {
        width: '60px',
        height: '60px',
        color: '#DD58D6'
    },
    icon11: {
        marginLeft: '20%',
        marginTop: '-60px'
    },
    icon111: {
        width: '60px',
        height: '60px',
        color: '#DD58D6'
    },
    div: {
        border: '1px solid black',
        borderStyle: 'dashed',
        marginTop: '20px',
        marginBottom: '50px'
    },
    bton: {
        borderRadius: '10px',
        border: '0px',
        background: 'purple'
    },
    whole: {
        marginRight: '50px',
        marginLeft: '50px'
    }
}

export default ContactUs