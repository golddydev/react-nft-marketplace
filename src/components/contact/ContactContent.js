import Form from 'react-bootstrap/Form';

const ContactContent = (props) => {
    const { contactTitle, contactSubTitle, mapIframeSource } = props;

    return(
        <div className="contact-wrapper">
            <div className="container">
                <div className="row g-5 align-items-center">
                    {/* Contact Form */}
                    <div className="col-12 col-lg-6">
                        <div className="contact-form">
                            {/* Heading Info */}
                            <h1 className="mb-3">{contactTitle}</h1>
                            <p className="mb-5">{contactSubTitle}</p>
                            
                            {/* Form */}
                            <Form>
                                <div className="row g-4">
                                    <div className="col-12">
                                        <Form.Control type="text" placeholder="Full Name" id="name" name="name" required />
                                    </div>

                                    <div className="col-12">
                                        <Form.Control type="email" placeholder="Email Address" id="email" name="email" required />
                                    </div>

                                    <div className="col-12">
                                        <Form.Control type="text" placeholder="Questions" id="questions" name="questions" required />
                                    </div>

                                    <div className="col-12">
                                        <Form.Control as="textarea" id="message" name="message" placeholder="Write in details" />
                                    </div>

                                    <div className="col-12">
                                        <button className="btn btn-primary rounded-pill" type="submit">Send now</button>
                                    </div>
                                </div>
                            </Form>

                        </div>
                    </div>

                    {/* Google Maps */}
                    <div className="col-12 col-lg-6">
                        <div className="maps-wrap">
                            <iframe title='Google Maps' src={mapIframeSource} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactContent;