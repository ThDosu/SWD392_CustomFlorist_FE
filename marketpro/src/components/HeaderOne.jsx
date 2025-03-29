import React, { useEffect, useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaCaretDown } from 'react-icons/fa';

const HeaderOne = () => {
    const [scroll, setScroll] = useState(false);
    const [showAccountDropdown, setShowAccountDropdown] = useState(false);
    const accountDropdownRef = useRef(null);
    
    // Example state for user authentication status
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.pageYOffset > 150);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Inline styles
    const headerStyle = {
        width: '100%',
        backgroundColor: '#fff',
        borderBottom: '1px solid #e5e7eb',
        position: scroll ? 'fixed' : 'relative',
        top: scroll ? 0 : 'auto',
        left: scroll ? 0 : 'auto',
        right: scroll ? 0 : 'auto',
        zIndex: scroll ? 1000 : 'auto',
        boxShadow: scroll ? '0 2px 5px rgba(0, 0, 0, 0.1)' : 'none',
    };

    const containerStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
    };

    const headerInnerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: '15px 0',
    };

    const logoStyle = {
        flexShrink: 0,
    };

    const logoImgStyle = {
        height: '100px',
        width: 'auto',
    };

    const navMenuStyle = {
        display: 'flex',
        alignItems: 'center',
        listStyle: 'none',
        margin: 0,
        padding: 0,
    };

    const navMenuItemStyle = {
        margin: '0 15px',
    };

    const navMenuLinkStyle = {
        textDecoration: 'none',
        color: '#333',
        fontSize: '16px',
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center',
    };

    const navMenuLinkHoverStyle = {
        color: '#007bff',
    };

    const badgeStyle = {
        backgroundColor: '#28a745',
        color: '#fff',
        borderRadius: '50%',
        padding: '2px 6px',
        fontSize: '12px',
        marginLeft: '5px',
    };

    const iconStyle = {
        marginRight: '5px',
    };

    const accountMenuItemStyle = {
        margin: '0 15px',
        position: 'relative',
    };

    const dropdownStyle = {
        position: 'absolute',
        top: '100%',
        right: '-10px', // Offset to align better with the parent
        backgroundColor: '#fff',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        borderRadius: '8px',
        width: '200px',
        zIndex: 1001,
        padding: '8px 0',
        marginTop: '10px',
        display: showAccountDropdown ? 'block' : 'none',
    };

    // Add a little arrow/triangle to the dropdown
    const dropdownArrowStyle = {
        position: 'absolute',
        top: '-8px',
        right: '20px',
        width: '0',
        height: '0',
        borderLeft: '8px solid transparent',
        borderRight: '8px solid transparent',
        borderBottom: '8px solid #fff',
    };

    const dropdownItemStyle = {
        padding: '8px 16px',
        display: 'block',
        textDecoration: 'none',
        color: '#333',
        fontSize: '14px',
        transition: 'background-color 0.3s ease',
    };

    const handleAccountDropdownClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setShowAccountDropdown(!showAccountDropdown);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (accountDropdownRef.current && !accountDropdownRef.current.contains(event.target)) {
                setShowAccountDropdown(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <>
            <header style={headerStyle}>
                <div style={containerStyle}>
                    <nav style={headerInnerStyle}>
                        {/* Logo with navigation to homepage */}
                        <div style={logoStyle}>
                            <Link to="/">
                                <img
                                    src="/assets/images/logo/logo.png" // Reference the logo directly from the public folder
                                    alt="Your Florist Logo"
                                    style={logoImgStyle}
                                />
                            </Link>
                        </div>

                        {/* Navigation Menu with Cart and Account */}
                        <div>
                            <ul style={navMenuStyle}>
                                <li style={navMenuItemStyle}>
                                    <Link
                                        to="/"
                                        style={navMenuLinkStyle}
                                        onMouseEnter={(e) =>
                                            (e.target.style.color = navMenuLinkHoverStyle.color)
                                        }
                                        onMouseLeave={(e) =>
                                            (e.target.style.color = navMenuLinkStyle.color)
                                        }
                                    >
                                        Trang chủ
                                    </Link>
                                </li>
                                <li style={navMenuItemStyle}>
                                    <Link
                                        to="/shop"
                                        style={navMenuLinkStyle}
                                        onMouseEnter={(e) =>
                                            (e.target.style.color = navMenuLinkHoverStyle.color)
                                        }
                                        onMouseLeave={(e) =>
                                            (e.target.style.color = navMenuLinkStyle.color)
                                        }
                                    >
                                        Shop
                                    </Link>
                                </li>
                                <li style={navMenuItemStyle}>
                                    <NavLink
                                        to="/introduction"
                                        style={navMenuLinkStyle}
                                        onMouseEnter={(e) =>
                                            (e.target.style.color = navMenuLinkHoverStyle.color)
                                        }
                                        onMouseLeave={(e) =>
                                            (e.target.style.color = navMenuLinkStyle.color)
                                        }
                                    >
                                        Về chúng mình
                                    </NavLink>
                                </li>
                                <li style={navMenuItemStyle}>
                                    <Link
                                        to="/cart"
                                        style={navMenuLinkStyle}
                                        onMouseEnter={(e) =>
                                            (e.target.style.color = navMenuLinkHoverStyle.color)
                                        }
                                        onMouseLeave={(e) =>
                                            (e.target.style.color = navMenuLinkStyle.color)
                                        }
                                    >
                                        <FaShoppingCart style={iconStyle} />
                                        Giỏ hàng
                                        <span style={badgeStyle}>2</span>
                                    </Link>
                                </li>
                                <li style={accountMenuItemStyle} ref={accountDropdownRef}>
                                    <a
                                        href="#"
                                        style={navMenuLinkStyle}
                                        onClick={handleAccountDropdownClick}
                                        onMouseEnter={(e) =>
                                            (e.target.style.color = navMenuLinkHoverStyle.color)
                                        }
                                        onMouseLeave={(e) =>
                                            (e.target.style.color = navMenuLinkStyle.color)
                                        }
                                    >
                                        <FaUser style={iconStyle} />
                                        Tài khoản
                                        <FaCaretDown style={{ marginLeft: '5px' }} />
                                    </a>
                                    <div style={dropdownStyle}>
                                        <div style={dropdownArrowStyle}></div>
                                        {isLoggedIn ? (
                                            <>
                                                <Link 
                                                    to="/profile" 
                                                    style={dropdownItemStyle}
                                                    onMouseEnter={(e) => 
                                                        (e.target.style.backgroundColor = '#f8f9fa')
                                                    }
                                                    onMouseLeave={(e) => 
                                                        (e.target.style.backgroundColor = 'transparent')
                                                    }
                                                >
                                                    Thông tin tài khoản
                                                </Link>
                                                <Link 
                                                    to="/checkout" 
                                                    style={dropdownItemStyle}
                                                    onMouseEnter={(e) => 
                                                        (e.target.style.backgroundColor = '#f8f9fa')
                                                    }
                                                    onMouseLeave={(e) => 
                                                        (e.target.style.backgroundColor = 'transparent')
                                                    }
                                                >
                                                    Đơn hàng của tôi
                                                </Link>
                                                <hr style={{ margin: '4px 0', borderTop: '1px solid #e5e7eb' }} />
                                                <a 
                                                    href="#" 
                                                    style={dropdownItemStyle}
                                                    onMouseEnter={(e) => 
                                                        (e.target.style.backgroundColor = '#f8f9fa')
                                                    }
                                                    onMouseLeave={(e) => 
                                                        (e.target.style.backgroundColor = 'transparent')
                                                    }
                                                    onClick={() => setIsLoggedIn(false)}
                                                >
                                                    Đăng xuất
                                                </a>
                                            </>
                                        ) : (
                                            <>
                                                <Link 
                                                    to="/account" 
                                                    style={dropdownItemStyle}
                                                    onMouseEnter={(e) => 
                                                        (e.target.style.backgroundColor = '#f8f9fa')
                                                    }
                                                    onMouseLeave={(e) => 
                                                        (e.target.style.backgroundColor = 'transparent')
                                                    }
                                                >
                                                    Đăng nhập
                                                </Link>
                                                <a 
                                                    href="#" 
                                                    style={dropdownItemStyle}
                                                    onMouseEnter={(e) => 
                                                        (e.target.style.backgroundColor = '#f8f9fa')
                                                    }
                                                    onMouseLeave={(e) => 
                                                        (e.target.style.backgroundColor = 'transparent')
                                                    }
                                                    onClick={() => setIsLoggedIn(true)} // For demo purposes
                                                >
                                                    Demo: Giả vờ đã đăng nhập
                                                </a>
                                            </>
                                        )}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default HeaderOne;