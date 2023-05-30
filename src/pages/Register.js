import RegisterContent from "../components/authentification/Register";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Divider from "../components/divider/Divider";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

export default function Register() {
    return(
        <>
            <Header />

            <Breadcrumb 
                breadcrumbTitle="Register" 
                breadcrumbNav={[
                    {
                        navText: "Home",
                        path: "/"
                    }
                ]}
            />

            <Divider />

            <RegisterContent
                title="Create your free account" 
                subTitle="Already have an account?" 
                button={[
                    {
                        text: "Log In",
                        path: "/login"
                    }

                ]}
                image="img/illustrator/4.png"
            />

            <Divider />

            <Footer />
        </>
    )
}