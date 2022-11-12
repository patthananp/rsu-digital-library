import React from 'react';
import { Carousel } from 'react-carousel-minimal';
import {BrowserRouter as Router,Routes, Route, Link} from "react-router-dom";


function PicSlide() {
 const data = [
    {
      image: "https://www2.rsu.ac.th/Upload/images/wall/RSU-contact.jpg",
    },
    {
      image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      // caption: "Scotland"
    },
    {
      image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      // caption: "Darjeeling"
    }
  ];


  // const captionStyle = {
  //   fontSize: '2em',
  //   fontWeight: 'bold',
  // }
  // const slideNumberStyle = {
  //   fontSize: '20px',
  //   fontWeight: 'bold',
  // }
  return (
    <div className="App">

        {/* <a href="https://www2.rsu.ac.th/Home" target="_blank" rel="noreferrer">
          <img src={"https://www2.rsu.ac.th/Upload/images/wall/RSU-contact.jpg"} alt="" />
        </a> */}
      {/* <div style={{ textAlign: "center" }}>
        <h2>React Carousel Minimal</h2>
        <p>Easy to use, responsive and customizable carousel component for React Projects.</p>
        <div style={{
          padding: "0 20px"
        }}> */}
          <Carousel
            data={data}
            time={2000}
            width="10000px"
            height="500px"
            // captionStyle={captionStyle}
            // radius="10px"
            // slideNumber={true}
            // slideNumberStyle={slideNumberStyle}
            // captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            // thumbnails={true}
            // thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850pxa",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        {/* </div>
      </div> */}
    </div>
  );
}

export default PicSlide;