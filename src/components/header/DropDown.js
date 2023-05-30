import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

export default function NavDropDown(props) {
    const {dropdownID, toggleIcon, dropdownList} = props;

    const dropdownItems = dropdownList.map((item, index) =>
        <Link className="dropdown-item" to={item.url} key={index}>
            <i className={`me-2 bi ${item.icon}`} />
            {item.text}
        </Link>
    )

    return(
        <Dropdown className="user-dropdown mx-3" >
            <Dropdown.Toggle className="user-btn" id={dropdownID}>
                <i className={`bi ${toggleIcon}`} />
            </Dropdown.Toggle>
            <Dropdown.Menu className="mt-3" >
                {dropdownItems}
            </Dropdown.Menu>
        </Dropdown>
    )
}