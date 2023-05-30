import { Link, useParams } from "react-router-dom";

import DashboardHeader from "../components/dashboard/header/DashboardHeader";
import CreateNewButton from "../components/dashboard/createNew/CreateNewButton";
import NotificationData from "../data/dashboard/notification-data.json";

const DashboardNotificationDetails = () => {
    const notifyID = parseInt(useParams().NOTIFYID, 10);
    const notifyData = NotificationData.filter(item => item.id === notifyID);
    const data = notifyData[0];

    return(
        <>
            <DashboardHeader />

            <CreateNewButton />

            <div className="admin-wrapper">
                <div className="container">
                    <div className="row g-4 justify-content-center">
                        <div className="col-12 col-lg-10">
                            <div className="card p-4">
                                <div className="card-body">
                                    <h4 className="mb-3">{data.notification}</h4>

                                    {data.notificationBody.map((elem, index) => (
                                        <div key={index} dangerouslySetInnerHTML={{__html: elem}} />
                                    ))}

                                    <Link className="btn btn-primary btn-sm rounded-pill mt-3" to="/notifications">
                                        <i className="bi bi-arrow-left me-2" />
                                        Go Back
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardNotificationDetails;