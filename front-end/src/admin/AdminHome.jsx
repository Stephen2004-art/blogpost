import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import ListIcon from '@mui/icons-material/List';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Container } from '@mui/material';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import adminPrivateApi from '../api/adminPrivateApi';
import AdminStory from '../components/AdminStory';

const AdminHome = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [stories, setStories] = useState([]);

    const getData =() =>{
      adminPrivateApi.get('/stories/admin/get')
        .then(({data})=> setStories(data.data));
    }

    useEffect (()=> {
      getData();
    },[]);

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        navigate('/admin');
      };

    return(
        <div>
             <div style={stylee.off1}>
                <ListIcon variant="primary" onClick={handleShow} style={stylee.off} className="blog1"/>
            </div>
            <Container>
                <div style={stylee.head}>
                    <h1 style={stylee.name} className="write">CORREO.</h1>
                    <h3 style={stylee.name1}>Blogger Edition !</h3 >
                </div>
                <div style={stylee.icon}>
                    <FilterVintageIcon style={stylee.icon1}/>
                </div>
                <div style={stylee.icon11}>
                    <FilterVintageIcon style={stylee.icon111}/>
                </div>
                <div style={stylee.div}></div>
            </Container>
            <h4 style={stylee.off2}>Your Stories</h4>
            <AdminStory stories={stories}/>
            <div>
                <Offcanvas show={show} onHide={handleClose} style={stylee.canva} className="auto">
                    <div style={stylee.canva2}>
                        <Offcanvas.Header closeButton>
                        <Offcanvas.Title style={stylee.canva2a}>Correo .</Offcanvas.Title>
                        </Offcanvas.Header>
                    </div>
                    <Offcanvas.Body style={stylee.canva3}>
                        <button style={stylee.offf} className="canvo" onClick={()=> navigate('/admin/addstory')}>Write !</button><br/>
                        <button style={stylee.offf} className="canvo" onClick={()=> navigate('/aboutcompany')}>About</button><br/>
                        <button style={stylee.offf} className="canvo" onClick={()=> navigate('/contactus')}>Contact Us !</button><br/>
                        <button style={stylee.offf} className="canvo" onClick={handleLogout}>Exit</button><br/>
                        <p style={stylee.bbb}>(Blogger Edition)</p>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </div>
    )
}

const stylee = {
    off: {
        width: '40px',
        height: '40px',
        marginBottom: '-150px'
    },
    off1: {
        marginLeft: '120px'
    },
    off2: {
        marginLeft: '120px',
        marginBottom: '-40px',
        width: 'fit-content'
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
        letterSpacing: '5px'
    },
    div: {
        border: '1px solid black',
        borderStyle: 'dashed',
        marginTop: '20px',
        marginBottom: '50px'
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
    canva: {
        borderRadius: '65%',
        height: '50%',
        marginTop: '20px',
        marginLeft: '20px'
    },
    canva2: {
        marginLeft: '95px',
        width: '50%',
        fontSize: '15px'
    },
    canva3: {
        margin: '0 auto',
        marginTop: '-35px',
        marginBottom: '0px'
    },
    offf: {
        marginBottom: '20px',
        border: '1px solid black',
        background: '#fff',
        width: '150px',
        borderRadius: '10px'
    },
    canva2a: {
        fontSize: '30px'
    },
    bbb: {
        display: 'flex',
        justifyContent: 'center',
        color: 'rgb(0, 0, 0)',
        fontWeight: '600'
    }
}

export default AdminHome