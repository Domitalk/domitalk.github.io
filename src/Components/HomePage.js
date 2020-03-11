import React from 'react'
// import Carousel from 'react-bootstrap/Carousel'
// import caraData from '../fillData/caraData.js'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


// {
//     "imageUrl": "https://preview.redd.it/tudr38jxdv521.png?width=1546&format=png&auto=webp&s=22a5be840a6363ed4dde054b0b22fb2f1c0a8bfc",
//     "label": "Label Example",
//     "caraText": "Slide Text"
// }

function HomePage() {

    // const mapAllCaraItems = () => {
    //     return caraData.map((itemObj) => {
    //         return (
    //             <Carousel.Item>
    //                 <img
    //                     className="d-block w-100"
    //                     src={itemObj.imageUrl}
    //                     alt="First slide"
    //                 />
    //                 <Carousel.Caption>
    //                     <h3>
    //                         {itemObj.label}
    //                     </h3>
    //                     <p>
    //                         {itemObj.caraText}
    //                     </p>
    //                 </Carousel.Caption>
    //             </Carousel.Item>
    //         )
    //     })
    // }

    return (
        // <Carousel className="maxwidthcar" sm={0}>
        //     {mapAllCaraItems()}
        // </Carousel>    
        <div>
            <Jumbotron fluid>
                <Container>
                    <h1>Fluid Jumbotron</h1>
                    <p>Put some stuff in here</p>
                </Container>
            </Jumbotron>
            <Container>
                <Row>
                    <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 1 }} lg={{ span: 6, order: 1 }}>

                    </Col>
                    <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 2 }} lg={{ span: 6, order: 2 }}>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomePage; 