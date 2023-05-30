import { Link } from "react-router-dom";

export default function FooterWidget(props) {
    const {widgetTitle, navList} = props;

    const liItems = navList.map((ele, index) => 
        <li key={index} >
            <Link to={ele.url}>
                {ele.text}
            </Link>
        </li>
    )

    return(
        <div className="col-6 col-sm-4">
            <div className="footer-widget-area mb-70">
                <h5 className="mb-4">{widgetTitle}</h5>                
                <ul className="list-unstyled mb-0">
                    {liItems}
                </ul>
            </div>
        </div>
    )
}