import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

export default function HeroOne(props) {
    const {heading, subHeading, buttonGroup, welcomeImage } = props;

    return(
        <div className="welcome-area pt-120">
            <div className="container">
                <div className="row align-items-center">
                    {/* Welcome Content */}
                    <div className="col-12 col-sm-10 col-md-6">
                        <div className="welcome-content mb-5 mb-md-0">
                            <ScrollAnimation animateIn="fadeInUp" delay={400} animateOnce={true} >
                                <h2 dangerouslySetInnerHTML={{__html: heading}} ></h2>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" delay={800} animateOnce={true} >
                                <p className="mb-4" dangerouslySetInnerHTML={{__html: subHeading}} ></p>
                            </ScrollAnimation>

                            {/* Button Group */}
                            <ScrollAnimation animateIn="fadeInUp" delay={1200} animateOnce={true} >
                                <div className="hero-btn-group">
                                    <Link className={`btn btn-${buttonGroup[0].btnColor} rounded-pill mt-3 me-3`} to={buttonGroup[0].btnURL} >
                                        {buttonGroup[0].btnText}
                                        <i className={`ms-2 bi ${buttonGroup[0].btnIcon}`} />
                                    </Link>
                                    <Link className={`btn btn-${buttonGroup[1].btnColor} hover-primary mt-3`} to={buttonGroup[1].btnURL} >
                                        <i className={`me-2 bi ${buttonGroup[1].btnIcon}`} />
                                        {buttonGroup[1].btnText}
                                    </Link>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>

                    {/* Welcome Thumb */}
                    <div className="col-12 col-sm-9 col-md-6">
                        <ScrollAnimation animateIn="fadeInUp" delay={500} animateOnce={true} >
                            <div className="welcome-thumb">
                                <img src={`${process.env.PUBLIC_URL}/${welcomeImage}`} alt="Welcome" />
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </div>
    )
}