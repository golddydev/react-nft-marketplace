import { Link } from "react-router-dom";
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Dropdown from 'react-bootstrap/Dropdown';
import ScrollAnimation from "react-animate-on-scroll";

import FeaturedNFTData from "../../../data/featuredNFT/featured-nft.json";

const FeaturedCard = (props) => {
    const { title, buttonText, buttonPath } = props;

    const FeaturedNFTCards = FeaturedNFTData.slice(0, 3).map((elem, index) => (
        <div key={index} className="col-12 col-sm-10 col-md-6 col-xl-4" >
            <div className="nft-card card featured-card border-0 bg-gray">
                <div className="img-wrap">
                    {/* Image */}
                    <img src={`${process.env.PUBLIC_URL}/${elem.image}`} alt={elem.title} />
                    
                    {/* Badge */}
                    <div className={`badge bg-${elem.badgeColor} position-absolute section-${elem.badgeVisibility}`} >
                        <img src={`${process.env.PUBLIC_URL}/${elem.badgeIcon}`} alt={elem.badgeText} />
                        {elem.badgeText}
                    </div>

                    {/* Dropdown */}
                    <Dropdown className={`section-${elem.dropdownVisibility}`} >
                        <Dropdown.Toggle className="rounded-pill shadow-sm" id={`ddID${elem.id}`}>
                            <i className="bi bi-three-dots-vertical" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu align="end" >
                            {elem.dropdownInfo.map((item, index) => (
                                <Link key={index} className="dropdown-item" to={item.dropdownItemURL} >
                                    <i className={`me-2 bi ${item.dropdownItemIcon}`} ></i>
                                    {item.dropdownItemText}
                                </Link>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <div className="card-body">
                    {/* Others Info */}
                    <div className="row gx-2 align-items-center">
                        <div className="col-8">
                            <span className="d-block fz-12">
                                <i className={`bi ${elem.topLevelIcon}`} />
                                {elem.topLevelText}
                            </span>
                        </div>
                        <div className="col-4 text-end">
                            <button 
                                className="wishlist-btn" 
                                type="button"
                            >
                                <i className="bi" />
                            </button>
                        </div>
                    </div>

                    {/* Meta Info */}
                    <div className="row gx-2 align-items-center mt-2">
                        <div className="col-8">
                            <div className="name-info d-flex align-items-center">                                
                                <div className="author-img position-relative">
                                    <img className="shadow" src={`${process.env.PUBLIC_URL}/${elem.authorAvater}`} alt={elem.authorName} />
                                    <i className={`bi bi-check position-absolute bg-success ${elem.authorVerified}`} />
                                </div>

                                <div className="name-author">
                                    <OverlayTrigger placement="top" 
                                        delay={{ show: 250, hide: 400 }} 
                                        overlay={
                                            <Tooltip id={`featuredNFT${elem.id}`}>
                                                {elem.title}
                                            </Tooltip>
                                        }
                                    >
                                        <Link 
                                            className="name d-block hover-primary text-truncate" 
                                            to={`${process.env.PUBLIC_URL}/featured-items/${elem.id}`}
                                        >
                                            {elem.title}
                                        </Link>
                                    </OverlayTrigger>
                                    
                                    <Link 
                                        className="author d-block fz-12 hover-primary text-truncate" 
                                        to={`${process.env.PUBLIC_URL}/author/${elem.authorName}`}
                                    >
                                        @{elem.authorName}
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="price text-end">
                                <span className="fz-12 d-block">{elem.priceText}</span>
                                <h6 className="mb-0">{elem.currentPrice}</h6>
                            </div>
                        </div>
                    </div>

                    {/* Button */}
                    <div className="row gx-2 align-items-center mt-3">
                        <div className="col-6">
                            <Link className={`btn btn-${elem.buttonGroup[0].leftButtonStyle} rounded-pill btn-sm`} to={elem.buttonGroup[0].leftButtonURL} >
                                <i className={`bi ${elem.buttonGroup[0].leftButtonIcon}`} ></i>
                                {elem.buttonGroup[0].leftButtonText}
                            </Link>
                        </div>
                        <div className="col-6 text-end">
                            <Link className={`btn btn-${elem.buttonGroup[1].rightButtonStyle} btn-sm hover-primary`} to={elem.buttonGroup[1].rightButtonURL} >
                                <i className={`bi ${elem.buttonGroup[1].rightButtonIcon} me-1`} ></i>
                                {elem.buttonGroup[1].rightButtonText}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))

    return(
        <div className="col-12">
            <ScrollAnimation animateIn="fadeInUp" delay={500} animateOnce={true} >
                <div className="card border-0 shadow-sm">
                    <div className="card-body p-4">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <h5>{title}</h5>
                            <Link className="btn btn-primary btn-minimal" to={buttonPath} >
                                {buttonText}    
                            </Link>
                        </div>

                        <div className="row g-4 justify-content-center">
                            {FeaturedNFTCards}
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    )
}

export default FeaturedCard;