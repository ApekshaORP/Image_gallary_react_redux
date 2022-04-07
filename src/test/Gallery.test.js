import React from 'react';
import Gallery from '../components/imageGallery/Gallery';
import {shallow} from 'enzyme';
import { testStore } from '../../utils';

const setUp = (initialState={}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<Gallery store={store} />).childAt(0).dive();
    return wrapper;
};
describe('Home Component', () => {
    it('Should render without errors', () => {
        const component=setUp()
        const wrapper =component.find('.thumbnail-gallery');
        expect(wrapper.length).toBe(0);
    });
    
});