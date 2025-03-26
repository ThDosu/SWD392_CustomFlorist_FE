import React from 'react';

const PaymentMethod = () => {
    const paymentMethods = [
        {
            id: 'cod',
            name: 'Thanh toán khi nhận hàng (COD)',
            description: 'Thanh toán bằng tiền mặt khi nhận hàng tại địa chỉ giao hàng.',
            icon: '💵',
            image: 'assets/images/payment/cod.png',
            pros: ['Không cần thẻ ngân hàng', 'An toàn và đơn giản', 'Không phát sinh phí']
        },
        {
            id: 'bank',
            name: 'Chuyển khoản ngân hàng',
            description: 'Chuyển khoản trực tiếp đến tài khoản ngân hàng của chúng tôi.',
            icon: '🏦',
            image: 'assets/images/payment/bank.png',
            pros: ['An toàn và bảo mật', 'Không phát sinh phí', 'Được hỗ trợ bởi ngân hàng']
        },
        {
            id: 'momo',
            name: 'Ví MoMo',
            description: 'Thanh toán nhanh chóng và an toàn qua ví điện tử MoMo.',
            icon: '📱',
            image: 'assets/images/payment/momo.png',
            pros: ['Thanh toán nhanh chóng', 'Nhiều ưu đãi', 'Bảo mật cao']
        },
        {
            id: 'vnpay',
            name: 'VNPay',
            description: 'Thanh toán qua cổng thanh toán VNPay với nhiều phương thức.',
            icon: '💳',
            image: 'assets/images/payment/vnpay.png',
            pros: ['Hỗ trợ nhiều ngân hàng', 'Thanh toán quốc tế', 'Bảo mật đa lớp']
        },
        {
            id: 'zalopay',
            name: 'ZaloPay',
            description: 'Thanh toán nhanh chóng qua ví điện tử ZaloPay.',
            icon: '📱',
            image: 'assets/images/payment/zalopay.png',
            pros: ['Tích hợp với Zalo', 'Thanh toán nhanh', 'Nhiều ưu đãi']
        }
    ];

    return (
        <div className="payment-methods py-120">
            <style jsx>{`
                .payment-methods {
                    background-color: #f8f9fa;
                }
                .payment-card {
                    background: white;
                    border-radius: 12px;
                    padding: 2rem;
                    margin-bottom: 2rem;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                    transition: all 0.3s ease;
                    height: 100%;
                }
                .payment-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                }
                .payment-icon {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                }
                .payment-name {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: var(--main-600);
                    margin-bottom: 0.5rem;
                }
                .payment-description {
                    color: #6c757d;
                    line-height: 1.6;
                    margin-bottom: 1rem;
                }
                .payment-image {
                    width: 100%;
                    height: 120px;
                    object-fit: contain;
                    margin-bottom: 1rem;
                }
                .payment-pros {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .payment-pros li {
                    color: #28a745;
                    margin-bottom: 0.5rem;
                    display: flex;
                    align-items: center;
                }
                .payment-pros li:before {
                    content: "✓";
                    margin-right: 0.5rem;
                    color: #28a745;
                }
                .bank-info {
                    background: #f8f9fa;
                    padding: 1rem;
                    border-radius: 8px;
                    margin-top: 1rem;
                }
                .bank-info p {
                    margin-bottom: 0.5rem;
                }
                .bank-info strong {
                    color: var(--main-600);
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
                    .payment-card {
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
                            <h1 className="display-4 mb-20">Hình Thức Thanh Toán</h1>
                            <p className="lead text-gray-600">Chọn phương thức thanh toán phù hợp với bạn</p>
                        </div>

                        <div className="row">
                            {paymentMethods.map((method) => (
                                <div key={method.id} className="col-md-6 col-lg-4">
                                    <div className="payment-card">
                                        <div className="payment-icon">{method.icon}</div>
                                        <img 
                                            src={method.image} 
                                            alt={method.name}
                                            className="payment-image"
                                        />
                                        <h3 className="payment-name">{method.name}</h3>
                                        <p className="payment-description">{method.description}</p>
                                        
                                        <ul className="payment-pros">
                                            {method.pros.map((pro, index) => (
                                                <li key={index}>{pro}</li>
                                            ))}
                                        </ul>
                                        
                                        {method.id === 'bank' && (
                                            <div className="bank-info">
                                                <p><strong>Ngân hàng:</strong> Vietcombank</p>
                                                <p><strong>Số tài khoản:</strong> 123456789</p>
                                                <p><strong>Chủ tài khoản:</strong> Your Florist</p>
                                                <p><strong>Nội dung chuyển khoản:</strong> Đặt hoa [Mã đơn hàng]</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-50">
                            <div className="alert alert-info">
                                <h4 className="h5 mb-3">Lưu ý quan trọng:</h4>
                                <ul className="text-left mb-0">
                                    <li>Vui lòng kiểm tra kỹ thông tin thanh toán trước khi thực hiện.</li>
                                    <li>Đối với thanh toán chuyển khoản, vui lòng giữ lại biên lai để đối chiếu.</li>
                                    <li>Chúng tôi sẽ xác nhận đơn hàng sau khi nhận được thanh toán.</li>
                                    <li>Nếu cần hỗ trợ, vui lòng liên hệ hotline: 1900xxxx</li>
                                </ul>
                            </div>
                        </div>

                        <div className="security-badges">
                            <div className="security-badge">
                                <img src="assets/images/payment/ssl.png" alt="SSL Security" />
                                <p>SSL Bảo Mật</p>
                            </div>
                            <div className="security-badge">
                                <img src="assets/images/payment/pci.png" alt="PCI DSS" />
                                <p>PCI DSS</p>
                            </div>
                            <div className="security-badge">
                                <img src="assets/images/payment/3d.png" alt="3D Secure" />
                                <p>3D Secure</p>
                            </div>
                            <div className="security-badge">
                                <img src="assets/images/payment/iso.png" alt="ISO 27001" />
                                <p>ISO 27001</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethod; 