import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const HeroTwo = (props) => {
    const { heading, subHeading, buttonInfo } = props;

    return(
        <div className="welcome-area pt-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-xl-8">
                        <div className="welcome-content text-center">
                            <ScrollAnimation animateIn="fadeInUp" delay={400} animateOnce={true} >
                                <h2 dangerouslySetInnerHTML={{__html: heading}}></h2>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" delay={800} animateOnce={true} >
                                <p className="mb-4" dangerouslySetInnerHTML={{__html: subHeading}}></p>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" delay={1200} animateOnce={true} >
                                <Link className={`btn mt-4 btn-${buttonInfo[0].btnColor} rounded-pill`} to={buttonInfo[0].btnURL} >
                                    <i className={`me-2 bi ${buttonInfo[0].btnIcon}`} />
                                    {buttonInfo[0].btnText}
                                </Link>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroTwo;