import React from 'react';
import Footer from '../components/imageGallery/Footer';
import {shallow} from 'enzyme';

const SetUp=(props={})=>{
    const component=shallow(<Footer {...props}/>)
    return component
}

describe('Footercomponent', () => {
   it ('It should render without error',()=>{
       const component=SetUp()
       const wrapper =component.find('.footer-links');
       expect(wrapper.length).toBe(1);
   })
  });