import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import publicApi from '../api/publicApi';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

const TheStory = () => {
    const backendUrl = import.meta.env.VITE_APP_BACKEND_URL;
    const { id } = useParams();
    const [stories, setStories] = useState([]);
    const navigate = useNavigate();
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [clickedLike, setClickedLike] = useState(false);
    const [clickedDislike, setClickedDislike] = useState(false);

    const getStory = async () => {
        const { data } = await publicApi.get(`/stories/${id}`);
        console.log(data);
        setStories(data.data);
    };

    const handleLikeClick = () => {
        setClickedLike((prevClickedLike) => !prevClickedLike);
        if (clickedLike) {
            setCounter1((prevCounter1) => prevCounter1 - 1);
        } else {
            setCounter1((prevCounter1) => prevCounter1 + 1);
        }
    };

    const handleDislikeClick = () => {
        setClickedDislike((prevClickedDislike) => !prevClickedDislike);
        if (clickedDislike) {
            setCounter2((prevCounter2) => prevCounter2 - 1);
        } else {
            setCounter2((prevCounter2) => prevCounter2 + 1);
        }
    };

    useEffect(() => {
        getStory();

        const storedCounter1 = localStorage.getItem('counter1');
        const storedCounter2 = localStorage.getItem('counter2');
        if (storedCounter1 !== null) {
            setCounter1(parseInt(storedCounter1));
        }

        if (storedCounter2 !== null) {
            setCounter2(parseInt(storedCounter2));
        }
    }, [id]);

    useEffect(() => {
        localStorage.setItem('counter1', counter1.toString());
        localStorage.setItem('counter2', counter2.toString());
    }, [counter1, counter2]);

    if (!stories.images) {
        return (
            <p>Loading...</p>
        );
    }

    return (
        <div>
            <div>
                <div>
                    <h1 style={styled.topic}>{stories.topic}</h1>
                </div>
                <div style={styled.div}></div>
                <div>
                    {
                        stories.images.map((img, idx) => (
                            <div key={idx}>
                                <div style={styled.img1}>
                                    <img src={backendUrl + img} alt='story' style={styled.img} />
                                </div>
                                <div>
                                <p style={styled.word}>{stories[`story${idx + 1}`]}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div style={styled.named}>
                <p style={styled.named1} onClick={() => navigate('/aboutcompany')} className="button">By Stephen & Co.</p>
            </div>
            <div style={styled.contact} onClick={() => navigate('/contactus')}>
                <ReportProblemIcon style={styled.contact1} className="button" />
                <p>Any Problem ?</p>
            </div>
            <div style={styled.likes}>
                <div onClick={handleLikeClick}>
                    <span
                        style={{
                            color: clickedLike ? 'purple' : 'black',
                            cursor: 'pointer'
                        }}>
                        <ThumbUpIcon/>
                    </span>
                    <p>{counter1} Likes.</p>
                </div>
                <div onClick={handleDislikeClick}>
                    <span
                        style={{
                            color: clickedDislike ? 'purple' : 'black',
                            cursor: 'pointer'
                        }}>
                        <ThumbDownIcon/>
                    </span>
                    <p>{counter2} Dislikes.</p>
                </div>
            </div>
            <div  onClick={()=> navigate(-1)} style={styled.arrow1}>
                <KeyboardDoubleArrowLeftIcon style={styled.arrow}/>
                <p style={styled.arrow2}>Back.</p>
            </div>
        </div>
    );
};

const styled = {
    topic: {
        marginLeft: '30px',
        marginTop: '40px',
        letterSpacing: '3px'
    },
    img: {
        display: 'block',
        margin : '0 auto',
        width: '100%',
        height: '100%',
        marginBottom: 'fit-content',
        border: '1px dashed black' 
    },
    img1: {
        height: '500px',
        width: '700px',
        display: 'block',
        margin: '0 auto'
    },
    div: {
        border: '1px solid black',
        borderStyle: 'dashed',
        marginTop: '20px',
        marginBottom: '50px'
    },
    word: {
        margin : '0 auto',
        width: '80%',
        marginTop: '60px',
        marginBottom: '30px',
        fontSize: '30px'
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
        margin: '-60px 0px 90px 55%',
        display: 'flex'
    },
    contact1: {
        width: '50px',
        height: '50px',
        color: 'purple',
        paddingBottom: '20px'
    },
    likes: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '15%',
        marginLeft: '20%',
        marginTop : '-150px'
    },
    arrow: {
      fontSize: '40px',
      color: 'purple'
    },
    arrow1: {
        dispaly: 'block',
        marginTop: '-68px',
        marginLeft: '5%',
        cursor: 'pointer'
    },
    arrow2: {
        marginTop: '-10px',
        color: 'purple'
    }
}

export default TheStory