import { useState } from "react";
import { Link } from "react-router-dom";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import ScrollAnimation from "react-animate-on-scroll";

import ActivityTableData from "../../../data/dashboard/activity-table-data.json";

const ActivityTab = () => {
    const [key, setKey] = useState('today');

    return(
        <div className="col-12 col-xxl-6">
            <ScrollAnimation animateIn="fadeInUp" delay={500} animateOnce={true} >
                <div className="card border-0 shadow-sm dashboard-activity-tab">
                    <div className="card-body p-4 d-flex flex-wrap">
                        <h5>Activity</h5>
                        
                        <Tabs
                            id="dashboard-activity-tab" 
                            activeKey={key} 
                            onSelect={(k) => setKey(k)} 
                            className="border-0 mb-3 ms-auto"
                        >
                            <Tab eventKey="today" title="Today">
                                <div className="table-responsive border shadow-sm dashboard-table activity-table">
                                    <table className="table mb-0">
                                        <tbody>
                                            {ActivityTableData.map((elem, index) => (
                                                <tr key={index}>
                                                    <th scope="row">
                                                        <Link className="btn btn-minimal text-dark hover-primary" to="#">
                                                            <img className="rounded me-1" src={`${process.env.PUBLIC_URL}/${elem.name[0].thumbnail}`} alt =""/>
                                                            {elem.name[0].text}
                                                        </Link>
                                                    </th>
                                                    <td>
                                                        <span className="d-inline-block fw-bold fz-14">{elem.price}</span>
                                                    </td>
                                                    <td>
                                                        <i className={`bi ${elem.event[0].icon}`} /> 
                                                        {elem.event[0].text}
                                                    </td>
                                                    <td>
                                                        <i className={`bi ${elem.time[0].icon}`} /> 
                                                        {elem.time[0].text}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </Tab>

                            <Tab eventKey="week" title="7 Day">
                                <div className="table-responsive border shadow-sm dashboard-table activity-table">
                                    <table className="table mb-0">
                                        <tbody>
                                            {ActivityTableData.map((elem, index) => (
                                                <tr key={index}>
                                                    <th scope="row">
                                                        <Link className="btn btn-minimal text-dark hover-primary" to="#">
                                                            <img className="rounded me-1" src={`${process.env.PUBLIC_URL}/${elem.name[0].thumbnail}`} alt =""/>
                                                            {elem.name[0].text}
                                                        </Link>
                                                    </th>
                                                    <td>
                                                        <span className="d-inline-block fw-bold fz-14">{elem.price}</span>
                                                    </td>
                                                    <td>
                                                        <i className={`bi ${elem.event[0].icon}`} /> 
                                                        {elem.event[0].text}
                                                    </td>
                                                    <td>
                                                        <i className={`bi ${elem.time[0].icon}`} /> 
                                                        {elem.time[0].text}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </Tab>

                            <Tab eventKey="month" title="30 Day">
                                <div className="table-responsive border shadow-sm dashboard-table activity-table">
                                    <table className="table mb-0">
                                        <tbody>
                                            {ActivityTableData.map((elem, index) => (
                                                <tr key={index}>
                                                    <th scope="row">
                                                        <Link className="btn btn-minimal text-dark hover-primary" to="#">
                                                            <img className="rounded me-1" src={`${process.env.PUBLIC_URL}/${elem.name[0].thumbnail}`} alt =""/>
                                                            {elem.name[0].text}
                                                        </Link>
                                                    </th>
                                                    <td>
                                                        <span className="d-inline-block fw-bold fz-14">{elem.price}</span>
                                                    </td>
                                                    <td>
                                                        <i className={`bi ${elem.event[0].icon}`} /> 
                                                        {elem.event[0].text}
                                                    </td>
                                                    <td>
                                                        <i className={`bi ${elem.time[0].icon}`} /> 
                                                        {elem.time[0].text}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    )
}

export default ActivityTab;