import React from 'react';
import { useNavigate } from 'react-router-dom';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const Profile = () =>{
    const navigate = useNavigate();
    
    return(
        <div className="bg" style={styles.div}>
            <div style={styles.cont}>
                <h1 style={styles.head} className="write">Correo.</h1>
                <div style={styles.icon1}>
                    <FilterVintageIcon style={styles.icon11}/>
                </div>
                <div style={styles.btn}>
                    <button onClick={()=> navigate('/register')} style={styles.btn1} className="button button1">SIGN UP</button>
                </div>
                <div style={styles.btn}>
                    <button onClick={()=> navigate('/login')} style={styles.btn2} className="button button1">LOG IN</button>
                </div>
                <p  style={styles.admin} className="button" onClick={()=> navigate('/admin')}>You are a blogger? go to admin page</p>
                <div style={styles.help} className="button" onClick={()=> navigate('/help')}>
                    <div style={styles.hicon}>
                        <HelpOutlineIcon/>
                    </div>
                    <p style={styles.help1}>Help</p>
                </div>
            </div>
            <div style={styles.name}>
                <p style={styles.name1} onClick={()=> navigate('/aboutcompany')} className="button">By Stephen & Co.</p>
            </div>
        </div>
    )
}

const styles = {
    div: {
        margin: '-100px -2px 0px -2px'
    },
    head: {
        fontSize: '100px',
        letterSpacing: '20px',
        display: 'flex',
        justifyContent: 'center',
        margin: '100px 0px 0px 0px'
    },
    icon1: {
        display: 'flex',
        justifyContent: 'center',
        margin: '30px 0px 100px 0px'
    },
    icon11: {
        width: '100px',
        height: '100px'
    },
    btn: {
        margin: '10px',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '-10px'
    },
    btn1: {
        margin: '10px',
        width: '500px',
        height: '50px',
        border: '1px solid black',
        borderRadius: '10px',
        letterSpacing: '10px',
        background: 'rgb(108 53 151)',
        color: 'white'
    },
    btn2: {
        margin: '10px',
        width: '500px',
        height: '50px',
        border: '1px solid black',
        borderRadius: '10px',
        letterSpacing: '10px',
        background: 'rgb(108 53 151)',
        color: 'white'
    },
    help: {
        display: 'block',
        margin: '45px 49% 0px 49%'
    },
    hicon: {
        marginBottom: '-5px'
    },
    help1:{
        marginLeft: '-70%',
        letterSpacing: '10px',
        fontWeight: '700'
    },
    name: {
        margin: '-20px 0px 0px 75%',
        fontSize: '20px',
        letterSpacing: '7px',
        fontWeight: '500'
    },
    name1: {
        paddingBottom: '9px'
    },
    admin: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '-20px',
        fontWeight: '700'
    }
}

export default Profile