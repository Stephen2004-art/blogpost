import React,{useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from '@mui/material';
import adminPrivateApi from '../api/adminPrivateApi';
import publicApi from '../api/publicApi';
import DeleteIcon from '@mui/icons-material/Delete';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListIcon from '@mui/icons-material/List';
import { useNavigate } from 'react-router-dom';

const AddStory = () =>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const [blogData, setBlogData]= useState({
        topic: '', story1:'',  story2:'',  story3:'',  story4:'', image: '', images: [], category: []
    });
    const getCategories = async () => {
        const { data } = await publicApi.get('/category/get')
        console.log(data)
        setCategories(data)
    }
    const saveFiles = (e) => {
        let imgArr = [];
        let images = e.target.files;
        for(let i = 0; i < images.length; i++){
            imgArr = [...imgArr, images[i]]
        }
        setBlogData({...blogData, images: imgArr})
    }

    const addBlogs = async (e) =>{
        try {
            e.preventDefault();
            let formData = new FormData ();
            formData.append('topic', blogData.topic);
            formData.append('story1', blogData.story1);
            formData.append('story2', blogData.story2);
            formData.append('story3', blogData.story3);
            formData.append('story4', blogData.story4);
            formData.append('image', blogData.image);
            blogData.images.forEach((img)=> {
                formData.append('images', img)
            })
            formData.append('category', blogData.category);
            const { data } = await adminPrivateApi.post('/stories/create', formData)
            console.log(data)
            window.open('/admin/home','_self')  
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getCategories()
    }, [])

    return(
        <div className="add">
            <div style={styles.off1}>
                <ListIcon variant="primary" onClick={handleShow} style={styles.off} className="blog1"/>
            </div>
            <Container style={styles.cont}>
                <h3 style={styles.head}>Add Story.</h3>
                <Form onSubmit={addBlogs}>
                    <Form.Group className="mb-3">
                        <Form.Label style={styles.name}>Topic</Form.Label>
                        <Form.Control style={styles.input} type="text" placeholder="Topic" required value={blogData.topic} onChange={(e)=> {setBlogData({...blogData, topic: e.target.value})}}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label style={styles.name}>Paragraph 1</Form.Label>
                        <Form.Control style={styles.input} as="textarea" type="text" placeholder="Story"  required value={blogData.story1} onChange={(e)=> {setBlogData({...blogData, story1: e.target.value})}}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label style={styles.name}>Paragraph 2</Form.Label>
                        <Form.Control style={styles.input} as="textarea" type="text" placeholder="Story" required value={blogData.story2} onChange={(e)=> {setBlogData({...blogData, story2: e.target.value})}}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label style={styles.name}>Paragraph 3</Form.Label>
                        <Form.Control style={styles.input} as="textarea" type="text" placeholder="Story" required value={blogData.story3} onChange={(e)=> {setBlogData({...blogData, story3: e.target.value})}}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label style={styles.name}>Paragraph 4</Form.Label>
                        <Form.Control style={styles.input} as="textarea" type="text" placeholder="Story" required value={blogData.story4} onChange={(e)=> {setBlogData({...blogData, story4: e.target.value})}}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label style={styles.name}>Main Image</Form.Label>
                        <p style={styles.name2}>(Once posted, cannot be changed.)</p>
                        <Form.Control  placeholder="(Once chosen, cannot be changed.)" style={styles.input} type="file" onChange={(e)=> setBlogData({...blogData, image: e.target.files[0]})} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label style={styles.name}>Images (4) </Form.Label>
                        <p style={styles.name2}>(Once posted, cannot be changed.)</p>
                        <Form.Control style={styles.input} type="file" multiple onChange={saveFiles} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label style={styles.name}>Category</Form.Label>
                        <p style={styles.name2}>(Once posted, cannot be changed.)</p>
                        <p>{blogData.category.map((item) => item+' ')}</p>
                        <Form.Select style={styles.input} onChange={(e)=> {setBlogData({...blogData, category: [...blogData.category, e.target.value]})}}>
                            <option>Choose Category</option>
                            {
                                categories.map((category)=>{
                                    return(
                                        <option key={category._id} value={category.name}>{category.name}</option>
                                    )
                                })
                            }
                        </Form.Select>
                        {
                            blogData.category.length > 0?
                            <DeleteIcon onClick={()=> setBlogData({...blogData, category:[]})} style={{margin: '-60px 0px 0px 1000px'}}/>
                            : null
                        }
                    </Form.Group>
                    <Button type="submit" style={styles.button}>
                        Post!
                    </Button>
                </Form>
            </Container>
            <div>
                <Offcanvas show={show} onHide={handleClose} style={styles.canva} className="auto">
                    <div style={styles.canva2}>
                        <Offcanvas.Header closeButton>
                        <Offcanvas.Title style={styles.canva2a}>Correo .</Offcanvas.Title>
                        </Offcanvas.Header>
                    </div>
                    <Offcanvas.Body style={styles.canva3}>
                        <button style={styles.offf} className="canvo" onClick={()=> navigate('/admin/home')}>Home</button><br/>
                        <button style={styles.offf} className="canvo" onClick={()=> navigate('/aboutcompany')}>About</button><br/>
                        <button style={styles.offf} className="canvo" onClick={()=> navigate('/contactus')}>Contact Us !</button><br/>
                        <p style={styles.bbb}>(Blogger Edition)</p>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </div>
    )
}

const styles={
    cont: {
        width: 'calc(100vw - 230px)'
    },
    head: {
        fontWeight: '700',
        display: 'flex',
        justifyContent: 'center'
    },
    input: {
        border: '1px solid grey'
    },
    name: {
        fontSize: '20px',
        marginBottom: '-5px'
    },
    name2: {
        marginBottom: '0px'
    },
    button: {
        width: '80%',
        background: 'rgb(130, 0, 380)',
        fontSize: '20px',
        display: 'block',
        margin: '0 auto',
        borderRadius: '20px'
    },
    off: {
        width: '40px',
        height: '40px',
        marginBottom: '-50px'
    },
    off1: {
        marginLeft: '120px'
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
        marginTop: '-28px',
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

export default AddStory