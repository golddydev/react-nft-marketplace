import { Link } from "react-router-dom";
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const CreateNewButton = () => {
    return(
        <>
            <div className="create-new-button">
                <OverlayTrigger placement="left" 
                    delay={{ show: 250, hide: 400 }} 
                    overlay={
                        <Tooltip id="CreateNewID" >
                            Create New NFT
                        </Tooltip>
                    }
                >
                    <Link 
                        className="shadow-lg btn btn-warning" 
                        to="/create-new"
                    >
                        <i className="fz-18 bi bi-plus-lg" />
                    </Link>
                </OverlayTrigger>
            </div>
        </>
    )
}

export default CreateNewButton;