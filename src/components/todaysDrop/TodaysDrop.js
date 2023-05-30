import { Link } from "react-router-dom";
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import TodaysDropData from "../../data/todaysDrop/todays-drop.json";

export default function TodaysDrop(props) {
    const {heading, buttonText, buttonURL} = props;
    
    const TodaysDropCards = TodaysDropData.slice(0, 3).map((ele, index) => (
        <div className="nft-card card shadow-sm mb-4" key={index} >
            <div className="card-body">
                <div className="row align-items-center g-3">                    
                    <div className="col-4">
                        <div className="img-wrap">
                            <img src={`${process.env.PUBLIC_URL}/${ele.image}`} alt={ele.title} />
                            <div className={`badge bg-${ele.badgeColor} position-absolute px-2 py-1`} >
                                #{ele.id}
                            </div>
                        </div>
                    </div>

                    <div className="col-8">
                        {/* Meta Info */}
                        <div className="meta-info">
                            <div className="name-info d-flex align-items-center mb-3">                                
                                <div className="author-img position-relative">
                                    <img className="shadow" src={`${process.env.PUBLIC_URL}/${ele.authorAvater}`} alt={ele.authorName} />
                                    <i className={`bi bi-check position-absolute bg-success ${ele.authorVerified}`} />
                                </div>                                
                                <div className="name-author">
                                    <OverlayTrigger placement="left" 
                                        delay={{ show: 250, hide: 400 }} 
                                        overlay={
                                            <Tooltip id={`todaysDrop${ele.id}`}>
                                                {ele.title}
                                            </Tooltip>
                                        }
                                    >
                                        <Link className="name d-block hover-primary text-truncate" to="#" >
                                            {ele.title}
                                        </Link>
                                    </OverlayTrigger>
                                    <Link 
                                        className="author d-block fz-12 hover-primary text-truncate" 
                                        to={`${process.env.PUBLIC_URL}/author/${ele.authorName}`} 
                                    >
                                        @{ele.authorName}
                                    </Link>
                                </div>
                            </div>

                            <div className="price-bid d-flex align-items-center">
                                <div className="price me-2 me-sm-3">
                                    <h6 className="mb-0 d-inline-block fz-14 border border-2 rounded py-1 px-2">{ele.price}</h6>
                                </div>
                                <Link className="btn btn-minimal btn-sm hover-primary d-flex align-items-center" to={ele.buttonURL} >
                                    <img className="me-1" src={`${process.env.PUBLIC_URL}/${ele.buttonIcon}`} alt="Icon" />{ele.buttonText}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))

    return(
        <div className="col-12 col-sm-9 col-md-6 col-lg-5 col-xl-4">
            <div className="section-heading text-center mb-4">
                <h4 className="mb-0">{heading}</h4>
            </div>

            {TodaysDropCards}

            <Link className="btn btn-minimal w-100 hover-primary" to={buttonURL} >
                {buttonText}
                <i className="ms-1 bi bi-arrow-right" />
            </Link>
        </div>
    )
}