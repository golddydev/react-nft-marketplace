import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ForgetPasswordContent from "../components/authentification/ForgetPassword";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Divider from "../components/divider/Divider";

export default function ForgetPassword() {
    return(
        <>
            <Header />

            <Breadcrumb 
                breadcrumbTitle="Forget Password" 
                breadcrumbNav={[
                    {
                        navText: "Home",
                        path: "/"
                    }
                ]}
            />

            <Divider />
            
            <ForgetPasswordContent 
                title="Reset Password" 
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