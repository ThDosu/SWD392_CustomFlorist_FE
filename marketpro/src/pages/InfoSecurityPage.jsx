import React from 'react';
import Preloader from '../helper/Preloader';
import HeaderTwo from '../components/HeaderTwo';
import Breadcrumb from '../components/Breadcrumb';
import InfoSecurity from '../components/InfoSecurity';
import FooterTwo from '../components/FooterTwo';
import ScrollToTop from 'react-scroll-to-top';
import ColorInit from '../helper/ColorInit';

const InfoSecurityPage = () => {
    return (
        <>
            <ColorInit />
            <ScrollToTop />
            <Preloader />
            <HeaderTwo />
            <Breadcrumb title="Bảo Mật Thông Tin" />
            <InfoSecurity />
            <FooterTwo />
        </>
    );
};

export default InfoSecurityPage;