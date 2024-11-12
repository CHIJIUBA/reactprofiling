import { Link } from "react-router-dom";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { Provider } from "./context/context";
import axios from "axios";
import { useEffect } from "react";

const ErrorPage = () => {

  return (
    <Provider value={{name:"Chijiuba Victory", id:195, username: "Chijiuba"}}>
    <Header/>
    <div>
      <h1>Oh no, this route doesn't exist!</h1>
      <Link to="/">
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
    <Footer/>
    </Provider>
  );
};

export default ErrorPage;
