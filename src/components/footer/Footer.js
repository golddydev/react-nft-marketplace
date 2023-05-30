import FooterNav from "./FooterNav";
import LeftWidget from "./LeftWidget";
import FooterWidget from "./Widget";

export default function Footer() {

    const footerBgImg = "img/bg-img/1.jpg";
    const footerBgShape = "img/core-img/shape1.png";

    return(
        <footer className="footer-area pb-120 pt-120" style={{backgroundImage: `url('${process.env.PUBLIC_URL}/${footerBgImg}')`}}>
            
            {/* Background Shape */}
            <img className="footer-bg-shape" src={`${process.env.PUBLIC_URL}/${footerBgShape}`} alt="Shape" />
            
            <div className="container">
                <div className="row">
                    {/* Footer Widget */}
                    <LeftWidget 
                        lightLogo="img/core-img/logo.png" 
                        darkLogo="img/core-img/logo-white.png" 
                        subText="It's crafted with the latest trend of design & coded with all modern approaches." 
                        contactInfo="Call: +123 456 789 <br /> Email: help@example.com"                        
                        socialVisibility="visible" // try 'visible' or 'hidden'
                        socialTitle="Join the community" 
                        socialLists={[
                            {
                                tootipPosition: "top",
                                title: "Facebook",
                                icon: "img/core-img/icons8-facebook.svg",
                                url: "/"
                            },
                            {
                                tootipPosition: "top",
                                title: "Twitter",
                                icon: "img/core-img/icons8-twitter.svg",
                                url: "/"
                            },
                            {
                                tootipPosition: "top",
                                title: "Instagram",
                                icon: "img/core-img/icons8-instagram.svg",
                                url: "/"
                            },
                            {
                                tootipPosition: "top",
                                title: "Slack",
                                icon: "img/core-img/icons8-slack.svg",
                                url: "/"
                            },
                            {   
                                tootipPosition: "top",
                                title: "Youtube",
                                icon: "img/core-img/icons8-player.svg",
                                url: "/"
                            }
                        ]} 
                        newsletterVisibility="visible" // try 'visible' or 'hidden'
                    />

                    {/* Footer Widget */}
                    <div className="col-12 col-lg-7">
                        <div className="row g-4">

                            {/* Single Widget */}
                            <FooterWidget
                                widgetTitle="Explore" 
                                navList={[
                                    {
                                        text: "Featured Drops",
                                        url: "/featured-items"
                                    },
                                    {
                                        text: "Live Auctions",
                                        url: "/live-bidding"
                                    },
                                    {
                                        text: "Collections",
                                        url: "/collections"
                                    },
                                    {
                                        text: "Top Seller",
                                        url: "/top-seller"
                                    },
                                    {
                                        text: "Top Buyer",
                                        url: "/top-buyer"
                                    },
                                    {
                                        text: "Item Details",
                                        url: "/live-bid/1"
                                    }
                                ]}
                            />

                            {/* Single Widget */}
                            <FooterWidget
                                widgetTitle="Marketplace" 
                                navList={[
                                    {
                                        text: "Art",
                                        url: "#"
                                    },
                                    {
                                        text: "Cards",
                                        url: "#"
                                    },
                                    {
                                        text: "Collectibles",
                                        url: "#"
                                    },
                                    {
                                        text: "Domain",
                                        url: "#"
                                    },
                                    {
                                        text: "Photos",
                                        url: "#"
                                    },
                                    {
                                        text: "Sports",
                                        url: "#"
                                    },
                                    {
                                        text: "Videos",
                                        url: "#"
                                    }
                                ]}
                            />

                            {/* Single Widget */}
                            <FooterWidget
                                widgetTitle="Company" 
                                navList={[
                                    {
                                        text: "Forum",
                                        url: "#"
                                    },
                                    {
                                        text: "Licences",
                                        url: "#"
                                    },
                                    {
                                        text: "Careers",
                                        url: "#"
                                    },
                                    {
                                        text: "Conditions",
                                        url: "#"
                                    },
                                    {
                                        text: "Privacy",
                                        url: "#"
                                    }
                                ]}
                            />

                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copywrite-wrapper d-lg-flex align-items-lg-center justify-content-lg-between">
                    
                    {/* Copywrite Text */}
                    <div className="copywrite-text text-center text-lg-start mb-3 mb-lg-0">
                        <p className="mb-0">{new Date().getFullYear()} © All rights reserved by <a href="https://themeforest.net/user/designing-world/portfolio" target="_blank" rel="noreferrer">Designing World</a></p>
                    </div>

                    {/* Footer Nav */}
                    <FooterNav 
                        navList={[
                            {
                                title: "Privacy Policy",
                                link: "/privacy"
                            },
                            {
                                title: "Terms & Conditions",
                                link: "/terms"
                            }
                        ]}
                    />
                    
                </div>
            </div>
        </footer>
    )
}