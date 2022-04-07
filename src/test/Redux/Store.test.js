
import moxios from 'moxios';
import { getImageGallery } from '../../components/services/ApiCall';
import { testStore } from '../../../utils';

describe('fetchPosts action', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('Store is updated correctly', () => {
       
        const expectedState=[
            {id:0,
            author:"Alejandro Escamilla",
            width:5616,
            height:3744,
            url:"https://unsplash.com/photos/yC-Yzbqy7PY",
            download_url:"https://picsum.photos/id/0/5616/3744"}
            ];
            const store = testStore();
       
        //  return store.dispatch(getImageGallery(1))
        // .then(() => {
        //     const newState = store.getState();
        //     expect(newState.posts).toBe(expectedState);
        // })
        
    });

});
