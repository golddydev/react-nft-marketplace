import { Link } from "react-router-dom";

const AppDownload = (props) => {
    const { heading, subHeading, qrCodeImage, appDownloadButtons, rightSideImage } = props;

    return(
        <div className="app-download-wrapper">
            <div className="container">
                <div className="row align-items-center justify-content-center g-4 g-lg-5">
                    <div className="col-12 col-lg-6">
                        <div className="download-text text-center text-lg-start">
                            <h2 className="mb-3" dangerouslySetInnerHTML={{__html: heading}}></h2>
                            <p className="mb-5" dangerouslySetInnerHTML={{__html: subHeading}}></p>
                            
                            <div className="row align-items-center justify-content-center justify-content-lg-start g-5">
                                <div className="col-5 border-end">
                                    <div className="qr-code-wrapper">
                                        <img 
                                            className="p-3 bg-white shadow rounded border w-100" 
                                            src={`${process.env.PUBLIC_URL}/${qrCodeImage}`} 
                                            alt="" 
                                        />
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="app-btn-groups text-start">
                                        {appDownloadButtons.map((elem, index) => (
                                            <Link key={index} className="btn rounded p-0 my-3 w-100 border shadow" to={elem.path} >
                                                <img src={`${process.env.PUBLIC_URL}/${elem.icon}`} alt="" />
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-8 col-lg-6">
                        <div className="download-img">
                            <img src={`${process.env.PUBLIC_URL}/${rightSideImage}`} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppDownload;