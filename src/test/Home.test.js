import React from 'react';
import Home from '../components/imageGallery/Home';
import {shallow} from 'enzyme';
import { testStore } from '../../utils';

const setUp = (initialState={}) => {
    const wrapper = shallow(<Home  />)
    return wrapper;
};
describe('Home Component', () => {
    it('Should render without errors', () => {
        const component=setUp()
        const wrapper =component.find('.homebanner');
        expect(wrapper.length).toBe(1);
    });
});