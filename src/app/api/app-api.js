import axios from "axios";
import {BASE_URL} from "../../constants";

const instance = axios.create({
    baseURL: BASE_URL,
});

export const getPhotos = () => {
    return instance({method:"GET"})
}

export const getPhoto = (id) => {
    return axios.get(`https://api.unsplash.com/photos/${id}/?client_id=SJNYdOWwRox7p_8deXVC4SlgX1ROKLVph5zkJzPIjsw`)
}