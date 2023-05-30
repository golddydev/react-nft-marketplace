import { Link } from "react-router-dom";

const ConnectWalletContent = (props) => {
    const { heading, walletCard } = props;

    const ConnectWalletCard = walletCard.map((elem, index) => (
        <div key={index} className="col-12 col-md-9 col-lg-6 col-xl-5">
            <div className="card wallet-card shadow-sm">
                <div className="card-body px-4">
                    <div className="d-flex align-items-center">
                        <div className="img-wrap">
                            <img src={`${process.env.PUBLIC_URL}/${elem.image}`} alt={elem.name} />
                        </div>
                        <h4 className="mb-0 me-3">{elem.name}
                            <span className="badge bg-danger rounded-pill align-top fz-12 ms-1">
                                {elem.badgeText}
                            </span>
                        </h4>
                        <Link className={`btn btn-sm btn-${elem.buttonInfo[0].color} rounded-pill ms-auto`} to={elem.buttonInfo[0].path} >
                            {elem.buttonInfo[0].text}
                            <i className={`ms-1 bi ${elem.buttonInfo[0].icon}`} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    ))

    return(
        <div className="connect-wallet-wrapper">
            <div className="container">
                <div className="text-center">
                    <h2 className="mb-70">{heading}</h2>
                </div>

                <div className="row g-4 g-xl-5 justify-content-center">
                    {ConnectWalletCard}
                </div>
            </div>
        </div>
    )
}

export default ConnectWalletContent;