import {galleryData} from '../../components/redux/Actions'
import {GET_GALLERY_IMAGE} from '../../components/redux/Actions'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const galleryList=[
        {id:0,
        author:"Alejandro Escamilla",
        width:5616,
        height:3744,
        url:"https://unsplash.com/photos/yC-Yzbqy7PY",
        download_url:"https://picsum.photos/id/0/5616/3744"}
        ];
    const expectedAction = {
      type: GET_GALLERY_IMAGE,
      galleryList
    }
    expect(galleryData(galleryList)).toEqual(expectedAction)
  })
})
