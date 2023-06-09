import React, {useState, useEffect} from 'react'
import Story from './Story'
import { Container } from '@mui/material'
import FilterVintageIcon from '@mui/icons-material/FilterVintage';


const Home = () =>{
    return(
        <div>
            <Container>
                <div style={stylee.head}>
                    <h1 style={stylee.name} className="write">CORREO.</h1>
                    <h4 style={stylee.name1}>Everything from anywhere, at once!</h4>
                </div>
                <div style={stylee.icon}>
                    <FilterVintageIcon style={stylee.icon1}/>
                </div>
                <div style={stylee.icon11}>
                    <FilterVintageIcon style={stylee.icon111}/>
                </div>
                <div style={stylee.div}></div>
                <div>
                    <Story/> 
                </div>
            </Container>
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
        marginTop: '20px'
    }
}

export default Home