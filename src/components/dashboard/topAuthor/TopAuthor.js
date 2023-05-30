import { Link } from "react-router-dom";
import TinySlider from "tiny-slider-react";
import ScrollAnimation from "react-animate-on-scroll";

const TopAuthor = (props) => {

    const slideData = [
        {
            path: "#",
            image: "img/bg-img/u1.jpg"
        },
        {
            path: "#",
            image: "img/bg-img/u2.jpg"
        },
        {
            path: "#",
            image: "img/bg-img/u3.jpg"
        },
        {
            path: "#",
            image: "img/bg-img/u4.jpg"
        },
        {
            path: "#",
            image: "img/bg-img/u1.jpg"
        },
        {
            path: "#",
            image: "img/bg-img/u2.jpg"
        },
        {
            path: "#",
            image: "img/bg-img/u3.jpg"
        },
        {
            path: "#",
            image: "img/bg-img/u4.jpg"
        }
    ]

    const settings = {
        'items': 7,
        'gutter': 16,
        'slideBy': 1,
        'autoplay': true,
        'autoplayButtonOutput': false,
        'autoplayTimeout': 5000,
        'speed': 750,
        'loop': true,
        'mouseDrag': true,
        'nav': false,
        'controls': true,
        'controlsPosition': 'top',
        'controlsText': [('<i class="bi bi-arrow-left"></i>'), ('<i class="bi bi-arrow-right"></i>')],
        'responsive': {
            320: {
                'items': 3,
            },
            480: {
                'items': 4,
            },
            576: {
                'items': 5,
            },
            768: {
                'items': 4,
            },
            992: {
                'items': 4,
            },
            1200: {
                'items': 5,
            },
            1400: {
                'items': 7,
            }
        }
    };

    return(
        <div className="col-12 col-md-6">
            <ScrollAnimation animateIn="fadeInUp" delay={500} animateOnce={true} >
                <div className="card border-0 shadow-sm">
                    <div className="card-body p-4">
                        <h5 className="mb-3">{props.title}</h5>

                        <div className="top-author-slide-wrap">
                            <div className="top-authors-slide">
                                <TinySlider settings={settings}>
                                    {slideData.map((elem, index) => (
                                        <div key={index} >
                                            <Link to={elem.path} >
                                                <img src={`${process.env.PUBLIC_URL}/${elem.image}`} alt="" />
                                            </Link>
                                        </div>
                                    ))}
                                </TinySlider>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    )
}

export default TopAuthor;