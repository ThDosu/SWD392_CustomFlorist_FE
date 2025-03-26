import React from "react";
import Preloader from "../helper/Preloader";
import HeaderTwo from "../components/HeaderTwo";
import Breadcrumb from "../components/Breadcrumb";
import Questions from "../components/Questions";
import FooterTwo from "../components/FooterTwo";
import ScrollToTop from "react-scroll-to-top";
import ColorInit from "../helper/ColorInit";

const QuestionsPage = () => {
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
      <Breadcrumb title={"Câu hỏi thường gặp"} />

      {/* Questions */}
      <Questions />

      {/* FooterTwo */}
      <FooterTwo />
    </>
  );
};

export default QuestionsPage; 