import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';

export default function ForgetPasswordContent(props) {
    const {title, subTitle, button, image} = props;

    return(
        <div className="register-area">
            <div className="container">
                <div className="row g-4 g-lg-5 align-items-center justify-content-between">
                    <div className="col-12 col-md-6 col-xl-5">
                        <div className="register-card">
                            <h2>{title}</h2>
                            <p>{subTitle}
                                <Link className="ms-1" to={button[0].path} >
                                    {button[0].text}
                                </Link>
                            </p>

                            {/* Form */}
                            <div className="register-form mt-5">
                                <Form>
                                    <Form.Group className="mb-4">
                                        <Form.Control type="email" placeholder="Email or Username" required />
                                    </Form.Group>
                                    <button className="btn btn-warning w-100" type="submit">Reset Password</button>
                                </Form>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="register-thumbnail mt-5 mt-md-0">
                            <img src={`${process.env.PUBLIC_URL}/${image}`} alt="Forget" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}