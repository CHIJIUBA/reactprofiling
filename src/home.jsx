import Header from "./includes/header";
import Show from "./body";
import Footer from "./includes/footer";
import { Provider } from "./context/context";

const Home = () => {

    return(
        <Provider value={{name:"Chijiuba Victory", id:195, username: "Chijiuba"}}>
        <Header/>
        <Show/>
        <Footer/>
        </Provider>
    );

}

export default Home;