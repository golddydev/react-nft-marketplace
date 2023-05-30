import ScrollAnimation from "react-animate-on-scroll";

export default function CTA(props) {    
    const {backgroundColor, text, buttonText, buttonColor, buttonURL, buttonIcon} = props;

    return(
        <div className="container">
            <div className={`cta-text bg-gradient p-4 p-sm-5 bg-${backgroundColor}`} >
                <div className="row align-items-center">
                    <div className="col-12 col-md-8 col-lg-9">
                        <ScrollAnimation animateIn="fadeInUp" delay={500} animateOnce={true} >
                            <h2 dangerouslySetInnerHTML={{__html: text}} className="mb-3 fw-bold mb-md-0"></h2>
                        </ScrollAnimation>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3">
                        <div className="text-md-end">
                            <ScrollAnimation animateIn="fadeInUp" delay={750} animateOnce={true} >
                                <a className={`btn btn-${buttonColor} rounded-pill`} target="_blank" rel="noreferrer" href={buttonURL} >
                                    <i className={buttonIcon} ></i>
                                    {buttonText}
                                </a>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}