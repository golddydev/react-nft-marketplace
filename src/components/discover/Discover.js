import { useState } from "react";
import { Link } from 'react-router-dom';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Dropdown from 'react-bootstrap/Dropdown';

import DiscoverNFTData from "../../data/discover/discover-nft.json";

export default function DiscoverItems(props) {
    const { title } = props;

    const filters = [
        {
            navText: "Art",
            icon: "bi-palette"
        },
        {
            navText: "Cards",
            icon: "bi-card-image"
        },
        {
            navText: "Collectibles",
            icon: "bi-list-stars"
        },
        {
            navText: "Photos",
            icon: "bi-image"
        }
    ]

    const allNFTItems = DiscoverNFTData.slice(0, 12);    
    const [items, setItems] = useState(allNFTItems);

    const filterItems = (catag) => {
        const updatedItems = allNFTItems.filter((elem) => {
            return elem.catagory === catag;
        })
        setItems(updatedItems);
    }

    const DiscoverNFTCards = items.map((elem, index) => (
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
        <div className="discover-nft-wrapper">
            <div className="container">
                <div className="row align-items-center">                    
                    {/* Section Heading */}
                    <div className="col-12 col-md-4">
                        <div className="section-heading">
                            <h2 className="mb-0">{title}</h2>
                        </div>
                    </div>
                    
                    {/* Filter Buttons Group */}
                    <div className="col-12 col-md-8">
                        <div className="filters-button-group d-flex justify-content-md-end flex-wrap">
                            <button 
                                className="btn btn-primary rounded-pill btn-sm mb-3 mx-2" 
                                type="button" 
                                onClick={() => setItems(allNFTItems)} 
                            >
                                <i className="fz-16 bi bi-collection me-2" />
                                All
                            </button>

                            {filters.map((elem, index) => (
                                <button 
                                    key={index} 
                                    className="btn btn-primary rounded-pill btn-sm mb-3 mx-2" 
                                    type="button" 
                                    onClick={() => filterItems(elem.navText.toLowerCase())}
                                >
                                    <i className={`fz-16 bi ${elem.icon} me-2`} />
                                    {elem.navText}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row g-4 funto-collection-filter-list">
                            {DiscoverNFTCards}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}