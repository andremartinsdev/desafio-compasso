import { BiBookBookmark } from 'react-icons/bi';
import { DiCode } from "react-icons/di";
import { GoStar } from "react-icons/go";
import './styles.scss'



const CardUserRepository = props => (
    <div className="c-card">
        <div className="c-card__icon">
            {props.starred ?
                <GoStar color={'#4B79A1'} size={30} /> :
                <BiBookBookmark color={'#4B79A1'} size={30} />
            }
        </div>
        <div className="c-card__info">
            <h1>{props.name}</h1>
            <span>
                <DiCode size={30} /> {props.language}
            </span>
        </div>
    </div>
);

export default CardUserRepository;