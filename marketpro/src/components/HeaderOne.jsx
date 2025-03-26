import React, { useEffect, useState } from 'react'
import query from 'jquery';
import { Link, NavLink } from 'react-router-dom';

const HeaderOne = () => {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset < 150) {
                setScroll(false);
            } else if (window.pageYOffset > 150) {
                setScroll(true);
            }
            return () => (window.onscroll = null);
        };
        const selectElement = query('.js-example-basic-single');
        selectElement.select2();

        return () => {
            if (selectElement.data('select2')) {
                selectElement.select2('destroy');
            }
        };

    }, []);

    // Set the default language
    const [selectedLanguage, setSelectedLanguage] = useState("Eng");
    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
    };

    // Set the default currency
    const [selectedCurrency, setSelectedCurrency] = useState("USD");
    const handleCurrencyChange = (currency) => {
        setSelectedCurrency(currency);
    };


    // Mobile menu support
    const [menuActive, setMenuActive] = useState(false)
    const [activeIndex, setActiveIndex] = useState(null);
    const handleMenuClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const handleMenuToggle = () => {
        setMenuActive(!menuActive);
    };


    // Search control support
    const [activeSearch, setActiveSearch] = useState(false)
    const handleSearchToggle = () => {
        setActiveSearch(!activeSearch);
    };

    // category control support
    const [activeCategory, setActiveCategory] = useState(false)
    const handleCategoryToggle = () => {
        setActiveCategory(!activeCategory);
    };
    const [activeIndexCat, setActiveIndexCat] = useState(null);
    const handleCatClick = (index) => {
        setActiveIndexCat(activeIndexCat === index ? null : index);
    };




    return (
        <>
            <div className="overlay" />
            <div className={`side-overlay ${(menuActive || activeCategory) && "show"}`} />
            {/* ==================== Search Box Start Here ==================== */}
            <form action="#" className={`search-box ${activeSearch && "active"}`}>
                <button onClick={handleSearchToggle}
                    type="button"
                    className="search-box__close position-absolute inset-block-start-0 inset-inline-end-0 m-16 w-48 h-48 border border-gray-100 rounded-circle flex-center text-white hover-text-gray-800 hover-bg-white text-2xl transition-1"
                >
                    <i className="ph ph-x" />
                </button>
                <div className="container">
                    <div className="position-relative">
                        <input
                            type="text"
                            className="form-control py-16 px-24 text-xl rounded-pill pe-64"
                            placeholder="Tìm kiếm sản phẩm "
                        />
                        <button
                            type="submit"
                            className="w-48 h-48 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8"
                        >
                            <i className="ph ph-magnifying-glass" />
                        </button>
                    </div>
                </div>
            </form>
            {/* ==================== Search Box End Here ==================== */}
            {/* ==================== Mobile Menu Start Here ==================== */}
            <div className={`mobile-menu scroll-sm d-lg-none d-block ${menuActive && "active"}`}>
                <button onClick={() => { handleMenuToggle(); setActiveIndex(null) }} type="button" className="close-button">

                    <i className="ph ph-x" />{" "}
                </button>
                <div className="mobile-menu__inner">
                    <Link to="/" className="mobile-menu__logo">
                        <img src="assets/images/logo/logo.png" alt="Logo" />
                    </Link>
                    <div className="mobile-menu__menu">
                        {/* Nav Menu Start */}
                        <ul className="nav-menu flex-align nav-menu--mobile">
                            {/* Home Menu */}
                            <li onClick={() => handleMenuClick(0)}
                                className={`on-hover-item nav-menu__item has-submenu ${activeIndex === 0 ? "d-block" : ""
                                    }`}
                            >
                                <Link
                                    to="#"
                                    className="nav-menu__link"

                                >
                                    Home
                                </Link>
                                <ul
                                    className={`on-hover-dropdown common-dropdown nav-submenu scroll-sm ${activeIndex === 0 ? "open" : ""
                                        }`}
                                >
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link
                                            to="/"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                            onClick={() => setActiveIndex(null)}
                                        >
                                            {" "}
                                            Trang chủ
                                        </Link>
                                    </li>
                                    {/* <li className="common-dropdown__item nav-submenu__item">
                                        <Link
                                            to="/index-two"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                            onClick={() => setActiveIndex(null)}
                                        >
                                            {" "}
                                            Home Two
                                        </Link>
                                    </li> */}
                                </ul>
                            </li>

                            {/* Shop Menu */}
                            <li onClick={() => handleMenuClick(1)}
                                className={`on-hover-item nav-menu__item has-submenu ${activeIndex === 1 ? "d-block" : ""
                                    }`}
                            >
                                <Link
                                    to="#"
                                    className="nav-menu__link"

                                >
                                    Shop
                                </Link>
                                <ul
                                    className={`on-hover-dropdown common-dropdown nav-submenu scroll-sm ${activeIndex === 1 ? "open" : ""
                                        }`}
                                >
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link
                                            to="/shop"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                            onClick={() => setActiveIndex(null)}
                                        >
                                            {" "}
                                            Shop
                                        </Link>
                                    </li>
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link
                                            to="/product-details"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                            onClick={() => setActiveIndex(null)}
                                        >
                                            {" "}
                                           Chi tiết sản phẩm
                                        </Link>
                                    </li>
                                    {/* <li className="common-dropdown__item nav-submenu__item">
                                        <Link
                                            to="/product-details-two"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                            onClick={() => setActiveIndex(null)}
                                        >
                                            {" "}
                                            Shop Details Two
                                        </Link>
                                    </li> */}
                                </ul>
                            </li>

                            {/* Pages Menu */}
                            <li onClick={() => handleMenuClick(2)}
                                className={`on-hover-item nav-menu__item has-submenu ${activeIndex === 2 ? "d-block" : ""
                                    }`}
                            >
                                <span className="badge-notification bg-warning-600 text-white text-sm py-2 px-8 rounded-4">
                                    New
                                </span>
                                <Link
                                    to="#"
                                    className="nav-menu__link"

                                >
                                    Người dùngdùng
                                </Link>
                                <ul
                                    className={`on-hover-dropdown common-dropdown nav-submenu scroll-sm ${activeIndex === 2 ? "open" : ""
                                        }`}
                                >
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link
                                            to="/cart"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                            onClick={() => setActiveIndex(null)}
                                        >
                                            {" "}
                                            Giỏ hàng
                                        </Link>
                                    </li>
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link
                                            to="/checkout"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                            onClick={() => setActiveIndex(null)}
                                        >
                                            {" "}
                                            Thanh Toán{" "}
                                        </Link>
                                    </li>
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link
                                            to="/account"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                            onClick={() => setActiveIndex(null)}
                                        >
                                            {" "}
                                            Tài khoản
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            {/* Blog Menu
                            <li onClick={() => handleMenuClick(3)}
                                className={`on-hover-item nav-menu__item has-submenu ${activeIndex === 3 ? "d-block" : ""
                                    }`}
                            >
                                <Link
                                    to="#"
                                    className="nav-menu__link"

                                >
                                    Blog
                                </Link>
                                <ul
                                    className={`on-hover-dropdown common-dropdown nav-submenu scroll-sm ${activeIndex === 3 ? "open" : ""
                                        }`}
                                >
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link
                                            to="/blog"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                            onClick={() => setActiveIndex(null)}
                                        >
                                            {" "}
                                            Blog
                                        </Link>
                                    </li>
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link
                                            to="/blog-details"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                            onClick={() => setActiveIndex(null)}
                                        >
                                            {" "}
                                            Blog Details
                                        </Link>
                                    </li>
                                </ul>
                            </li> */}

                            {/* Contact Us Menu */}
                            <li className="nav-menu__item">
                                <Link
                                    to="/contact"
                                    className="nav-menu__link"
                                    onClick={() => setActiveIndex(null)}
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                        {/* Nav Menu End */}
                    </div>
                </div>
            </div>
            {/* ==================== Mobile Menu End Here ==================== */}
            {/* ======================= Middle Top Start ========================= */}
            
            {/* ======================= Middle Top End ========================= */}
            {/* ======================= Middle Header Start ========================= */}
            <header className="header-middle  border-bottom border-gray-100">
                <div className="container container-lg">
                    <nav className="header-inner flex-between">
                        {/* Logo Start */}
                        <div className="logo">
                            <Link to="/" className="link">
                                <img src="assets/images/logo/logo.png" alt="Logo" />
                            </Link>
                        </div>
                        {/* Logo End  */}
                        {/* form location Start */}
                        <form action="#" className="flex-align flex-wrap form-location-wrapper">
                            <div className="search-category d-flex h-48 select-border-end-0 radius-end-0 search-form d-sm-flex d-none">
                                <select defaultValue={1}
                                    className="js-example-basic-single border border-gray-200 border-end-0"
                                    name="state"
                                >
                                    <option value={1} >
                                        Tất cả sản phẩm
                                    </option>
                                    <option value={1}>Grocery</option>
                                    <option value={1}>Breakfast &amp; Dairy</option>
                                    <option value={1}>Vegetables</option>
                                    <option value={1}>Milks and Dairies</option>
                                    <option value={1}>Pet Foods &amp; Toy</option>
                                    <option value={1}>Breads &amp; Bakery</option>
                                    <option value={1}>Fresh Seafood</option>
                                    <option value={1}>Fronzen Foods</option>
                                    <option value={1}>Noodles &amp; Rice</option>
                                    <option value={1}>Ice Cream</option>
                                </select>
                                <div className="search-form__wrapper position-relative">
                                    <input
                                        type="text"
                                        className="search-form__input common-input py-13 ps-16 pe-18 rounded-end-pill pe-44"
                                        placeholder="Tìm kiếm sản phẩm"
                                    />
                                    <button
                                        type="submit"
                                        className="w-32 h-32 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8"
                                    >
                                        <i className="ph ph-magnifying-glass" />
                                    </button>
                                </div>
                            </div>
                          
                        </form>
                        {/* form location start */}
                        {/* Header Middle Right start */}
                        <div className="header-right flex-align d-lg-block d-none">
                            <div className="flex-align flex-wrap gap-12">
                                <button
                                    type="button"
                                    className="search-icon flex-align d-lg-none d-flex gap-4 item-hover"
                                >
                                    <span className="text-2xl text-gray-700 d-flex position-relative item-hover__text">
                                        <i className="ph ph-magnifying-glass" />
                                    </span>
                                </button>
                                <Link to="/cart" className="flex-align gap-4 item-hover">
                                    <span className="text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text">
                                        <i className="ph ph-heart" />
                                        <span className="w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4">
                                            2
                                        </span>
                                    </span>
                                    <span className="text-md text-gray-500 item-hover__text d-none d-lg-flex">
                                        Danh Sách Yêu Thích
                                    </span>
                                </Link>
                                <Link to="/cart" className="flex-align gap-4 item-hover">
                                    <span className="text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text">
                                        <i className="ph ph-shopping-cart-simple" />
                                        <span className="w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4">
                                            2
                                        </span>
                                    </span>
                                    <span className="text-md text-gray-500 item-hover__text d-none d-lg-flex">
                                        Giỏ Hàng
                                    </span>
                                </Link>
                            </div>
                           
                        </div>
                        {/* Header Middle Right End  */}
                    </nav>
               
                </div>
            </header>
            {/* ======================= Middle Header End ========================= */}
            {/* ==================== Header Start Here ==================== */}
            <header className={`header bg-white border-bottom border-gray-100 ${scroll && "fixed-header"}`}>
                <div className="container container-lg">
                    <nav className="header-inner d-flex justify-content-between gap-8">
                        <div className="flex-align menu-category-wrapper">
                            {/* Category Dropdown Start */}
                            <div className="category on-hover-item">
                                <button
                                    onClick={handleCategoryToggle}
                                    type="button"
                                    className="category__button flex-align gap-8 fw-medium p-16 border-end border-start border-gray-100 text-heading"
                                >
                                    <span className="icon text-2xl d-xs-flex d-none">
                                        <i className="ph ph-dots-nine" />
                                    </span>
                                    <span className="d-sm-flex d-none">Tất cả sản phẩm</span>
                                    <span className="arrow-icon text-xl d-flex">
                                        <i className="ph ph-caret-down" />
                                    </span>
                                </button>
                                <div className={`responsive-dropdown cat on-hover-dropdown common-dropdown nav-submenu p-0 submenus-submenu-wrapper ${activeCategory && "active"}`}>
                                    <button
                                        onClick={() => { handleCategoryToggle(); setActiveIndexCat(null) }}
                                        type="button"
                                        className="close-responsive-dropdown rounded-circle text-xl position-absolute inset-inline-end-0 inset-block-start-0 mt-4 me-8 d-lg-none d-flex"
                                    >
                                        {" "}
                                        <i className="ph ph-x" />{" "}
                                    </button>
                                    {/* Logo Start */}
                                    <div className="logo px-16 d-lg-none d-block">
                                        <Link to="/" className="link">
                                            <img src="assets/images/logo/logo.png" alt="Logo" />
                                        </Link>
                                    </div>
                                    {/* Logo End */}
                                    <ul className="scroll-sm p-0 py-8 w-300 max-h-400 overflow-y-auto">
\
                                    </ul>
                                </div>
                            </div>
                            {/* Category Dropdown End  */}
                            {/* Menu Start  */}
                            <div className="header-menu d-lg-block d-none">
                                {/* Nav Menu Start */}
                                <ul className="nav-menu flex-align ">
                                    <li className="on-hover-item nav-menu__item has-submenu">
                                        <Link to="#" className="nav-menu__link">
                                            Trang chủ
                                            Trang chủ
                                        </Link>
                                        <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <NavLink
                                                    to="/"
                                                    // className={`common-dropdown__link nav-submenu__link hover-bg-neutral-100 `}
                                                    className={(navData) =>
                                                        navData.isActive ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage" : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                    }
                                                >
                                                   Trang chủ
                                                </NavLink>
                                            </li>
                                       
                                        </ul>
                                    </li>
                                    <li className="on-hover-item nav-menu__item has-submenu">
                                        <Link to="#" className="nav-menu__link">
                                            Cửa hàng
                                        </Link>
                                        <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <NavLink
                                                    to="/shop"
                                                    className={(navData) =>
                                                        navData.isActive ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage" : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                    }
                                                >
                                                    {" "}
                                                    Cửa hàng
                                                </NavLink>
                                            </li>
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <NavLink
                                                    to="/product-details"
                                                    className={(navData) =>
                                                        navData.isActive ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage" : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                    }
                                                >
                                                    {" "}
                                                    Chi tiết sản phẩm
                                                </NavLink>
                                            </li>
                                     
                                        </ul>
                                    </li>
                                    <li className="on-hover-item nav-menu__item has-submenu">
                                        <span className="badge-notification bg-warning-600 text-white text-sm py-2 px-8 rounded-4">
                                            New
                                        </span>
                                        <Link to="#" className="nav-menu__link">
                                            Người dùng
                                        </Link>
                                        <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <NavLink
                                                    to="/cart"
                                                    className={(navData) =>
                                                        navData.isActive ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage" : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                    }
                                                >
                                                    {" "}
                                                    Giỏ hàng
                                                </NavLink>
                                            </li>
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <NavLink
                                                    to="/checkout"
                                                    className={(navData) =>
                                                        navData.isActive ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage" : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                    }
                                                >
                                                    {" "}
                                                    Thanh toán{" "}
                                                </NavLink>
                                            </li>
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <NavLink
                                                    to="/account"
                                                    className={(navData) =>
                                                        navData.isActive ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage" : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                    }
                                                >
                                                    {" "}
                                                    Tài khoản
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="on-hover-item nav-menu__item has-submenu">
                                        <Link to="#" className="nav-menu__link">
                                            Blog
                                        </Link>
                                        <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <NavLink
                                                    to="/blog"
                                                    className={(navData) =>
                                                        navData.isActive ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage" : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                    }
                                                >
                                                    {" "}
                                                    Blog
                                                </NavLink>
                                            </li>
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <NavLink
                                                    to="/blog-details"
                                                    className={(navData) =>
                                                        navData.isActive ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage" : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                    }
                                                >
                                                    {" "}
                                                    Blog Details
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-menu__item">
                                        <NavLink to="/contact" className={(navData) =>
                                            navData.isActive ? "nav-menu__link activePage" : "nav-menu__link"
                                        }>
                                            Liên hệ
                                        </NavLink>
                                    </li>
                                </ul>
                                {/* Nav Menu End */}
                            </div>
                            {/* Menu End  */}
                        </div>
                        {/* Header Right start */}
                        <div className="header-right flex-align">
                            <Link
                                to="/tel:01234567890"
                                className="bg-main-600 text-white p-12 h-100 hover-bg-main-800 flex-align gap-8 text-lg d-lg-flex d-none"
                            >
                                <div className="d-flex text-32">
                                    <i className="ph ph-phone-call" />
                                </div>
                                0373023099
                            </Link>
                            <div className="me-16 d-lg-none d-block">
                                <div className="flex-align flex-wrap gap-12">
                                    <button onClick={handleSearchToggle}
                                        type="button"
                                        className="search-icon flex-align d-lg-none d-flex gap-4 item-hover"
                                    >
                                        <span className="text-2xl text-gray-700 d-flex position-relative item-hover__text">
                                            <i className="ph ph-magnifying-glass" />
                                        </span>
                                    </button>
                                    <Link to="/cart" className="flex-align gap-4 item-hover">
                                        <span className="text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text">
                                            <i className="ph ph-shopping-cart-simple" />
                                            <span className="w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4">
                                                2
                                            </span>
                                        </span>
                                        <span className="text-md text-gray-500 item-hover__text d-none d-lg-flex">
                                            Cart
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <button
                                onClick={handleMenuToggle}
                                type="button"
                                className="toggle-mobileMenu d-lg-none ms-3n text-gray-800 text-4xl d-flex"
                            >
                                {" "}
                                <i className="ph ph-list" />{" "}
                            </button>
                        </div>
                        {/* Header Right End  */}
                    </nav>
                </div>

                
            </header>
            {/* ==================== Header End Here ==================== */}
        </>

    )
}

export default HeaderOne