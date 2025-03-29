import React, { useState, useEffect } from "react";
import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import FooterTwo from "../components/FooterTwo";
import BottomFooter from "../components/BottomFooter";
import ShippingOne from "../components/ShippingOne";
import ScrollToTop from "react-scroll-to-top";
import ColorInit from "../helper/ColorInit";
import { Link, useNavigate } from "react-router-dom";

const OrderHistoryPage = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
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

  // Get status text in Vietnamese
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

  // Get badge class for status
  const getStatusBadgeClass = (status) => {
    switch(status) {
      case 'PENDING': return 'badge bg-warning text-dark';
      case 'PROCESSING': return 'badge bg-info text-white';
      case 'SHIPPED': return 'badge bg-primary text-white';
      case 'DELIVERED': return 'badge bg-success text-white';
      case 'CANCELLED': return 'badge bg-danger text-white';
      default: return 'badge bg-secondary';
    }
  };

  // Fetch orders
  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        // In a real app, this would be an API call
        // const response = await axios.get('/api/orders');
        
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
                name: 'Nguyễn Văn A',
                phone: '0912345678',
                email: 'nguyenvana@example.com'
              },
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
                name: 'Nguyễn Văn A',
                phone: '0912345678',
                email: 'nguyenvana@example.com'
              },
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
                name: 'Nguyễn Văn A',
                phone: '0912345678',
                email: 'nguyenvana@example.com'
              },
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
                name: 'Nguyễn Văn A',
                phone: '0912345678',
                email: 'nguyenvana@example.com'
              },
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
          
          setOrders(mockOrders);
          setLoading(false);
        }, 600);
      } catch (err) {
        console.error('Error fetching orders:', err);
        setError('Không thể tải lịch sử đơn hàng. Vui lòng thử lại sau.');
        setLoading(false);
      }
    };
    
    fetchOrders();
  }, []);

  // Navigate to order detail page
  const handleViewOrderDetail = (orderId) => {
    navigate(`/order/${orderId}`);
  };

  // Load Bootstrap JS if needed
  useEffect(() => {
    // Check if Bootstrap script is already loaded
    if (!document.querySelector('script[src*="bootstrap.bundle.min.js"]') && typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js';
      script.integrity = 'sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p';
      script.crossOrigin = 'anonymous';
      document.body.appendChild(script);
      
      return () => {
        // Cleanup if component unmounts
        if (script && script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, []);

  return (
    <>
      {/* ColorInit */}
      <ColorInit color={false} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#299E60" />

      {/* Preloader */}
      <Preloader />

      {/* HeaderOne */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Lịch sử đơn hàng"} />

      {/* Order History Section */}
      <section className="account py-80">
        <div className="container container-lg">
          <div className="d-flex align-items-center justify-content-between mb-40">
            <h5 className="mb-0">Danh sách đơn hàng của bạn</h5>
            <button 
              className="btn btn-outline-main py-14 px-20"
              onClick={() => navigate('/profile')}
            >
              Quay lại trang cá nhân
            </button>
          </div>
          
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-main" role="status">
                <span className="visually-hidden">Đang tải...</span>
              </div>
            </div>
          ) : error ? (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          ) : orders.length === 0 ? (
            <div className="border border-gray-100 hover-border-main-600 transition-1 rounded-16 px-24 py-40 mb-32">
              <div className="text-center py-5">
                <img 
                  src="/assets/images/icons/empty-order.svg" 
                  alt="Không có đơn hàng" 
                  style={{ width: '120px', marginBottom: '20px' }}
                  onError={(e) => {
                    e.target.src = "/assets/images/icons/empty-box.png";
                  }}
                />
                <h5 className="mb-3">Bạn chưa có đơn hàng nào</h5>
                <p className="mb-4">Hãy đặt hàng ngay để trải nghiệm dịch vụ của chúng tôi!</p>
                <Link to="/shop" className="btn btn-main py-14 px-20">
                  Mua sắm ngay
                </Link>
              </div>
            </div>
          ) : (
            <div className="border border-gray-100 hover-border-main-600 transition-1 rounded-16 px-24 py-40 mb-32">
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
                    {orders.map(order => (
                      <tr key={order.id}>
                        <td>#{order.id}</td>
                        <td>{formatDate(order.orderDate)}</td>
                        <td>
                          {order.items.length > 1 
                            ? `${order.items[0].productName} và ${order.items.length - 1} sản phẩm khác` 
                            : order.items[0].productName}
                        </td>
                        <td>{formatPrice(order.totalPrice)}</td>
                        <td>
                          <span className={getStatusBadgeClass(order.status)}>
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
            </div>
          )}
        </div>
      </section>

      {/* ShippingOne */}
      <ShippingOne />

      {/* FooterTwo */}
      <FooterTwo />

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default OrderHistoryPage; 