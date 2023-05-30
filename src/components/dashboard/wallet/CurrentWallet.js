import { Link } from "react-router-dom";

const CurrentWallet = (props) => {
    const { title, name, image, btnInfo } = props;

    return(
        <div className="row justify-content-center">
            <div className="col-12 text-center">
                <h4 className="mb-3">
                    {title}
                </h4>
            </div>

            <div className="col-12 col-xl-7 col-xxl-6">
                <div className="card wallet-card shadow-sm">
                    <div className="card-body px-4 text-center">
                        <div className="d-flex align-items-center">
                            <div className="img-wrap">
                                <img src={`${process.env.PUBLIC_URL}/${image}`} alt="" />
                            </div>
                            <h4 className="mb-0 me-3">
                                {name}    
                            </h4>
                            <Link className={`btn btn-sm btn-${btnInfo[0].color} rounded-pill ms-auto`} to={btnInfo[0].path} >
                                <i className={`bi me-1 ${btnInfo[0].icon}`} />
                                {btnInfo[0].text}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWallet;