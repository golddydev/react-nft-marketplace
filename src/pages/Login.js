import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import LoginContent from "../components/authentification/Login";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Divider from "../components/divider/Divider";

export default function Login() {
    return(
        <>
            <Header />

            <Breadcrumb 
                breadcrumbTitle="Login" 
                breadcrumbNav={[
                    {
                        navText: "Home",
                        path: "/"
                    }
                ]}
            />

            <Divider />

            <LoginContent
                title="Welcome Back!" 
                subTitle="Didn't have an account?" 
                button={[
                    {
                        text: "Register now!",
                        path: "/register"
                    }
                ]} 
                image="img/illustrator/4.png"
            />

            <Divider />

            <Footer />
        </>
    )
}