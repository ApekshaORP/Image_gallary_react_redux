import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import GalleryCard from './Gallery'
import { connect } from 'react-redux';
class ImageGallery extends Component {
    render() {
        return (<React.Fragment>
             <div className="homebanner"  >     
            <Container>
             <Row className="d-flex">
                <Col sm="6" className=" justify-content-center align-self-center">
                <div className="herobanner-text">
                        <h1>The best free stock photos shared by Photo Gala creators</h1>
                        <p>Lorem Ipsum has been the industry's standard dummy <br/> text ever since the 1500s. Various versions have evolved!</p>
                        </div>

                    </Col>
                      <Col sm="6">
                    
                        <div className="loader" >
                        <img src="https://picsum.photos/200/300" alt="random_img" />

                        </div>

                    </Col>
                </Row>
            </Container>
     

            <GalleryCard />

        </div>
        </React.Fragment>);
    }
}

export default ImageGallery

