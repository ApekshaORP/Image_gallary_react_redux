import React from 'react';
import Pagination from '../components/imageGallery/Pagination';
import {shallow} from 'enzyme';

const SetUp=(props={})=>{
    const component=shallow(<Pagination {...props}/>)
    return component
}

describe('Pagination component', () => {
    describe ('It should render without error',()=>{
       let wrapper;
       beforeEach(()=>{
           const props= {
            postsPerPage:10,
            totalPosts:100,
            paginate:50
           }
           wrapper=SetUp(props)
          
       })
       it ('It should render without error',()=>{
    const component =wrapper.find('.pagination');
    expect(component.length).toBe(1);
    })
    it('Should emit callback on click event', () => {
        const component =wrapper.find('.pagination');
console.log(">>",component)
     
    });
   })

 

  });