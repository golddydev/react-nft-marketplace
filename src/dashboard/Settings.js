import { useState, useEffect, useRef } from "react";
import Form from 'react-bootstrap/Form';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import DashboardHeader from "../components/dashboard/header/DashboardHeader";
import CreateNewButton from "../components/dashboard/createNew/CreateNewButton";

import $ from "jquery";
window.jQuery = window.$ = $;
require("jquery-nice-select");

const DashboardSettings = () => {
    const [key, setKey] = useState('general');

    const selectTimezone = useRef();
    const selectWeekStart = useRef();

    useEffect(() => {
        $(selectTimezone.current).niceSelect();
    }, []);

    useEffect(() => {
        $(selectWeekStart.current).niceSelect();
    }, []);

    return(
        <>
            <DashboardHeader />

            <CreateNewButton />

            <div className="admin-wrapper">
                <div className="container">
                    <div className="row g-4 justify-content-center">
                        <div className="col-12 col-lg-10 col-xl-9 col-xxl-8">
                            <Tabs
                                id="setting-tab" 
                                activeKey={key} 
                                onSelect={(k) => setKey(k)} 
                                className="border-0 mb-3 settings-tabs"
                            >
                                <Tab eventKey="general" title="General">
                                    <div className="card">
                                        <div className="card-body p-4 p-sm-5">
                                            <Form>
                                                <div className="row g-4">
                                                    <div className="col-12">
                                                        <input className="form-control bg-gray border-0" type="text" name="fullName" placeholder="Full Name" />
                                                    </div>

                                                    <div className="col-12">
                                                        <input className="form-control bg-gray border-0" type="email" name="email" placeholder="Email Address" />
                                                    </div>

                                                    <div className="col-12">
                                                        <input className="form-control bg-gray border-0" type="text" name="username" placeholder="Username" />
                                                    </div>

                                                    <div className="col-12">
                                                        <input className="form-control bg-gray border-0" type="password" name="password" placeholder="Password" />
                                                    </div>

                                                    <div className="col-12">
                                                        <select ref={selectTimezone} className="filter-select bg-gray w-100">
                                                            <option value={1}>Timezone</option>
                                                            <option value={2}>UTC +0</option>
                                                            <option value={3}>UTC +1</option>
                                                            <option value={4}>UTC +2</option>
                                                            <option value={5}>UTC +3</option>
                                                            <option value={6}>UTC +4</option>
                                                            <option value={7}>UTC +5</option>
                                                            <option value={8}>UTC +6</option>
                                                            <option value={9}>UTC +7</option>
                                                            <option value={10}>UTC +8</option>
                                                            <option value={11}>UTC +9</option>
                                                            <option value={12}>UTC +10</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-12">
                                                        <select ref={selectWeekStart} className="filter-select bg-gray w-100">
                                                            <option value={1}>Week starts on</option>
                                                            <option value={2}>Saturday</option>
                                                            <option value={3}>Sunday</option>
                                                            <option value={4}>Monday</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-12">
                                                        <button className="btn btn-primary w-100 rounded-pill" type="submit">
                                                            <i className="bi bi-sd-card-fill me-1" />Save changes
                                                        </button>
                                                    </div>
                                                </div>
                                            </Form>

                                        </div>
                                    </div>
                                </Tab>

                                <Tab eventKey="others" title="Others">
                                    <div className="card">
                                        <div className="card-body p-4 p-sm-5">
                                            <Form>
                                                <div className="row g-4">
                                                    <div className="col-12 col-md-4">
                                                        <div className="form-check">
                                                            <input className="form-check-input" id="liveBids" type="checkbox" defaultValue defaultChecked />
                                                            <label className="form-check-label" htmlFor="liveBids">Live Bids</label>
                                                        </div>
                                                    </div>

                                                    <div className="col-12 col-md-4">
                                                        <div className="form-check">
                                                            <input className="form-check-input" id="onSale" type="checkbox" defaultValue />
                                                            <label className="form-check-label" htmlFor="onSale">On Sale</label>
                                                        </div>
                                                    </div>

                                                    <div className="col-12 col-md-4">
                                                        <div className="form-check">
                                                            <input className="form-check-input" id="comingSoon" type="checkbox" defaultValue />
                                                            <label className="form-check-label" htmlFor="comingSoon">Coming Soon</label>
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="form-check form-switch mb-3">
                                                            <input className="form-check-input" id="switch1" type="checkbox" role="switch" />
                                                            <label className="form-check-label" htmlFor="switch1">Enable Notifications</label>
                                                        </div>

                                                        <div className="form-check form-switch mb-3">
                                                            <input className="form-check-input" id="switch2" type="checkbox" role="switch" defaultChecked />
                                                            <label className="form-check-label" htmlFor="switch2">Enable Chats Sounds</label>
                                                        </div>

                                                        <div className="form-check form-switch">
                                                            <input className="form-check-input" id="switch3" type="checkbox" role="switch" />
                                                            <label className="form-check-label" htmlFor="switch3">Enable Lazyload</label>
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <textarea className="form-control" name="message" cols={10} rows={5} placeholder="Short Description" defaultValue={""} />
                                                    </div>

                                                    <div className="col-12">
                                                        <button className="btn btn-primary w-100 rounded-pill" type="submit">
                                                            <i className="bi bi-sd-card-fill me-1" />Save changes
                                                        </button>
                                                    </div>
                                                </div>
                                            </Form>

                                        </div>
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

export default DashboardSettings;