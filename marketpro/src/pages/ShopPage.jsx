import React from "react";
import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";
import HeaderTwo from "../components/HeaderTwo";
import Breadcrumb from "../components/Breadcrumb";
import ShopSection from "../components/ShopSection";
import ShippingOne from "../components/ShippingOne";
import ShippingTwo from "../components/ShippingTwo";
import FooterTwo from "../components/FooterTwo";
import ColorInit from "../helper/ColorInit";
import ScrollToTop from "react-scroll-to-top";

const ShopPage = () => {

  return (
    <>
      {/* ColorInit */}
      <ColorInit color={false} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#299E60" />

      {/* Preloader */}
      <Preloader />

      {/* HeaderOne */}
      {/* <HeaderTwo category={true} /> */}
      <HeaderOne />
      <HeaderTwo />

      {/* Breadcrumb */}
      <Breadcrumb title="Cửa hàng" />

      {/* ShopSection */}
      <ShopSection />

      {/* ShippingTwo */}
      {/* <ShippingTwo /> */}
      <ShippingOne />

      {/* FooterTwo */}
      <FooterTwo />


    </>
  );
};

export default ShopPage;
