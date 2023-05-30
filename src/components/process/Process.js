import ScrollAnimation from "react-animate-on-scroll";
import ProcessData from "../../data/process/process.json";

export default function Process() {
    const ProcessCards = ProcessData.map((elem, index) => (
        <div className="col-12 col-sm-6 col-xl-3" key={index} >
            <ScrollAnimation animateIn="fadeInUp" delay={elem.animationDelay} animateOnce={true} >
                <div className="single-process-card card bg-gray border-0">
                    <div className="card-body p-4 text-center">
                        <img className="mb-3 mx-auto" src={`${process.env.PUBLIC_URL}/${elem.image}`} alt={elem.id} />
                        <h5 className="mb-3">{elem.heading}</h5>
                        <p className="mb-0">{elem.subTitle}</p>
                    </div>
                    <div className="step-number">{elem.id}</div>
                </div>
            </ScrollAnimation>
        </div>
    ))

    return(
        <ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce={true} >
            <div className="process-wrapper">
                <div className="container">
                    <div className="row g-4 g-xxl-5 align-items-center justify-content-center">                    
                        {ProcessCards}
                    </div>
                </div>
            </div>
        </ScrollAnimation>
    )
}