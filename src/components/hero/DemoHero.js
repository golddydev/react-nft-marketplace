import { Link } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';

export default function DemoHero(props) {
    const {title, subTitle, btnInfo, heroThumbnail} = props;

    return(
        <div className="welcome-area pt-120">
            <div className="container">
                <div className="row align-items-center">
                    {/* Welcome Content */}
                    <div className="col-12 col-sm-10 col-md-6">
                        <div className="welcome-content mb-5 mb-md-0">
                            <ScrollAnimation animateIn="fadeInUp" delay={400} animateOnce={true} >
                                <h2 dangerouslySetInnerHTML={{__html: title}} ></h2>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" delay={800} animateOnce={true} >
                                <p className="mb-4" dangerouslySetInnerHTML={{__html: subTitle}} ></p>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" delay={1200} animateOnce={true} >
                                <div className="hero-btn-group">
                                    <Link className={`btn bg-${btnInfo[0].color} rounded-pill mt-3 me-3`} to={btnInfo[0].path}>
                                        {btnInfo[0].text}
                                        <i className={`ms-2 bi ${btnInfo[0].icon}`}></i>
                                    </Link>
                                    <Link className={`btn btn-${btnInfo[1].color} hover-primary mt-3`} to={btnInfo[1].path}>
                                        <i className={`me-2 bi ${btnInfo[1].icon}`}></i>
                                        {btnInfo[1].text}
                                    </Link>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                    
                    {/* Welcome Image */}
                    <div className="col-12 col-sm-9 col-md-6">
                        <ScrollAnimation animateIn="fadeInUp" delay={500} animateOnce={true} >
                            <div className="welcome-thumb">
                                <img src={`${process.env.PUBLIC_URL}/${heroThumbnail}`} alt={title} />
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </div>
    )
}