
import App from '../App';
import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Image_gallary from '../components/imageGallery/Home';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';
import { testStore } from '../../utils/index';

import '@testing-library/jest-dom/extend-expect'

const mockStore = configureMockStore();
const store = mockStore({});

describe("Testpage Component", () => {
    it("should render without throwing an error", () => {
        const component =shallow(
            <Provider store={store}>
                <App />
            </Provider>
        )
        expect(component).toBeDefined();
        expect(component.find(App)).toHaveLength(1);

    });
});
// test('rendering a component that uses useLocation', () => {
//     const history = createMemoryHistory()
//     const route = '/some-route'
//     history.push(route)
//    const component= render(
//         <Provider store={store}>

//       <Router history={history}>
//         <Image_gallary />
//       </Router>
//       </Provider>
//     )
//     console.log("component",component.debug())

//     // expect(screen.getByText(/The best free/i)).toBeInTheDocument()
// })
// import React from 'react';
// import { shallow, mount } from 'enzyme';
// import Routes, { Home, News, NoMatch } from './Routes';
// import { MemoryRouter } from 'react-router';
// import { Route } from 'react-router-dom';


// describe('routes using memory router', () => {

//     it('should show Home component for / router (using memory router)', () => {
//       const component = mount(<MemoryRouter initialentries="{['/']}">
//           <App/>
//        </Memoryrouter>
       
//       );
//       expect(component.find(Home)).toHaveLength(1);
//     })
  
//     it('should show No match component for route not defined', () => {
//       const component = mount(<Memoryrouter initialEntries="{['/unknown']}">
//           <App/>
//       </MemoryRouter>
//       );
//       expect(component.find(NoMatch)).toHaveLength(1);
//     })
  
//   })