import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const HeaderOne = () => {
    const [scroll, setScroll] = useState(false);

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
                                        to="/about"
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
                                <li style={navMenuItemStyle}>
                                    <Link
                                        to="/account"
                                        style={navMenuLinkStyle}
                                        onMouseEnter={(e) =>
                                            (e.target.style.color = navMenuLinkHoverStyle.color)
                                        }
                                        onMouseLeave={(e) =>
                                            (e.target.style.color = navMenuLinkStyle.color)
                                        }
                                    >
                                        <FaUser style={iconStyle} />
                                        Tài khoản
                                    </Link>
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