import { Link } from "react-router-dom";

import CollectionData from "../../data/collection/collection.json";

export default function Collection(props) {
    const { heading, buttonText, buttonURL, buttonColor } = props;

    const CollectionDataSlice = CollectionData.slice(0, 3);
    
    const CollectionCards = CollectionDataSlice.map((elem, index) => (
        <div className="col-12 col-md-6 col-lg-4" key={index} >
            <div className="catagory-card card shadow-sm">
                <div className="card-body">
                    <div className="row g-1">
                        <div className="col-6">
                            <img className="rounded" src={`${process.env.PUBLIC_URL}/${elem.firstImage}`} alt={elem.name} />
                            <img className="rounded" src={`${process.env.PUBLIC_URL}/${elem.thirdImage}`} alt={elem.name} />
                        </div>
                        <div className="col-6">
                            <img className="rounded" src={`${process.env.PUBLIC_URL}/${elem.secondImage}`} alt={elem.name} />
                            <img className="rounded" src={`${process.env.PUBLIC_URL}/${elem.fourthImage}`} alt={elem.name} />
                        </div>
                    </div>

                    <div className="row gx-2 mt-3">
                        <div className="col-7">
                            <h5 className="mb-0 d-flex align-items-center">
                                {elem.name}
                                <span className="badge rounded-pill fz-14 bg-primary ms-2">
                                    {elem.totalItems}
                                </span>
                            </h5>
                        </div>
                        <div className="col-5 text-end">
                            <Link className="btn btn-minimal hover-primary" to={elem.buttonURL} >
                                {elem.buttonText}
                                <i className="ms-1 bi bi-arrow-right" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))

    return(
        <div className="collection-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <div className="section-heading">
                            <h2 className="mb-0 ms-3">
                                {heading}
                            </h2>
                        </div>
                    </div>
                    <div className="col-5 text-end">
                        <Link className={`btn rounded-pill btn-outline-${buttonColor} btn-sm border-2`} to={buttonURL} >
                            {buttonText}
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row g-4 justify-content-center">
                    {CollectionCards}
                </div>
            </div>
        </div>
    )
}