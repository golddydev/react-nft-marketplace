import { useState } from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';

const RegisterContent = (props) => {
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
                                    
                                    <Form.Group className="mb-4">
                                        <Form.Control type="text" placeholder="Username" required />
                                    </Form.Group>
                                    
                                    <Form.Group className="mb-4">
                                        <Form.Control type="text" placeholder="Full Name" required />
                                    </Form.Group>

                                    <Form.Group className="mb-4 form-group">
                                        <label className="label-psswd" onClick={togglePassword} htmlFor="registerPassword"> {passwordShow ? "Hide" : "Show"}
                                        </label>
                                        <Form.Control type={passwordShow ? "text" : "password"} id="registerPassword" placeholder="Password" required />
                                    </Form.Group>

                                    <Form.Check className="mb-4"
                                        type="checkbox" 
                                        id="rememberMe" 
                                        label="I agree to all terms & conditions."
                                    />

                                    <button className="btn btn-primary w-100" type="submit">
                                        Register Now
                                    </button>
                                </Form>                                    
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="register-thumbnail mt-5 mt-md-0">
                            <img src={`${process.env.PUBLIC_URL}/${image}`} alt="Register" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterContent;