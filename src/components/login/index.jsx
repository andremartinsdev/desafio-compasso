import './styles.scss'
import { GoMarkGithub, GoSignIn } from "react-icons/go";


const Login = () => {
    function logar() {
        window.location.href = `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}`;
    }

    return (
        <section className="c-section">
            <div className="c-section__login">

                <GoMarkGithub color={"#4B79A1"} size={60} />

                <p>Login</p>
                <button className="c-section__button" onClick={logar}>
                    Logar com GitHub <GoSignIn  className="icon"  size={23} />
                </button>
            </div>
        </section>

    )

}

export default Login;