import DashboardHeader from "../components/dashboard/header/DashboardHeader";
import CreateNewButton from "../components/dashboard/createNew/CreateNewButton";
import ConnectWalletContent from "../components/connetWallet/ConnetWalletContent";
import CurrentWallet from "../components/dashboard/wallet/CurrentWallet";

const DashboardWallet = () => {
    return(
        <>
            <DashboardHeader />

            <CreateNewButton />

            <div className="admin-wrapper">
                <div className="container">
                    
                    <CurrentWallet 
                        title="Your current wallet" 
                        name="Metamask" 
                        image="img/bg-img/metamask.png" 
                        btnInfo={[
                            {
                                text: "Change",
                                color: "danger",
                                path: "/login",
                                icon: "bi-pencil"
                            }
                        ]}
                    />

                    <div className="mb-5" />

                    <div className="row g-4 justify-content-center">
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
                                            icon: ""
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
                                            icon: ""
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
                                            icon: ""
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
                                            icon: ""
                                        }
                                    ]
                                }
                            ]}
                        />
                    </div>
                </div>
            </div>


        </>
    )
}

export default DashboardWallet;