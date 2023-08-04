import React from 'react';
import '../App';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const AdminStory = ({stories}) =>{
    const backendUrl = import.meta.env.VITE_APP_BACKEND_URL;
    const navigate = useNavigate();

    const renderTooltip = (props) => (
        <Tooltip id="tooltip" {...props}>
          Edit Blog?
        </Tooltip>
      );

    return(
        <div>
            {stories.length < 1 ? <p style={styled.content}>No stories available...</p> :
           <Row xs={1} md={3}  className="g-4" style={styled.row}>
                {stories.map((story) =>(
                    <Col key={story._id}>
                        <Card className="mb-3" style={styled.card}>
                            <div>
                            <OverlayTrigger
                                trigger="hover"
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}
                                >
                                <Card.Img variant="top, success" src={backendUrl + story.image} style={styled.cadimg} onClick={()=> navigate(`/admin/thestory/${story._id}`)} className="blog blog1"/>
                            </OverlayTrigger>
                                <Card.Body style={styled.topic}>
                                    <Card.Title style={styled.topic1}>{story.topic}</Card.Title>
                                    <a href={`/admin/thestory/${story._id}`} className="blog blog1">Edit</a> 
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
                ))}
                {stories.length >= 1 ? <p style={styled.end}>The End</p> : null}
           </Row>}
        </div>
    )
}

const styled= {
    row: {
        marginTop: '40px',
        marginLeft: '5px'
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
    },
    end:{
        textAlign:'center',
        fontSize:'15px',
        color:"#9B9B9B",
        margin:'auto',
        fontWeight: '600'
    }
}

export default AdminStory