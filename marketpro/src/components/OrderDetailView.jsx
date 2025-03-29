import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const style = {
    container: "account py-80",
    formContainer: "container container-lg",
    card: "border border-gray-100 hover-border-main-600 transition-1 rounded-16 px-24 py-40 mb-32",
    input: "common-input",
    button: "btn btn-main py-14 px-20",
    secondaryButton: "btn btn-outline-main py-14 px-20",
    imgContainer: "rounded-12 overflow-hidden border border-gray-200",
    statusBadge: {
        PENDING: "badge bg-warning text-dark",
        PROCESSING: "badge bg-info text-white",
        SHIPPED: "badge bg-primary text-white",
        DELIVERED: "badge bg-success text-white",
        CANCELLED: "badge bg-danger text-white"
    },
    stepActive: "text-main-600 fw-bold",
    stepCompleted: "text-success",
    stepPending: "text-gray-400"
};

const OrderDetailView = () => {
    const { orderId } = useParams();
    const navigate = useNavigate();
    
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Format date for display
    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('vi-VN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    // Format price with Vietnamese currency
    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(price);
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

    // Calculate current step in order progress
    const getOrderProgress = (status) => {
        const steps = ['PENDING', 'PROCESSING', 'SHIPPED', 'DELIVERED'];
        if (status === 'CANCELLED') return -1;
        return steps.indexOf(status);
    };

    // Fetch order details
    useEffect(() => {
        const fetchOrderDetails = async () => {
            setLoading(true);
            try {
                // In a real app, this would be an API call
                // const response = await axios.get(`/api/orders/${orderId}`);
                
                // Mock data for development
                const mockOrder = {
                    id: orderId || "ORDER123",
                    orderDate: '2024-06-20T14:30:00',
                    status: 'SHIPPED',
                    totalPrice: 850000,
                    customer: {
                        name: 'Nguyễn Văn A',
                        phone: '0912345678',
                        email: 'nguyenvana@example.com'
                    },
                    shippingAddress: '123 Đường ABC, Quận 1, TP.HCM',
                    paymentMethod: 'Thanh toán khi nhận hàng',
                    items: [
                        { 
                            id: 1,
                            productName: 'Hoa hồng đỏ', 
                            quantity: 1, 
                            price: 350000,
                            image: '/assets/images/products/product-1.jpg'
                        },
                        { 
                            id: 2,
                            productName: 'Hoa lan hồ điệp', 
                            quantity: 2, 
                            price: 250000,
                            image: '/assets/images/products/product-2.jpg'
                        }
                    ],
                    statusHistory: [
                        { status: 'PENDING', date: '2024-06-19T10:00:00', note: 'Đơn hàng được tạo' },
                        { status: 'PROCESSING', date: '2024-06-19T14:30:00', note: 'Đơn hàng đang được xử lý' },
                        { status: 'SHIPPED', date: '2024-06-20T09:15:00', note: 'Đơn hàng đang được giao' }
                    ]
                };
                
                setOrder(mockOrder);
            } catch (err) {
                console.error('Error fetching order details:', err);
                setError('Không thể tải thông tin đơn hàng. Vui lòng thử lại sau.');
            } finally {
                setLoading(false);
            }
        };
        
        fetchOrderDetails();
    }, [orderId]);

    // Handle cancel order
    const handleCancelOrder = async () => {
        if (window.confirm('Bạn có chắc chắn muốn hủy đơn hàng này không?')) {
            try {
                // In a real app, this would be an API call
                // await axios.post(`/api/orders/${orderId}/cancel`);
                
                // For mock purposes, update the local state
                setOrder({
                    ...order,
                    status: 'CANCELLED',
                    statusHistory: [
                        ...order.statusHistory,
                        { status: 'CANCELLED', date: new Date().toISOString(), note: 'Đơn hàng đã bị hủy bởi khách hàng' }
                    ]
                });
                
                alert('Đơn hàng đã được hủy thành công.');
            } catch (err) {
                console.error('Error cancelling order:', err);
                alert('Không thể hủy đơn hàng. Vui lòng thử lại sau.');
            }
        }
    };

    if (loading) {
        return (
            <section className={style.container}>
                <div className={style.formContainer}>
                    <div className="text-center py-5">
                        <div className="spinner-border text-main" role="status">
                            <span className="visually-hidden">Đang tải...</span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (error || !order) {
        return (
            <section className={style.container}>
                <div className={style.formContainer}>
                    <div className="alert alert-danger" role="alert">
                        {error || 'Không tìm thấy thông tin đơn hàng.'}
                    </div>
                    <button 
                        className={style.secondaryButton}
                        onClick={() => navigate('/order-history')}
                    >
                        Quay lại danh sách đơn hàng
                    </button>
                </div>
            </section>
        );
    }

    const currentStep = getOrderProgress(order.status);

    return (
        <section className={style.container}>
            <div className={style.formContainer}>
                <div className="d-flex align-items-center justify-content-between mb-40">
                    <h5 className="mb-0">Chi tiết đơn hàng #{order.id}</h5>
                    <button 
                        className={style.secondaryButton}
                        onClick={() => navigate('/order-history')}
                    >
                        Quay lại danh sách đơn hàng
                    </button>
                </div>
                
                {/* Order Status Card */}
                <div className={`${style.card} mb-40`}>
                    <div className="d-flex flex-wrap justify-content-between align-items-center mb-30">
                        <div>
                            <h6 className="mb-3">Trạng thái đơn hàng</h6>
                            <span className={style.statusBadge[order.status]}>
                                {getStatusText(order.status)}
                            </span>
                        </div>
                        <div className="text-end">
                            <p className="mb-3"><strong>Ngày đặt:</strong> {formatDate(order.orderDate)}</p>
                            <p className="mb-0"><strong>Mã đơn hàng:</strong> #{order.id}</p>
                        </div>
                    </div>
                    
                    {/* Order Progress Stepper */}
                    {/* Commented out as requested
                    {order.status !== 'CANCELLED' && (
                        <div className="order-progress mb-24">
                            <div className="row text-center position-relative">
                                <div className="col">
                                    <div className={`step ${currentStep >= 0 ? (currentStep > 0 ? style.stepCompleted : style.stepActive) : style.stepPending}`}>
                                        <div className="step-icon mb-2">
                                            <i className="ph ph-check-circle fs-3"></i>
                                        </div>
                                        <div className="step-text">Đặt hàng</div>
                                        {order.statusHistory[0] && (
                                            <small className="text-muted">{formatDate(order.statusHistory[0].date)}</small>
                                        )}
                                    </div>
                                </div>
                                <div className="col">
                                    <div className={`step ${currentStep >= 1 ? (currentStep > 1 ? style.stepCompleted : style.stepActive) : style.stepPending}`}>
                                        <div className="step-icon mb-2">
                                            <i className="ph ph-package fs-3"></i>
                                        </div>
                                        <div className="step-text">Xử lý</div>
                                        {order.statusHistory[1] && (
                                            <small className="text-muted">{formatDate(order.statusHistory[1].date)}</small>
                                        )}
                                    </div>
                                </div>
                                <div className="col">
                                    <div className={`step ${currentStep >= 2 ? (currentStep > 2 ? style.stepCompleted : style.stepActive) : style.stepPending}`}>
                                        <div className="step-icon mb-2">
                                            <i className="ph ph-truck fs-3"></i>
                                        </div>
                                        <div className="step-text">Giao hàng</div>
                                        {order.statusHistory[2] && (
                                            <small className="text-muted">{formatDate(order.statusHistory[2].date)}</small>
                                        )}
                                    </div>
                                </div>
                                <div className="col">
                                    <div className={`step ${currentStep >= 3 ? style.stepActive : style.stepPending}`}>
                                        <div className="step-icon mb-2">
                                            <i className="ph ph-check-circle fs-3"></i>
                                        </div>
                                        <div className="step-text">Hoàn thành</div>
                                        {order.statusHistory[3] && (
                                            <small className="text-muted">{formatDate(order.statusHistory[3].date)}</small>
                                        )}
                                    </div>
                                </div>
                                
                                <div className="progress position-absolute start-0 end-0 mx-5" style={{ height: '4px', bottom: '-30px', zIndex: '-1' }}>
                                    <div 
                                        className="progress-bar bg-success" 
                                        role="progressbar" 
                                        style={{ 
                                            width: currentStep <= 0 ? '0%' : 
                                                  currentStep === 1 ? '33%' : 
                                                  currentStep === 2 ? '66%' : 
                                                  '100%' 
                                        }}
                                        aria-valuenow={currentStep * 25} 
                                        aria-valuemin="0" 
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    )}
                    */}
                    
                    <div className="d-flex justify-content-between align-items-center mt-4">
                        {order.status === 'PENDING' && (
                            <button 
                                className="btn btn-danger"
                                onClick={handleCancelOrder}
                            >
                                Hủy đơn hàng
                            </button>
                        )}
                        {order.status !== 'PENDING' && <div></div>}
                        
                        <button 
                            className="btn btn-outline-primary"
                            onClick={() => navigate('/order-history')}
                        >
                            Xem tất cả đơn hàng
                        </button>
                    </div>
                </div>
                
                {/* Order Details Card */}
                <div className="row gx-5 gy-5">
                    <div className="col-lg-8">
                        {/* Order Items */}
                        <div className={style.card}>
                            <h6 className="mb-30">Sản phẩm ({order.items.length})</h6>
                            
                            {order.items.map((item, index) => (
                                <div key={item.id} className={`d-flex flex-wrap ${index < order.items.length - 1 ? 'border-bottom pb-4 mb-4' : ''}`}>
                                    <div className="me-4 mb-3">
                                        <div className={style.imgContainer} style={{ width: '100px', height: '100px' }}>
                                            <img 
                                                src={item.image} 
                                                alt={item.productName} 
                                                className="img-fluid" 
                                                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                                onError={(e) => {
                                                    e.target.src = "/assets/images/products/placeholder.jpg";
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h6 className="mb-3">{item.productName}</h6>
                                        <p className="text-muted mb-3">Số lượng: {item.quantity}</p>
                                        <p className="fw-bold mb-0">{formatPrice(item.price)} × {item.quantity}</p>
                                    </div>
                                    <div className="text-end align-self-center">
                                        <h6 className="mb-0">{formatPrice(item.price * item.quantity)}</h6>
                                    </div>
                                </div>
                            ))}
                            
                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex justify-content-between mb-3">
                                    <span>Tạm tính:</span>
                                    <span>{formatPrice(order.totalPrice)}</span>
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                    <span>Phí vận chuyển:</span>
                                    <span>0 ₫</span>
                                </div>
                                <div className="d-flex justify-content-between fw-bold pt-3 border-top mt-3">
                                    <span>Tổng cộng:</span>
                                    <span>{formatPrice(order.totalPrice)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4">
                        {/* Customer Info */}
                        <div className={style.card}>
                            <h6 className="mb-30">Thông tin đặt hàng</h6>
                            
                            <div className="mb-30">
                                <p className="mb-3"><strong>Người đặt hàng:</strong> {order.customer.name}</p>
                                <p className="mb-3"><strong>Số điện thoại:</strong> {order.customer.phone}</p>
                                <p className="mb-0"><strong>Email:</strong> {order.customer.email}</p>
                            </div>
                            
                            <div className="mb-30">
                                <h6 className="mb-3">Địa chỉ nhận hàng</h6>
                                <p className="mb-0">{order.shippingAddress}</p>
                            </div>
                            
                            <div>
                                <h6 className="mb-3">Phương thức thanh toán</h6>
                                <p className="mb-0">{order.paymentMethod}</p>
                            </div>
                        </div>
                        
                        {/* Order Status History */}
                        {/* Commented out as requested
                        <div className={style.card}>
                            <h6 className="mb-24">Lịch sử đơn hàng</h6>
                            
                            <ul className="timeline ps-4">
                                {order.statusHistory.map((history, index) => (
                                    <li key={index} className="mb-3 position-relative">
                                        <div className="timeline-badge bg-primary position-absolute" style={{ left: '-35px', top: '0', width: '12px', height: '12px', borderRadius: '50%' }}></div>
                                        <p className="mb-1"><strong>{getStatusText(history.status)}</strong></p>
                                        <p className="mb-1 text-muted small">{formatDate(history.date)}</p>
                                        <p className="mb-0">{history.note}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderDetailView; 