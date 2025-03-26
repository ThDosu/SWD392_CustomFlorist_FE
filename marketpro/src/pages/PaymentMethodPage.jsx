import React from 'react';
import Preloader from '../components/Preloader';
import HeaderTwo from '../components/HeaderTwo';
import Breadcrumb from '../components/Breadcrumb';
import PaymentMethod from '../components/PaymentMethod';
import FooterTwo from '../components/FooterTwo';
import ScrollToTop from '../components/ScrollToTop';
import ColorInit from '../components/ColorInit';

const PaymentMethodPage = () => {
    return (
        <>
            <ColorInit />
            <ScrollToTop />
            <Preloader />
            <HeaderTwo />
            <Breadcrumb title="Hình Thức Thanh Toán" />
            <PaymentMethod />
            <FooterTwo />
        </>
    );
};

export default PaymentMethodPage; 