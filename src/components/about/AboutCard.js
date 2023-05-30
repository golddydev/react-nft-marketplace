import AboutCardData from "../../data/about/about-card.json";

export default function AboutCard() {
    const AboutCards = AboutCardData.map((elem, index) => (
        <div className="col-12 col-sm-6 col-xl-3" key={index} >
            <div className="card about-card shadow-sm">
                <div className="card-body py-4">
                    <div className={`icon bg-${elem.iconColor}`} >
                        <i className={`bi ${elem.icon}`} />
                    </div>
                    <h4 className="mb-3">
                        {elem.title}
                    </h4>
                    <p className="mb-0">
                        {elem.subTitle}
                    </p>
                </div>
            </div>
        </div>
    ))

    return(
        <div className="container">
            <div className="row g-4">
                {AboutCards}
            </div>
        </div>
    )
}