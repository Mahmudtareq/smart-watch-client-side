import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Banner from '../Banner/Banner';


const TopBanner = () => {
    const items = [
        {
            img:"https://i.ibb.co/mXQ6VGk/slide2.jpg"
        },
        {
            img:"https://i.ibb.co/nBCQz9V/slide1.png"
        },
        {
            img:"https://i.ibb.co/z5kCTnx/slide3.jpg"
        },
        {
            img:"https://i.ibb.co/3kdfWx4/slide4.jpg"
        },
    ]
    return (
        <Carousel>
            {
                items.map(item => <Banner
                    item={item}
                
                ></Banner>)
            }
            </Carousel>
    );
};

export default TopBanner;