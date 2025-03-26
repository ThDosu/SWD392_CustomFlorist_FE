import React from 'react';
import { Link } from 'react-router-dom';

const Introduction = () => {
    return (
        <div className="introduction-page py-120">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center mb-50">Giới thiệu về Your Florist</h1>
                    </div>
                </div>

                <div className="row mb-50">
                    <div className="col-lg-6">
                        <div className="introduction-content">
                            <h2 className="mb-30">Câu chuyện của chúng tôi</h2>
                            <p className="mb-20">
                                Your Florist được thành lập từ năm 2020 với tình yêu và đam mê dành cho hoa. 
                                Chúng tôi tin rằng mỗi bông hoa đều mang trong mình một câu chuyện riêng và 
                                có khả năng truyền tải những cảm xúc sâu sắc nhất.
                            </p>
                            <p className="mb-20">
                                Với đội ngũ nghệ nhân cắm hoa giàu kinh nghiệm và sáng tạo, chúng tôi 
                                luôn nỗ lực mang đến những tác phẩm hoa độc đáo, phản ánh đúng phong cách 
                                và mong muốn của khách hàng.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="introduction-image">
                            <img 
                                src="assets/images/about/flower-shop.jpg" 
                                alt="Your Florist Shop" 
                                className="img-fluid rounded"
                            />
                        </div>
                    </div>
                </div>

                <div className="row mb-50">
                    <div className="col-lg-6 order-lg-2">
                        <div className="introduction-content">
                            <h2 className="mb-30">Giá trị cốt lõi</h2>
                            <ul className="list-unstyled">
                                <li className="mb-20">
                                    <h4>Chất lượng tuyệt hảo</h4>
                                    <p>Chúng tôi chỉ sử dụng những bông hoa tươi nhất, được chọn lọc kỹ lưỡng từ các nhà vườn uy tín.</p>
                                </li>
                                <li className="mb-20">
                                    <h4>Dịch vụ chuyên nghiệp</h4>
                                    <p>Đội ngũ nhân viên thân thiện, nhiệt tình và luôn sẵn sàng tư vấn để mang đến trải nghiệm tốt nhất cho khách hàng.</p>
                                </li>
                                <li className="mb-20">
                                    <h4>Giao hàng nhanh chóng</h4>
                                    <p>Cam kết giao hoa tươi trong vòng 2 giờ tại nội thành và 24 giờ cho các khu vực khác.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <div className="introduction-image">
                            <img 
                                src="assets/images/about/flower-arrangement.jpg" 
                                alt="Flower Arrangement" 
                                className="img-fluid rounded"
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className="mb-30">Đặt hoa ngay hôm nay</h2>
                        <p className="mb-40">
                            Hãy để Your Florist giúp bạn truyền tải những thông điệp yêu thương 
                            thông qua những bông hoa tươi đẹp nhất.
                        </p>
                        <Link to="/shop" className="btn btn-primary">
                            Khám phá bộ sưu tập
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction; 