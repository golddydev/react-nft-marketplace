import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import ContactContent from "../components/contact/ContactContent";
import Divider from "../components/divider/Divider";

const Contact = () => {
    return(
        <>
            <Header />
            
            <Breadcrumb 
                breadcrumbTitle="Contact" 
                breadcrumbNav={[
                    {
                        navText: "Home",
                        path: "/"
                    }
                ]}
            />

            <Divider />
            
            {/* Contact Content */}
            <ContactContent 
                contactTitle="Let's talk about all things!" 
                contactSubTitle="Write to us or give us a call. We will reply to you as soon as possible. But yes, it can take up to 24 hours."
                mapIframeSource="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14047.882048906753!2d-0.14268817855593444!3d51.50701170390822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sbd!4v1570696571917!5m2!1sen!2sbd"
            />

            <Divider />

            <Footer />
        </>
    )
}

export default Contact;