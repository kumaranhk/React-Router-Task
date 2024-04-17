import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <ul className="nav justify-content-center nav-underline">
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">ALL</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/fullstackdevelopment">FULL STACK DEVELOPMENT</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/datascience">DATA SCIENCE</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/cybersecurity">CYBER SECURITY</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/ai">ARTIFICAL INTELLIGENCE</Link>
                </li>
            </ul>
        </>
    )
}

export default Navbar