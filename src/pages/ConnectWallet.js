import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Divider from "../components/divider/Divider";
import ConnectWalletContent from "../components/connetWallet/ConnetWalletContent";

const ConnectWallet = () => {
    return(
        <>
            <Header />
            
            <Breadcrumb 
                breadcrumbTitle="Connect Wallet" 
                breadcrumbNav={[
                    {
                        navText: "Home",
                        path: "/"
                    }
                ]}
            />

            <Divider />

            <ConnectWalletContent 
                heading="Connect with one of our available wallet providers." 
                walletCard={[
                    {
                        id: 1,
                        name: "Metamask",
                        image: "img/bg-img/metamask.png",
                        badgeText: "Hot",
                        buttonInfo: [
                            {
                                text: "Connect",
                                color: "warning",
                                path: "/login",
                                icon: "bi-arrow-right"
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: "Coinbase Wallet",
                        image: "img/bg-img/coinbase.png",
                        badgeText: "",
                        buttonInfo: [
                            {
                                text: "Connect",
                                color: "warning",
                                path: "/login",
                                icon: "bi-arrow-right"
                            }
                        ]
                    },
                    {
                        id: 3,
                        name: "Kaikas",
                        image: "img/bg-img/kaikas.png",
                        badgeText: "",
                        buttonInfo: [
                            {
                                text: "Connect",
                                color: "warning",
                                path: "/login",
                                icon: "bi-arrow-right"
                            }
                        ]
                    },
                    {
                        id: 4,
                        name: "Venly",
                        image: "img/bg-img/venly.png",
                        badgeText: "",
                        buttonInfo: [
                            {
                                text: "Connect",
                                color: "warning",
                                path: "/login",
                                icon: "bi-arrow-right"
                            }
                        ]
                    }
                ]}
            />

            <Divider />

            <Footer />
        </>
    )
}

export default ConnectWallet;