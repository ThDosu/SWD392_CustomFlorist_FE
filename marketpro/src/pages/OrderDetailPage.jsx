import React, { useEffect } from "react";
import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import FooterTwo from "../components/FooterTwo";
import BottomFooter from "../components/BottomFooter";
import ShippingOne from "../components/ShippingOne";
import OrderDetailView from "../components/OrderDetailView";
import ScrollToTop from "react-scroll-to-top";
import ColorInit from "../helper/ColorInit";

const OrderDetailPage = () => {
  
  // Load Bootstrap JS if needed
  useEffect(() => {
    // Check if Bootstrap script is already loaded
    if (!document.querySelector('script[src*="bootstrap.bundle.min.js"]') && typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js';
      script.integrity = 'sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p';
      script.crossOrigin = 'anonymous';
      document.body.appendChild(script);
      
      return () => {
        // Cleanup if component unmounts
        if (script && script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, []);

  return (
    <>
      {/* ColorInit */}
      <ColorInit color={false} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#299E60" />

      {/* Preloader */}
      <Preloader />

      {/* HeaderOne */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Chi tiết đơn hàng"} />

      {/* OrderDetailView */}
      <OrderDetailView />

      {/* ShippingOne */}
      <ShippingOne />

      {/* FooterTwo */}
      <FooterTwo />

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default OrderDetailPage; 