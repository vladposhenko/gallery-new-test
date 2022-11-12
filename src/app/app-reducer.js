import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getPhoto, getPhotos} from "./api/app-api";

const initialState = {
    images:[],
    currentImage:null
}



export const fetchImages = createAsyncThunk(
    'app/fetchImages',
    async () => {
        const response = await getPhotos()
        return response.data
    }
)


export const fetchImage = createAsyncThunk(
    'app/fetchImage',
    async (id) => {
        const response = await getPhoto(id)
        return response.data
    }
)

const appSlice = createSlice({
    name:'app',
    initialState,
    reducers: {
        findCurrentImage: (state, {payload}) => {
            state.currentImage = state.images.filter(im => im.id === payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchImages.fulfilled, (state, {payload}) => {
                state.images = payload;
            })
            .addCase(fetchImage.fulfilled, (state, {payload}) => {
                state.currentImage = payload
            })
    }
})

export const {findCurrentImage} = appSlice.actions

export default appSlice.reducer