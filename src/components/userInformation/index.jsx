import './styles.scss'
const UserInformation = porps => (
    <article className="c-info-user">
        <h1 >{porps.name}</h1>
        <h2 >#{porps.login}</h2>
        <p >{porps?.bio}</p>
    </article>
)

export default UserInformation;