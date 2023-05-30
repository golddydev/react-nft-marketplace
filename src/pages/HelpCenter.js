import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Divider from "../components/divider/Divider";
import CatagoryCard from "../components/helpCenter/CatagoryCard";
import HelpSearchForm from "../components/helpCenter/HelpSearchForm";
import HelpCatagoryData from "../data/helpCenter/help-all-questions.json";

export default function HelpCenter() {
    const AllItems = HelpCatagoryData;

    const CatagoriesPath = [
        "getting-started",
        "usage-guides",
        "licenses",
        "copyright"
    ]

    const Cata0 = AllItems.filter(elem => elem.catagory === CatagoriesPath[0]).length;
    const Cata1 = AllItems.filter(elem => elem.catagory === CatagoriesPath[1]).length;
    const Cata2 = AllItems.filter(elem => elem.catagory === CatagoriesPath[2]).length;
    const Cata3 = AllItems.filter(elem => elem.catagory === CatagoriesPath[3]).length;

    const catagoriesLists = [
        {
            path: CatagoriesPath[0],
            icon: "img/core-img/folders.png",
            title: "Getting Started",
            quantity: Cata0
        },
        {
            path: CatagoriesPath[1],
            icon: "img/core-img/pie-chart.png",
            title: "Usage Guide",
            quantity: Cata1
        },
        {
            path: CatagoriesPath[2],
            icon: "img/core-img/licensing.png",
            title: "Licenses",
            quantity: Cata2
        },
        {
            path: CatagoriesPath[3],
            icon: "img/core-img/law.png",
            title: "Copyright Infringement",
            quantity: Cata3
        }
    ]

    return(
        <>
            <Header />

            <Breadcrumb 
                breadcrumbTitle="Help Center" 
                breadcrumbNav={[
                    {
                        navText: "Home",
                        path: "/"
                    }
                ]}
            />

            <Divider />

            <div className="help-center-wrapper">
                {/* Search Form */}
                <HelpSearchForm 
                    heading="How can I help you?"
                />

                <h5 className="my-5 text-center">Or Browse Catagories</h5>
                
                {/* Help Center Card */}
                <div className="container">
                    <div className="row g-4 justify-content-center">
                        {catagoriesLists.map((elem, index) => (
                            <CatagoryCard 
                                key={index} 
                                catagoryPath={elem.path} 
                                icon={elem.icon} 
                                title={elem.title}
                                resourceQuantity={elem.quantity}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <Divider />

            <Footer />
        </>
    )
}