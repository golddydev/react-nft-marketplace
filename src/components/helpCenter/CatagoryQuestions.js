import { Link, useParams } from "react-router-dom";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import Divider from "../divider/Divider";
import HelpSearchForm from "./HelpSearchForm";
import PopularQuestion from "./PopularQuestion";

import HelpData from "../../data/helpCenter/help-all-questions.json";

const CatagoryQuestions = () => {
    const questionCatagory = useParams().CATAGORY;
    const questionCatagoryData = HelpData.filter(item => item.catagory === questionCatagory);
    const catagoryLength = questionCatagoryData.length;

    const allQuestions = questionCatagoryData.map((ele, index) => (
        <div key={index} className="card shadow-sm mt-3">
            <div className="card-body px-4">
                <Link className="d-block fz-18 hover-primary" to={`${process.env.PUBLIC_URL}/help-question-details/${ele.id}`} >
                    {ele.question}
                </Link>
            </div>
        </div>
    ))

    return(
        <>
            <Header />

            {/* Breadcrumb */}
            <Breadcrumb 
                breadcrumbTitle={questionCatagory} 
                breadcrumbNav={[
                    {
                        navText: "Home",
                        path: "/"
                    },
                    {
                        navText: "Help",
                        path: "/help-center"
                    }
                ]}
            />

            <Divider />
            
            {/* Help Center Wrap */}
            <div className="help-center-wrapper">
                
                {/* Search Form */}
                <HelpSearchForm 
                    heading="How can I help you?"
                />

                <Divider />

                <div className="container">
                    <div className="row g-5">
                        <div className="col-12 col-lg-8">
                            <h4 className="mb-3 text-capitalize">
                                {questionCatagory} ({catagoryLength})
                            </h4>
                            {allQuestions}
                        </div>

                        <div className="col-12 col-lg-4">
                            <PopularQuestion 
                                heading="Popular Questions"
                            />
                        </div>
                    </div>
                </div>

                <Divider />
            </div>

            <Footer />
        </>
    )
}

export default CatagoryQuestions;