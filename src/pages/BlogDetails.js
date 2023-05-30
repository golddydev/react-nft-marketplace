import { useParams } from "react-router-dom";

import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import BlogDetailsContent from "../components/blog/BlogDetails";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Divider from "../components/divider/Divider";
import BlogDetailsData from "../data/blog/blog-list.json";

export default function BlogDetails() {
    const detailsURLID = useParams();
    const postID = detailsURLID.POSTID;
    const blogID = parseInt(postID, 10);
    const postDetailsData = BlogDetailsData.filter(item => item.id === blogID);

    return(
        <>
            <Header />

            <Breadcrumb 
                breadcrumbTitle="Blog Details" 
                breadcrumbNav={[
                    {
                        navText: "Home",
                        path: "/"
                    },
                    {
                        navText: "Blog",
                        path: "/blog"
                    }
                ]}
            />

            <Divider />

            <BlogDetailsContent 
                data={postDetailsData[0]}
            />

            <Divider />

            <Footer />
        </>
    )
}