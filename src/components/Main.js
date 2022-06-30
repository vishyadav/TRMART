import React from "react";
import Carousel from 'react-bootstrap/Carousel'
export default function Main(){
    return(
        
        <>
        <Carousel variant="dark">
            <Carousel.Item>
                <img className="d-block w-100" src="https://rukminim1.flixcart.com/flap/50/50/image/02bbbd655baac7da.jpg?q=50" alt="First slide"/>
                <Carousel.Caption>
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="https://rukminim1.flixcart.com/flap/50/50/image/02bbbd655baac7da.jpg?q=50" alt="First slide"/>
                <Carousel.Caption>
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="https://rukminim1.flixcart.com/flap/50/50/image/02bbbd655baac7da.jpg?q=50" alt="First slide"/>
                <Carousel.Caption>
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
        
    )
}