import { Consumer } from "./context/context";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { Provider } from "./context/context";

const Dashboard = () =>  {

    const [user, setUser] = useState({username: "Chijiuba Victory", logged_in_as: "User"});
    const  handleSubmit = async (e) => {

        try {
            const response = await axios.get("http://localhost:5000/user", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                  }
            })
            .then((response) => {
                console.log(response.data);
                setUser(response.data);
            }
            )
        } 
        catch(err) {
            console.log(err.message);
        }  
    }

    return(
        <Provider value={{name:"Chijiuba Victory", id:195, username: "Chijiuba"}}>
        <Header/>
        <main className="main">

            {/* <!-- Hero Section --> */}
            <section id="hero" className="hero section">
            <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in"/>
            <div className="container text-center" data-aos="zoom-out" data-aos-delay="100">
                <div className="row justify-content-center">
                <div className="col-lg-8">
                    {/* <Consumer>
                    {(user) => (<h2>{user.name}</h2>)}
                    </Consumer> */}
                    <h2>{user.username}</h2>
                    <p>I'm a professional illustrator from San Francisco</p>
                    <a className="btn-get-started" onClick={handleSubmit}>About Me</a>
                </div>
                </div>
            </div>

            </section>
            {/* <!-- /Hero Section --> */}
        </main>
        <Footer/>
        </Provider>
    );
}

export default Dashboard;