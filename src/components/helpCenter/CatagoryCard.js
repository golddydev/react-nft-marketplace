import { Link } from "react-router-dom";

export default function CatagoryCard(props) {
    const { catagoryPath, icon, title, resourceQuantity } = props;
    return(
        <div className="col-12 col-sm-6 col-lg-5 col-xl-3">
            <div className="card support-catagory-card shadow-sm text-center">
                <div className="card-body py-5 px-4">
                    <Link className="d-block" to={`${process.env.PUBLIC_URL}/help-center/${catagoryPath}`} >
                        <img className="mb-4" src={`${process.env.PUBLIC_URL}/${icon}`} alt={title} />
                        <h6 className="mb-1">{title}</h6>
                        <span> {resourceQuantity} Resources</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}