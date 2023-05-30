import { useState } from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';

const LoginContent = (props) => {
    const { title, subTitle, button, image } = props;
    const [passwordShow, setPasswordShow] = useState(false);
    
    const togglePassword = () => {
        setPasswordShow(!passwordShow);
    };

    return(
        <div className="register-area">
            <div className="container">
                <div className="row g-4 g-lg-5 align-items-center justify-content-between">
                    <div className="col-12 col-md-6 col-xl-5">
                        <div className="register-card">
                            <h2>{title}</h2>
                            <p>{subTitle}
                                <Link className="ms-1 hover-primary" to={button[0].path} >
                                    {button[0].text}
                                </Link>
                            </p>
                        
                            {/* Register Form */}
                            <div className="register-form mt-5">
                                <Form>
                                    <Form.Group className="mb-4">
                                        <Form.Control type="email" placeholder="Email" required />
                                    </Form.Group>

                                    <Form.Group className="mb-4 form-group">
                                        <label className="label-psswd" onClick={togglePassword} htmlFor="registerPassword"> {passwordShow ? "Hide" : "Show"}
                                        </label>
                                        <Form.Control type={passwordShow ? "text" : "password"} id="registerPassword" placeholder="Password" required />
                                    </Form.Group>

                                    <button className="btn btn-success w-100" type="submit">
                                        Log In
                                    </button>
                                </Form>

                                <div className="login-meta-data d-flex align-items-center justify-content-between">
                                    <Form.Check className="mt-4"
                                        type="checkbox" 
                                        id="keepMeLogin" 
                                        label="Keep me logged in" 
                                        defaultChecked
                                    />                                    
                                    <Link className="forgot-password mt-4 text-primary fz-16" to="/forget-password">
                                        Forgot Password?
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="register-thumbnail mt-5 mt-md-0">
                            <img src={`${process.env.PUBLIC_URL}/${image}`} alt="Login" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginContent;