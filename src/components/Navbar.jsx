import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <ul className="nav justify-content-center nav-underline bg-primary">
                <li className="nav-item">
                    <Link className="nav-link text-white" aria-current="page" to="/">ALL</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/fullstackdevelopment">FULL STACK DEVELOPMENT</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/datascience">DATA SCIENCE</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/cybersecurity">CYBER SECURITY</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/ai">ARTIFICAL INTELLIGENCE</Link>
                </li>
            </ul>
        </>
    )
}

export default Navbar