import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Dropdown from 'react-bootstrap/Dropdown';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import TinySlider from "tiny-slider-react";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import Footer from "../footer/Footer";
import Header from "../header/Header";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import Divider from "../divider/Divider";
import CTA from "../cta/CTA";

import FeaturedNFTData from "../../data/featuredNFT/featured-nft.json";

const FeaturedNFTDetails = () => {
    const featuredID = parseInt(useParams().FEATUREDID, 10);
    const featuredDetailsData = FeaturedNFTData.filter(item => item.id === featuredID);
    const featuredData = featuredDetailsData[0];

    const [modalShow, setModalShow] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const [modalShow3, setModalShow3] = useState(false);

    const socialData = [
        {
            path: "#",
            icon: "img/core-img/icons8-facebook.svg"
        },
        {
            path: "#",
            icon: "img/core-img/icons8-twitter.svg"
        },
        {
            path: "#",
            icon: "img/core-img/icons8-instagram.svg"
        },
        {
            path: "#",
            icon: "img/core-img/icons8-slack.svg"
        },
        {
            path: "#",
            icon: "img/core-img/icons8-player.svg"
        }
    ]

    function ShareModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="shareModalLabel"
                centered 
                className="share-modal"
            >
                <Modal.Body>
                    <h5 id="shareModalLabel" className="text-center mb-3">Share this item</h5>
                    <div className="d-flex align-items-center justify-content-center">
                        {socialData.map((item, index) => (
                            <a key={index} className="mx-2" href={item.path} >
                                <img src={`${process.env.PUBLIC_URL}/${item.icon}`} alt="Social" />
                            </a>
                        ))}
                    </div>
                    <button 
                        onClick={props.onHide} 
                        className="btn btn-close-style btn-danger btn-sm rounded-pill" 
                        type="button"
                    >
                        <i className="bi bi-x-lg" />
                    </button>       
                </Modal.Body>
          </Modal>
        );
    }

    function CopyLink(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="CopyLinkLabel"
                centered 
                className="share-modal"
            >
                <Modal.Body>
                    <h5 id="CopyLinkLabel" className="text-center mb-3">Copy item link</h5>
                    <p className="user-select-all mb-0 border border-2 p-3 rounded">
                        {window.location.href}
                    </p>

                    <button 
                        onClick={props.onHide} 
                        className="btn btn-close-style btn-danger btn-sm rounded-pill" 
                        type="button"
                    >
                        <i className="bi bi-x-lg" />
                    </button>       
                </Modal.Body>
          </Modal>
        );
    }

    function Report(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="ReportLabel"
                centered 
                className="share-modal"
            >
                <Modal.Body>
                    <h5 id="ReportLabel" className="text-center mb-3">Why are you reporting?</h5>

                    <form>
                        <textarea className="form-control mb-3" id="reportText" name="reportMessage" placeholder="Write your complaint." />
                        <button className="btn btn-primary btn-sm rounded-pill w-100" type="submit">Report</button>
                    </form>

                    <button 
                        onClick={props.onHide} 
                        className="btn btn-close-style btn-danger btn-sm rounded-pill" 
                        type="button"
                    >
                        <i className="bi bi-x-lg" />
                    </button>
                </Modal.Body>
          </Modal>
        );
    }

    const [key, setKey] = useState('details');

    const relatedProjectSlides = {
        'items': 4,
        'gutter': 24,
        'slideBy': 1,
        'autoplay': true,
        'autoplayButtonOutput': false,
        'autoplayTimeout': 5000,
        'speed': 750,
        'loop': true,
        'mouseDrag': true,
        'controls': true,
        'nav': false,
        'controlsText': [('<i class="bi bi-arrow-left"></i>'), ('<i class="bi bi-arrow-right"></i>')],
        'responsive': {
            320: {
                'items': 1,
            },
            480: {
                'items': 1.3,
            },
            576: {
                'items': 2,
            },
            768: {
                'items': 2.4,
            },
            992: {
                'items': 3,
            },
            1200: {
                'items': 3.5,
            },
            1400: {
                'items': 4,
            }
        }
    };

    const FeaturedNFTCards = FeaturedNFTData.map((elem, index) => (
        <div key={index} >
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
                breadcrumbTitle="Details" 
                breadcrumbNav={[
                    {
                        navText: "Home",
                        path: "/"
                    },
                    {
                        navText: "Featured",
                        path: "/featured-items"
                    }
                ]}
            />

            <Divider />
            
            {/* Item Details */}
            <div className="item-details-wrap">
                <div className="container">
                    <div className="row g-4 g-lg-5 align-items-center justify-content-center">
                        {/* Item Thumbnail */}
                        <div className="col-12 col-md-12 col-lg-6">
                            <div className="item-big-thumb">
                                <Zoom 
                                    overlayBgColorStart="rgba(0, 0, 0, 0)" 
                                    overlayBgColorEnd="rgba(0, 0, 0, 0.95)"
                                    transitionDuration={400}
                                >
                                    <img src={`${process.env.PUBLIC_URL}/${featuredData.image}`} alt={featuredData.title} />
                                </Zoom>
                            </div>
                        </div>

                        {/* Item Details Content */}
                        <div className="col-12 col-md-9 col-lg-6">
                            <div className="item-details-content mt-5 mt-lg-0">
                                {/* Share Modal */}
                                <ShareModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />

                                {/* Copy Link */}
                                <CopyLink
                                    show={modalShow2}
                                    onHide={() => setModalShow2(false)}
                                />

                                {/* Report Modal */}
                                <Report
                                    show={modalShow3}
                                    onHide={() => setModalShow3(false)}
                                />

                                {/* Dropdown */}
                                <Dropdown className={`section-${featuredData.dropdownVisibility} item-details-dd`} >
                                    <Dropdown.Toggle className="rounded-pill shadow-sm p-0" id={`featuredDetailsID${featuredData.id}`}>
                                        <i className="bi bi-three-dots-vertical" />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu align="end" >
                                        <Link className="dropdown-item" to="#" onClick={() => setModalShow(true)}>
                                            <i className="me-2 bi bi-share" />
                                            Share
                                        </Link>

                                        <Link className="dropdown-item" to="#" onClick={() => setModalShow2(true)}>
                                            <i className="me-2 bi bi-box-arrow-up-right" />
                                            Copy Link
                                        </Link>
                                        
                                        <Link className="dropdown-item" to="#" onClick={() => setModalShow3(true)}>
                                            <i className="me-2 bi bi-flag" />
                                            Report
                                        </Link>
                                    </Dropdown.Menu>
                                </Dropdown>
                            
                                <div className="d-flex flex-wrap align-items-center">
                                    {/* Wishlist */}
                                    <button className="btn btn-danger btn-sm rounded-pill px-3 wishlist-btn" type="button">
                                        <i className="bi" />
                                        <span className="ms-1">
                                            {featuredData.wishlistCount}
                                        </span>
                                    </button>

                                    {/* Badge */}
                                    <div className="badge border px-3 py-2 rounded-pill text-dark fz-14 d-inline-block ms-1 ms-sm-4">
                                        <i className="me-1 bi bi-eye" />
                                        {featuredData.viewsNow} watching now
                                    </div>
                                </div>
                                
                                {/* Title */}
                                <h2 className="my-3">
                                    {featuredData.title}
                                </h2>

                                <div className="d-flex align-items-center mb-4">
                                    {/* Author Image */}
                                    <div className="author-img position-relative me-3">
                                        <img 
                                            className="shadow" 
                                            src={`${process.env.PUBLIC_URL}/${featuredData.authorAvater}`} 
                                            alt={featuredData.authorName} 
                                        />
                                        <i className={`bi bi-check position-absolute bg-primary ${featuredData.authorVerified}`} />
                                    </div>

                                    {/* Name & Author */}
                                    <div className="name-author">
                                        <span className="d-block fz-14">Created by</span>
                                        <Link 
                                            className="author d-block fz-16 hover-primary text-truncate" 
                                            to={`${process.env.PUBLIC_URL}/author/${featuredData.authorName}`}
                                        >
                                            @{featuredData.authorName}
                                        </Link>
                                    </div>
                                </div>

                                <div className="border-top w-75 mb-4" />

                                <div className="row align-items-end">
                                    <div className="col-6 col-sm-4">
                                        <p className="mb-2">{featuredData.priceText}</p>
                                        <h5 className="text-center mb-0 border border-2 px-3 py-2 border-primary d-inline-block rounded text-primary w-100">
                                            {featuredData.currentPrice}
                                        </h5>
                                    </div>
                                    <div className="col-6 col-sm-4 col-lg-5">
                                        <Link className={`btn btn-${featuredData.buttonGroup[0].leftButtonStyle} rounded-pill w-100`} to={featuredData.buttonGroup[0].leftButtonURL} >
                                            <img 
                                                className="me-1" 
                                                src={`${process.env.PUBLIC_URL}/${featuredData.buttonGroup[0].leftButtonIcon}`} 
                                                alt="" />
                                            {featuredData.buttonGroup[0].leftButtonText}
                                        </Link>
                                    </div>
                                </div>

                                <div className="border-top w-75 my-4" />

                                {/* Short Description */}
                                <div className="short-description">
                                    <h5>{featuredData.shortDesc[0].heading}</h5>
                                    <p className="mb-0" dangerouslySetInnerHTML={{__html: featuredData.shortDesc[0].body}} >
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-block w-100 mb-70" />
            
            {/* Tabs */}
            <div className={`funto-tab-area ${featuredData.tabVisibility}`} >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tab--area bg-gray p-4 p-lg-5">
                                <Tabs
                                    id="itemDetailsTab"
                                    activeKey={key}
                                    onSelect={(k) => setKey(k)}
                                    className="mb-3"
                                    >
                                    <Tab eventKey="details" title="Details">
                                        {featuredData.firstTabContent.map((elem, index) => (
                                            <div key={index} dangerouslySetInnerHTML={{__html: elem}} ></div>
                                        ))}
                                    </Tab>

                                    <Tab eventKey="activity" title="Activity">
                                        <div className="table-responsive border shadow-sm activity-table bg-white">
                                            <table className="table mb-0">
                                                <tbody>
                                                    {featuredData.secondTabContent.map((ele, index) => (
                                                        <tr key={index} >
                                                            <th scope="row">
                                                                {ele.firstData}
                                                            </th>
                                                            <td>
                                                                {ele.secondData}
                                                            </td>
                                                            <td>
                                                                {ele.thirdData}
                                                            </td>
                                                            <td>
                                                                {ele.fourthData}
                                                            </td>
                                                            <td>
                                                                {ele.fiveData}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Divider />

            <div className="related-project-area">
                <div className="container">
                    <div className="section-heading">
                        <h2 className="mb-0">Related Projects</h2>
                    </div>

                    {/* Slide */}
                    <div className="related-project-slide">
                        <TinySlider settings={relatedProjectSlides}>
                            {FeaturedNFTCards}
                        </TinySlider>
                    </div>
                </div>
            </div>

            <Divider />

            <CTA 
                backgroundColor="primary" // try 'success', 'warning', 'danger', 'info' etc 
                text="Resources for getting started with Funto." 
                buttonText="Get Started"
                buttonColor="warning" 
                buttonURL="#" 
                buttonIcon=""
            />

            <Divider />

            <Footer />
        </>
    )
}

export default FeaturedNFTDetails;