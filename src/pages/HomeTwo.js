import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Divider from "../components/divider/Divider";
import TodaysDrop from "../components/todaysDrop/TodaysDrop";
import TopSeller from "../components/topSeller/top-seller";
import TopBuyer from "../components/topBuyer/TopBuyer";
import Process from "../components/process/Process";
import LiveAuction from "../components/liveAuction/LiveAuction";
import PopularCollection from "../components/popularCollection/PopularCollection";
import HeroTwo from "../components/hero/HeroTwo";
import CTA from "../components/cta/CTA";
import AppDownload from "../components/appDownload/AppDownload";
import DiscoverTwo from "../components/discover/DiscoverTwo";

export default function HomeTwo() {
    return(
        <>
            <Header />

            <HeroTwo 
                heading="Digital arts are trends now. Welcome to the world of NFTs."
                subHeading="It's crafted with the latest trend of design & coded with all modern approaches. It's a robust & multi-dimensional usable template." 
                buttonInfo={[
                    {
                        btnColor: "primary",
                        btnText: "View All Collections",
                        btnURL: "/explore2",
                        btnIcon: "bi-grid-3x3-gap"
                    }
                ]}
            />

            <LiveAuction 
                backgroundColor="" 
                spinnerColor="danger" 
                title="Live Bid"
                buttonText="View All Bids" 
                buttonURL="/live-bidding" 
                buttonColor="primary"
            />

            <Process />

            <Divider />

            <PopularCollection 
                title="Popular items in last"
            />

            <Divider />

            <DiscoverTwo 
                title="Discover Items"
            />

            <Divider />
            
            {/* Todays Drop, Top Seller, Top Buyer */}
            <div className="top-seller-wrapper">
                <div className="container">
                    <div className="row g-4 g-lg-5 justify-content-center">

                        {/* Data: data > todaysDrop > todays-drop.json */}
                        <TodaysDrop 
                            heading="Today's Drops" 
                            buttonText="View All Drops" 
                            buttonURL="featured-items" 
                        />

                        {/* Data: data > topSeller > top-seller.json */}
                        <TopSeller 
                            heading="Top Seller" 
                            buttonText="View All Seller's" 
                            buttonURL="top-seller" 
                        />

                        {/* Data: data > topBuyer > top-buyer.json */}
                        <TopBuyer 
                            heading="Top Buyer" 
                            buttonText="View All Buyer's" 
                            buttonURL="top-buyer"
                        />

                    </div>
                </div>
            </div>            

            <Divider />

            <CTA 
                backgroundColor="primary" // try 'success', 'warning', 'danger', 'info' etc 
                text="Resources for getting started with Funto." 
                buttonText="Get Started"
                buttonColor="warning" 
                buttonURL="/help-center" 
                buttonIcon=""
            />

            <Divider />

            <AppDownload 
                heading="Stay connected <br /> to all your devices." 
                subHeading="Download our mobile apps today." 
                qrCodeImage="img/core-img/qr-code.svg" 
                appDownloadButtons={[
                    {
                        id: 1,
                        icon: "img/core-img/google-play.png",
                        path: "#"
                    },
                    {
                        id: 2,
                        icon: "img/core-img/app-store.png",
                        path: "#"
                    }
                ]}
                rightSideImage="img/illustrator/2.png"
            />

            <Divider />

            <Footer />
        </>
    )
}