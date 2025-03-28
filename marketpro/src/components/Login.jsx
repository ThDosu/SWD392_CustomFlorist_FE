// import React from 'react'
// import { Link } from 'react-router-dom'

// const Login = () => {
//     return (
//         <section className="account py-80">
//             <div className="container container-lg">
//                 <form action="#">
//                     <div className="row gy-4">
//                         {/* Thẻ Đăng Nhập Bắt Đầu */}
//                         <div className="col-xl-6 pe-xl-5">
//                             <div className="border border-gray-100 hover-border-main-600 transition-1 rounded-16 px-24 py-40 h-100">
//                                 <h6 className="text-xl mb-32">Đăng Nhập</h6>
//                                 <div className="mb-24">
//                                     <label
//                                         htmlFor="username"
//                                         className="text-neutral-900 text-lg mb-8 fw-medium"
//                                     >
//                                         Tên đăng nhập hoặc email <span className="text-danger">*</span>{" "}
//                                     </label>
//                                     <input
//                                         type="text"
//                                         className="common-input"
//                                         id="username"
//                                         placeholder="Nhập tên đăng nhập"
//                                     />
//                                 </div>
//                                 <div className="mb-24">
//                                     <label
//                                         htmlFor="password"
//                                         className="text-neutral-900 text-lg mb-8 fw-medium"
//                                     >
//                                         Mật khẩu
//                                     </label>
//                                     <div className="position-relative">
//                                         <input
//                                             type="password"
//                                             className="common-input"
//                                             id="password"
//                                             placeholder="Nhập mật khẩu"
//                                             defaultValue="password"
//                                         />
//                                         <span
//                                             className="toggle-password position-absolute top-50 inset-inline-end-0 me-16 translate-middle-y cursor-pointer ph ph-eye-slash"
//                                             id="#password"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="mb-24 mt-48">
//                                     <div className="flex-align gap-48 flex-wrap">
//                                         <button type="submit" className="btn btn-main py-18 px-40">
//                                             Đăng nhập
//                                         </button>
//                                         <div className="form-check common-check">
//                                             <input
//                                                 className="form-check-input"
//                                                 type="checkbox"
//                                                 defaultValue=""
//                                                 id="remember"
//                                             />
//                                             <label
//                                                 className="form-check-label flex-grow-1"
//                                                 htmlFor="remember"
//                                             >
//                                                 Ghi nhớ đăng nhập
//                                             </label>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="mt-48">
//                                     <Link
//                                         to="#"
//                                         className="text-danger-600 text-sm fw-semibold hover-text-decoration-underline"
//                                     >
//                                         Quên mật khẩu?
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* Thẻ Đăng Nhập Kết Thúc */}
//                         {/* Thẻ Đăng Ký Bắt Đầu */}
//                         <div className="col-xl-6">
//                             <div className="border border-gray-100 hover-border-main-600 transition-1 rounded-16 px-24 py-40">
//                                 <h6 className="text-xl mb-32">Đăng Ký</h6>
//                                 <div className="mb-24">
//                                     <label
//                                         htmlFor="usernameTwo"
//                                         className="text-neutral-900 text-lg mb-8 fw-medium"
//                                     >
//                                         Tên đăng nhập <span className="text-danger">*</span>{" "}
//                                     </label>
//                                     <input
//                                         type="text"
//                                         className="common-input"
//                                         id="usernameTwo"
//                                         placeholder="Nhập tên đăng nhập"
//                                     />
//                                 </div>
//                                 <div className="mb-24">
//                                     <label
//                                         htmlFor="emailTwo"
//                                         className="text-neutral-900 text-lg mb-8 fw-medium"
//                                     >
//                                         Địa chỉ email
//                                         <span className="text-danger">*</span>{" "}
//                                     </label>
//                                     <input
//                                         type="email"
//                                         className="common-input"
//                                         id="emailTwo"
//                                         placeholder="Nhập địa chỉ email"
//                                     />
//                                 </div>
//                                 <div className="mb-24">
//                                     <label
//                                         htmlFor="enter-password"
//                                         className="text-neutral-900 text-lg mb-8 fw-medium"
//                                     >
//                                         Mật khẩu
//                                         <span className="text-danger">*</span>
//                                     </label>
//                                     <div className="position-relative">
//                                         <input
//                                             type="password"
//                                             className="common-input"
//                                             id="enter-password"
//                                             placeholder="Nhập mật khẩu"
//                                             defaultValue="password"
//                                         />
//                                         <span
//                                             className="toggle-password position-absolute top-50 inset-inline-end-0 me-16 translate-middle-y cursor-pointer ph ph-eye-slash"
//                                             id="#enter-password"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="my-48">
//                                     <p className="text-gray-500">
//                                         Thông tin cá nhân của bạn sẽ được sử dụng để xử lý đơn hàng, hỗ trợ
//                                         trải nghiệm của bạn trên trang web này, và cho các mục đích khác
//                                         được mô tả trong
//                                         <Link to="#" className="text-main-600 text-decoration-underline">
//                                             chính sách bảo mật
//                                         </Link>
//                                         .
//                                     </p>
//                                 </div>
//                                 <div className="mt-48">
//                                     <button type="submit" className="btn btn-main py-18 px-40">
//                                         Đăng Ký
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* Thẻ Đăng Ký Kết Thúc */}
//                     </div>
//                 </form>
//             </div>
//         </section>
//     )
// }

