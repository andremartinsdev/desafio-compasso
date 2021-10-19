import './styles.scss'
import { useContext } from 'react';
import { AiFillMinusCircle } from "react-icons/ai";
import { context } from '../../context';
import CardUserRepository from '../cardUserRepository';
import { Navigation } from '../navigation';



const UserRepository = props => {

    const ctx = useContext(context)


    return (
        <section className="c-user-starred">
            
            <Navigation />

            <div className="c-user-starred__item">
                {ctx.userStarredData.length > 0 ?
                    <div>
                        {ctx.userStarredData.map((repos) =>
                            <CardUserRepository name={repos.name} language={repos.language} starred={true} />
                        )}
                    </div> : <div className="notRepository"> <AiFillMinusCircle size={60} color={"#ebe9e9"} /> <h1 className="notRepository__msg">Nenhum Favorito Encontrado</h1> </div>}
            </div>
        </section>
    )

};

export default UserRepository;
