import Form from "react-bootstrap/Form";

const SearchForm = () => {
    return(
        <div className="search-form position-relative d-flex align-items-center">
            <Form onSubmit={e => { e.preventDefault(); }} >
                <input className="form-control" type="text" placeholder="Search" />
                <button className="position-absolute" type="submit">
                    <i className="bi bi-search" />
                </button>
            </Form>
        </div>
    )
}

export default SearchForm;