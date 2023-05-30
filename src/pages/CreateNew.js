import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import CreateNewContent from "../components/createNew/CreateNewContent";
import Divider from "../components/divider/Divider";

export default function CreateNew() {
    return(
        <>
            <Header />

            <Breadcrumb 
                breadcrumbTitle="Create New" 
                breadcrumbNav={[
                    {
                        navText: "Home",
                        path: "/"
                    }
                ]}
            />

            <Divider />

            <CreateNewContent />
            
            <Divider />

            <Footer />
        </>
    )
}