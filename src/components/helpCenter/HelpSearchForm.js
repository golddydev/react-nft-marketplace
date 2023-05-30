const HelpSearchForm = (props) => {
    const { heading } = props;
    
    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-9 col-lg-6">
                    <div className="help-form text-center">
                        <h2 className="display-6 fw-bold mb-4">{heading}</h2>
                        {/* Form */}
                        <form onSubmit={e => { e.preventDefault(); }} >
                            <input className="form-control" type="search" placeholder="Write your question" />
                            <button type="submit">
                                <i className="bi bi-search" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HelpSearchForm;