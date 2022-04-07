import {GET_GALLERY_IMAGE} from '../../components/redux/Actions';
import GalleryListReducer from '../../components/redux/Reducer'
describe('Image Reducer', () => {
    it ('It should return default state',()=>{
        const NewState=GalleryListReducer(undefined,{})
        expect(NewState).toStrictEqual({"galleryList": []})
    })
 
    it ('It should return new state if recieved  acton type',()=>{
        
    const imageGallery=[
        {id:0,
        author:"Alejandro Escamilla",
        width:5616,
        height:3744,
        url:"https://unsplash.com/photos/yC-Yzbqy7PY",
        download_url:"https://picsum.photos/id/0/5616/3744"}
        ];
        const NewState=GalleryListReducer({"galleryList": []},{
            type:GET_GALLERY_IMAGE,
            galleryList:imageGallery
        })
        expect(NewState).toStrictEqual({"galleryList":imageGallery})
    })
       
   });