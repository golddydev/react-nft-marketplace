import { useState } from 'react';
import { Link } from 'react-router-dom';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Dropdown from 'react-bootstrap/Dropdown';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Divider from "../components/divider/Divider";
import FeaturedNFTData from "../data/featuredNFT/featured-nft.json";

const FeaturedItems = () => {
    const [count, setCount] = useState(12);
    const [noMorePost, setNoMorePost] = useState(false);
    const countSlice = FeaturedNFTData.slice(0, count);

    const handleLoadMore = () => {
        setCount(count + 4);
        if(count >= FeaturedNFTData.length) {
            setNoMorePost(true);
        }
    }

    const FeaturedNFTCards = countSlice.map((elem, index) => (
        <div key={index} className="col-12 col-sm-6 col-lg-4 col-xl-3" >
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
        <>
            <Header />

            <Breadcrumb 
                breadcrumbTitle="Featured" 
                breadcrumbNav={[
                    {
                        navText: "Home",
                        path: "/"
                    }
                ]}
            />

            <Divider />

            <div className="featured-items-wrapper">
                <div className="container">
                    <div className="row g-4 justify-content-center">
                        {FeaturedNFTCards}
                    </div>
                </div>

                <div className="container">
                    <div className="text-center mt-70">
                        <button 
                            className="btn btn-primary px-4 rounded-pill" 
                            onClick={() => handleLoadMore()} 
                            disabled={noMorePost ? "disabled" : null}
                        >
                            {noMorePost ? 
                            (<span className="d-flex align-items-center">
                                No Items Here
                                <i className="ms-2 bi bi-emoji-frown" />
                            </span>) : 
                            (<span className="d-flex align-items-center">
                                View More Items
                                <i className="ms-2 bi bi-arrow-repeat" />
                            </span>)}
                        </button>
                    </div>
                </div>
            </div>

            <Divider />

            <Footer />
        </>
    )
}

export default FeaturedItems;