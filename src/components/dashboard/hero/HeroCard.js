import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const HeroCard = (props) => {
    const {backgroundImage, heading, subHeading, buttonGroup} = props;

    return(
        <>
            <div className="col-12">
                <ScrollAnimation animateIn="fadeInUp" delay={500} animateOnce={true} >
                    <div className="card dashboard-hero-card p-2 border-0 bg-img shadow-sm" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/${backgroundImage})`}}>
                        <div className="card-body p-4">
                            <h3 className="mb-3 text-white">
                                {heading}
                            </h3>
                            <p className="mb-4 text-white">
                                {subHeading}
                            </p>
                            <div className="button-groups">
                                {buttonGroup.map((btn, index) => (
                                    <Link key={index} className={`btn btn-sm btn-${btn.style} rounded-pill me-3`} to={btn.path}>
                                        {btn.text}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </>
    )
}

export default HeroCard;