import CountUp from 'react-countup';
import TrackVisibility from 'react-on-screen';

const CoolFacts = (props) => {
    const {coolFactsData} = props;

    const CoolFactsCards = coolFactsData.map((elem, index) => (
        <div className="col-6 col-md-3" key={index} >
            <div className="single-counter text-center">
                <h4 className="counter h2 fw-bold">
                    <TrackVisibility once>
                        {({ isVisible }) => (
                            <div>
                                {isVisible ? <CountUp duration={2} end={elem.value} /> : 0}
                            </div>
                        )}
                    </TrackVisibility>
                </h4>
                <h6 className="mb-0">
                    {elem.title}
                </h6>
            </div>
        </div>
    ))

    return(
        <div className="container">
            <div className="counter-wrap p-5 shadow border">
                <div className="row g-4 justify-content-center">
                    {CoolFactsCards}
                </div>
            </div>
        </div>
    )
}

export default CoolFacts;