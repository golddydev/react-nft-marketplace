export default function TermsPrivacyContent(props) {
    const { contentBody, infoLastUpdated } = props;

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-10 col-xxl-8">
                    {contentBody.map((value, index) => {
                        return(
                            <div key={index} dangerouslySetInnerHTML={{__html: value}} />
                        )
                    })}

                    <div className="updated-info">
                        <p className="mb-0">
                            {infoLastUpdated}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}