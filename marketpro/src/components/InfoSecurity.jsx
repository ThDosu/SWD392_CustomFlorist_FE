import React from 'react';

const InfoSecurity = () => {
    const securityPolicies = [
        {
            title: "Bảo Mật Thông Tin Cá Nhân",
            content: "Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn bằng cách:",
            items: [
                "Mã hóa dữ liệu nhạy cảm bằng công nghệ SSL",
                "Không chia sẻ thông tin với bên thứ ba mà không có sự đồng ý",
                "Lưu trữ thông tin an toàn trên máy chủ được bảo vệ",
                "Thường xuyên cập nhật và kiểm tra hệ thống bảo mật"
            ]
        },
        {
            title: "Thu Thập Thông Tin",
            content: "Chúng tôi thu thập các thông tin sau:",
            items: [
                "Thông tin đăng ký tài khoản (tên, email, số điện thoại)",
                "Thông tin đặt hàng (địa chỉ giao hàng, phương thức thanh toán)",
                "Thông tin thanh toán (được mã hóa và bảo mật)",
                "Dữ liệu truy cập website (cookies, IP, trình duyệt)"
            ]
        },
        {
            title: "Sử Dụng Thông Tin",
            content: "Thông tin của bạn được sử dụng cho các mục đích:",
            items: [
                "Xử lý đơn hàng và giao hàng",
                "Gửi thông báo về đơn hàng",
                "Cải thiện dịch vụ khách hàng",
                "Gửi thông tin khuyến mãi (nếu bạn đồng ý)",
                "Phân tích và cải thiện trải nghiệm người dùng"
            ]
        },
        {
            title: "Quyền Của Người Dùng",
            content: "Bạn có quyền:",
            items: [
                "Truy cập và xem thông tin cá nhân",
                "Yêu cầu chỉnh sửa thông tin không chính xác",
                "Yêu cầu xóa tài khoản",
                "Từ chối nhận thông tin marketing",
                "Khiếu nại về việc xử lý thông tin"
            ]
        },
        {
            title: "Bảo Mật Thanh Toán",
            content: "Chúng tôi đảm bảo an toàn cho các giao dịch thanh toán:",
            items: [
                "Sử dụng cổng thanh toán bảo mật",
                "Mã hóa thông tin thẻ tín dụng",
                "Tuân thủ tiêu chuẩn PCI DSS",
                "Không lưu trữ thông tin thẻ tín dụng",
                "Xác thực 3D Secure cho giao dịch"
            ]
        },
        {
            title: "Liên Hệ",
            content: "Nếu bạn có thắc mắc về bảo mật thông tin, vui lòng liên hệ:",
            items: [
                "Email: security@yourflorist.com",
                "Hotline: 1900xxxx",
                "Địa chỉ: 142 Nguyễn Văn Cừ, Quận 1, TP.HCM",
                "Thời gian làm việc: 8:00 - 21:00"
            ]
        }
    ];

    return (
        <div className="info-security py-120">
            <style jsx>{`
                .info-security {
                    background-color: #f8f9fa;
                }
                .security-section {
                    background: white;
                    border-radius: 12px;
                    padding: 2rem;
                    margin-bottom: 2rem;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                }
                .security-title {
                    color: var(--main-600);
                    font-size: 1.5rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                    display: flex;
                    align-items: center;
                }
                .security-title:before {
                    content: "🔒";
                    margin-right: 0.5rem;
                }
                .security-content {
                    color: #6c757d;
                    margin-bottom: 1rem;
                }
                .security-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .security-list li {
                    color: #495057;
                    margin-bottom: 0.5rem;
                    padding-left: 1.5rem;
                    position: relative;
                }
                .security-list li:before {
                    content: "•";
                    color: var(--main-600);
                    position: absolute;
                    left: 0;
                }
                .security-badges {
                    display: flex;
                    justify-content: center;
                    gap: 2rem;
                    margin-top: 3rem;
                    flex-wrap: wrap;
                }
                .security-badge {
                    text-align: center;
                }
                .security-badge img {
                    height: 60px;
                    margin-bottom: 0.5rem;
                }
                .security-badge p {
                    font-size: 0.875rem;
                    color: #6c757d;
                    margin: 0;
                }
                @media (max-width: 768px) {
                    .security-section {
                        padding: 1.5rem;
                    }
                    .security-badges {
                        gap: 1rem;
                    }
                }
            `}</style>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="text-center mb-50">
                            <h1 className="display-4 mb-20">Chính Sách Bảo Mật Thông Tin</h1>
                            <p className="lead text-gray-600">Cam kết bảo vệ thông tin của khách hàng</p>
                        </div>

                        <div className="row">
                            {securityPolicies.map((policy, index) => (
                                <div key={index} className="col-md-6">
                                    <div className="security-section">
                                        <h2 className="security-title">{policy.title}</h2>
                                        <p className="security-content">{policy.content}</p>
                                        <ul className="security-list">
                                            {policy.items.map((item, itemIndex) => (
                                                <li key={itemIndex}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="security-badges">
                            <div className="security-badge">
                                <img src="assets/images/security/ssl.png" alt="SSL Security" />
                                <p>SSL Bảo Mật</p>
                            </div>
                            <div className="security-badge">
                                <img src="assets/images/security/pci.png" alt="PCI DSS" />
                                <p>PCI DSS</p>
                            </div>
                            <div className="security-badge">
                                <img src="assets/images/security/iso.png" alt="ISO 27001" />
                                <p>ISO 27001</p>
                            </div>
                            <div className="security-badge">
                                <img src="assets/images/security/gdpr.png" alt="GDPR" />
                                <p>GDPR</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoSecurity; 