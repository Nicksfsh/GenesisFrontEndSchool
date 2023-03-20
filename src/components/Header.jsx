import Logo from '../assets/img/other.webp'
import {Link, useLocation} from "react-router-dom"

const Header = () => {
    const location = useLocation()

    if (location.pathname === '/') {
        return (
            <div className='banner'>
                <img height='150px' src={Logo} alt=""/>
            </div>)
    }

    return (
        <div className='banner'>
            <Link to="/"><img height='150px' src={Logo} alt=""/></Link>
        </div>
    )

}

export default Header