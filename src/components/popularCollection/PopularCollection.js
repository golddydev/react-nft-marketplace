import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import PopularNFTData from "../../data/popularNFT/popular-nft.json";

import $ from "jquery";
window.jQuery = window.$ = $;
require("jquery-nice-select");

export default function PopularCollection(props) {
    const { title } = props;

    const selectPopular = useRef();

    useEffect(() => {
        $(selectPopular.current).niceSelect();
    }, []);

    const PopularNFTCards = PopularNFTData.slice(0, 9).map((elem, index) => (
        <div key={index} className="col-12 col-sm-10 col-md-5 col-xl-4">
            <div className="nft-card card shadow-sm">
                <div className="card-body">
                    <div className="row align-items-center g-3">
                        <div className="col-4">
                            <div className="img-wrap">
                                <img src={`${process.env.PUBLIC_URL}/${elem.image}`} alt={elem.title} />
                                <div className="badge bg-danger position-absolute px-2 py-1">
                                    #{elem.id}
                                </div>
                            </div>
                        </div>
                        <div className="col-8">
                            {/* Meta Info */}
                            <div className="meta-info">
                                <div className="name-info d-flex align-items-center mb-3">
                                    <div className="author-img position-relative">
                                        <img className="shadow" src={`${process.env.PUBLIC_URL}/${elem.authorAvater}`} alt={elem.authorName} />
                                        <i className={`bi bi-check position-absolute bg-success ${elem.authorVerified}`} />
                                    </div>
                                    <div className="name-author">
                                        <OverlayTrigger placement="top" 
                                            delay={{ show: 250, hide: 400 }} 
                                            overlay={
                                                <Tooltip id={`popularNFT${elem.id}`}>
                                                    {elem.title}
                                                </Tooltip>
                                            }
                                        >
                                            <Link className="name d-block hover-primary text-truncate" to="#" >
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
                                <div className="price-bid d-flex align-items-center">
                                    <div className="price me-2 me-sm-3">
                                        <h6 className="mb-0 d-inline-block fz-14 border border-2 border-info rounded py-1 px-2 text-info">
                                            {elem.currentPrice}
                                        </h6>
                                    </div>
                                    <Link 
                                        className={`btn btn-${elem.buttonInfo[0].style} btn-sm hover-primary d-flex align-items-center`} 
                                        to={elem.buttonInfo[0].url}
                                    >
                                        <img className="me-1" src={`${process.env.PUBLIC_URL}/${elem.buttonInfo[0].icon}`} alt="" />
                                        {elem.buttonInfo[0].text}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))

    return(
        <>
            <div className="popular-collection-wrapper">
                <div className="container">
                    <div className="section-heading position-relative z-index-1000 d-flex align-items-center justify-content-center">
                        <h2 className="mb-0">{title}</h2>
                        <select ref={selectPopular} className="popular-collection-select">
                            <option value={1}>1 Day</option>
                            <option value={7}>7 Days</option>
                            <option value={15}>15 Days</option>
                            <option value={30}>1 month</option>
                        </select>
                    </div>
                </div>

                <div className="container">
                    <div className="row g-4 justify-content-center">
                        {PopularNFTCards}
                    </div>
                </div>
            </div>
        </>
    )
}