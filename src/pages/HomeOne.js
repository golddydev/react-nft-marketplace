import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import HeroOne from "../components/hero/HeroOne";
import Divider from "../components/divider/Divider";
import FeaturedNFT from "../components/featuredNFT/FeaturedNFT";
import TodaysDrop from "../components/todaysDrop/TodaysDrop";
import TopSeller from "../components/topSeller/top-seller";
import TopBuyer from "../components/topBuyer/TopBuyer";
import Process from "../components/process/Process";
import Collection from "../components/collection/Collection";
import DiscoverItems from "../components/discover/Discover";
import LiveAuction from "../components/liveAuction/LiveAuction";
import PopularCollection from "../components/popularCollection/PopularCollection";

export default function HomeOne() {
    return(
        <>
            <Header />

            <HeroOne
                heading="Explore, buy, and sell exceptional NFTs." 
                subHeading="It's crafted with the latest trend of design & coded with all modern approaches." 
                buttonGroup={[
                    {
                        btnColor: "primary",
                        btnText: "Explore Now",
                        btnURL: "/explore1",
                        btnIcon: "bi-arrow-right"
                    },
                    {
                        btnColor: "minimal",
                        btnText: "All Collections",
                        btnURL: "/collections",
                        btnIcon: "bi-grid-3x3-gap"
                    }
                ]}
                welcomeImage="img/illustrator/2.png"
            />

            <Divider />
            
            {/* Data: data > featuredNFT > featured-nft.json */}
            <FeaturedNFT 
                heading="Editor's Picks"
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
                            buttonURL="/featured-items" 
                        />

                        {/* Data: data > topSeller > top-seller.json */}
                        <TopSeller 
                            heading="Top Seller" 
                            buttonText="View All Seller's" 
                            buttonURL="/top-seller" 
                        />

                        {/* Data: data > topBuyer > top-buyer.json */}
                        <TopBuyer 
                            heading="Top Buyer" 
                            buttonText="View All Buyer's" 
                            buttonURL="/top-buyer"
                        />

                    </div>
                </div>
            </div>

            <Divider />

            <LiveAuction 
                backgroundColor="gray" 
                spinnerColor="danger" 
                title="Live Auctions"
                buttonText="View All Auctions" 
                buttonURL="/live-bidding" 
                buttonColor="primary"
            />

            <Divider />
            
            <DiscoverItems 
                title="Discover" 
            />

            <Divider />

            <PopularCollection 
                title="Popular items in last"
            />

            <Divider />

            <Process />

            <Divider />
            
            {/* Data:  */}
            <Collection 
                heading="Browse by category" 
                buttonText="View All Catagories" 
                buttonURL="/collections" 
                buttonColor="primary"
            />

            <Divider />

            <Footer />
        </>
    )
}