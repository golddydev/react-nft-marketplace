import featureData from "../../data/templateFeature/template-feature.json";

export default function TemplateFeature() {
    const featureCards = featureData.map((elem, index) => (
        <div className="col-12 col-sm-6 col-xl-3" key={index} >
            <div className="card about-card shadow-sm">
                <div className="card-body py-5">
                    <div className={`icon bg-${elem.iconBackgroundColor}`} >
                        <img src={`${process.env.PUBLIC_URL}/${elem.icon}`} alt={elem.title} />
                    </div>
                    <h5 className="mb-0">{elem.title}</h5>
                </div>
            </div>
        </div>
    ))

    return(
        <div className="about-area">
            <div className="container">
                <div className="row g-4">
                    {featureCards}
                </div>
            </div>
        </div>
    )
}