import React from 'react';

const WhyChooseUs = () => {
    const reasons = [
        {
            title: "Hoa Tươi Nhập Khẩu",
            content: "Chúng tôi cung cấp hoa tươi nhập khẩu từ các nước có nền công nghiệp hoa phát triển như Hà Lan, Ecuador, Kenya...",
            items: [
                "Hoa được nhập khẩu trực tiếp từ các trang trại uy tín",
                "Quy trình bảo quản lạnh chuyên nghiệp",
                "Kiểm tra chất lượng nghiêm ngặt",
                "Đa dạng chủng loại hoa quý hiếm"
            ],
            icon: "🌹"
        },
        {
            title: "Thiết Kế Chuyên Nghiệp",
            content: "Đội ngũ thiết kế hoa chuyên nghiệp với nhiều năm kinh nghiệm trong nghệ thuật cắm hoa.",
            items: [
                "Thiết kế theo yêu cầu riêng của khách hàng",
                "Phong cách thiết kế đa dạng, hiện đại",
                "Tư vấn phối màu và chọn hoa phù hợp",
                "Cập nhật xu hướng thiết kế mới nhất"
            ],
            icon: "🎨"
        },
        {
            title: "Dịch Vụ Giao Hàng",
            content: "Hệ thống giao hàng nhanh chóng, chuyên nghiệp với đội ngũ shipper được đào tạo bài bản.",
            items: [
                "Giao hàng nhanh trong vòng 2h",
                "Dịch vụ giao hàng toàn quốc",
                "Bảo quản hoa trong quá trình vận chuyển",
                "Dịch vụ giao hàng theo giờ yêu cầu"
            ],
            icon: "🚚"
        },
        {
            title: "Chính Sách Hậu Mãi",
            content: "Chính sách hậu mãi toàn diện, đảm bảo quyền lợi tối đa cho khách hàng.",
            items: [
                "Bảo hành hoa tươi 24h",
                "Hoàn tiền nếu không hài lòng",
                "Chương trình khách hàng thân thiết",
                "Dịch vụ chăm sóc hoa sau khi giao"
            ],
            icon: "💝"
        },
        {
            title: "Giá Cả Hợp Lý",
            content: "Cam kết cung cấp hoa với giá cả hợp lý, cạnh tranh trên thị trường.",
            items: [
                "Giá bán trực tiếp từ nhà vườn",
                "Không qua trung gian",
                "Nhiều ưu đãi và khuyến mãi",
                "Giá cố định, không phát sinh"
            ],
            icon: "💰"
        },
        {
            title: "Dịch Vụ Khách Hàng",
            content: "Đội ngũ tư vấn viên chuyên nghiệp, nhiệt tình, sẵn sàng hỗ trợ 24/7.",
            items: [
                "Tư vấn miễn phí",
                "Hỗ trợ kỹ thuật 24/7",
                "Dịch vụ khách hàng đa kênh",
                "Phản hồi nhanh chóng"
            ],
            icon: "👥"
        }
    ];

    return (
        <div className="why-choose-us py-120">
            <style jsx>{`
                .why-choose-us {
                    background-color: #f8f9fa;
                }
                .reason-section {
                    background: white;
                    border-radius: 12px;
                    padding: 2rem;
                    margin-bottom: 2rem;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                    transition: all 0.3s ease;
                    height: 100%;
                }
                .reason-section:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                }
                .reason-icon {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                }
                .reason-title {
                    color: var(--main-600);
                    font-size: 1.5rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                }
                .reason-content {
                    color: #6c757d;
                    margin-bottom: 1rem;
                }
                .reason-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .reason-list li {
                    color: #495057;
                    margin-bottom: 0.5rem;
                    padding-left: 1.5rem;
                    position: relative;
                }
                .reason-list li:before {
                    content: "✓";
                    color: var(--main-600);
                    position: absolute;
                    left: 0;
                }
                .stats-section {
                    background: linear-gradient(135deg, var(--main-600), var(--main-700));
                    border-radius: 12px;
                    padding: 3rem;
                    color: white;
                    margin-bottom: 3rem;
                }
                .stat-item {
                    text-align: center;
                }
                .stat-number {
                    font-size: 2.5rem;
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                }
                .stat-label {
                    font-size: 1.1rem;
                    opacity: 0.9;
                }
                @media (max-width: 768px) {
                    .reason-section {
                        padding: 1.5rem;
                    }
                    .stats-section {
                        padding: 2rem;
                    }
                }
            `}</style>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="text-center mb-50">
                            <h1 className="display-4 mb-20">Tại Sao Nên Chọn Your Florist?</h1>
                            <p className="lead text-gray-600">Những lý do khiến Your Florist trở thành lựa chọn hàng đầu của khách hàng</p>
                        </div>

                        <div className="stats-section">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="stat-item">
                                        <div className="stat-number">10+</div>
                                        <div className="stat-label">Năm Kinh Nghiệm</div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="stat-item">
                                        <div className="stat-number">50K+</div>
                                        <div className="stat-label">Khách Hàng Hài Lòng</div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="stat-item">
                                        <div className="stat-number">1000+</div>
                                        <div className="stat-label">Mẫu Hoa Đa Dạng</div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="stat-item">
                                        <div className="stat-number">24/7</div>
                                        <div className="stat-label">Hỗ Trợ Khách Hàng</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            {reasons.map((reason, index) => (
                                <div key={index} className="col-md-6">
                                    <div className="reason-section">
                                        <div className="reason-icon">{reason.icon}</div>
                                        <h2 className="reason-title">{reason.title}</h2>
                                        <p className="reason-content">{reason.content}</p>
                                        <ul className="reason-list">
                                            {reason.items.map((item, itemIndex) => (
                                                <li key={itemIndex}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs; 