import React, { Component } from 'react';
import GalleryCard from "./GalleryCard";
import Pagination from './Pagination';
import { Col, Row, Container,Spinner } from "reactstrap";
import { getImageGallery } from '../services/ApiCall';
import { connect } from 'react-redux';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgList: [],
            currentPage: "",
            postsPerPage: 10
        }
    }
    componentDidMount() {
        let url = window.location.href.split("/");
        let currentPageNumber = parseInt(url[url.length - 1]);
        this.props.getImageGallery(currentPageNumber);
    }

    paginate = (pageNumber) => {
        this.setState({ currentPage: pageNumber });
    }
    render() {
        const { postsPerPage } = this.state;
        const { GalleryList } = this.props
        return (

            <div >
                {GalleryList && GalleryList.length>0?
                <Container>
                    <Row>
                        <Col md={{ size: 10, offset: 1 }} className="thumbnail-gallery">
                            <h2 className="text-center my-3"> Image Gallery </h2>
                            <Row>
                                {GalleryList.map((item, index) => (
                                    <Col
                                        md="3"
                                        className="my-2"
                                        key={index}
                                    >
                                        <GalleryCard
                                            key={index}
                                            galleryImgUrl={item.download_url}
                                            authorName={item.author}
                                            authorUrl={item.url}
                                        />

                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={100}
                        paginate={this.paginate}
                        currentPage={this.state.currentPage}
                    />
                </Container>:
                <div className="loader">
                <Spinner animation="border" role="status" className="loader">
                <span className="sr-only">Loading...</span>
              </Spinner>
              </div>
             }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        GalleryList: state.GalleryListReducer.galleryList
    }
}
export default connect(mapStateToProps, { getImageGallery })(Gallery)
