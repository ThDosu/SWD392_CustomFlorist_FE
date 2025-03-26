import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import BlogPage from './pages/BlogPage';
import IntroductionPage from './pages/IntroductionPage';
import ContactPage from './pages/ContactPage';
import DeliveryPolicyPage from './pages/DeliveryPolicyPage';
import QuestionsPage from './pages/QuestionsPage';
import PaymentMethodPage from './pages/PaymentMethodPage';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/introduction" element={<IntroductionPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/delivery-policy" element={<DeliveryPolicyPage />} />
            <Route path="/questions" element={<QuestionsPage />} />
            <Route path="/payment-method" element={<PaymentMethodPage />} />
        </Routes>
    );
};

export default App; 