import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Divider from "../components/divider/Divider";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import NewsletterContent from "../components/newsletter/NewsletterContent";

const Newsletter = () => {
    return(
        <>
            <Header />
            
            <Breadcrumb 
                breadcrumbTitle="Newsletter" 
                breadcrumbNav={[
                    {
                        navText: "Home",
                        path: "/"
                    }
                ]}
            />

            <Divider />

            <NewsletterContent 
                title="Subscribe to our newsletter" 
                subTitle="We will notify you when we are live." 
                formInfo={[
                    {
                        inputPlaceholder: "Type your mail",
                        helperText: "We'll never share your email with anyone else.",
                        helperIcon: "bi-lock",
                        buttonColor: "primary",
                        buttonText: "Subscribe Now"
                    }
                ]}
            />

            <Divider />

            <Footer />
        </>
    )
}

export default Newsletter;