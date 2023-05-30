import { useState } from "react";
import { Link } from "react-router-dom";

import demoData from "../../data/demos/template-demo.json";

export default function TemplateDemos() {
    const allItems = demoData;
    const [items, setItems] = useState(allItems);

    const filterItems = (catag) => {
        const updatedItems = allItems.filter((elem) => {
            return elem.catagory === catag;
        })
        setItems(updatedItems);
    }

    const demoCards = items.map((elem, index) => (
        <div className="col-12 col-sm-6 col-lg-4" key={index} >
            <div className="card text-center">
                <div className="card-body">
                    <Link className="d-block" to={elem.demoURL} >
                        <img className="rounded" src={`${process.env.PUBLIC_URL}/${elem.demoImage}`} alt={elem.name} />
                    </Link>
                    <h5 className="mb-0 mt-3">
                        {elem.name}
                    </h5>
                </div>
            </div>
        </div>
    ))

    return(
        <div className="demo-page-wrapper">            
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6">
                        <div className="text-center">
                            <h2 className="display-4 fw-bold mb-5">Demo Pages</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="filters-button-group text-center mb-70">
                    <button 
                        className="btn btn-primary btn-sm rounded-pill mb-3 mx-2" 
                        type="button" 
                        onClick={() => setItems(allItems)}
                    >
                        All Pages
                        <span className="badge bg-warning text-dark rounded-pill ms-1 lh-1">35</span>
                    </button>

                    <button 
                        className="btn btn-primary btn-sm rounded-pill mb-3 mx-2" 
                        type="button" 
                        onClick={() => filterItems("home")} 
                    >
                        Home
                        <span className="badge bg-warning text-dark rounded-pill ms-1 lh-1">2</span>
                    </button>

                    <button 
                        className="btn btn-primary btn-sm rounded-pill mb-3 mx-2" 
                        type="button" 
                        onClick={() => filterItems("dashboard")} 
                    >
                        Dashboard
                        <span className="badge bg-warning text-dark rounded-pill ms-1 lh-1">6</span>
                    </button>

                    <button 
                        className="btn btn-primary btn-sm rounded-pill mb-3 mx-2" 
                        type="button" 
                        onClick={() => filterItems("inner")} 
                    >
                        Inner Pages
                        <span className="badge bg-warning text-dark rounded-pill ms-1 lh-1">13</span>
                    </button>

                    <button 
                        className="btn btn-primary btn-sm rounded-pill mb-3 mx-2" 
                        type="button" 
                        onClick={() => filterItems("blog")} 
                    >
                        Blog
                        <span className="badge bg-warning text-dark rounded-pill ms-1 lh-1">2</span>
                    </button>

                    <button 
                        className="btn btn-primary btn-sm rounded-pill mb-3 mx-2" 
                        type="button" 
                        onClick={() => filterItems("others")}
                    >
                        Others
                        <span className="badge bg-warning text-dark rounded-pill ms-1 lh-1">12</span>
                    </button>
                </div>

                <div className="row g-4 justify-content-center">
                    {demoCards}
                </div>
            </div>
        </div>
    )
}