import TinySlider from "tiny-slider-react";

import TestimonialData from "../../data/about/testimonial-data.json";

export default function Testimonial(props) {
    const { testimonialTitle } = props;

    const testimonialSettings = {
        'items': 4,
        'gutter': 24,
        'slideBy': 1,
        'autoplay': false,
        'autoplayButtonOutput': false,
        'autoplayTimeout': 5000,
        'speed': 750,
        'loop': false,
        'mouseDrag': true,
        'controls': false,
        'navPosition': 'bottom',
        'autoHeight': true,
        'responsive': {
            320: {
                'items': 1
            },
            480: {
                'items': 1.7,
            },
            576: {
                'items': 2,
            },
            992: {
                'items': 3,
            },
            1200: {
                'items': 4,
            }
        }
    };

    const TestimonialCards = TestimonialData.map((item, index) => (
        <div key={index} >
            <div className="card feedback-card p-2">
                <div className="card-body p-4">
                    <div className="client-info d-flex align-items-center">
                        <div className="client-thumb rounded-circle me-1 position-relative">
                            <img className="rounded-circle" src={`${process.env.PUBLIC_URL}/${item.image}`} alt={item.name} />
                        </div>
                        <div className="client-name">
                            <h6 className="fz-16 mb-0">{item.name}</h6>
                            <p className="mb-0 fz-14">@{item.username}</p>
                        </div>
                    </div>
                    <div className="ratings text-warning mt-4 mb-3 fz-14">
                        {(() => {
                            switch (item.ratings) {
                                case 1: return (
                                    <>
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star" />
                                        <i className="bi bi-star" />
                                        <i className="bi bi-star" />
                                        <i className="bi bi-star" />
                                    </>
                                )
                                case 1.5: return (
                                    <>
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-half" />
                                        <i className="bi bi-star" />
                                        <i className="bi bi-star" />
                                        <i className="bi bi-star" />
                                    </>
                                )
                                case 2: return (
                                    <>
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star" />
                                        <i className="bi bi-star" />
                                        <i className="bi bi-star" />
                                    </>
                                )
                                case 2.5: return (
                                    <>
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-half" />
                                        <i className="bi bi-star" />
                                        <i className="bi bi-star" />
                                    </>
                                )
                                case 3: return (
                                    <>
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star" />
                                        <i className="bi bi-star" />
                                    </>
                                )
                                case 3.5: return (
                                    <>
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-half" />
                                        <i className="bi bi-star" />
                                    </>
                                )
                                case 4: return (
                                    <>
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star" />
                                    </>
                                )
                                case 4.5: return (
                                    <>
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-half" />
                                    </>
                                )
                                case 5: return (
                                    <>
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                    </>
                                )
                                default: return (
                                    <>
                                        <i className="bi bi-star" />
                                        <i className="bi bi-star" />
                                        <i className="bi bi-star" />
                                        <i className="bi bi-star" />
                                        <i className="bi bi-star" />
                                    </>
                                )
                            }
                        })()}
                    </div>
                    <p className="text-dark mb-0 fw-bold">{item.testimonial}</p>
                </div>
            </div>
        </div>
    ))

    return(
        <div className="client-feedback-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-9 col-md-8 col-lg-7">
                        <div className="section-heading">
                            <h2>{testimonialTitle}</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="client-feedback-content">
                    <div className="client-feedback-slides">
                        <TinySlider settings={testimonialSettings}>
                            {TestimonialCards}
                        </TinySlider>
                    </div>
                </div>
            </div>
        </div>
    )
}