import { Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

import './assets/css/animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery-nice-select/css/nice-select.css';
import './assets/css/bootstrap-icons.css';
import 'tiny-slider/dist/tiny-slider.css';
import './assets/scss/style.scss';

import DemoPage from './pages/Index';
import HomeOne from "./pages/HomeOne";
import HomeTwo from "./pages/HomeTwo";

import ExploreOne from "./pages/ExploreOne";
import ExploreTwo from "./pages/ExploreTwo";
import FeaturedItems from "./pages/FeaturedItems";
import LiveBidding from "./pages/LiveBidding";
import Collections from "./pages/Collections";
import TopSeller from "./pages/TopSeller";
import TopBuyer from "./pages/TopBuyer";
import LiveAuctionDetails from "./components/liveAuction/LiveAuctionDetails";
import FeaturedNFTDetails from "./components/featuredNFT/FeaturedNFTDetails";
import DiscoverNFTDetails from "./components/discover/DiscoverNFTDetails";

import Dashboard from "./dashboard/Dashboard";
import DashboardLiveBids from "./dashboard/LiveBids";
import DashboardCollection from "./dashboard/MyCollection";
import DashboardWallet from "./dashboard/MyWallet";
import DashboardNotification from "./dashboard/Notifications";
import DashboardNotificationDetails from "./dashboard/NotificationDetails";
import DashboardSettings from "./dashboard/Settings";

import Activity from "./pages/Activity";
import RankingTable from "./pages/Ranking";
import CreateNew from "./pages/CreateNew";
import ConnectWallet from "./pages/ConnectWallet";
import Author from "./pages/Author";

import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";

import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Newsletter from "./pages/Newsletter";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

import HelpCenter from "./pages/HelpCenter";
import CatagoryQuestions from "./components/helpCenter/CatagoryQuestions";
import HelpQuestionDetails from "./components/helpCenter/QuestionDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<DemoPage />} />
        <Route path="/home1" element={<HomeOne />} />
        <Route path="/home2" element={<HomeTwo />} />

        <Route path="/explore1" element={<ExploreOne />} />
        <Route path="/explore2" element={<ExploreTwo />} />
        <Route path="/featured-items" element={<FeaturedItems />} />
        <Route path="/live-bidding" element={<LiveBidding />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/top-seller" element={<TopSeller />} />
        <Route path="/top-buyer" element={<TopBuyer />} />
        <Route path="/live-bid/:BIDSID" element={<LiveAuctionDetails />} />
        <Route path="/featured-items/:FEATUREDID" element={<FeaturedNFTDetails />} />
        <Route path="/discover-items/:DISCOVERID" element={<DiscoverNFTDetails />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/live-bids" element={<DashboardLiveBids />} />
        <Route path="/my-collection" element={<DashboardCollection />} />
        <Route path="/my-wallet" element={<DashboardWallet />} />
        <Route path="/notifications" element={<DashboardNotification />} />
        <Route path="/notification-details/:NOTIFYID" element={<DashboardNotificationDetails />} />
        <Route path="/settings" element={<DashboardSettings />} />

        <Route path="/activity" element={<Activity />} />
        <Route path="/ranking" element={<RankingTable />} />
        <Route path="/create-new" element={<CreateNew />} />
        <Route path="/connet-wallet" element={<ConnectWallet />} />
        <Route path="/author/:AUTHORUSERNAME" element={<Author />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details/:POSTID" element={<BlogDetails />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/help-center/:CATAGORY" element={<CatagoryQuestions />} />
        <Route path="/help-question-details/:CATAGORYID" element={<HelpQuestionDetails />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Scroll To Top */}
      <ScrollToTop 
        id="scrollTopButton" 
        width="14" 
        height="14" 
        component={<i className="bi bi-arrow-up-short" />} 
        color="white" 
        smooth 
        top={200} 
      />
    </div>
  );
}

export default App;