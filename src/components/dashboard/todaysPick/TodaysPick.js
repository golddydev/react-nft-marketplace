import { Link } from "react-router-dom";
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import ScrollAnimation from "react-animate-on-scroll";

import TodaysDropData from "../../../data/todaysDrop/todays-drop.json";

const TodaysPick = (props) => {
    const { title, btnPath, btnText } = props;

    const TodaysDropCards = TodaysDropData.slice(0, 2).map((ele, index) => (
        <div className="nft-card card shadow-sm mt-4" key={index} >
            <div className="card-body">
                <div className="row align-items-center g-3">                    
                    <div className="col-4">
                        <div className="img-wrap">
                            <img src={`${process.env.PUBLIC_URL}/${ele.image}`} alt={ele.title} />
                            <div className={`badge bg-${ele.badgeColor} position-absolute px-2 py-1`} >
                                #{ele.id}
                            </div>
                        </div>
                    </div>

                    <div className="col-8">
                        {/* Meta Info */}
                        <div className="meta-info">
                            <div className="name-info d-flex align-items-center mb-3">                                
                                <div className="author-img position-relative">
                                    <img className="shadow" src={`${process.env.PUBLIC_URL}/${ele.authorAvater}`} alt={ele.authorName} />
                                    <i className={`bi bi-check position-absolute bg-success ${ele.authorVerified}`} />
                                </div>                                
                                <div className="name-author">
                                    <OverlayTrigger placement="left" 
                                        delay={{ show: 250, hide: 400 }} 
                                        overlay={
                                            <Tooltip id={`todaysDrop${ele.id}`}>
                                                {ele.title}
                                            </Tooltip>
                                        }
                                    >
                                        <Link className="name d-block hover-primary text-truncate" to="#" >
                                            {ele.title}
                                        </Link>
                                    </OverlayTrigger>
                                    <Link className="author d-block fz-12 hover-primary text-truncate" to="#" >
                                        @{ele.authorName}
                                    </Link>
                                </div>
                            </div>

                            <div className="price-bid">
                                <div className="price">
                                    <h6 className="mb-0 d-block fz-14 border border-2 rounded py-1 px-2 text-center">{ele.price}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))

    return(
        <div className="col-12 col-md-6 col-xl-4">
            <ScrollAnimation animateIn="fadeInUp" delay={500} animateOnce={true} >
                <div className="card border-0 shadow-sm">
                    <div className="card-body p-4">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <h5>{title}</h5>
                            <Link className="btn btn-primary btn-minimal" to={btnPath}>{btnText}</Link>
                        </div>

                        {TodaysDropCards}
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    )
}

export default TodaysPick;