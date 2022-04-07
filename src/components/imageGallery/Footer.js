import React from 'react';
import { Container, Row, Col} from "reactstrap";


class Footer extends React.Component {
 
  render() {
  return (
    <footer>
      <Container>
        <Row>
            <Col sm="3">
              <div className="footer-links">
                <h6>PHOTO GALA</h6>
                <ul>
                  <li className="mb-3">
                    <a href="tel:012485471568">
                      <i className="fa fa-phone"></i>012485471568
                    </a>
                  </li>
                  <li>
                  <a href="">
                      <i className="fa fa-envelope"></i>
                      <a href="mailto:support@photogala.co.in">support@photogala.co.in</a>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
                   </Row>
      </Container>    
  

    </footer>
  );
}
}
export default Footer;
