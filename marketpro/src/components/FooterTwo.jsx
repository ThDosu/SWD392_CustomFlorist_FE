import React from 'react';
import { Link } from 'react-router-dom';

const FooterOne = () => {
    return (
        <footer className="footer py-120">
            <img
                src="assets/images/bg/body-bottom-bg.png"
                alt="Hình nền"
                className="body-bottom-bg"
            />
            <div className="container container-lg">
                <div className="footer-item-wrapper d-flex align-items-start flex-wrap">
                    <div className="footer-item">
                        <div className="footer-item__logo">
                            <Link to="/">
                                <img src="assets/images/logo/logo.png" alt="Logo" />
                            </Link>
                        </div>
                        <p className="mb-24">
                            Chúng tôi là cửa hàng tạp hóa, một đội ngũ sáng tạo chuyên cung cấp thực phẩm.
                        </p>
                        <div className="flex-align gap-16 mb-16">
                            <span className="w-32 h-32 flex-center rounded-circle bg-main-600 text-white text-md flex-shrink-0">
                                <i className="ph-fill ph-map-pin" />
                            </span>
                            <span className="text-md text-gray-900">
                                789 Inner Lane, Biyes Park, California, USA
                            </span>
                        </div>
                        <div className="flex-align gap-16 mb-16">
                            <span className="w-32 h-32 flex-center rounded-circle bg-main-600 text-white text-md flex-shrink-0">
                                <i className="ph-fill ph-phone-call" />
                            </span>
                            <div className="flex-align gap-16 flex-wrap">
                                <Link to="/tel:+00123456789" className="text-md text-gray-900 hover-text-main-600">
                                    +00 123 456 789
                                </Link>
                                <span className="text-md text-main-600">hoặc</span>
                                <Link to="/tel:+00987654012" className="text-md text-gray-900 hover-text-main-600">
                                    +00 987 654 012
                                </Link>
                            </div>
                        </div>
                        <div className="flex-align gap-16 mb-16">
                            <span className="w-32 h-32 flex-center rounded-circle bg-main-600 text-white text-md flex-shrink-0">
                                <i className="ph-fill ph-envelope" />
                            </span>
                            <Link to="/mailto:support24@marketpro.com" className="text-md text-gray-900 hover-text-main-600">
                                support24@marketpro.com
                            </Link>
                        </div>
                    </div>
                    <div className="footer-item">
                        <h6 className="footer-item__title">Thông tin</h6>
                        <ul className="footer-menu">
                            <li className="mb-16"><Link to="/shop" className="text-gray-600 hover-text-main-600">Trở thành nhà cung cấp</Link></li>
                            <li className="mb-16"><Link to="/shop" className="text-gray-600 hover-text-main-600">Chương trình liên kết</Link></li>
                            <li className="mb-16"><Link to="/shop" className="text-gray-600 hover-text-main-600">Chính sách bảo mật</Link></li>
                            <li className="mb-16"><Link to="/shop" className="text-gray-600 hover-text-main-600">Nhà cung cấp của chúng tôi</Link></li>
                            <li className="mb-16"><Link to="/shop" className="text-gray-600 hover-text-main-600">Gói mở rộng</Link></li>
                            <li><Link to="/shop" className="text-gray-600 hover-text-main-600">Cộng đồng</Link></li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h6 className="footer-item__title">Hỗ trợ khách hàng</h6>
                        <ul className="footer-menu">
                            <li className="mb-16"><Link to="/shop" className="text-gray-600 hover-text-main-600">Trung tâm trợ giúp</Link></li>
                            <li className="mb-16"><Link to="/contact" className="text-gray-600 hover-text-main-600">Liên hệ chúng tôi</Link></li>
                            <li className="mb-16"><Link to="/shop" className="text-gray-600 hover-text-main-600">Báo cáo lạm dụng</Link></li>
                            <li className="mb-16"><Link to="/shop" className="text-gray-600 hover-text-main-600">Gửi và tranh chấp</Link></li>
                            <li className="mb-16"><Link to="/shop" className="text-gray-600 hover-text-main-600">Chính sách & Quy định</Link></li>
                            <li><Link to="/shop" className="text-gray-600 hover-text-main-600">Mua sắm trực tuyến</Link></li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h6 className="footer-item__title">Tài khoản của tôi</h6>
                        <ul className="footer-menu">
                            <li className="mb-16"><Link to="/shop" className="text-gray-600 hover-text-main-600">Tài khoản của tôi</Link></li>
                            <li className="mb-16"><Link to="/shop" className="text-gray-600 hover-text-main-600">Lịch sử đơn hàng</Link></li>
                            <li className="mb-16"><Link to="/shop" className="text-gray-600 hover-text-main-600">Giỏ hàng</Link></li>
                            <li className="mb-16"><Link to="/shop" className="text-gray-600 hover-text-main-600">So sánh</Link></li>
                            <li className="mb-16"><Link to="/shop" className="text-gray-600 hover-text-main-600">Hỗ trợ</Link></li>
                            <li><Link to="/shop" className="text-gray-600 hover-text-main-600">Danh sách yêu thích</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterOne;
