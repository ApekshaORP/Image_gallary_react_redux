import React from 'react';
import GalleryCard from '../components/imageGallery/GalleryCard';
import {shallow} from 'enzyme';

const SetUp=(props={})=>{
    const component=shallow(<GalleryCard {...props}/>)
    return component
}

describe('Nav bar component', () => {
   describe ('It should render without error',()=>{
       let component;
       beforeEach(()=>{
           
           const props= {
            authorUrl:"https://unsplash.com/photos/yC-Yzbqy7PY",
            authorName:"Alejandro Escamilla",
            galleryImgUrl:"https://picsum.photos/id/0/5616/3744"
           }
          component=SetUp(props)
          
       })
       it('Should render without errors', () => {
        const wrapper =component.find('.App');
    expect(wrapper.length).toBe(1);
    });
    it('Should render without errors', () => {
        const wrapper =component.find('.image-card');
        component.find('.image-card').simulate('click');
    expect(wrapper.length).toBe(1);
    });
    
   })

 

  });