import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Dropdown from 'react-bootstrap/Dropdown';
import DiscoverNFTData from "../../data/discover/discover-nft.json";

import $ from "jquery";
window.jQuery = window.$ = $;
require("jquery-nice-select");

const DiscoverTwo = (props) => {
    const { title} = props;

    const selectStatus = useRef();
    const selectCategories = useRef();
    const selectItems = useRef();
    const selectISortBy = useRef();

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

    const DiscoverNFTCards = DiscoverNFTData.slice(0, 8).map((elem, index) => (
        <div key={index} className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <div className="nft-card card shadow-sm">
                <div className="card-body">
                    <div className="img-wrap">
                        {/* Image */}
                        <img src={`${process.env.PUBLIC_URL}/${elem.image}`} alt={elem.title} />
                        
                        {/* Badge */}
                        <div className={`badge bg-${elem.badgeInfo[0].color} position-absolute section-${elem.badgeInfo[0].visibility}`} >
                            <img src={`${process.env.PUBLIC_URL}/${elem.badgeInfo[0].icon}`} alt={elem.badgeInfo[0].text} />
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
        <div className="discover-nft-wrapper bg-gray pt-120 pb-120">
            <div className="container">
                <div className="section-heading">
                    <h2 className="mb-0">{title}</h2>
                </div>
            </div>

            {/* Discover Filter Options */}
            <div className="discover-filter-options mb-5">
                <div className="container">
                    <div className="row g-4 justify-content-center">
                        <div className="col-12 col-sm-6 col-lg-3">
                            <h5>Status</h5>
                            <select ref={selectStatus} className="filter-select w-100">
                                <option value="buy-now">Buy Now</option>
                                <option value="on-auction">On Auction</option>
                                <option value="new">New</option>
                                <option value="featured">Featured</option>
                            </select>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-3">
                            <h5>Categories</h5>
                            <select ref={selectCategories} className="filter-select w-100">
                                <option value="Art">Art</option>
                                <option value="Cards">Cards</option>
                                <option value="Collectibles">Collectibles</option>
                                <option value="Domain">Domain</option>
                                <option value="Music">Music</option>
                                <option value="Memes">Memes</option>
                                <option value="Photos">Photos</option>
                                <option value="Sports">Sports</option>
                                <option value="Videos">Videos</option>
                                <option value="Vitual Worlds">Vitual Worlds</option>
                            </select>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-3">
                            <h5>Items</h5>
                            <select ref={selectItems} className="filter-select w-100">
                                <option value="All">All</option>
                                <option value="Single">Single</option>
                                <option value="Bundle">Bundle</option>
                            </select>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-3">
                            <h5>Sort By</h5>
                            <select ref={selectISortBy} className="filter-select w-100">
                                <option value="Recently Added">Recently Added</option>
                                <option value="Recently Sold">Recently Sold</option>
                                <option value="Ending Soon">Ending Soon</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row g-4 justify-content-center">           
                    {DiscoverNFTCards}
                </div>
            </div>
        </div>
    )
}

export default DiscoverTwo;