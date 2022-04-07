
// import React, { useState } from 'react';
// import { Container, Row, Col } from 'reactstrap'
// import {
//   Navbar,
//   NavbarBrand,
 

// } from 'reactstrap';
// import logo from "../../content/Images/photos.png";
// const Header = () => {
// //  
//   return (
//     <div className="header">
//         <Container>
//             <Row>
//                 <Col>
//                 <Navbar expand="md">
                
//         <NavbarBrand href="/">
//         <NavbarToggler onClick={toggle} className={isOpen ? "plusview" : "minusview"}/>

//         <img src={logo} className="img-responsive"/>

//         </NavbarBrand>
//         <h4 className="gallery-name">PhotoGala</h4>
      
//       </Navbar>
//                 </Col>
//             </Row>
//         </Container>

      
//     </div>
//   );
// }

// export default Header;


import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import logo from "../../content/Images/photos.png";
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [status1,setStatus1] = useState(true);
  const [status2,setStatus2] = useState(false);
  const [status3,setStatus3] = useState(false);
  const [status4,setStatus4] = useState(false);
  const [status5,setStatus5] = useState(false);
  const statusChange1 = () => {setStatus1(true);setStatus2(false);setStatus3(false);setStatus4(false);setStatus5(false) }                           
  const statusChange2 = () => {setStatus1(false);setStatus2(true);setStatus3(false);setStatus4(false);setStatus5(false) }
  const statusChange3 = () => {setStatus1(false);setStatus2(false);setStatus3(true);setStatus4(false);setStatus5(false) }
  const statusChange4 = () => {setStatus1(false);setStatus2(false);setStatus3(false);setStatus4(true);setStatus5(false) }
  const statusChange5 = () => {setStatus1(false);setStatus2(false);setStatus3(false);setStatus4(false);setStatus5(true) }
  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <div class="header">
        <Container>
            <Row>
                <Col>
                <Navbar expand="md">
        <NavbarBrand href="/">
        <img src={logo} className="img-responsive"/>

        </NavbarBrand>
        <NavbarToggler onClick={toggle} className={isOpen ? "plusview" : "minusview"}/>
   
        <Collapse isOpen={isOpen} navbar>
          {/* <Nav className="mr-auto" navbar> */}
              
          <Nav className='rightNav ml-auto' navbar>
            <NavItem onClick={toggle}>
              <NavLink href="#Home" onClick={statusChange1} className={(status1===true)?"active scroll":"inactive scroll"}>HOME</NavLink>
            </NavItem>
            <NavItem onClick={toggle}>
              <NavLink href="#HowToPlay" onClick={statusChange2}  className={(status2===true)?"active scroll":"inactive scroll"}>HOW TO PLAY</NavLink>
            </NavItem>
            <NavItem onClick={toggle}>
              <NavLink href="#TipsnTrick" onClick={statusChange3} className={(status3===true)?"active scroll":"inactive scroll"}>TIPS & TRICKS</NavLink>
            </NavItem>
            <NavItem onClick={toggle}>
              <NavLink href="#AboutBzinga" onClick={statusChange4} className={(status4===true)?"active scroll":"inactive scroll"}>ABOUT BZINGA</NavLink>
            </NavItem>
              <NavItem onClick={toggle}>
                <NavLink href="#Faq" onClick={statusChange5} className={(status5===true)?"active scroll":"inactive scroll"}>FAQ</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          
      
          
        </Collapse>
      </Navbar>
                </Col>
            </Row>
        </Container>

      
    </div>
  );
}

export default Header;

