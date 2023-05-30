import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

import $ from "jquery";
window.jQuery = window.$ = $;
require("jquery-nice-select");

const CreateNewContent = () => {
    const [inputTitle, setInputTitle] = useState('Macaw Bird');
    const [inputPrice, setInputPrice] = useState('0.324 ETH');
    const [inputImage, setInputImage] = useState('img/bg-img/17.jpg');
    const ImagehandleChange = (event) => {
        setInputImage(URL.createObjectURL(event.target.files[0]));
    }

    const selectCata = useRef();

    useEffect(() => {
        $(selectCata.current).niceSelect();
    }, []);

    return(
        <div className="create-new-wrapper">
            <div className="container">
                <div className="row g-5 justify-content-center">
                    <div className="col-12 col-lg-8">
                        
                        {/* Create New Form */}
                        <div className="create-new-form border shadow-sm p-4 p-sm-5">
                            <h2 className="mb-4">Create new NFT</h2>
                            
                            <Form>
                                <div className="row align-items-center">
                                    {/* Upload Files */}
                                    <div className="col-12">
                                        <Form.Group className="mb-4">
                                            <Form.Label className="mb-2 fz-16">Upload Files</Form.Label>
                                            <Form.Control 
                                                className="bg-transparent" 
                                                id="formFileMultiple" 
                                                type="file" 
                                                multiple 
                                                onChange={ ImagehandleChange }
                                            />
                                        </Form.Group>
                                    </div>
                                    
                                    {/* Checkbox */}
                                    <div className="col-12">
                                        <Form.Group className="mb-4">
                                            <Form.Check
                                                inline 
                                                type="radio" 
                                                label="Fixed price" 
                                                id="fixedPrice" 
                                                name="inlineRadioOptions" 
                                                defaultChecked
                                            />

                                            <Form.Check
                                                inline 
                                                type="radio" 
                                                label="Unlock Purchased" 
                                                id="UnlockPurchased" 
                                                name="inlineRadioOptions"
                                            />

                                            <Form.Check
                                                inline 
                                                type="radio" 
                                                label="Open for bids" 
                                                id="Openforbids" 
                                                name="inlineRadioOptions"
                                            />
                                        </Form.Group>
                                    </div>

                                    {/* Title */}
                                    <div className="col-12">
                                        <Form.Group className="mb-4">
                                            <Form.Label className="mb-2 fz-16">Title</Form.Label>
                                            <Form.Control id="title" type="text" value={inputTitle} onChange={e => setInputTitle(e.target.value)} />
                                        </Form.Group>
                                    </div>

                                    {/* Description */}
                                    <div className="col-12">
                                        <Form.Group className="mb-4">
                                            <Form.Label className="mb-2 fz-16">Description</Form.Label>
                                            <Form.Control id="description" as="textarea" placeholder="Write short description" />
                                        </Form.Group>
                                    </div>

                                    {/* Price */}
                                    <div className="col-12 col-md-6">
                                        <Form.Group className="mb-4">
                                            <Form.Label className="mb-2 fz-16">Price</Form.Label>
                                            <Form.Control id="price" type="text" value={inputPrice} onChange={e => setInputPrice(e.target.value)} />
                                        </Form.Group>
                                    </div>

                                    {/* Catagory */}
                                    <div className="col-12 col-md-6">
                                        <h5>Categories</h5>
                                        <select ref={selectCata} className="filter-select bg-gray w-100 mb-4">
                                            <option value={1}>Art</option>
                                            <option value={2}>Cards</option>
                                            <option value={3}>Collectibles</option>
                                            <option value={4}>Domain</option>
                                            <option value={5}>Music</option>
                                        </select>
                                    </div>

                                    {/* Starting Date */}
                                    <div className="col-12 col-sm-6">
                                        <Form.Group className="mb-4">
                                            <Form.Label className="mb-2 fz-16">Starting Date</Form.Label>
                                            <Form.Control id="startingDate" type="date" />
                                        </Form.Group>
                                    </div>

                                    {/* Ending Date */}
                                    <div className="col-12 col-sm-6">
                                        <Form.Group className="mb-4">
                                            <Form.Label className="mb-2 fz-16">Ending Date</Form.Label>
                                            <Form.Control id="endingDate" type="date" />
                                        </Form.Group>
                                    </div>

                                    {/* Royality */}
                                    <div className="col-12 col-lg-4">
                                        <Form.Group className="mb-4">
                                            <Form.Label className="mb-2 fz-16">Royality</Form.Label>
                                            <Form.Control id="royality" type="text" placeholder="5%" />
                                        </Form.Group>
                                    </div>

                                    {/* No of Copies */}
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <Form.Group className="mb-4">
                                            <Form.Label className="mb-2 fz-16">No of copies</Form.Label>
                                            <Form.Control id="noOfcopies" type="text" placeholder="13" />
                                        </Form.Group>
                                    </div>

                                    {/* Size */}
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <Form.Group className="mb-4">
                                            <Form.Label className="mb-2 fz-16">Size</Form.Label>
                                            <Form.Control id="size" type="text" placeholder="20MB" />
                                        </Form.Group>
                                    </div>

                                    {/* Agree with Terms */}
                                    <div className="col-12 col-md-8">
                                        <Form.Check
                                            className="mb-4 mb-md-0" 
                                            type="checkbox" 
                                            label="I agree to all terms & conditions." 
                                            id="rememberMe" 
                                            defaultChecked
                                        />
                                    </div>
                                    
                                    {/* Submit Button */}
                                    <div className="col-12 col-md-4">
                                        <button className="btn btn-primary rounded-pill w-100" type="submit">
                                            Create
                                        </button>
                                    </div>
                                </div>
                            </Form>

                        </div>
                    </div>

                    <div className="col-12 col-sm-8 col-lg-4">
                        {/* Preview Card */}
                        <div className="nft-card card shadow-sm">
                            <div className="card-body">
                                <div className="img-wrap">
                                    <img src={inputImage} alt="" />

                                    {/* Badge */}
                                    <div className="badge bg-dark position-absolute">
                                        <img src="img/core-img/fire.png" alt="" />
                                        Featured
                                    </div>
                                </div>

                                {/* Others Info */}
                                <div className="row gx-2 align-items-center mt-3">
                                    <div className="col-8">
                                        <span className="d-block fz-12">
                                            <i className="bi bi-arrow-up" />
                                            Floor price {inputPrice}
                                        </span>
                                    </div>
                                    <div className="col-4 text-end">
                                        <button className="wishlist-btn" type="button">
                                            <i className="bi" />
                                        </button>
                                    </div>
                                </div>

                                {/* Meta Info */}
                                <div className="row gx-2 align-items-center mt-2">
                                    <div className="col-8">
                                        <div className="name-info d-flex align-items-center">
                                            <div className="author-img position-relative">
                                                <img className="shadow" src="img/bg-img/u1.jpg" alt="" />
                                                <i className="bi bi-check position-absolute bg-success" />
                                            </div>
                                            <div className="name-author">
                                                <Link className="name d-block hover-primary text-truncate" to="#">
                                                    {inputTitle}
                                                </Link>
                                                <Link className="author d-block fz-12 hover-primary text-truncate" to="#">
                                                    @creative_art
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="price text-end">
                                            <span className="fz-12 d-block">Current Bid</span>
                                            <h6 className="mb-0">
                                                {inputPrice}
                                            </h6>
                                        </div>
                                    </div>
                                </div>

                                {/* Button */}
                                <div className="row gx-2 align-items-center mt-3">
                                    <div className="col-6">
                                        <Link className="btn btn-primary btn-sm rounded-pill" to="#">
                                            Place bid
                                        </Link>
                                    </div>
                                    <div className="col-6 text-end">
                                        <Link className="btn btn-minimal btn-sm hover-primary" to="#">
                                            <i className="bi bi-activity me-1" />
                                            Activity
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h5 className="mb-0 mt-3 text-center">
                            <i className="bi bi-eye me-1" />
                            Live Preview
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateNewContent;