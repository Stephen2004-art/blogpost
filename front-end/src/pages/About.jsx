import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();
    
    return(
        <div className="about">
            <div style={style.whole}>
            <h1 style={style.hedd}>Correo.</h1><p>short history :-</p>
            <div style={style.help}>
                <p style={{marginBottom: '-30px'}}>Stephen & Co., a renowned IT company, boasts a rich and inspiring history that has shaped the technological landscape for over four decades. Established in 1980 by visionary entrepreneur Stephen Muthuo, the company initially focused on providing software development services to local businesses. With a dedicated team of brilliant minds, Stephen & Co. quickly gained a reputation for delivering innovative and cutting-edge solutions, propelling them to the forefront of the industry. With a team of talented developers and designers, Stephen & Co. has embarked on a journey to revolutionize the blogging industry. Their mission is to create a cutting-edge blog post website, </p> <a onClick={()=> navigate(`/`)} className="blog blog1" style={{width: 'fit-content', marginLeft: '90%', marginTop: '-100px'}}> CORREO</a> <p style={{marginTop: '-0px'}}>, that provides a seamless and engaging experience for both writers and readers alike. By leveraging the latest advancements in web development and user experience design, Stephen & Co. aims to empower content creators by offering them a robust platform to express their ideas, share their expertise, and connect with a wider audience. As the digital revolution gained momentum, the company expanded its scope to include hardware manufacturing, networking solutions, and cybersecurity services. Throughout its history, Stephen & Co. has remained committed to pushing boundaries and embracing emerging technologies, earning them numerous accolades and a loyal customer base. With a steadfast dedication to excellence and a forward-thinking approach, Stephen & Co. continues to shape the future of IT, making it a trusted and influential player in the ever-evolving technology sector.</p>
            </div>
            <button onClick={()=> navigate(-1)} style={style.btn2} className="button button1">Go Back</button>
            </div>
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
        fontSize: '20px'
    },
    btn2: {
        margin: '50px',
        marginLeft: '450px',
        width: '350px',
        height: '50px',
        border: '1px solid black',
        borderRadius: '10px',
        letterSpacing: '10px',
        background: 'rgb(108 53 151)',
        color: 'white'
    },
    whole: {
        marginRight: '50px',
        marginLeft: '50px'
    }
}

export default About