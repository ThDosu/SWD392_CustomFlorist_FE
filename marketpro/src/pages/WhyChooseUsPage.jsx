import React from 'react';
import Preloader from '../helper/Preloader';
import HeaderOne from '../components/HeaderOne';
import Breadcrumb from '../components/Breadcrumb';
import WhyChooseUs from '../components/WhyChooseUs';
import FooterOne from '../components/FooterOne';
import ScrollToTop from 'react-scroll-to-top';
import ColorInit from '../helper/ColorInit';

const WhyChooseUsPage = () => {
    return (
        <>
            <ColorInit />
            <ScrollToTop />
            <Preloader />
            <HeaderOne />
            <Breadcrumb title="Tại Sao Nên Chọn Your Florist" />
            <WhyChooseUs />
            <FooterOne />
        </>
    );
};

export default WhyChooseUsPage; 