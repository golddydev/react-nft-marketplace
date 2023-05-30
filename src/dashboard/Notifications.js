import { useState } from "react";
import { Link } from "react-router-dom";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import DashboardHeader from "../components/dashboard/header/DashboardHeader";
import CreateNewButton from "../components/dashboard/createNew/CreateNewButton";
import NotificationData from "../data/dashboard/notification-data.json";

const DashboardNotification = () => {
    const [key, setKey] = useState('today');

    const NotificationToday = NotificationData.filter(item => item.tag === "today");
    const notificationTodayCards = NotificationToday.map((elem, index) => (
        <li key={index}>
            <Link to={`/notification-details/${elem.id}`} >
                <i className={`me-2 bg-${elem.icon[0].color} bi ${elem.icon[0].icon}`} />
                {elem.notification}
                <span className="badge bg-warning text-dark fz-12 rounded-pill ms-auto">
                    {elem.badgeText}
                </span>
            </Link>
        </li>
    ))

    const NotificationWeek = NotificationData.filter(item => item.tag === "week");
    const notificationWeekCards = NotificationWeek.map((elem, index) => (
        <li key={index}>
            <Link to={`/notification-details/${elem.id}`} >
                <i className={`me-2 bg-${elem.icon[0].color} bi ${elem.icon[0].icon}`} />
                {elem.notification}
                <span className="badge bg-warning text-dark fz-12 rounded-pill ms-auto">
                    {elem.badgeText}
                </span>
            </Link>
        </li>
    ))

    const notificationAllCards = NotificationData.map((elem, index) => (
        <li key={index}>
            <Link to={`/notification-details/${elem.id}`} >
                <i className={`me-2 bg-${elem.icon[0].color} bi ${elem.icon[0].icon}`} />
                {elem.notification}
                <span className="badge bg-warning text-dark fz-12 rounded-pill ms-auto">
                    {elem.badgeText}
                </span>
            </Link>
        </li>
    ))

    return(
        <>
            <DashboardHeader />

            <CreateNewButton />

            <div className="admin-wrapper">
                <div className="container">
                    <div className="row g-4 justify-content-center">
                        <div className="col-12 col-lg-10">
                            <Tabs
                                id="dashboard-notification" 
                                activeKey={key} 
                                onSelect={(k) => setKey(k)} 
                                className="border-0 mb-3 dashboard-tabs"
                            >
                                <Tab eventKey="today" title="Today">
                                    <div className="notification-content-wrap">
                                        <ul className="notification-list ps-0 mb-0">
                                            {notificationTodayCards}
                                        </ul>
                                    </div>
                                </Tab>

                                <Tab eventKey="week" title="7 Days">
                                    <div className="notification-content-wrap">
                                        <ul className="notification-list ps-0 mb-0">
                                            {notificationWeekCards}
                                        </ul>
                                    </div>
                                </Tab>

                                <Tab eventKey="all" title="All">
                                    <div className="notification-content-wrap">
                                        <ul className="notification-list ps-0 mb-0">
                                            {notificationAllCards}
                                        </ul>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DashboardNotification;