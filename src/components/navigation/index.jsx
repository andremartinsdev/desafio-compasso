import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import './styles.scss'

export const Navigation = props => (
    <nav className="c-nav">
        <div className="c-nav_button">
            <Link to="/home">
                <BiArrowBack size={30} color={"#ebe9e9"} className="icon" />
            </Link>
        </div>
    </nav>

)