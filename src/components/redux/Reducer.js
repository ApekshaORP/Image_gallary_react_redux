import { GET_GALLERY_IMAGE } from './Actions';
const initState = {
    galleryList: []
};

const GalleryListReducer = (state = initState, action) => {
    switch (action.type) {

        case GET_GALLERY_IMAGE:
            return { ...state, galleryList: action.galleryList };

        default:
            return state;
    }
};

export default GalleryListReducer;