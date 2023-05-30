import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Dropdown from 'react-bootstrap/Dropdown';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Divider from "../components/divider/Divider";
import DiscoverNFTData from "../data/discover/discover-nft.json";

import $ from "jquery";
window.jQuery = window.$ = $;
require("jquery-nice-select");

const ExploreOne = () => {
    const [count, setCount] = useState(12);
    const [noMorePost, setNoMorePost] = useState(false);
    const countSlice = DiscoverNFTData.slice(0, count);

    const selectStatus = useRef();
    const selectCategories = useRef();
    const selectItems = useRef();
    const selectISortBy = useRef();
    const selectRatings = useRef();
    const selectChains = useRef();
    const selectChains2 = useRef();

    useEffect(() => {
      $(selectStatus.current).niceSelect();
    }, []);

    useEffect(() => {
      $(selectCategories.current).niceSelect();
    }, []);

    useEffect(() => {
      $(selectItems.current).niceSelect();
    }, []);

    useEffect(() => {
      $(selectISortBy.current).niceSelect();
    }, []);

    useEffect(() => {
      $(selectRatings.current).niceSelect();
    }, []);

    useEffect(() => {
      $(selectChains.current).niceSelect();
    }, []);

    useEffect(() => {
      $(selectChains2.current).niceSelect();
    }, []);

    const handleLoadMore = () => {
        setCount(count + 4);
        if(count >= DiscoverNFTData.length) {
            setNoMorePost(true);
        }
    }

    const DiscoverNFTCards = countSlice.map((elem, index) => (
        <div key={index} className="col-12 col-sm-6 col-lg-4 col-xl-3">
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

            <Breadcrumb 
                breadcrumbTitle="Explore One" 
                breadcrumbNav={[
                    {
                        navText: "Home",
                        path: "/"
                    }
                ]}
            />

            <Divider />

            <div className="explore-items-wrapper">
                <div className="container">
                    <div className="row g-4 align-items-end">

                        <div className="col-12 col-sm-6 col-lg-3">
                            <h5>Status</h5>
                            <select ref={selectStatus} className="filter-select bg-gray w-100">
                                <option value="buy-now">Buy Now</option>
                                <option value="on-auction">On Auction</option>
                                <option value="new">New</option>
                                <option value="featured">Featured</option>
                            </select>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-3">
                            <h5>Categories</h5>
                            <select ref={selectCategories} className="filter-select bg-gray w-100">
                                <option value={1}>Art</option>
                                <option value={2}>Cards</option>
                                <option value={3}>Collectibles</option>
                                <option value={4}>Domain</option>
                                <option value={5}>Music</option>
                                <option value={6}>Memes</option>
                                <option value={7}>Photos</option>
                                <option value={8}>Sports</option>
                                <option value={9}>Videos</option>
                                <option value={10}>Vitual Worlds</option>
                            </select>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-3">
                            <h5>Items</h5>
                            <select ref={selectItems} className="filter-select bg-gray w-100">
                                <option value={1}>All</option>
                                <option value={2}>Single</option>
                                <option value={3}>Bundle</option>
                            </select>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-3">
                            <h5>Sort By</h5>
                            <select ref={selectISortBy} className="filter-select bg-gray w-100">
                                <option value={1}>Recently Added</option>
                                <option value={2}>Recently Sold</option>
                                <option value={3}>Ending Soon</option>
                            </select>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-3">
                            <h5>Ratings</h5>
                            <select ref={selectRatings} className="filter-select bg-gray w-100">
                                <option value={1}>5 Star</option>
                                <option value={2}>4 Star & Above</option>
                                <option value={3}>3 Star & Above</option>
                                <option value={4}>2 Star & Above</option>
                                <option value={5}>1 Star & Above</option>
                            </select>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-3">
                            <h5>Chains</h5>
                            <select ref={selectChains} className="filter-select bg-gray w-100">
                                <option value={1}>Bitcoin</option>
                                <option value={2}>Ethereum</option>
                                <option value={3}>Tether</option>
                            </select>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-3">
                            <h5>Chains</h5>
                            <select ref={selectChains2} className="filter-select bg-gray w-100">
                                <option value={1}>Bitcoin</option>
                                <option value={2}>Ethereum</option>
                                <option value={3}>Tether</option>
                            </select>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-3">
                            <button 
                                className="btn btn-primary rounded-pill w-100" 
                                type="submit"
                            >
                                Apply
                                <i className="ms-1 bi bi-arrow-right" />
                            </button>
                        </div>

                    </div>
                </div>

                <div className="w-100 mb-70 d-block" />

                <div className="container">
                    <div className="row g-4 justify-content-center">
                        {DiscoverNFTCards}
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

export default ExploreOne;