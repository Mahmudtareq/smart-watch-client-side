import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import Footer from '../../Footer/Footer';
import Description from '../Description/Description';
import Products from '../Products/Products';
import ReViews from '../ReViews/ReViews';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
        
            <Navigation></Navigation>
            <TopBanner></TopBanner>
            <Products></Products>
            <Description></Description>
            <ReViews></ReViews>
           
            <Footer></Footer>
          
        </div>
    );
};

export default Home;