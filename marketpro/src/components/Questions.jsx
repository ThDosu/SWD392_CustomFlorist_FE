import React, { useState } from 'react';

const Questions = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [activeCategory, setActiveCategory] = useState('all');

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const categories = [
        { id: 'all', name: 'Tất cả' },
        { id: 'order', name: 'Đặt hàng' },
        { id: 'delivery', name: 'Giao hàng' },
        { id: 'payment', name: 'Thanh toán' },
        { id: 'policy', name: 'Chính sách' }
    ];

    const questions = [
        {
            category: 'order',
            question: "Làm thế nào để đặt hoa online?",
            answer: "Để đặt hoa online, bạn có thể thực hiện các bước sau: 1) Chọn sản phẩm hoa yêu thích từ danh mục, 2) Thêm vào giỏ hàng, 3) Điền thông tin giao hàng, 4) Chọn phương thức thanh toán, 5) Xác nhận đơn hàng."
        },
        {
            category: 'delivery',
            question: "Thời gian giao hàng mất bao lâu?",
            answer: "Thời gian giao hàng phụ thuộc vào khu vực: - Nội thành: 2 giờ - Ngoại thành: 4 giờ - Khu vực khác: 24 giờ. Trong các dịp lễ tết, thời gian giao hàng có thể lâu hơn."
        },
        {
            category: 'policy',
            question: "Có được kiểm tra hoa trước khi thanh toán không?",
            answer: "Có, chúng tôi luôn cho phép khách hàng kiểm tra hoa trước khi thanh toán. Nếu không hài lòng, bạn có thể từ chối nhận hàng."
        },
        {
            category: 'policy',
            question: "Chính sách đổi trả hoa như thế nào?",
            answer: "Chúng tôi chấp nhận đổi trả trong vòng 24 giờ nếu hoa có dấu hiệu hư hỏng hoặc không đúng với mẫu đã đặt. Hoa được đổi trả phải còn nguyên vẹn và trong tình trạng ban đầu."
        },
        {
            category: 'order',
            question: "Có được tặng thiệp chúc mừng không?",
            answer: "Có, chúng tôi luôn tặng kèm thiệp chúc mừng miễn phí cho mọi đơn hàng. Bạn có thể viết nội dung tùy ý khi đặt hàng."
        },
        {
            category: 'delivery',
            question: "Có được giao hoa vào giờ cụ thể không?",
            answer: "Có, bạn có thể yêu cầu thời gian giao hàng cụ thể trong khung giờ làm việc của chúng tôi (8:00 - 21:00)."
        },
        {
            category: 'payment',
            question: "Có được giảm giá cho đơn hàng lớn không?",
            answer: "Có, chúng tôi có chính sách giảm giá đặc biệt cho đơn hàng lớn: - Giảm 5% cho đơn hàng từ 2 triệu đồng - Giảm 10% cho đơn hàng từ 5 triệu đồng - Giảm 15% cho đơn hàng từ 10 triệu đồng"
        },
        {
            category: 'order',
            question: "Có được đặt hoa trước cho các dịp lễ không?",
            answer: "Có, bạn có thể đặt hoa trước cho các dịp lễ. Chúng tôi khuyến nghị đặt trước ít nhất 1-2 ngày để đảm bảo có đủ hoa theo yêu cầu."
        },
        {
            category: 'order',
            question: "Có được tư vấn cách chọn hoa phù hợp không?",
            answer: "Có, đội ngũ tư vấn của chúng tôi luôn sẵn sàng hỗ trợ bạn chọn hoa phù hợp với mục đích và ngân sách của bạn."
        },
        {
            category: 'payment',
            question: "Có được thanh toán khi nhận hàng không?",
            answer: "Có, chúng tôi chấp nhận thanh toán khi nhận hàng (COD) cho tất cả các đơn hàng. Ngoài ra, bạn cũng có thể thanh toán online qua các cổng thanh toán điện tử."
        }
    ];

    const filteredQuestions = activeCategory === 'all' 
        ? questions 
        : questions.filter(q => q.category === activeCategory);

    return (
        <div className="questions py-120">
            <style jsx>{`
                .questions {
                    background-color: #f8f9fa;
                }
                .question-item {
                    margin-bottom: 1rem;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                }
                .question-header {
                    padding: 1.25rem;
                    background: white;
                    cursor: pointer;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    transition: all 0.3s ease;
                }
                .question-header:hover {
                    background: #f8f9fa;
                }
                .question-header.active {
                    background: var(--main-600);
                    color: white;
                }
                .question-answer {
                    padding: 1.25rem;
                    background: white;
                    border-top: 1px solid #e9ecef;
                    max-height: 0;
                    overflow: hidden;
                    transition: all 0.3s ease;
                }
                .question-answer.show {
                    max-height: 500px;
                }
                .toggle-icon {
                    width: 24px;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.3s ease;
                }
                .toggle-icon.active {
                    transform: rotate(180deg);
                }
                .categories-wrapper {
                    position: sticky;
                    top: 20px;
                    z-index: 10;
                    background: #f8f9fa;
                    padding: 15px 0;
                    margin-bottom: 2rem;
                }
                .category-btn {
                    padding: 0.5rem 1rem;
                    border-radius: 20px;
                    border: 1px solid var(--main-600);
                    background: transparent;
                    color: var(--main-600);
                    cursor: pointer;
                    transition: all 0.3s ease;
                    margin: 0.25rem;
                }
                .category-btn:hover {
                    background: var(--main-600);
                    color: white;
                }
                .category-btn.active {
                    background: var(--main-600);
                    color: white;
                }
                @media (max-width: 768px) {
                    .categories-wrapper {
                        position: relative;
                        top: 0;
                    }
                    .question-header {
                        padding: 1rem;
                    }
                    .question-answer {
                        padding: 1rem;
                    }
                }
            `}</style>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="text-center mb-50">
                            <h1 className="display-4 mb-20">Câu Hỏi Thường Gặp</h1>
                            <p className="lead text-gray-600">Tìm câu trả lời cho những thắc mắc phổ biến của bạn</p>
                        </div>

                        {/* Categories */}
                        <div className="categories-wrapper">
                            <div className="d-flex justify-content-center flex-wrap">
                                {categories.map(category => (
                                    <button
                                        key={category.id}
                                        className={`category-btn ${
                                            activeCategory === category.id ? 'active' : ''
                                        }`}
                                        onClick={() => setActiveCategory(category.id)}
                                    >
                                        {category.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Questions List */}
                        <div className="questions-list">
                            {filteredQuestions.length === 0 ? (
                                <div className="text-center py-50">
                                    <p className="text-gray-600">Không tìm thấy câu hỏi nào trong danh mục này.</p>
                                </div>
                            ) : (
                                filteredQuestions.map((item, index) => (
                                    <div key={index} className="question-item">
                                        <div 
                                            className={`question-header ${
                                                openIndex === index ? 'active' : ''
                                            }`}
                                            onClick={() => toggleQuestion(index)}
                                        >
                                            <h3 className="h5 mb-0">{item.question}</h3>
                                            <div className={`toggle-icon ${openIndex === index ? 'active' : ''}`}>
                                                ▼
                                            </div>
                                        </div>
                                        <div 
                                            className={`question-answer ${
                                                openIndex === index ? 'show' : ''
                                            }`}
                                        >
                                            <p className="mb-0 text-gray-700">{item.answer}</p>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions; 