import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import BlogContent from "../components/blog/BlogContent";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Divider from "../components/divider/Divider";

const Blog = () => {
    return(
        <>
            <Header />

            <Breadcrumb 
                breadcrumbTitle="Blog" 
                breadcrumbNav={[
                    {
                        navText: "Home",
                        path: "/"
                    }
                ]}
            />

            <Divider />

            <BlogContent />

            <Divider />

            <Footer />
        </>
    )
}

export default Blog;