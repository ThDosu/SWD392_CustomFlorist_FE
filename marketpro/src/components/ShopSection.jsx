import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactSlider from 'react-slider';

const ShopSection = () => {
    const [grid, setGrid] = useState(false);
    const [active, setActive] = useState(false);

    const sidebarController = () => {
        setActive(!active);
    };

    const style = {
        section: "shop py-80",
        container: "container container-lg",
        row: "row",
        sidebar: `shop-sidebar ${active ? "active" : ""}`,
        overlay: `side-overlay ${active ? "show" : ""}`,
        closeButton: "shop-sidebar__close d-lg-none d-flex w-32 h-32 flex-center border border-gray-100 rounded-circle hover-bg-main-600 position-absolute inset-inline-end-0 me-10 mt-8 hover-text-white hover-border-main-600",
        gridButton: "w-44 h-44 flex-center border rounded-6 text-2xl border-gray-100",
        gridActive: "border-main-600 text-white bg-main-600",
        sortSelect: "form-control common-input px-14 py-14 text-inherit rounded-6 w-auto",
        filterButton: "btn btn-main h-40 flex-align"
    };

    // Placeholder for categories (to be replaced with API data later)
    const categories = [
        { name: "Mobile & Accessories", count: 12 },
        { name: "Laptop", count: 12 },
        { name: "Electronics", count: 12 }
    ];

    // Placeholder for products (to be replaced with API data later)
    const products = [
        { id: 1, name: "Taylor Farms Broccoli Florets Vegetables", price: 14.99, oldPrice: 28.99, rating: 4.8, reviews: "17k", sold: 18, total: 35, image: "assets/images/thumbs/product-two-img1.png" },
        { id: 2, name: "Taylor Farms Broccoli Florets Vegetables", price: 14.99, oldPrice: 28.99, rating: 4.8, reviews: "17k", sold: 18, total: 35, image: "assets/images/thumbs/product-two-img2.png" },
        { id: 3, name: "Taylor Farms Broccoli Florets Vegetables", price: 14.99, oldPrice: 28.99, rating: 4.8, reviews: "17k", sold: 18, total: 35, image: "assets/images/thumbs/product-two-img3.png" }
    ];

    return React.createElement(
        'section',
        { className: style.section },
        React.createElement(
            'div',
            { className: style.overlay }
        ),
        React.createElement(
            'div',
            { className: style.container },
            React.createElement(
                'div',
                { className: style.row },
                React.createElement(
                    'div',
                    { className: 'col-lg-3' },
                    React.createElement(
                        'div',
                        { className: style.sidebar },
                        React.createElement(
                            'button',
                            {
                                onClick: sidebarController,
                                type: 'button',
                                className: style.closeButton
                            },
                            React.createElement('i', { className: 'ph ph-x' })
                        ),
                        React.createElement(
                            'div',
                            { className: 'shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32' },
                            React.createElement(
                                'h6',
                                { className: 'text-xl border-bottom border-gray-100 pb-24 mb-24' },
                                'Category'
                            ),
                            React.createElement(
                                'ul',
                                { className: 'max-h-540 overflow-y-auto scroll-sm' },
                                categories.map((category, index) =>
                                    React.createElement(
                                        'li',
                                        { key: index, className: 'mb-24' },
                                        React.createElement(
                                            Link,
                                            { to: '/product-details-two', className: 'text-gray-900 hover-text-main-600' },
                                            `${category.name} (${category.count})`
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32' },
                            React.createElement(
                                'h6',
                                { className: 'text-xl border-bottom border-gray-100 pb-24 mb-24' },
                                'Filter by Price'
                            ),
                            React.createElement(
                                'div',
                                { className: 'custom--range' },
                                React.createElement(
                                    ReactSlider,
                                    {
                                        className: 'horizontal-slider',
                                        thumbClassName: 'example-thumb',
                                        trackClassName: 'example-track',
                                        defaultValue: [0, 100],
                                        ariaLabel: ['Lower thumb', 'Upper thumb'],
                                        ariaValuetext: state => `Thumb value ${state.valueNow}`,
                                        renderThumb: (props, state) => {
                                            const { key, ...restProps } = props;
                                            return React.createElement('div', { ...restProps, key: state.index }, state.valueNow);
                                        },
                                        pearling: true,
                                        minDistance: 10
                                    }
                                ),
                                React.createElement('br'),
                                React.createElement('br'),
                                React.createElement(
                                    'div',
                                    { className: 'flex-between flex-wrap-reverse gap-8 mt-24' },
                                    React.createElement(
                                        'button',
                                        { type: 'button', className: style.filterButton },
                                        'Filter'
                                    )
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'col-lg-9' },
                    React.createElement(
                        'div',
                        { className: 'flex-between gap-16 flex-wrap mb-40' },
                        React.createElement(
                            'span',
                            { className: 'text-gray-900' },
                            'Showing 1-20 of 85 results'
                        ),
                        React.createElement(
                            'div',
                            { className: 'position-relative flex-align gap-16 flex-wrap' },
                            React.createElement(
                                'div',
                                { className: 'list-grid-btns flex-align gap-16' },
                                React.createElement(
                                    'button',
                                    {
                                        onClick: () => setGrid(true),
                                        type: 'button',
                                        className: `${style.gridButton} ${grid ? style.gridActive : ''}`
                                    },
                                    React.createElement('i', { className: 'ph-bold ph-list-dashes' })
                                ),
                                React.createElement(
                                    'button',
                                    {
                                        onClick: () => setGrid(false),
                                        type: 'button',
                                        className: `${style.gridButton} ${!grid ? style.gridActive : ''}`
                                    },
                                    React.createElement('i', { className: 'ph ph-squares-four' })
                                )
                            ),
                            React.createElement(
                                'select',
                                { defaultValue: 1, className: style.sortSelect },
                                React.createElement('option', { value: 1 }, 'Popular'),
                                React.createElement('option', { value: 2 }, 'Latest'),
                                React.createElement('option', { value: 3 }, 'Trending'),
                                React.createElement('option', { value: 4 }, 'Matches')
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: `list-grid-wrapper ${grid ? 'list-view' : ''}` },
                        products.map(product =>
                            React.createElement(
                                'div',
                                { key: product.id, className: 'product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2' },
                                React.createElement(
                                    Link,
                                    { to: '/product-details-two', className: 'product-card__thumb flex-center rounded-8 bg-gray-50 position-relative' },
                                    React.createElement('img', { src: product.image, alt: '', className: 'w-auto max-w-unset' })
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'product-card__content mt-16' },
                                    React.createElement(
                                        'h6',
                                        { className: 'title text-lg fw-semibold mt-12 mb-8' },
                                        React.createElement(
                                            Link,
                                            { to: '/product-details-two', className: 'link text-line-2' },
                                            product.name
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'flex-align mb-20 mt-16 gap-6' },
                                        React.createElement('span', { className: 'text-xs fw-medium text-gray-500' }, product.rating),
                                        React.createElement('span', { className: 'text-15 fw-medium text-warning-600 d-flex' }, React.createElement('i', { className: 'ph-fill ph-star' })),
                                        React.createElement('span', { className: 'text-xs fw-medium text-gray-500' }, `(${product.reviews})`)
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'product-card__price my-20' },
                                        React.createElement('span', { className: 'text-gray-400 text-md fw-semibold text-decoration-line-through' }, `$${product.oldPrice}`),
                                        React.createElement(
                                            'span',
                                            { className: 'text-heading text-md fw-semibold' },
                                            `$${product.price} `,
                                            React.createElement('span', { className: 'text-gray-500 fw-normal' }, '/Qty')
                                        )
                                    ),
                                    React.createElement(
                                        Link,
                                        { to: '/cart', className: 'product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium' },
                                        'Add To Cart ',
                                        React.createElement('i', { className: 'ph ph-shopping-cart' })
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    );
};

export default ShopSection;