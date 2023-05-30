import { NavLink } from 'react-router-dom';
import NavDropdown from "react-bootstrap/NavDropdown";

export default function FuntoNavbar() {
    return(
        <div className="navbar-nav navbar-nav-scroll my-2 my-lg-0">            
            <NavDropdown className="ft-dd" title="Home" id="Home">
                <NavLink to="/home1">Home Variation 1</NavLink>
                <NavLink to="/home2">Home Variation 2</NavLink>
            </NavDropdown>

            <NavDropdown className="ft-dd" title="Explore" id="Explore">
                <NavLink to="/explore1">Explore 1</NavLink>
                <NavLink to="/explore2">Explore 2</NavLink>
                <NavLink to="/featured-items">Featured Drops</NavLink>
                <NavLink to="/live-bidding">Live Auctions</NavLink>
                <NavLink to="/collections">Collections</NavLink>
                <NavLink to="/top-seller">Top Seller</NavLink>
                <NavLink to="/top-buyer">Top Buyer</NavLink>
                <NavLink to="/live-bid/1">Item Details</NavLink>
            </NavDropdown>

            <NavDropdown className="ft-dd" title="Admin" id="Admin">
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/live-bids">Live Bids</NavLink>
                <NavLink to="/my-collection">My Collection</NavLink>
                <NavLink to="/my-wallet">My Wallet</NavLink>
                <NavLink to="/notifications">Notifications</NavLink>
                <NavLink to="/settings">Settings</NavLink>
            </NavDropdown>

            <NavDropdown className="ft-dd" title="Pages" id="Pages">
                <NavLink to="/activity">Activity</NavLink>
                <NavLink to="/ranking">Ranking</NavLink>
                <NavLink to="/create-new">Create New Items</NavLink>
                <NavLink to="/connet-wallet">Connect Wallet</NavLink>
                <NavLink to="/author/designing_world">Author Profile</NavLink>

                <NavDropdown className="ft-dd" title="Authentification" id="Authentification" drop="end">
                    <NavLink to="/register">Register</NavLink>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/forget-password">Forget Password</NavLink>
                </NavDropdown>

                <NavDropdown className="ft-dd" title="Blog" id="Blog" drop="end">
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/blog-details/1">Blog Details</NavLink>
                </NavDropdown>

                <NavDropdown className="ft-dd" title="Others" id="Others" drop="end">
                    <NavLink to="/about">About Us</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/newsletter">Newsletter</NavLink>
                    <NavLink to="/privacy">Privacy Policy</NavLink>
                    <NavLink to="/terms">Terms</NavLink>
                    <NavLink to="/404">404</NavLink>
                </NavDropdown>

                <NavDropdown className="ft-dd" title="Help Center" id="HelpCenter" drop="end">
                    <NavLink to="/help-center">Help Home</NavLink>
                    <NavLink to="/help-center/licenses">All Questions</NavLink>
                    <NavLink to="/help-question-details/1">Question Details</NavLink>
                </NavDropdown>
            </NavDropdown>

            <NavLink to="/help-center">Help Center</NavLink>
        </div>
    )
}