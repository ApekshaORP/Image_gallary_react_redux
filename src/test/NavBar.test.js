import React from 'react';
import Navbar from '../components/imageGallery/NavBar';
import {shallow,mount} from 'enzyme';

const SetUp=(props={})=>{
    const component=shallow(<Navbar {...props}/>)
    return component
}

describe('Nav bar component', () => {
   const mockFunc = jest.fn();

   it ('It should render without error',()=>{
       const component=SetUp()
       const wrapper =component.find('.header');
       expect(wrapper.length).toBe(1);
   })

   it ('It should render with logo',()=>{
    const component=SetUp()
    const wrapper =component.find('.img-responsive');
    component.find('.img-responsive').simulate('click');
    expect(wrapper.length).toBe(1);
    
})

  });