// export default Login

import React from 'react';
import { Link } from 'react-router-dom';

const style = {
    container: "account py-80",
    formContainer: "container container-lg",
    card: "border border-gray-100 hover-border-main-600 transition-1 rounded-16 px-24 py-40",
    input: "common-input",
    button: "btn btn-main py-18 px-40",
    googleButton: "btn btn-light border py-18 px-40 mt-16 w-100 d-flex align-items-center justify-content-center gap-2",
    link: "text-main-600 text-decoration-underline",
};

const Login = () => {
    return (
        <section className={style.container}>
            <div className={style.formContainer}>
                <form action="#">
                    <div className="row gy-4">
                        <div className="col-xl-6 pe-xl-5">
                            <div className={`${style.card} h-100`}>
                                <h6 className="text-xl mb-32">Đăng Nhập</h6>
                                <div className="mb-24">
                                    <label htmlFor="username" className="text-neutral-900 text-lg mb-8 fw-medium">
                                        Tên đăng nhập hoặc email <span className="text-danger">*</span>
                                    </label>
                                    <input type="text" className={style.input} id="username" placeholder="Nhập tên đăng nhập" />
                                </div>
                                <div className="mb-24">
                                    <label htmlFor="password" className="text-neutral-900 text-lg mb-8 fw-medium">Mật khẩu</label>
                                    <div className="position-relative">
                                        <input type="password" className={style.input} id="password" placeholder="Nhập mật khẩu" defaultValue="password" />
                                        <span className="toggle-password position-absolute top-50 inset-inline-end-0 me-16 translate-middle-y cursor-pointer ph ph-eye-slash" />
                                    </div>
                                </div>
                                <div className="mb-24 mt-48 flex-align gap-48 flex-wrap">
                                    <button type="submit" className={style.button}>Đăng nhập</button>
                                    <div className="form-check common-check">
                                        <input className="form-check-input" type="checkbox" id="remember" />
                                        <label className="form-check-label flex-grow-1" htmlFor="remember">Ghi nhớ đăng nhập</label>
                                    </div>
                                </div>
                                <button className="btn border w-100 d-flex align-items-center justify-content-center shadow-md"
                                    style={{
                                        padding: '12px',
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        backgroundColor: '#fff',
                                        color: '#000000',
                                        borderWidth: '3px' 
                                    }}>
                                    <img src="/assets/images/logo/Logo_google.jpg" alt="Google Logo"
                                        style={{ height: '24px', marginRight: '10px' }} />
                                    <span style={{ whiteSpace: 'nowrap' }}>Đăng nhập với Google</span>
                                </button>
                                <div className="mt-48">
                                    <Link to="#" className="text-danger-600 text-sm fw-semibold hover-text-decoration-underline">Quên mật khẩu?</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className={style.card}>
                                <h6 className="text-xl mb-32">Đăng Ký</h6>
                                <div className="mb-24">
                                    <label htmlFor="usernameTwo" className="text-neutral-900 text-lg mb-8 fw-medium">
                                        Tên đăng nhập <span className="text-danger">*</span>
                                    </label>
                                    <input type="text" className={style.input} id="usernameTwo" placeholder="Nhập tên đăng nhập" />
                                </div>
                                <div className="mb-24">
                                    <label htmlFor="emailTwo" className="text-neutral-900 text-lg mb-8 fw-medium">
                                        Địa chỉ email <span className="text-danger">*</span>
                                    </label>
                                    <input type="email" className={style.input} id="emailTwo" placeholder="Nhập địa chỉ email" />
                                </div>
                                <div className="mb-24">
                                    <label htmlFor="enter-password" className="text-neutral-900 text-lg mb-8 fw-medium">
                                        Mật khẩu <span className="text-danger">*</span>
                                    </label>
                                    <div className="position-relative">
                                        <input type="password" className={style.input} id="enter-password" placeholder="Nhập mật khẩu" defaultValue="password" />
                                        <span className="toggle-password position-absolute top-50 inset-inline-end-0 me-16 translate-middle-y cursor-pointer ph ph-eye-slash" />
                                    </div>
                                </div>
                                <div className="my-48">
                                    <p className="text-gray-500">
                                        Thông tin cá nhân của bạn sẽ được sử dụng để xử lý đơn hàng, hỗ trợ trải nghiệm của bạn trên trang web này, và cho các mục đích khác được mô tả trong
                                        <Link to="#" className={style.link}> chính sách bảo mật</Link>.
                                    </p>
                                </div>
                                <div className="mt-48">
                                    <button type="submit" className={style.button}>Đăng Ký</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Login;
