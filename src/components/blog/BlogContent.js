import { useState } from "react";
import { Link } from "react-router-dom";

import PopularBlogContent from "./PopularBlogContent";
import BlogCardData from "../../data/blog/blog-list.json";

export default function BlogContent() {
    const [count, setCount] = useState(9);
    const [noMorePost, setNoMorePost] = useState(false);
    const countSlice = BlogCardData.slice(0, count);

    const handleLoadMore = () => {
        setCount(count + 3);
        if(count >= BlogCardData.length) {
            setNoMorePost(true);
        }
    }

    const BlogCards = countSlice.map((elem, index) => (
        <div key={index} className="col-12 col-lg-6 col-xxl-4">
            <div className="card blog-card border-0 bg-transparent bg-transparent">
                <div className="img-wrap">
                    <Link to={`${process.env.PUBLIC_URL}/blog-details/${elem.id}`} >
                        <img src={`${process.env.PUBLIC_URL}/${elem.image}`} alt={elem.title} />
                    </Link>
                </div>
                <div className="card-body p-3">
                    <Link className="post-title mb-2 hover-primary" to={`${process.env.PUBLIC_URL}/blog-details/${elem.id}`} >
                        {elem.title}
                    </Link>
                    <p className="mb-4">{elem.excerpt}</p>
                    <Link className="btn btn-primary btn-sm rounded-pill" to={`${process.env.PUBLIC_URL}/blog-details/${elem.id}`} >
                        Read more
                        <i className="ms-1 bi bi-arrow-right" />
                    </Link>
                </div>
            </div>
        </div>
    ))

    return(
        <div className="blog-wrap">
            <div className="container">
                <div className="row g-5">
                    <div className="col-12 col-sm-7 col-lg-8 col-xxl-9">
                        <div className="row g-4">
                            {BlogCards}
                        </div>

                        <div className="text-center mt-5">
                            <button 
                                className="btn btn-dark px-4 rounded-pill" 
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

                    <div className="col-12 col-sm-5 col-lg-4 col-xxl-3">                        
                        <PopularBlogContent
                            title="Popular News"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}