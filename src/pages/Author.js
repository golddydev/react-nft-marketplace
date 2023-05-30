import { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Dropdown from 'react-bootstrap/Dropdown';
import CountUp from 'react-countup';
import TrackVisibility from 'react-on-screen';

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Divider from "../components/divider/Divider";
import AuthorData from "../data/author/authors-data.json";
import DiscoverNFTData from "../data/discover/discover-nft.json";

import $ from "jquery";
window.jQuery = window.$ = $;
require("jquery-nice-select");

const Author = () => {
    const authorUsername = useParams().AUTHORUSERNAME;
    const authorDetailsData = AuthorData.filter(item => item.username === authorUsername);
    const authorItemsData = DiscoverNFTData.filter(item => item.authorName === authorUsername);
    const authorData = authorDetailsData[0];

    const [modalShow, setModalShow] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const [modalShow3, setModalShow3] = useState(false);

    const selectSortBy = useRef();
    const selectCatagories = useRef();

    useEffect(() => {
        $(selectSortBy.current).niceSelect();
    }, []);

    useEffect(() => {
        $(selectCatagories.current).niceSelect();
    }, []);

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

    const [count, setCount] = useState(4);
    const [noMorePost, setNoMorePost] = useState(false);
    const countSlice = authorItemsData.slice(0, count);

    const handleLoadMore = () => {
        setCount(count + 4);
        if(count >= authorItemsData.length) {
            setNoMorePost(true);
        }
    }

    const DiscoverNFTCards = countSlice.map((elem, index) => (
        <div key={index} className="col-12 col-sm-6 col-lg-6">
            <div className="nft-card card shadow-sm">
                <div className="card-body">
                    <div className="img-wrap">
                        {/* Image */}
                        <img src={`${process.env.PUBLIC_URL}/${elem.image}`} alt={elem.title} />
                        
                        {/* Badge */}
                        <div className={`badge bg-${elem.badgeInfo[0].color} position-absolute section-${elem.badgeInfo[0].visibility}`} >
                            <img src={`${process.env.PUBLIC_URL}/${elem.badgeInfo[0].icon}`} alt="" />
                            {elem.badgeInfo[0].text}
                        </div>
                        
                        {/* Dropdown */}
                        <Dropdown className={`section-${elem.dropdownVisibility}`} >
                            <Dropdown.Toggle className="rounded-pill shadow-sm" id={`discoverID${elem.id}`}>
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

                    {/* Others Info */}
                    <div className="row gx-2 align-items-center mt-3">
                        <div className="col-8">
                            <span className="d-block fz-12">
                                <i className={`bi ${elem.topLevelInfo[0].icon}`} />
                                {elem.topLevelInfo[0].text}
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
                                            <Tooltip id={`discoverNFT${elem.id}`}>
                                                {elem.title}
                                            </Tooltip>
                                        }
                                    >
                                        <Link 
                                            className="name d-block hover-primary text-truncate" 
                                            to={`${process.env.PUBLIC_URL}/discover-items/${elem.id}`}
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

            <div 
                className="author-top-content bg-img bg-overlay" 
                style={{backgroundImage: `url(${process.env.PUBLIC_URL}/${authorData.bgImage})`}}
            >
                <div className="container">
                    <div className="card border-0 bg-transparent">
                        <div className="card-body p-4 p-sm-5">
                            <div className="row g-4 g-lg-5 align-items-center">
                                <div className="col-7 col-sm-6 col-md-5 col-lg-3">
                                    <div className="author-thumbnail">
                                        <img className="rounded" src={`${process.env.PUBLIC_URL}/${authorData.thumbnail}`} alt="" />
                                        <i className="bi bi-patch-check-fill" />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-10 col-md-7 col-lg-9">
                                    <div className="author-data">
                                        <h3 className="mb-2 author-name text-white">
                                            {authorData.name}
                                            <Link className={`btn btn-${authorData.followBtnInfo[0].style} btn-sm rounded-pill align-top ms-2 px-3 py-1`} to="" >
                                                {authorData.followBtnInfo[0].text}
                                            </Link>
                                        </h3>
                                        <div className="btn btn-minimal d-inline-block mb-3 text-white">
                                            @{authorData.username}
                                        </div>
                                        <p className="mb-0">
                                            {authorData.shortDesc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

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
                        <Dropdown className="author-dd" >
                            <Dropdown.Toggle className="rounded-pill shadow-sm p-0" id={`authorDetailsID${authorData.id}`}>
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
                    </div>
                </div>
            </div>

            <div className="author-content-wrap mt-70">
                <div className="container">
                    <div className="row g-4 g-xl-5 justify-content-center">
                        <div className="col-12 col-lg-4">
                            <div className="card author-sidebar-card shadow-sm">
                                <div className="card-body p-4 p-md-5 p-lg-4 p-xl-5">
                                    <h5 className="mb-3">About this author</h5>

                                    {authorData.authorDesc.map((elem, index) => (
                                        <div key={index} dangerouslySetInnerHTML={{__html: elem}} />
                                    ))}
                                    
                                    <div className="meta-data d-flex align-items-center mt-4">
                                        <h6 className="mb-0 border-end text-center pe-3 me-3">
                                            <span className="counter">
                                                <TrackVisibility once>
                                                    {({ isVisible }) => (
                                                        <div>
                                                            {isVisible ? <CountUp duration={2} end={authorItemsData.length} /> : 0}
                                                        </div>
                                                    )}
                                                </TrackVisibility>
                                            </span> Items
                                        </h6>

                                        <h6 className="mb-0 border-end text-center pe-3 me-3">
                                            <span className="counter">
                                                <TrackVisibility once>
                                                    {({ isVisible }) => (
                                                        <div>
                                                            {isVisible ? <CountUp duration={2} end={authorData.owners} /> : 0}
                                                        </div>
                                                    )}
                                                </TrackVisibility>
                                            </span> Owners
                                        </h6>

                                        <h6 className="mb-0 text-center">
                                            <span className="counter">
                                                <TrackVisibility once>
                                                    {({ isVisible }) => (
                                                        <div>
                                                            {isVisible ? <CountUp duration={2} end={authorData.followers} /> : 0}
                                                        </div>
                                                    )}
                                                </TrackVisibility>
                                            </span> Followers
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-12 col-lg-8">
                            <div className="row g-4 align-items-center justify-content-between">
                                <div className="col-12 col-sm-6">
                                    <select ref={selectSortBy} className="filter-select bg-gray w-100">
                                        <option value={1}>Recently Added</option>
                                        <option value={2}>Recently Sold</option>
                                        <option value={3}>Ending Soon</option>
                                    </select>
                                </div>

                                <div className="col-12 col-sm-6">
                                    <select ref={selectCatagories} className="filter-select bg-gray w-100">
                                        <option value={1}>Art</option>
                                        <option value={2}>Cards</option>
                                        <option value={3}>Collectibles</option>
                                        <option value={4}>Domain</option>
                                        <option value={5}>Music</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="mb-4 d-block" />
                        
                            <div className="row g-4">
                                {DiscoverNFTCards}

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
                    </div>
                </div>
            </div>

            <Divider />

            <Footer />
        </>
    )
}

export default Author;