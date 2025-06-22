import {Link} from 'react-router-dom'

const Header = () => {

return(
    <div>
        <header className="header1">
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/admission">Admission</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/NotFound">NotFound</Link>
            </nav>

        </header>
    </div>
)
}
export default Header;
