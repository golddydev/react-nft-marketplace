const NewsletterContent = (props) => {
    const { title, subTitle, formInfo } = props;

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-7">
                    <div className="newsletter-card card shadow">
                        <div className="card-body p-4 p-sm-5">
                            <div className="text-center">
                                <h2>{title}</h2>
                                <p className="mb-5">{subTitle}</p>
                            </div>
                            {/* Form */}
                            <form onSubmit={e => { e.preventDefault(); }} >
                                <div className="row justify-content-center">
                                    <div className="col-12 col-lg-10">
                                        <input 
                                            className="form-control" 
                                            type="email" 
                                            placeholder={formInfo[0].inputPlaceholder} 
                                            aria-describedby="mailHelp" />
                                        <small className="text-muted text-start" id="mailHelp">
                                            <i className={`bi ${formInfo[0].helperIcon} me-1`} />
                                            {formInfo[0].helperText}
                                        </small>
                                        <button className={`btn btn-${formInfo[0].buttonColor} w-100 mt-4 rounded-pill`} type="submit">
                                            {formInfo[0].buttonText}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsletterContent;