import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const style = {
    container: "account py-80",
    formContainer: "container container-lg",
    card: "border border-gray-100 hover-border-main-600 transition-1 rounded-16 px-24 py-40",
    input: "common-input",
    button: "btn btn-main py-18 px-40",
    secondaryButton: "btn btn-outline-main py-18 px-40",
    imageUpload: "cursor-pointer rounded-circle overflow-hidden border border-gray-200 d-flex align-items-center justify-content-center",
    statusBadge: {
        PENDING: "badge bg-warning text-dark",
        PROCESSING: "badge bg-info text-white",
        SHIPPED: "badge bg-primary text-white",
        DELIVERED: "badge bg-success text-white",
        CANCELLED: "badge bg-danger text-white"
    }
};

const UserProfile = () => {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    
    // Example user data - in a real app, this would come from your auth system
    const [user, setUser] = useState({
        fullName: "Nguyen Van A",
        username: "nguyenvana",
        email: "nguyenvana@example.com",
        phone: "0912345678",
        address: "123 Đường ABC, Quận 1, TP.HCM",
        avatar: "/assets/images/avatar/default-avatar.jpg"
    });
    
    // Example recent orders data
    const recentOrders = [
        {
            id: "ORDER123",
            date: "20/06/2024",
            items: "Hoa hồng đỏ x 1",
            total: "350.000 ₫",
            status: "DELIVERED"
        },
        {
            id: "ORDER456",
            date: "15/05/2024",
            items: "Hoa lan hồ điệp x 2",
            total: "850.000 ₫",
            status: "SHIPPED"
        }
    ];
    
    const [formData, setFormData] = useState({...user});
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would send the updated profile to your backend
        setUser({...formData});
        setIsEditing(false);
    };
    
    const handleCancel = () => {
        setFormData({...user});
        setIsEditing(false);
    };
    
    // Function to get appropriate display text for status
    const getStatusText = (status) => {
        switch(status) {
            case 'PENDING': return 'Chờ xử lý';
            case 'PROCESSING': return 'Đang xử lý';
            case 'SHIPPED': return 'Đang giao';
            case 'DELIVERED': return 'Đã giao';
            case 'CANCELLED': return 'Đã hủy';
            default: return status;
        }
    };
    
    // Navigate to order details page
    const handleViewOrderDetail = (orderId) => {
        navigate(`/order/${orderId}`);
    };
    
    return (
        <section className={style.container}>
            <div className={style.formContainer}>
                <div className="row gy-4">
                    <div className="col-12">
                        <div className={style.card}>
                            <div className="d-flex flex-wrap justify-content-between align-items-center mb-32">
                                <h6 className="text-xl">Thông tin tài khoản</h6>
                                {!isEditing && (
                                    <button 
                                        className={style.button}
                                        onClick={() => setIsEditing(true)}
                                    >
                                        Chỉnh sửa
                                    </button>
                                )}
                            </div>
                            
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-3 mb-32">
                                        <div className="d-flex flex-column align-items-center">
                                            <div 
                                                className={`${style.imageUpload} mb-16`}
                                                style={{ width: "150px", height: "150px" }}
                                            >
                                                <img 
                                                    src={user.avatar} 
                                                    alt="Avatar" 
                                                    className="img-fluid" 
                                                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                                                    onError={(e) => {
                                                        e.target.src = "/assets/images/avatar/default-avatar.jpg";
                                                    }}
                                                />
                                            </div>
                                            {isEditing && (
                                                <label className="btn btn-sm btn-outline-main cursor-pointer">
                                                    Thay đổi ảnh
                                                    <input 
                                                        type="file" 
                                                        className="d-none" 
                                                        accept="image/*"
                                                    />
                                                </label>
                                            )}
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-9">
                                        <div className="row gy-4">
                                            <div className="col-md-6">
                                                <div className="mb-24">
                                                    <label className="text-neutral-900 text-lg mb-8 fw-medium">
                                                        Họ tên đầy đủ
                                                    </label>
                                                    {isEditing ? (
                                                        <input
                                                            type="text"
                                                            className={style.input}
                                                            name="fullName"
                                                            value={formData.fullName}
                                                            onChange={handleChange}
                                                        />
                                                    ) : (
                                                        <p className="form-control border border-gray-200">{user.fullName}</p>
                                                    )}
                                                </div>
                                            </div>
                                            
                                            <div className="col-md-6">
                                                <div className="mb-24">
                                                    <label className="text-neutral-900 text-lg mb-8 fw-medium">
                                                        Tên đăng nhập
                                                    </label>
                                                    <p className="form-control border border-gray-200">{user.username}</p>
                                                </div>
                                            </div>
                                            
                                            <div className="col-md-6">
                                                <div className="mb-24">
                                                    <label className="text-neutral-900 text-lg mb-8 fw-medium">
                                                        Email
                                                    </label>
                                                    {isEditing ? (
                                                        <input
                                                            type="email"
                                                            className={style.input}
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                        />
                                                    ) : (
                                                        <p className="form-control border border-gray-200">{user.email}</p>
                                                    )}
                                                </div>
                                            </div>
                                            
                                            <div className="col-md-6">
                                                <div className="mb-24">
                                                    <label className="text-neutral-900 text-lg mb-8 fw-medium">
                                                        Số điện thoại
                                                    </label>
                                                    {isEditing ? (
                                                        <input
                                                            type="text"
                                                            className={style.input}
                                                            name="phone"
                                                            value={formData.phone}
                                                            onChange={handleChange}
                                                        />
                                                    ) : (
                                                        <p className="form-control border border-gray-200">{user.phone}</p>
                                                    )}
                                                </div>
                                            </div>
                                            
                                            <div className="col-12">
                                                <div className="mb-24">
                                                    <label className="text-neutral-900 text-lg mb-8 fw-medium">
                                                        Địa chỉ
                                                    </label>
                                                    {isEditing ? (
                                                        <textarea
                                                            className={style.input}
                                                            name="address"
                                                            value={formData.address}
                                                            onChange={handleChange}
                                                            rows="3"
                                                        ></textarea>
                                                    ) : (
                                                        <p className="form-control border border-gray-200">{user.address}</p>
                                                    )}
                                                </div>
                                            </div>
                                            
                                            {isEditing && (
                                                <div className="col-12 mt-32">
                                                    <div className="d-flex gap-3">
                                                        <button type="submit" className={style.button}>
                                                            Lưu thay đổi
                                                        </button>
                                                        <button 
                                                            type="button" 
                                                            className={style.secondaryButton}
                                                            onClick={handleCancel}
                                                        >
                                                            Hủy
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                    <div className="col-12">
                        <div className={style.card}>
                            <div className="d-flex flex-wrap justify-content-between align-items-center mb-32">
                                <h6 className="text-xl">Đơn hàng gần đây</h6>
                                <button 
                                    className={style.button}
                                    onClick={() => navigate('/order-history')}
                                >
                                    Xem tất cả đơn hàng
                                </button>
                            </div>
                            
                            {recentOrders.length === 0 ? (
                                <div className="text-center py-4">
                                    <p>Bạn chưa có đơn hàng nào.</p>
                                    <Link to="/shop" className="btn btn-main mt-3">Mua sắm ngay</Link>
                                </div>
                            ) : (
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Mã đơn hàng</th>
                                                <th>Ngày đặt</th>
                                                <th>Sản phẩm</th>
                                                <th>Tổng tiền</th>
                                                <th>Trạng thái</th>
                                                <th>Thao tác</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {recentOrders.map(order => (
                                                <tr key={order.id}>
                                                    <td>#{order.id}</td>
                                                    <td>{order.date}</td>
                                                    <td>{order.items}</td>
                                                    <td>{order.total}</td>
                                                    <td>
                                                        <span className={style.statusBadge[order.status]}>
                                                            {getStatusText(order.status)}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <button
                                                            type="button"
                                                            className="btn btn-sm btn-main"
                                                            onClick={() => handleViewOrderDetail(order.id)}
                                                        >
                                                            Chi tiết
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserProfile; 