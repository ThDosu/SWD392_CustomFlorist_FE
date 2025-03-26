import React from 'react';
import Preloader from '../helper/Preloader';
import HeaderTwo from '../components/HeaderTwo';
import Breadcrumb from '../components/Breadcrumb';
import RefundPolicy from '../components/RefundPolicy';
import FooterTwo from '../components/FooterTwo';
import ScrollToTop from 'react-scroll-to-top';
import ColorInit from '../helper/ColorInit';

const RefundPolicyPage = () => {
    return (
        <>
            <ColorInit />
            <ScrollToTop />
            <Preloader />
            <HeaderTwo />
            <Breadcrumb title="Chính Sách Hoàn Tiền" />
            <RefundPolicy />
            <FooterTwo />
        </>
    );
};

export default RefundPolicyPage; 