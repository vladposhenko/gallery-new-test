import React from 'react';
import './image.css'
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchImage} from "../app/app-reducer";

const Image = ({ image }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(fetchImage(image.id))
        navigate('/images/' + image.id)
    }
    return (
        <article className="image-block" onClick={handleClick}>
            <img className="image"  src={image.urls.full} alt={image.user.name} loading="lazy" />
            <div className="image-block__info">
                <img class="image-block__user" src={image.user.profile_image.large} alt={image.user.name} loading="lazy"/>
                <span>{image.user.name}</span>
            </div>
        </article>
    );
};

export default Image;