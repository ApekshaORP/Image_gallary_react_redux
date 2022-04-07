import axios from "axios";

export const GET_GALLERY_IMAGE = "GET_GALLERY_IMAGE";
export const getImageGallery = (currentPageNumber) => async (dispatch) => {
    await axios.get(`https://picsum.photos/v2/list?page=${currentPageNumber}&limit=50`)
    .then(res => {
        dispatch({
            type: GET_GALLERY_IMAGE,
            galleryList: res.data
        })
    })
    .catch(err => {
        // console.log(err);
    })
};