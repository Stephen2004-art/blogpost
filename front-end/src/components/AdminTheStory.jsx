import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import publicApi from '../api/publicApi';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from '@mui/material';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const AdminTheStory = () => {
    const backendUrl = import.meta.env.VITE_APP_BACKEND_URL;
    const { id } = useParams();
    const [stories, setStories] = useState([]);
    const navigate = useNavigate();
    const [isEditMode, setIsEditMode] = useState(false);
    const [editedTopic, setEditedTopic] = useState("");
    const [editedStory1, setEditedStory1] = useState("");
    const [editedStory2, setEditedStory2] = useState("");
    const [editedStory3, setEditedStory3] = useState("");
    const [editedStory4, setEditedStory4] = useState("");
    const [deleted, setDeleted] = useState(false);

    const getStory = async () => {
        const { data } = await publicApi.get(`/stories/${id}`);
        console.log(data);
        setStories(data.data);
    };

    useEffect(() => {
        getStory();
     }, [id]);

    const handleEditClick = () => {
        setIsEditMode(true);
        setEditedTopic(stories.topic);
        setEditedStory1(stories.story1);
        setEditedStory2(stories.story2);
        setEditedStory3(stories.story3);
        setEditedStory4(stories.story4);
      };
    
    const handleSaveClick = async () => {
        setIsEditMode(false);
        console.log('response')
        const updatedStories = {
          ...stories,
          topic: editedTopic,
          story1: editedStory1,
          story2: editedStory2,
          story3: editedStory3,
          story4: editedStory4
        };
        try {
          const response = await publicApi.post(`/stories/editstory/${id}`, updatedStories);
          console.log("Response from server:", response.data);
          setStories(updatedStories);
          window.open('/admin/home','_self')  
        } catch (error) {
          console.error("Error saving the edited content:", error);
        }
      };

      const handleDeleteClick = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this story?");
        if (confirmDelete) {
        try {
            const response = await publicApi.post(`/stories/delete/${id}`);
            console.log('success', "Response from server:", response.data);
            setDeleted(true);
            window.open('/admin/home','_self')  
        } catch (error) {
          console.error("Error deleting the story:", error);
        }
        }
      };

    return (
        <div className="add">
             <Container style={styled.cont}>
                <h3 style={styled.head}>Edit your Story.</h3>
                <div onClick={handleEditClick} style={styled.arrow3}>
                    <EditNoteIcon style={styled.arrow}/>
                    <p style={styled.arrow2}>edit</p>
                </div>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label style={styled.name}>Topic</Form.Label>
                        <div>
                            {isEditMode ? (
                            <div>
                                <Form.Control
                                style={styled.input} 
                                as="textarea"
                                type="text"
                                value={editedTopic}
                                onChange={(e) => setEditedTopic(e.target.value)}
                                />
                            </div>
                            ) : (
                            <div>
                                <p>{stories.topic}</p>
                            </div>
                            )}
                        </div>                  
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label style={styled.name}>Paragraph 1</Form.Label>
                        <div>
                            {isEditMode ? (
                            <div>
                                <textarea
                                style={styled.input} 
                                as="textarea"
                                type="text"
                                value={editedStory1}
                                onChange={(e) => setEditedStory1(e.target.value)}
                                />
                            </div>
                            ) : (
                            <div>
                                <p>{stories.story1}</p>
                            </div>
                            )}
                        </div> 
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label style={styled.name}>Paragraph 2</Form.Label>
                        <div>
                            {isEditMode ? (
                            <div>
                                <Form.Control
                                style={styled.input} 
                                as="textarea"
                                type="text"
                                value={editedStory2}
                                onChange={(e) => setEditedStory2(e.target.value)}
                                />
                            </div>
                            ) : (
                            <div>
                                <p>{stories.story2}</p>
                            </div>
                            )}
                        </div> 
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label style={styled.name}>Paragraph 3</Form.Label>
                        <div>
                            {isEditMode ? (
                            <div style={{height: 'fit-content'}}>
                                <Form.Control
                                style={styled.input} 
                                as="textarea"
                                type="text"
                                value={editedStory3}
                                onChange={(e) => setEditedStory3(e.target.value)}
                                />
                            </div>
                            ) : (
                            <div>
                                <p>{stories.story3}</p>
                            </div>
                            )}
                        </div> 
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label style={styled.name}>Paragraph 4</Form.Label>
                        <div>
                            {isEditMode ? (
                            <div>
                                <Form.Control
                                style={styled.input} 
                                as="textarea"
                                type="text"
                                value={editedStory4}
                                onChange={(e) => setEditedStory4(e.target.value)}
                                />
                            </div>
                            ) : (
                            <div>
                                <p>{stories.story4}</p>
                            </div>
                            )}
                        </div> 
                    </Form.Group>
                    <Button  onClick={handleSaveClick} style={styled.button}>
                        Post!
                    </Button>
                </Form>
            </Container>
            <p style={styled.warn}>Note: Images and Category of your blog cannot be editted!</p>
            <div style={styled.named}>
                <p style={styled.named1} onClick={() => navigate('/aboutcompany')} className="button">By Stephen & Co.</p>
            </div>
            <div style={styled.contact} onClick={handleDeleteClick}>
                <DeleteForeverIcon style={styled.contact1} className="button" />
                <p>Delete Story ?</p>
                { deleted ? (
                    <p>Story deleted successfully!</p>
                ) : null
                }
            </div>
            <div  onClick={()=> navigate(-1)} style={styled.arrow1}>
                <KeyboardDoubleArrowLeftIcon style={styled.arrow}/>
                <p style={styled.arrow2}>Back.</p>
            </div>
        </div>
    );
};

const styled = {
    cont: {
        width: 'calc(100vw - 230px)'
    },
    head: {
        fontWeight: '700',
        display: 'flex',
        justifyContent: 'center'
    },
    input: {
        border: '1px solid grey',
        minHeight: 'fit-content',
        width: '100%'
    },
    name: {
        fontSize: '20px'
    },
    named: {
        margin: '100px 0px 0px 75%',
        fontSize: '20px',
        letterSpacing: '7px',
        fontWeight: '500'
    },
    named1: {
        color: 'purple',
        paddingBottom: '20px'
    },
    contact: {
        margin: '-60px 0px 90px 0%',
        display: 'flex',
        justifyContent: 'center'
    },
    contact1: {
        width: '50px',
        height: '50px',
        color: 'purple',
        paddingBottom: '20px'
    },
    button: {
        width: '30%',
        background: 'rgb(130, 0, 380)',
        fontSize: '20px',
        display: 'block',
        margin: '0 auto',
        borderRadius: '20px'
    },
    arrow: {
      fontSize: '40px',
      color: '#8B1874'
    },
    arrow1: {
        dispaly: 'block',
        marginTop: '-155px',
        paddingBottom: '10px',
        marginLeft: '5%',
        cursor: 'pointer',
        width: 'max-content'
    },
    arrow2: {
        marginTop: '-10px',
        color: '#8B1874'
    },
    arrow3: {
        cursor: 'pointer',
        width: 'max-content'
    },
    warn: {
        display: 'flex',
        justifyContent: 'center'
    }
}

export default AdminTheStory