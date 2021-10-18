import './styles.scss'
import { BiBookBookmark, BiStar } from "react-icons/bi";
import { useHistory } from 'react-router-dom';
import React from 'react';

const UserNumbers = props => {

    const history = useHistory();
    const handleOnClick = route => history.push(route);


return(
    <section className="c-user-numbers">
        <div className="c-user-numbers__item" onClick={() => handleOnClick('/starred')}>
            <div>
                <BiStar color={'#ffffffa0'} size={30} />
            </div>
            <div>
                <h1>{props.starred}</h1>
                <h2>Favoritos</h2>
            </div>
        </div>
        <div className="c-user-numbers__item" onClick={() => handleOnClick('/repository')}>
            <div>
                <BiBookBookmark color={'#ffffffa0'} size={30} />
            </div>
            <div>
                <h1>{props.repos}</h1>
                <h2>Repositórios</h2>
            </div>
        </div>

    </section>

)
}

export default UserNumbers;