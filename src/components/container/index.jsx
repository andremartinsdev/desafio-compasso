import './styles.scss';

const MainContainer = props => (
    <section className="c-container" >
        {props.children}
    </section>
);

export default MainContainer;