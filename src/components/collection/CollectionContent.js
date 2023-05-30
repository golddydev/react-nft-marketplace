import { useState } from 'react';
import { Link } from 'react-router-dom';

import CollectionData from "../../data/collection/collection.json";

const CollectionContent = () => {
    const [count, setCount] = useState(9);
    const [noMorePost, setNoMorePost] = useState(false);
    const countSlice = CollectionData.slice(0, count);

    const handleLoadMore = () => {
        setCount(count + 3);
        if(count >= CollectionData.length) {
            setNoMorePost(true);
        }
    }

    const CollectionCards = countSlice.map((elem, index) => (
        <div className="col-12 col-sm-6 col-lg-4" key={index} >
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

                    <div className="row gx-2 mt-3">
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
        <div className="collection-wrapper">
            <div className="container">
                <div className="row g-4">
                    {CollectionCards}
                </div>
            </div>

            <div className="container">
                <div className="text-center mt-70">
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
    )
}

export default CollectionContent;