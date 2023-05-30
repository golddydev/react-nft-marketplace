import { Link } from "react-router-dom";

export default function NotFoundContent(props) {
    const {notFoundImage, heading, subHeading, button} = props;

    return(
        <div className="funto-error-area text-center pt-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-9 col-lg-6">
                        <img className="mb-5" src={`${process.env.PUBLIC_URL}/${notFoundImage}`} alt="" />
                        <h2>{heading}</h2>
                        <p>{subHeading}</p>                        
                        <Link className={`btn btn-${button[0].color} mt-3 rounded-pill`} to={button[0].path}>
                            <i className={`me-1 bi ${button[0].icon}`} />
                            {button[0].text}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}