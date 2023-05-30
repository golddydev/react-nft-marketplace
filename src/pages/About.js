import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import AboutCard from "../components/about/AboutCard";
import AboutContent from "../components/about/AboutContent";
import CoolFacts from "../components/about/CoolFacts";
import Testimonial from "../components/about/Testimonial";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import CTA from "../components/cta/CTA";
import Divider from "../components/divider/Divider";

export default function About() {
    return(
        <>
            <Header />

            <Breadcrumb 
                breadcrumbTitle="About Us" 
                breadcrumbNav={[
                    {
                        navText: "Home",
                        path: "/"
                    }
                ]}
            />

            <Divider />

            <div className="about-area">
                <AboutCard />

                <Divider />

                <AboutContent 
                    textSectionOrder="10" 
                    textSection={[
                        "<h2 class='h2 fw-bold mb-3'>Digital arts are trends now. Welcome to the world of NFTs.</h2>",
                        "<p class='fz-18'>It's crafted with the latest trend of design coded with all modern approaches. It's a robust & multi-dimensional usable template.</p>",
                        "<a class='btn btn-primary rounded-pill mt-4' href='/#'>Know More</a>"
                    ]}
                    imageOrder="20" 
                    image="img/illustrator/4.png"
                />

                <Divider />

                <CTA 
                    backgroundColor="primary" // try 'success', 'warning', 'danger', 'info' etc 
                    text="Resources for getting started with Funto." 
                    buttonText="Get Started"
                    buttonColor="warning" 
                    buttonURL="#" 
                    buttonIcon=""
                />

                <Divider />

                <AboutContent 
                    textSectionOrder="20" 
                    textSection={[
                        "<h2 class='h2 fw-bold mb-3'>Digital arts are trends now. Welcome to the world of NFTs.</h2>",
                        "<p class='fz-18'>It's crafted with the latest trend of design & coded with all modern approaches. It's a robust & multi-dimensional usable template.</p>",
                        "<a class='btn btn-primary rounded-pill mt-4' href='/#'>Know More</a>"
                    ]}
                    imageOrder="10" 
                    image="img/illustrator/4.png"
                />

                <Divider />

                <CoolFacts 
                    coolFactsData={[
                        {
                            value: "3409",
                            title: "Total Items"
                        },
                        {
                            value: "7831",
                            title: "Users"
                        },
                        {
                            value: "45236",
                            title: "NFTs"
                        },
                        {
                            value: "247",
                            title: "Daily Sale"
                        }
                    ]}
                />

                <Divider />

                <Testimonial 
                    testimonialTitle= "Read some reviews from our beloved clients about our work."
                />
            </div>

            <Divider />
            
            <Footer />
        </>
    )
}