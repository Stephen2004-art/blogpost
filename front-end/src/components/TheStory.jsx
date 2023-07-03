import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import publicApi from '../api/publicApi'


const TheStory = () => {
    const backendUrl = import.meta.env.VITE_APP_BACKEND_URL
    const{ id } = useParams()
    const [stories, setStories] = useState([])


    const getStory = async () => {
        const { data } = await publicApi.get(`/stories/${id}`)
        console.log(data)
        setStories(data.data)
    }

    
    useEffect(()=>{
        getStory()
    },[])

    if(!stories.images){
        return(
            <p>Loading...</p>
        )
    }
    return(
        <div>
            <div>
                <h1>{stories.topic}</h1>
                <div>
                {
                    stories.images.map((img, idx)=>{
                        return(
                            <>
                            <img src={backendUrl + img} alt='story' style={styled.img}/>
                            <p style={styled.word}>{stories[`story${idx+1}`]}</p>
                            </>
                        )
                    })
                }
                </div>
                {/* <div style={styled.read}>
                    <p style={styled.word}>{stories.story1}</p>
                    <p style={styled.word}>{stories.story2}</p>
                    <p style={styled.word}>{stories.story3}</p>
                    <p style={styled.word}>{stories.story4}!!!</p>
                </div> */}
            </div>
            <div style={styled.named}>
                <p style={styled.named1}  onClick={()=> navigate('/aboutcompany')} className="button">By Stephen & Co.</p>
            </div>
        </div>
    )
}

const styled = {
    img: {
        display: 'block',
        margin : '0 auto',
        width: '70%',
        height: '1000px',
        marginBottom: 'fit-content'
    },
    read: {
        display: 'block',
        margin : '0 auto',
        width: '70%',
        marginTop: '-6800px'

    },
    word: {
        display: 'block',
        margin : '0 auto',
        width: '80%',
        marginTop: '60px',
        fontSize: '30px'
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
    }
}


export default TheStory