import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
const Checkout = () => {
    const [selectedPayment, setSelectedPayment] = useState("payment1");

    const handlePaymentChange = (event) => {
        setSelectedPayment(event.target.id);
    };
    const [detailAddress, setDetailAddress] = useState("");

    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);

    const [selectedProvince, setSelectedProvince] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedWard, setSelectedWard] = useState("");

    useEffect(() => {
        console.log("Selected Province:", selectedProvince);
        console.log("Provinces List:", provinces);
        console.log("Selected District:", selectedDistrict);
        console.log("Districts List:", districts);
        console.log("Selected Ward:", selectedWard);
        console.log("Wards List:", wards);
    }, [selectedProvince, selectedDistrict, selectedWard, provinces, districts, wards]);


    // Fetch danh sách tỉnh/thành
    useEffect(() => {
        axios.get("https://provinces.open-api.vn/api/p/")
            .then(response => setProvinces(response.data))
            .catch(error => console.error("Error fetching provinces:", error));
    }, []);

    // // Khi chọn tỉnh, fetch danh sách huyện/quận
    // const handleProvinceChange = (e) => {
    //     const provinceCode = e.target.value;
    //     setSelectedProvince(provinceCode);
    //     setSelectedDistrict("");
    //     setSelectedWard("");
    //     setWards([]);

    //     axios.get(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`)
    //         .then(response => setDistricts(response.data.districts))
    //         .catch(error => console.error("Error fetching districts:", error));
    // };
    // // Khi chọn huyện, fetch danh sách xã/phường
    // const handleDistrictChange = (e) => {
    //     const districtCode = e.target.value;
    //     setSelectedDistrict(districtCode);
    //     setSelectedWard("");

    //     axios.get(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`)
    //         .then(response => setWards(response.data.wards))
    //         .catch(error => console.error("Error fetching wards:", error));
    // };


    // Fetch districts when province changes
    const handleProvinceChange = (e) => {
        const provinceCode = Number(e.target.value);
        setSelectedProvince(provinceCode);
        setSelectedDistrict("");
        setSelectedWard("");
        setWards([]);

        axios.get(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`)
            .then(response => {
                setDistricts(response.data.districts || []);
            })
            .catch(error => console.error("Error fetching districts:", error));
    };

    // Fetch wards when district changes
    const handleDistrictChange = (e) => {
        const districtCode = Number(e.target.value);
        setSelectedDistrict(districtCode);
        setSelectedWard("");

        axios.get(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`)
            .then(response => {
                setWards(response.data.wards || []);
            })
            .catch(error => console.error("Error fetching wards:", error));
    };

    return (
        <section className="checkout py-80">
            <div className="container container-lg">
                <div className="border border-gray-100 rounded-8 px-30 py-20 mb-40">
                    <span className="">
                        Have a coupon?{" "}
                        <Link
                            to="/cart"
                            className="fw-semibold text-gray-900 hover-text-decoration-underline hover-text-main-600"
                        >
                            Click here to enter your code
                        </Link>{" "}
                    </span>
                </div>
                <div className="row">
                    <div className="col-xl-9 col-lg-8">
                        <form action="#" className="pe-xl-5">
                            <div className="row gy-3">

                                <div className="col-sm-6 col-xs-6">
                                    <input
                                        type="text"
                                        className="common-input border-gray-100"
                                        placeholder="Full Name"
                                    />
                                </div>
                                <div className="col-12">
                                    <input
                                        type="email"
                                        className="common-input border-gray-100"
                                        placeholder="Email Address"
                                    />
                                </div>


                                <div className="col-12">
                                    <input
                                        type="number"
                                        className="common-input border-gray-100"
                                        placeholder="Phone"
                                    />
                                </div>


                                <div className="col-12 p-3 border rounded">
                                    <div className="row g-3">
                                        <div className="col-md-4">
                                            <label className="form-label">Province/City</label>
                                            <select
                                                className="form-select"
                                                value={selectedProvince}
                                                onChange={handleProvinceChange}
                                            >
                                                <option value="">Select Province</option>
                                                {provinces.map((province) => (
                                                    <option key={province.code} value={province.code}>
                                                        {province.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="col-md-4">
                                            <label className="form-label">District</label>
                                            <select
                                                className="form-select"
                                                value={selectedDistrict}
                                                onChange={handleDistrictChange}
                                                disabled={!selectedProvince}
                                            >
                                                <option value="">Select District</option>
                                                {districts.map((district) => (
                                                    <option key={district.code} value={district.code}>
                                                        {district.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="col-md-4">
                                            <label className="form-label">Ward</label>
                                            <select
                                                className="form-select"
                                                value={selectedWard}
                                                onChange={(e) => setSelectedWard(e.target.value)}
                                                disabled={!selectedDistrict}
                                            >
                                                <option value="">Select Ward</option>
                                                {wards.map((ward) => (
                                                    <option key={ward.code} value={ward.code}>
                                                        {ward.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="detailAddress" className="form-label">Detailed Address</label>
                                        <input
                                            type="text"
                                            id="detailAddress"
                                            className="form-control"
                                            placeholder="Nhập số nhà, đường, tổ, khu phố..."
                                            value={detailAddress}
                                            onChange={(e) => setDetailAddress(e.target.value)}
                                        />
                                    </div>
                                </div>


                           

                                    <div className="mt-3">
                                        <h6 className="text-lg mb-24">Selected Address:</h6>
                                        <p className="common-input border-gray-100">
                                            {selectedProvince && provinces.length > 0
                                                ? provinces.find(p => p.code === selectedProvince)?.name || "N/A"
                                                : "No Province Selected"}
                                            , {selectedDistrict && districts.length > 0
                                                ? districts.find(d => d.code === selectedDistrict)?.name || "N/A"
                                                : "No District Selected"}
                                            , {selectedWard && wards.length > 0
                                                ? wards.find(w => String(w.code) === String(selectedWard))?.name || "N/A"
                                                : "No Ward Selected"}
                                            {detailAddress ? `, ${detailAddress}` : ""}
                                        </p>
                                    </div>

                                <div className="col-12">
                                    <div className="my-40">
                                        <h6 className="text-lg mb-24">Additional Information</h6>
                                        <input
                                            type="text"
                                            className="common-input border-gray-100"
                                            placeholder="Notes about your order, e.g. special notes for delivery."
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-xl-3 col-lg-4">
                        <div className="checkout-sidebar">
                            <div className="bg-color-three rounded-8 p-24 text-center">
                                <span className="text-gray-900 text-xl fw-semibold">
                                    Your Orders
                                </span>
                            </div>
                            <div className="border border-gray-100 rounded-8 px-24 py-40 mt-24">
                                <div className="mb-32 pb-32 border-bottom border-gray-100 flex-between gap-8">
                                    <span className="text-gray-900 fw-medium text-xl font-heading-two">
                                        Product
                                    </span>
                                    <span className="text-gray-900 fw-medium text-xl font-heading-two">
                                        Subtotal
                                    </span>
                                </div>

                                <div className="border-top border-gray-100 pt-30  mt-30">
                                    <div className="mb-32 flex-between gap-8">
                                        <span className="text-gray-900 font-heading-two text-xl fw-semibold">
                                            Subtotal
                                        </span>
                                        <span className="text-gray-900 font-heading-two text-md fw-bold">
                                            $859.00
                                        </span>
                                    </div>
                                    <div className="mb-0 flex-between gap-8">
                                        <span className="text-gray-900 font-heading-two text-xl fw-semibold">
                                            Total
                                        </span>
                                        <span className="text-gray-900 font-heading-two text-md fw-bold">
                                            $859.00
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-32">
                                <div className="payment-item">
                                    <div className="form-check common-check common-radio py-16 mb-0">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="payment"
                                            id="payment1"
                                            checked={selectedPayment === 'payment1'}
                                            onChange={handlePaymentChange}
                                        />
                                        <label
                                            className="form-check-label fw-semibold text-neutral-600"
                                            htmlFor="payment1"
                                        >
                                            Direct Bank transfer
                                        </label>
                                    </div>
                                    {selectedPayment === 'payment1' && (
                                        <div className="payment-item__content px-16 py-24 rounded-8 bg-main-50 position-relative d-block">
                                            <p className="text-gray-800">
                                                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                            </p>
                                        </div>
                                    )}
                                </div>

                            </div>
                            <div className="mt-32 pt-32 border-top border-gray-100">
                                <p className="text-gray-500">
                                    Your personal data will be used to process your order, support
                                    your experience throughout this website, and for other purposes
                                    described in our{" "}
                                    <Link to="#" className="text-main-600 text-decoration-underline">
                                        {" "}
                                        privacy policy
                                    </Link>{" "}
                                    .
                                </p>
                            </div>
                            <Link
                                to="/checkout"
                                className="btn btn-main mt-40 py-18 w-100 rounded-8 mt-56"
                            >
                                Place Order
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Checkout