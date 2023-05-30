import { Link } from "react-router-dom";

import BlogDetailsData from "../../data/blog/blog-list.json";

const PopularBlogContent = (props) => {
    const { title } = props;

    const popularPostData = BlogDetailsData.filter(item => item.catagory === "popular");
    const PopularBlogCards = popularPostData.slice(0, 7).map((elem, index) => (
        <div key={index} className="popular-blog">
            <Link className="post-title mb-2" to={`${process.env.PUBLIC_URL}/blog-details/${elem.id}`} >
                <span><i className="bi bi-lightning-fill" /></span>
                <h5 className="hover-primary">{elem.title}</h5>
            </Link>
            <p>{elem.excerpt}</p>
            <Link className="btn btn-minimal text-start hover-primary" to={`${process.env.PUBLIC_URL}/blog-details/${elem.id}`} >
                Continue Reading 
                <i className="ms-1 bi bi-arrow-right" />
            </Link>
        </div>
    ))

    return(
        <>
            <h4 className="mb-2">{title}</h4>
            <div className="border-top mb-4" />

            {PopularBlogCards}
        </>
    )
}

export default PopularBlogContent;