import { Link } from "react-router-dom";
import Countdown from 'react-countdown';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Dropdown from 'react-bootstrap/Dropdown';

import LiveAuctionData from "../../data/liveAuction/live-auction.json";

export default function LiveAuction(props) {
    const { backgroundColor, spinnerColor, title, buttonColor, buttonURL, buttonText } = props;

    const clockTime = ({ days, hours, minutes, seconds }) => {
        return (
            <div className="bid-ends">
                <div>
                    <span className="days">{days}</span>
                    <span>Days</span>
                </div>
                <div>
                    <span className="hours">{hours}</span>
                    <span>Hours</span>
                </div>
                <div>
                    <span className="minutes">{minutes}</span>
                    <span>Min</span>
                </div>
                <div>
                    <span className="seconds">{seconds}</span>
                    <span>Sec</span>
                </div>
            </div>
        )
    }

    const LiveAuctionsCards = LiveAuctionData.slice(0, 4).map((elem, index) => (
        <div key={index} className="col-12 col-sm-6 col-lg-5 col-xl-3">
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

                        {/* Bid End */}
                        <Countdown date={elem.bidEndsTime} intervalDelay={0} renderer={clockTime} />
                    </div>

                    {/* Others Info */}
                    <div className="row gx-2 align-items-center mt-3">
                        <div className="col-8">
                            <span className="d-block fz-12">
                                <i className={`bi ${elem.topLevelInfo[0].icon} me-1`} />
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
                                            <Tooltip id={`liveAuctionNFT${elem.id}`}>
                                                {elem.title}
                                            </Tooltip>
                                        }
                                    >
                                        <Link className="name d-block hover-primary text-truncate" to={`${process.env.PUBLIC_URL}/live-bid/${elem.id}`} >
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

                        <div className="col-12">
                            <Link 
                                className={`btn btn-${elem.buttonInfo[0].style} rounded-pill btn-sm mt-3 w-100`} 
                                to={elem.buttonInfo[0].url} 
                            >
                                <i className={`bi ${elem.buttonInfo[0].icon} me-1`} ></i>
                                {elem.buttonInfo[0].text}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))

    return(
        <div className={`live-bidding-wrapper bg-${backgroundColor} pt-120 pb-120`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-7">
                        <div className="section-heading d-flex align-items-center">
                            <div className={`spinner-grow text-${spinnerColor}`} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <h2 className="mb-0 ms-3">
                                {title}
                            </h2>
                        </div>
                    </div>

                    <div className="col-5 text-end">
                        <Link 
                            className={`btn rounded-pill btn-outline-${buttonColor} btn-sm border-2 mb-5`} 
                            to={buttonURL}
                        >
                            {buttonText}
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row g-4 justify-content-center">
                    {LiveAuctionsCards}
                </div>
            </div>
        </div>
    )
}