import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import DemoHero from "../components/hero/DemoHero";
import Divider from "../components/divider/Divider";
import CTA from "../components/cta/CTA";
import TemplateFeature from "../components/feature/TemplateFeature";
import TemplateDemos from "../components/demos/TemplateDemos";

export default function DemoPage() {
    return(
        <>
            <Header />

            <DemoHero 
                title="Build an excellent NFTs website with Funto." 
                subTitle="It's crafted with the latest trend of design & coded with all modern approaches." 
                btnInfo={[
                    {
                        color: "primary",
                        text: "Explore Now",
                        path: "/home1",
                        icon: "bi-arrow-right"
                    },
                    {
                        color: "minimal",
                        text: "Go Dashboard",
                        path: "/dashboard",
                        icon: "bi-pie-chart-fill"
                    }
                ]}
                heroThumbnail="img/illustrator/2.png"
            />

            <Divider />

            <CTA 
                backgroundColor="primary" // try 'success', 'warning', 'danger', 'info' etc 
                text="Beautifully designed & coded, NFT buying & selling React JS template."
                buttonText="Purchase Now"
                buttonColor="warning" 
                buttonURL="https://themeforest.net/item/funto-react-nft-marketplace/36593340" 
                buttonIcon=""
            />

            <Divider />

            <TemplateFeature />

            <Divider />

            <TemplateDemos />

            <Divider />

            <CTA 
                backgroundColor="danger" // try 'success', 'warning', 'danger', 'info' etc 
                text="Feeling the love with this React template?"
                buttonText="Purchase Now"
                buttonColor="dark" 
                buttonURL="https://themeforest.net/item/funto-react-nft-marketplace/36593340" 
                buttonIcon=""
            />

            <Divider />

            <Footer />
        </>
    )
}