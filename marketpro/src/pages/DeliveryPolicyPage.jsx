import React from "react";
import Preloader from "../helper/Preloader";
import HeaderTwo from "../components/HeaderTwo";
import Breadcrumb from "../components/Breadcrumb";
import DeliveryPolicy from "../components/DeliveryPolicy";
import FooterTwo from "../components/FooterTwo";
import ScrollToTop from "react-scroll-to-top";
import ColorInit from "../helper/ColorInit";

const DeliveryPolicyPage = () => {
  return (
    <>
      {/* ColorInit */}
      <ColorInit color={false} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#299E60" />

      {/* Preloader */}
      <Preloader />

      {/* HeaderTwo */}
      <HeaderTwo category={true} />

      {/* Breadcrumb */}
      <Breadcrumb title={"Chính sách vận chuyển"} />

      {/* DeliveryPolicy */}
      <DeliveryPolicy />

      {/* FooterTwo */}
      <FooterTwo />
    </>
  );
};

export default DeliveryPolicyPage; 