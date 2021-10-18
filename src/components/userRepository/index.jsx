import './styles.scss'
import { useContext } from 'react';
import { AiFillMinusCircle } from "react-icons/ai";
import { context } from '../../context';
import CardUserRepository from '../cardUserRepository';
import { Navigation } from '../navigation';




const UserRepository = props => {

    const ctx = useContext(context)
    return (
        <section className="c-user-repos">

            <Navigation />

            <div className="c-user-repos__item">
                {ctx.userRepos.length > 0 ?
                    <div>
                        {ctx.userRepos.map((repos) =>
                            <CardUserRepository name={repos.name} language={repos.language} />
                        )}
                    </div> : <div className="notRepository"> <AiFillMinusCircle size={60} color={"#ebe9e9"} /> <h1 className="notRepository__msg">Nenhum Repositório Disponível</h1> </div>}
            </div>
        </section>
    )

};

export default UserRepository;
