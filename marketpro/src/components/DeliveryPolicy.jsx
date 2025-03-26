import React from 'react';

const DeliveryPolicy = () => {
    return (
        <div className="delivery-policy py-120">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center mb-50">Chính Sách Vận Chuyển</h1>
                        
                        <div className="policy-content">
                            <div className="policy-section mb-50">
                                <h2 className="mb-30">1. Phạm vi vận chuyển</h2>
                                <p className="mb-20">
                                    Your Florist cung cấp dịch vụ vận chuyển hoa tươi đến tất cả các quận, huyện trong khu vực TP.HCM và Hà Nội. 
                                    Đối với các khu vực khác, chúng tôi sẽ cung cấp dịch vụ vận chuyển qua các đơn vị vận chuyển uy tín.
                                </p>
                            </div>

                            <div className="policy-section mb-50">
                                <h2 className="mb-30">2. Thời gian vận chuyển</h2>
                                <ul className="list-unstyled">
                                    <li className="mb-15">
                                        <strong>Khu vực nội thành:</strong> Giao hàng trong vòng 2 giờ kể từ khi đặt hàng
                                    </li>
                                    <li className="mb-15">
                                        <strong>Khu vực ngoại thành:</strong> Giao hàng trong vòng 4 giờ kể từ khi đặt hàng
                                    </li>
                                    <li className="mb-15">
                                        <strong>Khu vực khác:</strong> Giao hàng trong vòng 24 giờ kể từ khi đặt hàng
                                    </li>
                                </ul>
                            </div>

                            <div className="policy-section mb-50">
                                <h2 className="mb-30">3. Phí vận chuyển</h2>
                                <ul className="list-unstyled">
                                    <li className="mb-15">
                                        <strong>Miễn phí vận chuyển:</strong> Cho đơn hàng từ 1.000.000đ trở lên trong khu vực nội thành
                                    </li>
                                    <li className="mb-15">
                                        <strong>Phí vận chuyển nội thành:</strong> 30.000đ/đơn hàng
                                    </li>
                                    <li className="mb-15">
                                        <strong>Phí vận chuyển ngoại thành:</strong> 50.000đ/đơn hàng
                                    </li>
                                    <li className="mb-15">
                                        <strong>Phí vận chuyển khu vực khác:</strong> Theo bảng giá của đơn vị vận chuyển
                                    </li>
                                </ul>
                            </div>

                            <div className="policy-section mb-50">
                                <h2 className="mb-30">4. Quy trình vận chuyển</h2>
                                <ol className="list-unstyled">
                                    <li className="mb-15">
                                        <strong>Bước 1:</strong> Xác nhận đơn hàng và thông tin giao hàng
                                    </li>
                                    <li className="mb-15">
                                        <strong>Bước 2:</strong> Chuẩn bị hoa và đóng gói cẩn thận
                                    </li>
                                    <li className="mb-15">
                                        <strong>Bước 3:</strong> Giao hàng theo địa chỉ đã đăng ký
                                    </li>
                                    <li className="mb-15">
                                        <strong>Bước 4:</strong> Xác nhận giao hàng thành công
                                    </li>
                                </ol>
                            </div>

                            <div className="policy-section mb-50">
                                <h2 className="mb-30">5. Cam kết vận chuyển</h2>
                                <ul className="list-unstyled">
                                    <li className="mb-15">
                                        Hoa được vận chuyển trong điều kiện nhiệt độ phù hợp
                                    </li>
                                    <li className="mb-15">
                                        Đóng gói cẩn thận để tránh hư hỏng trong quá trình vận chuyển
                                    </li>
                                    <li className="mb-15">
                                        Nhân viên giao hàng thân thiện, chuyên nghiệp
                                    </li>
                                    <li className="mb-15">
                                        Bồi thường 100% nếu hoa bị hư hỏng trong quá trình vận chuyển
                                    </li>
                                </ul>
                            </div>

                            <div className="policy-section">
                                <h2 className="mb-30">6. Lưu ý khi giao hàng</h2>
                                <ul className="list-unstyled">
                                    <li className="mb-15">
                                        Vui lòng cung cấp địa chỉ chính xác và số điện thoại liên hệ
                                    </li>
                                    <li className="mb-15">
                                        Nên đặt hàng trước ít nhất 1 ngày cho các dịp lễ tết
                                    </li>
                                    <li className="mb-15">
                                        Có thể yêu cầu thời gian giao hàng cụ thể trong khung giờ làm việc
                                    </li>
                                    <li className="mb-15">
                                        Nếu không liên hệ được người nhận, chúng tôi sẽ gọi điện 3 lần và để lại thông báo
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeliveryPolicy; 