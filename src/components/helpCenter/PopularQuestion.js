import { Link } from "react-router-dom";

import HelpData from "../../data/helpCenter/help-all-questions.json";

const PopularQuestion = (props) => {
    const PopularQuestionData = HelpData.filter(item => item.catagory === "popular");

    return(
        <div className="card bg-gray border-0 mt-4">
            <div className="card-body p-4">
                <h4 className="mb-3">{props.heading}</h4>

                <div className="border-top mb-3" />

                {PopularQuestionData.map((elem, index) => (
                    <Link 
                        key={index} 
                        className="d-block fz-16 hover-primary mt-3" 
                        to={`${process.env.PUBLIC_URL}/help-question-details/${elem.id}`} 
                    >
                        {elem.question}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default PopularQuestion;