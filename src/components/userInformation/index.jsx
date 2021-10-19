import { FaMapMarkerAlt } from 'react-icons/fa'
import './styles.scss'
const UserInformation = porps => (
    <article className="c-info-user">
        <h1 >{porps.name}</h1>
        <h3 className="location"><FaMapMarkerAlt color={"#4B79A1"}/> {porps.location}</h3>
        <h2 >#{porps.login}</h2>
        <div>{porps?.bio}</div>
    </article>
)

export default UserInformation;