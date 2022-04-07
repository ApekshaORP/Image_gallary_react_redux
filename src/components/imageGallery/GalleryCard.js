import React from "react";
import {
  Card,
  CardImg
} from "reactstrap";
import author from "../../content/Images/user.png";
const GalleryCard = (props) => {
  const download = e => {
    fetch(e.target.href, {
      method: "GET",
      headers: {}
    })
      .then(response => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.png");
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="App">

      </div>
      <Card className="image-card" href={props.galleryImgUrl}>
        <a href={`${props.galleryImgUrl}.jpg`} >     
          <CardImg src={`${props.galleryImgUrl}.jpg`} style={{ height: "200px" }} />
          <a
            href={props.galleryImgUrl}
            download
            onClick={e => download(e)}
          >     
       Download
      </a>
        </a>
      </Card>
      <div className="user-data">
        <div>
          <img src={author}  alt="author_pic"/>
        </div>
        <div>
          <p>
            <b>  <a href={props.authorUrl} target="_blank">
              <p>{props.authorName}</p>
            </a> </b>
          </p>
        </div>
      </div>

    </div>
  );
}


export default GalleryCard;
