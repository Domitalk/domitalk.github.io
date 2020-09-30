import React from 'react';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import useWindowDimensions from '../Utility/UseWindowDimensions';

function HomePage() {
    const imgUrl = "https://domitalk.s3.us-east-2.amazonaws.com/20200923_151615.jpg"
    const { height, width } = useWindowDimensions();


    return (
        <>
            <Row id="Home">
                <div className="empty"/>
            </Row>
            <Image src={imgUrl} fluid />
            <div>
                width: {width} ~ height: {height}
            </div>
        </>
    )
}

export default HomePage; 

