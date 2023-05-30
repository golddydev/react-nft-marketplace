import { Link, useParams } from "react-router-dom";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import Divider from "../divider/Divider";
import HelpContentVote from "./HelpContentVote";
import SupportForm from "./SupportForm";
import HelpData from "../../data/helpCenter/help-all-questions.json";

const HelpQuestionDetails = () => {
    const questionID = parseInt(useParams().CATAGORYID, 10);
    const questionDetailsData = HelpData.filter(item => item.id === questionID);
    const questionData = questionDetailsData[0];
    const currentCatagory = questionData.catagory;
    const currentCatagoryData = HelpData.filter(item => item.catagory === currentCatagory);

    return(
        <>
            <Header />

            <Breadcrumb 
                breadcrumbTitle="Question Details" 
                breadcrumbNav={[
                    {
                        navText: "Home",
                        path: "/"
                    },
                    {
                        navText: "Help Center",
                        path: "/help-center"
                    }
                ]}
            />

            <Divider />

            <div className="help-center-wrapper">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-12 col-lg-8">
                            <h2 className="mb-4 fw-bold display-6">{questionData.question}</h2>
                            
                            {questionData.answer.map((value, index) => {
                                return(
                                    <div key={index} dangerouslySetInnerHTML={{__html: value}} />
                                )
                            })}

                            <div className="border-top my-5" />

                            {/* Content Vote */}
                            <HelpContentVote />
                            
                            {/* Support Form */}
                            <SupportForm />
                        </div>

                        {/* Related Questions */}
                        <div className="col-12 col-lg-4">
                            <div className="card bg-gray border-0 mt-2">
                                <div className="card-body p-4">
                                    <h4 className="mb-3">Related Questions</h4>
                                    <div className="border-top mb-3" />
                                    
                                    {currentCatagoryData.slice(0, 20).map((elem, index) => (
                                        <Link key={index} 
                                            className="d-block fz-16 hover-primary mt-3" 
                                            to={`${process.env.PUBLIC_URL}/help-question-details/${elem.id}`} 
                                        >
                                            {elem.question}
                                        </Link>
                                    ))}

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Divider />

            <Footer />
        </>
    )
}

export default HelpQuestionDetails;