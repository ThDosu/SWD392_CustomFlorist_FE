import React from 'react';

const RefundPolicy = () => {
    const refundPolicies = [
        {
            title: "Điều Kiện Hoàn Tiền",
            content: "Your Florist chấp nhận hoàn tiền trong các trường hợp sau:",
            items: [
                "Hoa bị héo, dập nát hoặc không tươi trong vòng 24h kể từ khi nhận hàng",
                "Số lượng hoa không đúng với đơn hàng",
                "Màu sắc hoa không đúng với hình ảnh đã cam kết",
                "Phụ kiện đi kèm (thiệp, băng rôn, nơ) bị thiếu hoặc không đúng",
                "Giao nhầm địa chỉ hoặc thời gian giao hàng"
            ]
        },
        {
            title: "Thời Gian Yêu Cầu Hoàn Tiền",
            content: "Thời gian yêu cầu hoàn tiền được quy định như sau:",
            items: [
                "Trong vòng 24 giờ kể từ khi nhận hàng cho hoa không tươi",
                "Trong vòng 48 giờ cho hoa không đúng màu sắc",
                "Trong vòng 12 giờ cho giao nhầm địa chỉ",
                "Trong vòng 24 giờ cho thiếu phụ kiện"
            ]
        },
        {
            title: "Quy Trình Hoàn Tiền",
            content: "Quy trình hoàn tiền được thực hiện theo các bước:",
            items: [
                "Chụp ảnh hoa và phụ kiện để làm bằng chứng",
                "Liên hệ với chúng tôi qua hotline hoặc email",
                "Cung cấp thông tin đơn hàng và lý do hoàn tiền",
                "Điền form yêu cầu hoàn tiền",
                "Chờ xác nhận và xử lý từ bộ phận chăm sóc khách hàng"
            ]
        },
        {
            title: "Phương Thức Hoàn Tiền",
            content: "Chúng tôi hoàn tiền theo các phương thức sau:",
            items: [
                "Hoàn tiền trực tiếp vào tài khoản ngân hàng",
                "Hoàn tiền qua ví điện tử (Momo, ZaloPay)",
                "Hoàn tiền qua thẻ tín dụng",
                "Hoàn tiền qua cổng thanh toán trực tuyến"
            ]
        },
        {
            title: "Thời Gian Hoàn Tiền",
            content: "Thời gian hoàn tiền được quy định như sau:",
            items: [
                "24h cho hoa không tươi hoặc giao nhầm",
                "3-5 ngày làm việc cho hoàn tiền qua tài khoản ngân hàng",
                "1-2 ngày làm việc cho hoàn tiền qua ví điện tử",
                "5-7 ngày làm việc cho hoàn tiền qua thẻ tín dụng"
            ]
        },
        {
            title: "Lưu Ý Quan Trọng",
            content: "Một số lưu ý khi yêu cầu hoàn tiền:",
            items: [
                "Không chấp nhận hoàn tiền cho hoa đã được cắt tỉa hoặc sử dụng",
                "Cần có ảnh chụp rõ ràng về tình trạng hoa",
                "Giữ nguyên bao bì và phụ kiện đi kèm",
                "Không chấp nhận hoàn tiền cho hoa đã được giao quá 24h"
            ]
        },
        {
            title: "Liên Hệ",
            content: "Để yêu cầu hoàn tiền, vui lòng liên hệ:",
            items: [
                "Email: refund@yourflorist.com",
                "Hotline: 1900xxxx",
                "Địa chỉ: 142 Nguyễn Văn Cừ, Quận 1, TP.HCM",
                "Thời gian làm việc: 8:00 - 21:00"
            ]
        }
    ];

    return (
        <div className="refund-policy py-120">
            <style jsx>{`
                .refund-policy {
                    background-color: #f8f9fa;
                }
                .policy-section {
                    background: white;
                    border-radius: 12px;
                    padding: 2rem;
                    margin-bottom: 2rem;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                    transition: transform 0.3s ease;
                }
                .policy-section:hover {
                    transform: translateY(-5px);
                }
                .policy-title {
                    color: var(--main-600);
                    font-size: 1.5rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                    display: flex;
                    align-items: center;
                }
                .policy-title:before {
                    content: "🌸";
                    margin-right: 0.5rem;
                }
                .policy-content {
                    color: #6c757d;
                    margin-bottom: 1rem;
                }
                .policy-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .policy-list li {
                    color: #495057;
                    margin-bottom: 0.5rem;
                    padding-left: 1.5rem;
                    position: relative;
                }
                .policy-list li:before {
                    content: "•";
                    color: var(--main-600);
                    position: absolute;
                    left: 0;
                }
                .policy-badges {
                    display: flex;
                    justify-content: center;
                    gap: 2rem;
                    margin-top: 3rem;
                    flex-wrap: wrap;
                }
                .policy-badge {
                    text-align: center;
                    background: white;
                    padding: 1.5rem;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                    transition: transform 0.3s ease;
                }
                .policy-badge:hover {
                    transform: translateY(-5px);
                }
                .policy-badge img {
                    height: 60px;
                    margin-bottom: 0.5rem;
                }
                .policy-badge p {
                    font-size: 0.875rem;
                    color: #6c757d;
                    margin: 0;
                }
                @media (max-width: 768px) {
                    .policy-section {
                        padding: 1.5rem;
                    }
                    .policy-badges {
                        gap: 1rem;
                    }
                }
            `}</style>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="text-center mb-50">
                            <h1 className="display-4 mb-20">Chính Sách Hoàn Tiền</h1>
                            <p className="lead text-gray-600">Cam kết hoàn tiền nhanh chóng và minh bạch cho mọi đơn hàng hoa</p>
                        </div>

                        <div className="row">
                            {refundPolicies.map((policy, index) => (
                                <div key={index} className="col-md-6">
                                    <div className="policy-section">
                                        <h2 className="policy-title">{policy.title}</h2>
                                        <p className="policy-content">{policy.content}</p>
                                        <ul className="policy-list">
                                            {policy.items.map((item, itemIndex) => (
                                                <li key={itemIndex}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="policy-badges">
                            <div className="policy-badge">
                                <img src="assets/images/refund/secure.png" alt="Secure Refund" />
                                <p>Hoàn Tiền An Toàn</p>
                            </div>
                            <div className="policy-badge">
                                <img src="assets/images/refund/fast.png" alt="Fast Refund" />
                                <p>Hoàn Tiền Nhanh Chóng</p>
                            </div>
                            <div className="policy-badge">
                                <img src="assets/images/refund/support.png" alt="24/7 Support" />
                                <p>Hỗ Trợ 24/7</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RefundPolicy; 