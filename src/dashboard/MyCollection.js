import { useState } from "react";
import { Link } from "react-router-dom";

import DashboardHeader from "../components/dashboard/header/DashboardHeader";
import CreateNewButton from "../components/dashboard/createNew/CreateNewButton";
import MyCollectionData from "../data/dashboard/collection-data.json";

const DashboardCollection = () => {
    const [count, setCount] = useState(6);
    const [noMorePost, setNoMorePost] = useState(false);
    const countSlice = MyCollectionData.slice(0, count);

    const handleLoadMore = () => {
        setCount(count + 3);
        if(count >= MyCollectionData.length) {
            setNoMorePost(true);
        }
    }

    const CollectionCards = countSlice.map((elem, index) => (
        <div className="col-12 col-md-6 col-xxl-4" key={index} >
            <div className="catagory-card card shadow-sm">
                <div className="card-body">
                    <div className="row gx-1">
                        <div className="col-6">
                            <img className="rounded" src={`${process.env.PUBLIC_URL}/${elem.firstImage}`} alt={elem.name} />
                            <img className="rounded" src={`${process.env.PUBLIC_URL}/${elem.thirdImage}`} alt={elem.name} />
                        </div>
                        <div className="col-6">
                            <img className="rounded" src={`${process.env.PUBLIC_URL}/${elem.secondImage}`} alt={elem.name} />
                            <img className="rounded" src={`${process.env.PUBLIC_URL}/${elem.fourthImage}`} alt={elem.name} />
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-8">
                            <h5 className="mb-0 d-flex align-items-center">
                                {elem.name}
                                <span className="badge rounded-pill fz-14 bg-primary ms-2">
                                    {elem.totalItems}
                                </span>
                            </h5>
                        </div>
                        <div className="col-4 text-end">
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
        <>
            <DashboardHeader />

            <CreateNewButton />

            <div className="admin-wrapper">
                <div className="container">
                    <h5 className="mb-3">Your collections</h5>
                    
                    <div className="row g-4">
                        {CollectionCards}
                    </div>

                    <div className="text-center mt-5">
                        <button 
                            className="btn btn-primary px-4 rounded-pill" 
                            onClick={() => handleLoadMore()} 
                            disabled={noMorePost ? "disabled" : null}
                        >
                            {noMorePost ? 
                            (<span className="d-flex align-items-center">
                                No Items Here
                                <i className="ms-2 bi bi-emoji-frown" />
                            </span>) : 
                            (<span className="d-flex align-items-center">
                                View More Items
                                <i className="ms-2 bi bi-arrow-repeat" />
                            </span>)}
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DashboardCollection;