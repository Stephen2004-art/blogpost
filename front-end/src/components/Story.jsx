import React, {useState, useEffect} from 'react';
import '../App';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import publicApi from '../api/publicApi';
import { useNavigate } from 'react-router-dom';

const Story = ({stories}) =>{
    const backendUrl = import.meta.env.VITE_APP_BACKEND_URL;
    // const [stories, setStories] = useState([]);
    // const getStories = async () => {
    //     const { data } = await publicApi.get('/stories/get')
    //     console.log(data)
    //     setStories(data.data)
    // }
    // useEffect(()=>{
    //     getStories()
    // },[])
    const navigate = useNavigate()
    return(
        <div class="flex-row flex-nowrap overflow-auto">
            {stories.length < 1 ? <p style={styled.content}>No stories available...</p> :
           <Row xs={1} md={3}  className="g-4" style={styled.row}>
                {stories.map((story) =>(
                    <Col key={story._id}>
                        <Card className="mb-3" style={styled.card}>
                            <div>
                                <Card.Img variant="top" src={backendUrl + story.image} style={styled.cadimg} onClick={()=> navigate(`/thestory/${story._id}`)} className="blog blog1"/>
                                <Card.Body style={styled.topic}>
                                    <Card.Title style={styled.topic1}>{story.topic}</Card.Title>
                                    <a href={`/thestory/${story._id}`} className="blog blog1">Read More</a> 
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
                ))}
                {stories.length > 1 ? <p>The End</p> : null}
           </Row>}
           {/*  */}
        </div>
    )
}

const styled= {
    row: {
        marginTop: '40px'
    },
    card: {
        display: 'flex',
        justifyContent: 'center',
        width: '370px',
        height: 'max-content',
        border: '2px solid black',
        borderRadius: '10px'
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '30px'
    },
    cadimg: {
        width: '100%',
        height: '100%',
        borderRadius: '8px'
    },
    topic: {
        marginBottom: '-10px'
    },
    topic1: {
        fontWeight: '700'
    }
}

export default Story

