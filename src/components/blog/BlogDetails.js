import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const BlogDetailsContent = (props) => {
    const { data } = props;

    return(
        <div className="blog-details-wrap">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <div className="text-center">
                            <h1 className="display-5 fw-bold mb-4">
                                {data.title}
                            </h1>
                            <div className="post-date border border-2 border-info rounded px-2 py-1 d-inline-block fz-14">
                                {data.postDate}
                            </div>
                        </div>
                        <div className="mb-5" />
                    </div>
                    <div className="col-12">
                        <Zoom 
                            overlayBgColorStart="rgba(0, 0, 0, 0)" 
                            overlayBgColorEnd="rgba(0, 0, 0, 0.95)"
                            transitionDuration={400}
                        >
                            <img className="mb-5 w-100" src={`${process.env.PUBLIC_URL}/${data.largeImage}`} alt="" />
                        </Zoom>
                    </div>
                    {data.body.map((value, index) => {
                        return(
                            <div className="row justify-content-center" key={index} dangerouslySetInnerHTML={{__html: value}} />
                        )
                    })}
                </div>
            </div>

            <div className="container">
                <div className="border-top my-5" />
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-lg-8">                        
                        {/* Comments Area*/}
                        <div className="comment-wrapper">
                            <h4 className="mb-5">3 Comments</h4>

                            <ol className="ps-0 list-unstyled">
                                {/* Single Comment */}
                                <li className="single-comment">

                                    <div className="comment-content d-flex">
                                        <div className="comment-author">
                                            <img src={`${process.env.PUBLIC_URL}/img/bg-img/u4.jpg`} alt="author" />
                                        </div>
                                        <div className="comment-meta">
                                            <p>You've saved our business! Thanks guys, keep up the good work! The best on the net!</p>
                                            <Link className="author" to="#">@designing_world</Link>
                                            
                                            <Link className="like" to="#"><i className="bi bi-heart-fill" />Like</Link>
                                            <Link className="reply" to="#"><i className="bi bi-reply-fill" />Reply</Link>
                                        </div>
                                    </div>
                                
                                    <ol className="children list-unstyled">
                                        {/* Single Comment */}
                                        <li className="single-comment">
                                            <div className="comment-content d-flex">
                                                <div className="comment-author">
                                                    <img src={`${process.env.PUBLIC_URL}/img/bg-img/u2.jpg`} alt="author" />
                                                </div>
                                                <div className="comment-meta">
                                                    <p>I strongly recommend agency to EVERYONE interested in running a successful online business!</p>
                                                    <Link className="author" to="#">@creative_world</Link>

                                                    <Link className="like" to="#"><i className="bi bi-heart-fill" />Like</Link>
                                                    <Link className="reply" to="#"><i className="bi bi-reply-fill" />Reply</Link>
                                                </div>
                                            </div>
                                        </li>
                                    </ol>
                                </li>

                                {/* Single Comment */}
                                <li className="single-comment">
                                    <div className="comment-content d-flex">
                                        <div className="comment-author">
                                            <img src={`${process.env.PUBLIC_URL}/img/bg-img/u3.jpg`} alt="author" />
                                        </div>
                                        <div className="comment-meta">
                                            <p>Absolutely wonderful! I wish I would have thought of it first. I would be lost without agency.</p>
                                            <Link className="author" to="#">@nft_fun</Link>

                                            <Link className="like" to="#"><i className="bi bi-heart-fill" />Like</Link>
                                            <Link className="reply" to="#"><i className="bi bi-reply-fill" />Reply</Link>
                                        </div>
                                    </div>
                                </li>
                            </ol>
                        </div>
                        
                        <div className="mb-5" />

                        <div className="contact-area">
                            <h4 className="mb-5">Leave A Comment</h4>
                            
                            {/* Form */}
                            <Form className="contact-from" onSubmit={e => { e.preventDefault(); }} >
                                <div className="row g-4">
                                    <div className="col-12 col-lg-6">
                                        <Form.Control type="text" placeholder="Your Name" />
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <Form.Control type="email" placeholder="Your Email" />
                                    </div>

                                    <div className="col-12">
                                        <Form.Control as="textarea" placeholder="Type your comments..." />
                                    </div>

                                    <div className="col-12">
                                        <button className="btn btn-primary rounded-pill" type="submit">Submit</button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetailsContent;