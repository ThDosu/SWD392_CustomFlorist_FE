import React, { useState } from "react";
import { Link } from "react-router-dom";
import QuantityControl from "../helper/QuantityControl";

const CartSection = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Taylor Farms Broccoli Florets Vegetables",
            price: 1325.0,
            quantity: 1,
            image: "https://th.bing.com/th/id/OIP.GOf_sxeKbeeKM5SSLHtzGgHaE7?w=278&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        }, {
            id: 2,
            name: "Taylor Farms Broccoli Florets Vegetables",
            price: 1325.0,
            quantity: 2,
            image: "https://th.bing.com/th/id/OIP.GOf_sxeKbeeKM5SSLHtzGgHaE7?w=278&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        },
    ]);

    const calculateSubtotal = (items) => {
        return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    const [subtotal, setSubtotal] = useState(calculateSubtotal(cartItems));
    const estimatedTax = 10.0;
    const [total, setTotal] = useState(subtotal + estimatedTax);

    // Update item quantity in the cart
    const updateQuantity = (id, newQuantity) => {
        setCartItems((prevItems) => {
            const updatedItems = prevItems.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(newQuantity, 1) } : item
            );
            const newSubtotal = calculateSubtotal(updatedItems);
            setSubtotal(newSubtotal);
            setTotal(newSubtotal + estimatedTax);
            return updatedItems;
        });
    };

    return (
        <section className="cart py-80">
            <div className="container container-lg">
                <div className="row gy-4">
                    <div className="col-xl-9 col-lg-8">
                        <div className="cart-table border border-gray-100 rounded-8 px-40 py-48">
                            <div className="overflow-x-auto scroll-sm scroll-sm-horizontal">
                                <table className="table style-three">
                                    <thead>
                                        <tr>
                                            <th className="h6 text-lg fw-bold">Product</th>
                                            <th className="h6 text-lg fw-bold">Price</th>
                                            <th className="h6 text-lg fw-bold">Quantity</th>
                                            <th className="h6 text-lg fw-bold">Subtotal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map((item) => (
                                            <tr key={item.id}>
                                                <td>
                                                    <div className="table-product d-flex align-items-center gap-24">
                                                        <Link to="/product-details" className="border rounded-8">
                                                            <img
                                                                style={{ maxWidth: "100px", height: "100px" }}
                                                                src={item.image}
                                                                alt={item.name}
                                                            />
                                                        </Link>
                                                        <div className="table-product__content text-start">
                                                            <h6 className="title text-lg fw-semibold mb-8">
                                                                <Link to="/product-details" className="link text-line-2">
                                                                    {item.name}
                                                                </Link>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-lg fw-semibold">${item.price.toFixed(2)}</span>
                                                </td>
                                                <td>
                                                    <QuantityControl
                                                        value={item.quantity}
                                                        onQuantityChange={(newQuantity) => updateQuantity(item.id, newQuantity)}
                                                    />
                                                </td>
                                                <td>
                                                    <span className="text-lg fw-semibold">
                                                        ${(item.price * item.quantity).toFixed(2)}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4">
                        <div className="cart-sidebar border border-gray-100 rounded-8 px-24 py-40">
                            <h6 className="text-xl mb-32">Cart Totals</h6>
                            <div className="bg-color-three rounded-8 p-24">
                                <div className="mb-32 flex-between gap-8">
                                    <span className="text-gray-900 font-heading-two">Subtotal</span>
                                    <span className="text-gray-900 fw-semibold">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="mb-32 flex-between gap-8">
                                    <span className="text-gray-900 font-heading-two">Estimated Delivery</span>
                                    <span className="text-gray-900 fw-semibold">Free</span>
                                </div>
                                <div className="mb-0 flex-between gap-8">
                                    <span className="text-gray-900 font-heading-two">Estimated Tax</span>
                                    <span className="text-gray-900 fw-semibold">${estimatedTax.toFixed(2)}</span>
                                </div>
                            </div>
                            <div className="bg-color-three rounded-8 p-24 mt-24">
                                <div className="flex-between gap-8">
                                    <span className="text-gray-900 text-xl fw-semibold">Total</span>
                                    <span className="text-gray-900 text-xl fw-semibold">${total.toFixed(2)}</span>
                                </div>
                            </div>
                            <Link to="/checkout" className="btn btn-main mt-40 py-18 w-100 rounded-8">
                                Proceed to checkout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CartSection;