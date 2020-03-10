import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import caraData from '../fillData/caraData.js'

// {
//     "imageUrl": "https://preview.redd.it/tudr38jxdv521.png?width=1546&format=png&auto=webp&s=22a5be840a6363ed4dde054b0b22fb2f1c0a8bfc",
//     "label": "Label Example",
//     "caraText": "Slide Text"
// }

function HomePage() {

    const mapAllCaraItems = () => {
        return caraData.map((itemObj) => {
            return (
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={itemObj.imageUrl}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>
                            {itemObj.label}
                        </h3>
                        <p>
                            {itemObj.caraText}
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        })
    }

    return (
        <Carousel className="maxwidthcar">
            {mapAllCaraItems()}
        </Carousel>
    )
}

export default HomePage; 