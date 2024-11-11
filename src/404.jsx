import { Link } from "react-router-dom";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { Provider } from "./context/context";
import axios from "axios";
import { useEffect } from "react";

const ErrorPage = () => {

  useEffect(() => {
    axios({
      // Endpoint to send files
      url: "http://localhost:5000/my_name",
      method: "GET",
      headers: {
          // Add any auth token here
          authorization: "your token comes here",
      },

      // Attaching the form data
      data: formData,
  })
    // Handle the response from backend here
    .then((res) => {console.log(res)})

    // Catch errors if any
    .catch((err) => {console.log(err)});

  }, [])

  


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
