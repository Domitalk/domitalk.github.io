import React from 'react';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import useWindowDimensions from '../Utility/UseWindowDimensions';
import bannerImageLarge from '../assets/images/banner.jpg'
import Fade from 'react-reveal/Fade';



function HomePage() {
    // const imgUrl = "https://domitalk.s3.us-east-2.amazonaws.com/20200923_151615.jpg"
    const { height, width } = useWindowDimensions();

    return (
        <>
            <Fade left >
                <Row id="Home">
                    <div className="empty"/>
                </Row>
                <Image src={bannerImageLarge} fluid />
                {/* <div>
                    width: {width} ~ height: {height}
                </div> */}
            </Fade>
        </>
    )
}


export default HomePage; 

