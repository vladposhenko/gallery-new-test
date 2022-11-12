import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchImage, findCurrentImage, findImage, setCurrentImage} from "../app/app-reducer";

const ImagePage = () => {
    const params = useParams()
    const image = useSelector(state => state.currentImage)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchImage(params.id))
    }, [])
    console.log(params)
    return (
        <div style={{ background: 'rgb(0 0 0 / 44%)' }}>
            <img style={{width:'95vw', objectFit:'cover', height:'100vh'}}  src={image?.urls.full} alt=""/>
        </div>
    );
};

export default ImagePage;