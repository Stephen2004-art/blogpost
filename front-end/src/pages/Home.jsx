import React, {useState, useEffect} from 'react'
import Story from '../components/Story';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/material'
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import publicApi from '../api/publicApi'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListIcon from '@mui/icons-material/List';

const Home = () =>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [stories, setStories] = useState([]);
    const getData =() =>{
      publicApi.get('/stories/get')
        .then(({data})=> setStories(data.data));
    }
    const filterByCategory = (category) => {
      const filteredStories=stories.filter((story)=>{
        return (
            story.category===category        )
      });
      return filteredStories
    }
    useEffect (()=> {
      getData();
    },[]);

    const navigate = useNavigate()
    return(
        <div>
            <div style={stylee.off1}>
                <ListIcon variant="primary" onClick={handleShow} style={stylee.off}/>
            </div>
            <Container>
                <div style={stylee.head}>
                    <h1 style={stylee.name} className="write">CORREO.</h1>
                    <h3  style={stylee.name1}>Everything from anywhere, at once!</h3 >
                </div>
                <div style={stylee.icon}>
                    <FilterVintageIcon style={stylee.icon1}/>
                </div>
                <div style={stylee.icon11}>
                    <FilterVintageIcon style={stylee.icon111}/>
                </div>
                <div style={stylee.div}></div>
                <div style={stylee.div2}>
                    <div>
                        <h3 style={stylee.h3}>Nature.</h3>
                        <Story stories={filterByCategory('Nature')}/> 
                    </div>
                    <div style={stylee.div3}></div>
                    <div>
                        <h3 style={stylee.h3}>Auto.</h3>
                        <Story stories={filterByCategory('Auto')}/> 
                    </div>
                    <div style={stylee.div3}></div>
                    <div>
                        <h3 style={stylee.h3}>Music.</h3>
                        <Story stories={filterByCategory('Music')}/> 
                    </div>
                    <div style={stylee.div3}></div>
                    <div>
                        <h3 style={stylee.h3}>Politics.</h3>
                        <Story stories={filterByCategory('Politics')}/> 
                    </div>
                    <div style={stylee.div3}></div>
                    <div>
                        <h3 style={stylee.h3}>Entertainment.</h3>
                        <Story stories={filterByCategory('Entertainment')}/> 
                    </div>
                    <div style={stylee.div3}></div>
                    <div>
                        <h3 style={stylee.h3}>Education.</h3>
                        <Story stories={filterByCategory('Education')}/> 
                    </div>
                    <div style={stylee.div3}></div>
                    <div>
                        <h3 style={stylee.h3}>National News.</h3>
                        <Story stories={filterByCategory('National News')}/> 
                    </div>
                    <div style={stylee.div3}></div>
                    <div>
                        <h3 style={stylee.h3}>Other Stories.</h3>
                        <Story stories={filterByCategory('Other stories')}/> 
                    </div>
                </div>
            </Container>
            <div style={stylee.named}>
                <p style={stylee.named1}  onClick={()=> navigate('/aboutcompany')} className="button">By Stephen & Co.</p>
            </div>
            <div style={stylee.canva1}>
                <Offcanvas show={show} onHide={handleClose} style={stylee.canva} className="auto">
                    <div style={stylee.canva2}>
                        <Offcanvas.Header closeButton>
                        <Offcanvas.Title style={stylee.canva2a}>Correo.</Offcanvas.Title>
                        </Offcanvas.Header>
                    </div>
                    <Offcanvas.Body style={stylee.canva3}>
                        <button style={stylee.offf} className="canvo"  onClick={()=> navigate('/home')}>Home</button><br/>
                        <button style={stylee.offf} className="canvo"  onClick={()=> navigate('/addstory')}>Add A Story !</button><br/>
                        <button style={stylee.offf} className="canvo"  onClick={()=> navigate('/aboutcompany')}>About</button><br/>
                        <button style={stylee.offf} className="canvo"  onClick={()=> navigate('/contactus')}>Contact Us !</button>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </div>
    )
}

const stylee = {
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
    div2: {
        display: 'block'
    },
    h3: {
        marginTop: '20px',
        marginBottom: '-50px',
        marginLeft: '30px'
    },
    div3: {
        border: '1px solid grey',
        borderStyle: 'solid',
        marginTop: '50px' 
    },
    named: {
        margin: '140px 0px 0px 75%',
        fontSize: '20px',
        letterSpacing: '7px',
        fontWeight: '500'
    },
    named1: {
        color: 'purple',
        paddingBottom: '20px'
    },
    off: {
        width: '40px',
        height: '40px',
        marginBottom: '-150px',
        // marginTop: '50px'
    },
    off1: {
        // paddingTop: '15px',
        marginLeft: '120px',
        // marginBottom: '-10px',
    },
    canva: {
        borderRadius: '65%',
        height: '50%',
        // width : '50%',
        marginTop: '20px',
        marginLeft: '20px'
        // display: 'flex'
    },
    canva1: {
        // borderRadius: 'fit-content'
    },
    canva2: {
        marginLeft: '95px',
        width: '50%',
        fontSize: '15px'
    },
    canva3: {
        margin: '0 auto'
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
    }
}

export default Home