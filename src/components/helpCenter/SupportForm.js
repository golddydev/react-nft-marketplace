import { Link } from "react-router-dom";

const SupportForm = () => {
    return(
        <div className="card mt-5 bg-warning border-0">
            <div className="card-body p-4">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                    <h6 className="my-2 text-dark">Have more questions?</h6>
                    <Link className="my-2 btn btn-sm btn-dark rounded-pill" to="/contact">Submit a request</Link>
                </div>
            </div>
        </div>
    )
}

export default SupportForm;