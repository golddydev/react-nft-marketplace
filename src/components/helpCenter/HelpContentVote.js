import { Link } from "react-router-dom"

const HelpContentVote = () => {
    return(
        <div className="helpful-wrapper text-center">
            <p>Was this article helpful?</p>
            <div className="d-flex align-items-center justify-content-center mb-3">
                <Link className="btn btn-primary btn-sm rounded-pill mx-2" to="#">
                    <i className="me-1 bi bi-hand-thumbs-up" />Yes
                </Link>
                <Link className="btn btn-danger btn-sm rounded-pill mx-2" to="#">
                    <i className="me-1 bi bi-hand-thumbs-down" />No
                </Link>
            </div>
            <p className="mb-0">87 out of 99 found this helpful</p>
        </div>
    )
}

export default HelpContentVote;