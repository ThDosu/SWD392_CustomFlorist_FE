import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="contact-page py-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="contact-info">
                            <h2 className="mb-40">Thông tin liên hệ</h2>
                            <div className="contact-info-item mb-30">
                                <h4 className="mb-15">Địa chỉ</h4>
                                <p className="mb-10">Cửa hàng chính: 142 Nguyễn Văn Cừ, Phường Nguyễn Cư Trinh, Quận 1, TP.HCM</p>
                                <p className="mb-10">Cửa Hàng TP.HCM: 225/3 Nguyễn Đình Chiểu, Phường 5, Quận 3, TP.HCM</p>
                                <p>Chi nhánh Hà Nội: 65 Trần Phú, Ba Đình, Hà Nội</p>
                            </div>
                            <div className="contact-info-item mb-30">
                                <h4 className="mb-15">Điện thoại</h4>
                                <p className="mb-10">Hotline: 1900 1234</p>
                                <p className="mb-10">TP.HCM: (028) 1234 5678</p>
                                <p>Hà Nội: (024) 8765 4321</p>
                            </div>
                            <div className="contact-info-item mb-30">
                                <h4 className="mb-15">Email</h4>
                                <p className="mb-10">info@yourflorist.com</p>
                                <p>support@yourflorist.com</p>
                            </div>
                            <div className="contact-info-item">
                                <h4 className="mb-15">Giờ làm việc</h4>
                                <p className="mb-10">Thứ 2 - Thứ 6: 8:00 - 21:00</p>
                                <p className="mb-10">Thứ 7 - Chủ nhật: 8:00 - 20:00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact-form">
                            <h2 className="mb-40">Gửi tin nhắn</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-20">
                                    <label htmlFor="name" className="form-label">Họ và tên</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-20">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-20">
                                    <label htmlFor="phone" className="form-label">Số điện thoại</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-20">
                                    <label htmlFor="subject" className="form-label">Chủ đề</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-20">
                                    <label htmlFor="message" className="form-label">Nội dung</label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Gửi tin nhắn
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="row mt-80">
                    <div className="col-12">
                        <div className="map-container">
                            <h2 className="mb-40">Bản đồ</h2>
                            <div className="map-wrapper">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2693114779!2d106.68713731500001!3d10.7626799922121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f5e7f4c0c1d%3A0x9f4c0c1d9f4c0c1d!2s142%20Nguy%E1%BB%85n%20V%C4%83n%20C%E1%BB%AB%2C%20Ph%C6%B0%E1%BB%9Dng%20Nguy%E1%BB%85n%20C%C6%B0%20Trinh%2C%20Qu%E1%BA%ADn%201%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh!5e0!3m2!1svi!2s!4v1620000000000!5m2!1svi!2s"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;