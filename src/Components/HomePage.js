import React from 'react'
// import Jumbotron from 'react-bootstrap/Jumbotron'
// import Container from 'react-bootstrap/Container'
// import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'

function HomePage(props) {

    return (
        <Carousel className="maxwidthcar">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>
                        Label
                    </h3>
                    <p>
                        First slide Text
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        // <Jumbotron fluid>
        //     <Container>
        //         <h1>Dominic Chu</h1>
        //         <p>Software Engineer</p>
        //     </Container>
        // </Jumbotron>
    )
}

export default HomePage; 