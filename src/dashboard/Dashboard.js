import ActivityTab from "../components/dashboard/activityTab/ActivityTab";
import MonthlyVisitorChart from "../components/dashboard/charts/MonthlyVisitorChart";
import PriceHistory from "../components/dashboard/charts/PriceHistory";
import StatisticsChart from "../components/dashboard/charts/StatisticsChart";
import StatisticsChartTwo from "../components/dashboard/charts/StatisticsChartTwo";
import CreateNewButton from "../components/dashboard/createNew/CreateNewButton";
import FeaturedCard from "../components/dashboard/featuredCard/FeaturedCard";
import DashboardHeader from "../components/dashboard/header/DashboardHeader";
import HeroCard from "../components/dashboard/hero/HeroCard";
import TodaysPick from "../components/dashboard/todaysPick/TodaysPick";
import TopAuthor from "../components/dashboard/topAuthor/TopAuthor";
import TopBuyer from "../components/dashboard/topBuyer/TopBuyer";
import TrendingAuction from "../components/dashboard/trendingAuction/TrendingAuction";

const Dashboard = () => {
    return(
        <>
            <DashboardHeader />

            <CreateNewButton />

            <div className="admin-wrapper">
                <div className="container">
                    <div className="row g-4">
                    
                        <div className="col-12 col-xxl-6">
                            <div className="row g-4">
                                
                                {/* Hero Card */}
                                <HeroCard 
                                    backgroundImage="img/bg-img/44.jpg" 
                                    heading="Explore, buy, and sell exceptional NFTs." 
                                    subHeading="It's crafted with the latest trend of design & coded with all modern approaches."
                                    buttonGroup={[
                                        {
                                            style: "warning",
                                            path: "/explore1",
                                            text: "Discover"
                                        },
                                        {
                                            style: "dark",
                                            path: "/create-new",
                                            text: "Create"
                                        }
                                    ]}
                                />


                                {/* Statistics Chart */}
                                <StatisticsChart 
                                    title="Sales" 
                                    subTitle="Last 10 days"
                                />

                                {/* Statistics Chart */}
                                <StatisticsChartTwo 
                                    title="Revenue" 
                                    subTitle="Last 10 days"
                                />

                            </div>
                        </div>
                        
                        {/* Monthly Visitor Chart */}
                        <MonthlyVisitorChart 
                            title="Monthly Visitors" 
                        />

                        {/* Activity Tab */}
                        <ActivityTab />

                        {/* Trending Auctions */}
                        <TrendingAuction 
                            title="Trending Auctions" 
                            icon="img/core-img/fire2.png"
                        />

                        <FeaturedCard 
                            title="Top NFTs" 
                            buttonText="View all NFTs" 
                            buttonPath="/explore1"
                        />

                        <PriceHistory 
                            title="Price History" 
                            icon="img/core-img/ethereum.png" 
                        />

                        <TodaysPick 
                            title="Top Seller" 
                            btnPath="/featured-items" 
                            btnText="View all"
                        />

                        <TopAuthor 
                            title="Top Authors"
                        />

                        <TopBuyer 
                            title="Top Buyers" 
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;