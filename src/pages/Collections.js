import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import CollectionContent from "../components/collection/CollectionContent";
import Divider from "../components/divider/Divider";

export default function Collections() {
    return(
        <>
            <Header />

            <Breadcrumb 
                breadcrumbTitle="Collection" 
                breadcrumbNav={[
                    {
                        navText: "Home",
                        path: "/"
                    }
                ]}
            />

            <Divider />
            
            <CollectionContent />

            <Divider />

            <Footer />
        </>
    )
}