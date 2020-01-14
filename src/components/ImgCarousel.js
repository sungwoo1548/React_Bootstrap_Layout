import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

const ImgCarousel = ({ imgURL }) => {

    return (

        <Carousel className="w-100">
            {
                imgURL.map((img, ix) => (
                    <Carousel.Item key={ix} style={{ maxHeight: 200, overflow: "hidden" }}>
                        <img
                            className="d-block w-100"
                            src={img.url}
                            alt={img.name}
                            style={{marginTop:"-25%"}}
                        />
                        <Carousel.Caption>
                            <h3>{img.name}</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
            }
        </Carousel>

    )
}

export default ImgCarousel
