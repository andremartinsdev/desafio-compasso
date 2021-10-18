import './styles.scss'

const UserAvatar = props => (
    <div className="c-avatar">
        <img className="c-avatar__image" src={props.url} alt=""  />
    </div>
);

export default UserAvatar;