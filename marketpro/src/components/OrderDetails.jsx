import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const style = {
    container: "account py-80",
    formContainer: "container container-lg",
    card: "border border-gray-100 hover-border-main-600 transition-1 rounded-16 px-24 py-40 mb-32",
    filterSection: "mb-32",
    tableContainer: "table-responsive",
    table: "table table-hover",
    button: "btn btn-main py-14 px-20",
    secondaryButton: "btn btn-outline-main py-14 px-20",
    statusBadge: {
        PENDING: "badge bg-warning text-dark",
        PROCESSING: "badge bg-info text-white",
        SHIPPED: "badge bg-primary text-white",
        DELIVERED: "badge bg-success text-white",
        CANCELLED: "badge bg-danger text-white"
    }
};

const OrderDetails = () => {
    const [searchParams] = useSearchParams();
    const specificOrderId = searchParams.get('id');
    const navigate = useNavigate();
    
    // State for order data
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    
    // State for filters
    const [filters, setFilters] = useState({
        minOrderDate: '',
        maxOrderDate: '',
        minPrice: '',
        maxPrice: '',
        status: '',
        userName: '',
        phone: ''
    });
    
    // ... existing functions ...

    // Handle filter changes
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle filter submission
    const handleApplyFilters = (e) => {
        e.preventDefault();
        // In a real app, this would trigger a new API call with filter params
        console.log('Applying filters:', filters);
        // Fetch data with new filters
        fetchOrders();
    };

    // Navigate to detailed order page
    const handleViewOrderDetail = (orderId) => {
        navigate(`/order/${orderId}`);
    };

    // Fetch orders data
    const fetchOrders = async () => {
        setLoading(true);
        setError(null);
        
        try {
            // In a real app, this would be an API call with filters applied
            // const params = {
            //    ...filters,
            //    page: currentPage,
            //    size: 10
            // };
            // const response = await axios.get('/api/orders', { params });
            
            // Mock data for development
            setTimeout(() => {
                const mockOrders = [
                    {
                        id: "ORD001",
                        orderDate: '2024-06-20T14:30:00',
                        status: 'PENDING',
                        totalPrice: 450000,
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
                                productName: 'Hoa cúc trắng', 
                                quantity: 2, 
                                price: 50000,
                                image: '/assets/images/products/product-3.jpg'
                            }
                        ]
                    },
                    {
                        id: "ORD002",
                        orderDate: '2024-06-19T10:15:00',
                        status: 'PROCESSING',
                        totalPrice: 550000,
                        customer: {
                            name: 'Trần Thị B',
                            phone: '0923456789',
                            email: 'tranthib@example.com'
                        },
                        shippingAddress: '456 Đường XYZ, Quận 2, TP.HCM',
                        paymentMethod: 'Thanh toán qua thẻ',
                        items: [
                            { 
                                id: 3,
                                productName: 'Hoa lan hồ điệp', 
                                quantity: 1, 
                                price: 550000,
                                image: '/assets/images/products/product-2.jpg'
                            }
                        ]
                    },
                    {
                        id: "ORD003",
                        orderDate: '2024-06-18T09:20:00',
                        status: 'SHIPPED',
                        totalPrice: 850000,
                        customer: {
                            name: 'Lê Văn C',
                            phone: '0934567890',
                            email: 'levanc@example.com'
                        },
                        shippingAddress: '789 Đường LMN, Quận 3, TP.HCM',
                        paymentMethod: 'Thanh toán khi nhận hàng',
                        items: [
                            { 
                                id: 4,
                                productName: 'Hoa hồng đỏ', 
                                quantity: 1, 
                                price: 350000,
                                image: '/assets/images/products/product-1.jpg'
                            },
                            { 
                                id: 5,
                                productName: 'Hoa lan hồ điệp', 
                                quantity: 2, 
                                price: 250000,
                                image: '/assets/images/products/product-2.jpg'
                            }
                        ]
                    },
                    {
                        id: "ORD004",
                        orderDate: '2024-06-17T16:45:00',
                        status: 'DELIVERED',
                        totalPrice: 350000,
                        customer: {
                            name: 'Phạm Thị D',
                            phone: '0945678901',
                            email: 'phamthid@example.com'
                        },
                        shippingAddress: '101 Đường PQR, Quận 4, TP.HCM',
                        paymentMethod: 'Thanh toán qua thẻ',
                        items: [
                            { 
                                id: 6,
                                productName: 'Hoa hồng đỏ', 
                                quantity: 1, 
                                price: 350000,
                                image: '/assets/images/products/product-1.jpg'
                            }
                        ]
                    },
                    {
                        id: "ORD005",
                        orderDate: '2024-06-16T13:10:00',
                        status: 'CANCELLED',
                        totalPrice: 550000,
                        customer: {
                            name: 'Hoàng Văn E',
                            phone: '0956789012',
                            email: 'hoangvane@example.com'
                        },
                        shippingAddress: '202 Đường UVW, Quận 5, TP.HCM',
                        paymentMethod: 'Thanh toán khi nhận hàng',
                        items: [
                            { 
                                id: 7,
                                productName: 'Hoa lan hồ điệp', 
                                quantity: 1, 
                                price: 550000,
                                image: '/assets/images/products/product-2.jpg'
                            }
                        ]
                    }
                ];
                
                // Filter orders if a specific ID is provided
                const filteredOrders = specificOrderId 
                    ? mockOrders.filter(order => order.id === specificOrderId)
                    : mockOrders;
                
                setOrders(filteredOrders);
                setTotalPages(5); // Mock for pagination
                setLoading(false);
            }, 500);
        } catch (err) {
            console.error('Error fetching orders:', err);
            setError('Không thể tải danh sách đơn hàng. Vui lòng thử lại sau.');
            setLoading(false);
        }
    };

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

    // Load data on component mount and when filters change
    useEffect(() => {
        fetchOrders();
    }, [currentPage, specificOrderId]);

    return (
        <section className={style.container}>
            <div className={style.formContainer}>
                <div className="row">
                    <div className="col-12">
                        <div className={style.card}>
                            <h6 className="text-xl mb-32">Chi tiết đơn hàng</h6>
                            
                            {/* Filter Section */}
                            <div className={style.filterSection}>
                                <form onSubmit={handleApplyFilters}>
                                    <div className="row gy-3">
                                        <div className="col-md-6 col-lg-3">
                                            <label className="form-label">Từ ngày</label>
                                            <input 
                                                type="date" 
                                                className="form-control" 
                                                name="minOrderDate"
                                                value={filters.minOrderDate}
                                                onChange={handleFilterChange}
                                            />
                                        </div>
                                        <div className="col-md-6 col-lg-3">
                                            <label className="form-label">Đến ngày</label>
                                            <input 
                                                type="date" 
                                                className="form-control" 
                                                name="maxOrderDate"
                                                value={filters.maxOrderDate}
                                                onChange={handleFilterChange}
                                            />
                                        </div>
                                        <div className="col-md-6 col-lg-3">
                                            <label className="form-label">Giá từ</label>
                                            <input 
                                                type="number" 
                                                className="form-control" 
                                                name="minPrice"
                                                value={filters.minPrice}
                                                onChange={handleFilterChange}
                                                placeholder="VNĐ"
                                            />
                                        </div>
                                        <div className="col-md-6 col-lg-3">
                                            <label className="form-label">Đến giá</label>
                                            <input 
                                                type="number" 
                                                className="form-control" 
                                                name="maxPrice"
                                                value={filters.maxPrice}
                                                onChange={handleFilterChange}
                                                placeholder="VNĐ"
                                            />
                                        </div>
                                        <div className="col-md-6 col-lg-3">
                                            <label className="form-label">Trạng thái</label>
                                            <select 
                                                className="form-select" 
                                                name="status"
                                                value={filters.status}
                                                onChange={handleFilterChange}
                                            >
                                                <option value="">Tất cả</option>
                                                <option value="PENDING">Chờ xử lý</option>
                                                <option value="PROCESSING">Đang xử lý</option>
                                                <option value="SHIPPED">Đang giao</option>
                                                <option value="DELIVERED">Đã giao</option>
                                                <option value="CANCELLED">Đã hủy</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 col-lg-3">
                                            <label className="form-label">Tên khách hàng</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                name="userName"
                                                value={filters.userName}
                                                onChange={handleFilterChange}
                                                placeholder="Tên khách hàng"
                                            />
                                        </div>
                                        <div className="col-md-6 col-lg-3">
                                            <label className="form-label">Số điện thoại</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                name="phone"
                                                value={filters.phone}
                                                onChange={handleFilterChange}
                                                placeholder="Số điện thoại"
                                            />
                                        </div>
                                        <div className="col-md-6 col-lg-3 d-flex align-items-end">
                                            <button type="submit" className="btn btn-main">
                                                Lọc đơn hàng
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            
                            {/* Orders Table */}
                            {loading ? (
                                <div className="text-center py-4">
                                    <div className="spinner-border text-main" role="status">
                                        <span className="visually-hidden">Đang tải...</span>
                                    </div>
                                </div>
                            ) : error ? (
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            ) : (
                                <>
                                    <div className={style.tableContainer}>
                                        <table className={style.table}>
                                            <thead>
                                                <tr>
                                                    <th>Mã đơn hàng</th>
                                                    <th>Ngày đặt</th>
                                                    <th>Khách hàng</th>
                                                    <th>Tổng tiền</th>
                                                    <th>Trạng thái</th>
                                                    <th>Thao tác</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {orders.length > 0 ? (
                                                    orders.map(order => (
                                                        <tr key={order.id}>
                                                            <td>#{order.id}</td>
                                                            <td>{formatDate(order.orderDate)}</td>
                                                            <td>
                                                                <div>{order.customer.name}</div>
                                                                <small className="text-muted">{order.customer.phone}</small>
                                                            </td>
                                                            <td>{formatPrice(order.totalPrice)}</td>
                                                            <td>
                                                                <span className={style.statusBadge[order.status]}>
                                                                    {order.status === 'PENDING' && 'Chờ xử lý'}
                                                                    {order.status === 'PROCESSING' && 'Đang xử lý'}
                                                                    {order.status === 'SHIPPED' && 'Đang giao'}
                                                                    {order.status === 'DELIVERED' && 'Đã giao'}
                                                                    {order.status === 'CANCELLED' && 'Đã hủy'}
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex">
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-sm btn-outline-main me-2"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target={`#orderModal-${order.id}`}
                                                                    >
                                                                        Xem nhanh
                                                                    </button>
                                                                    
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-sm btn-main"
                                                                        onClick={() => handleViewOrderDetail(order.id)}
                                                                    >
                                                                        Chi tiết
                                                                    </button>
                                                                </div>
                                                                
                                                                {/* Modal for Order Details */}
                                                                <div className="modal fade" id={`orderModal-${order.id}`} tabIndex="-1" aria-hidden="true">
                                                                    <div className="modal-dialog modal-lg">
                                                                        <div className="modal-content">
                                                                            <div className="modal-header">
                                                                                <h5 className="modal-title">Chi tiết đơn hàng #{order.id}</h5>
                                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                            </div>
                                                                            <div className="modal-body">
                                                                                <div className="row mb-4">
                                                                                    <div className="col-md-6">
                                                                                        <h6 className="mb-2">Thông tin khách hàng</h6>
                                                                                        <p className="mb-1"><strong>Tên:</strong> {order.customer.name}</p>
                                                                                        <p className="mb-1"><strong>SĐT:</strong> {order.customer.phone}</p>
                                                                                        <p className="mb-1"><strong>Địa chỉ:</strong> {order.shippingAddress}</p>
                                                                                    </div>
                                                                                    <div className="col-md-6">
                                                                                        <h6 className="mb-2">Thông tin đơn hàng</h6>
                                                                                        <p className="mb-1"><strong>Ngày đặt:</strong> {formatDate(order.orderDate)}</p>
                                                                                        <p className="mb-1"><strong>Trạng thái:</strong> 
                                                                                            <span className={`${style.statusBadge[order.status]} ms-2`}>
                                                                                                {order.status === 'PENDING' && 'Chờ xử lý'}
                                                                                                {order.status === 'PROCESSING' && 'Đang xử lý'}
                                                                                                {order.status === 'SHIPPED' && 'Đang giao'}
                                                                                                {order.status === 'DELIVERED' && 'Đã giao'}
                                                                                                {order.status === 'CANCELLED' && 'Đã hủy'}
                                                                                            </span>
                                                                                        </p>
                                                                                        <p className="mb-1"><strong>Tổng tiền:</strong> {formatPrice(order.totalPrice)}</p>
                                                                                    </div>
                                                                                </div>
                                                                                
                                                                                <h6 className="mb-3">Sản phẩm</h6>
                                                                                <div className="table-responsive">
                                                                                    <table className="table">
                                                                                        <thead>
                                                                                            <tr>
                                                                                                <th>Sản phẩm</th>
                                                                                                <th>Số lượng</th>
                                                                                                <th>Đơn giá</th>
                                                                                                <th>Thành tiền</th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody>
                                                                                            {order.items.map((item, index) => (
                                                                                                <tr key={index}>
                                                                                                    <td>{item.productName}</td>
                                                                                                    <td>{item.quantity}</td>
                                                                                                    <td>{formatPrice(item.price)}</td>
                                                                                                    <td>{formatPrice(item.price * item.quantity)}</td>
                                                                                                </tr>
                                                                                            ))}
                                                                                        </tbody>
                                                                                        <tfoot>
                                                                                            <tr>
                                                                                                <td colSpan="3" className="text-end"><strong>Tổng cộng:</strong></td>
                                                                                                <td><strong>{formatPrice(order.totalPrice)}</strong></td>
                                                                                            </tr>
                                                                                        </tfoot>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
                                                                            <div className="modal-footer">
                                                                                <button 
                                                                                    type="button" 
                                                                                    className="btn btn-main"
                                                                                    onClick={() => {
                                                                                        const modal = document.getElementById(`orderModal-${order.id}`);
                                                                                        if (modal && typeof window !== 'undefined' && window.bootstrap) {
                                                                                            const bsModal = window.bootstrap.Modal.getInstance(modal);
                                                                                            if (bsModal) {
                                                                                                bsModal.hide();
                                                                                            }
                                                                                        }
                                                                                        handleViewOrderDetail(order.id);
                                                                                    }}
                                                                                >
                                                                                    Xem chi tiết đầy đủ
                                                                                </button>
                                                                                {order.status === 'PENDING' && (
                                                                                    <button type="button" className="btn btn-danger">
                                                                                        Hủy đơn hàng
                                                                                    </button>
                                                                                )}
                                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                                                                    Đóng
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="6" className="text-center py-4">
                                                            Không có đơn hàng nào được tìm thấy
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                    
                                    {/* Rest of the component remains the same */}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderDetails; 