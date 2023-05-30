import { Link } from "react-router-dom";
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import TopBuyerData from "../../data/topBuyer/top-buyer.json";

export default function TopBuyer(props) {
    const {heading, buttonText, buttonURL} = props;

    const TopBuyerDataSlice = TopBuyerData.slice(0, 3);
    const TopBuyerCards = TopBuyerDataSlice.map((element, index) => (
        <div className="nft-card card seller-card shadow-sm mb-4" key={index}>
            <div className="card-body">
                <div className="row align-items-center g-3">
                    <div className="col-4">
                        <div className="img-wrap">
                            <img src={`${process.env.PUBLIC_URL}/${element.authorAvater}`} alt="" />
                            <div className={`badge bg-${element.badgeColor} position-absolute px-2 py-1`} >
                                #{element.id}
                            </div>
                        </div>
                    </div>

                    <div className="col-8">
                        <div className="name-author">
                            <Link 
                                className="name d-block hover-primary text-truncate" 
                                to={`${process.env.PUBLIC_URL}/author/${element.authorUsername}`}
                            >
                                {element.authorName}
                                <OverlayTrigger placement="top" 
                                    delay={{ show: 250, hide: 400 }} 
                                    overlay={
                                        <Tooltip id={`topbuyer${element.id}`}>
                                            {element.authorVerifiedText}
                                        </Tooltip>
                                    }
                                >
                                    <i className={`bi bi-patch-check-fill ms-2 text-${element.authorVerifiedColor}`} />
                                </OverlayTrigger>
                            </Link>
                            
                            <Link 
                                className="author d-block fz-14 hover-primary text-truncate" 
                                to={`${process.env.PUBLIC_URL}/author/${element.authorUsername}`}
                            >
                                @{element.authorUsername}
                            </Link>
                            
                            <div className="price-bid d-flex align-items-center mt-3">
                                <div className="price me-2 me-sm-3">
                                    <h6 className="mb-0 d-inline-block fz-14 border border-2 rounded py-1 px-2">
                                        {element.totalPrice}
                                    </h6>
                                </div>
                                <p className="mb-0 lh-1 d-flex align-items-center fz-14">
                                    <i className={`me-1 bi ${element.totalItemsIcon}`} /> {element.totalItems} Items
                                </p>
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

            {TopBuyerCards}
        
            <Link className="btn btn-minimal w-100 hover-primary" to={buttonURL} >
                {buttonText}
                <i className="ms-1 bi bi-arrow-right" />
            </Link>
        </div>
    )
}