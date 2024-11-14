import Footer from "./includes/footer";
import Header from "./includes/header";
import { Provider } from "./context/context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();
    

    const  handleSubmit = async (e) => {
        e.preventDefault();

        let password = document.getElementById("password").value;
        let username = document.getElementById("username").value;
        let email = document.getElementById("email").value;

        try {
            const response = await axios.post("https://social-ygv4.onrender.com/login", {
                email: email,
                password: password
            })
            .then((response) => {
                console.log(response.data);
                localStorage.setItem("token", response.data.access_token);
                console.log(localStorage.getItem("token"));
                navigate("/home");
            }
            )
        } 
        catch(err) {
            console.log(err.message);
        }
        
    }

    return (
        <Provider value={{name:"Chijiuba Victory", id:195, username: "Chijiuba"}}>
        <Header/>
        <main className="main">

            {/* /<!-- Contact Section --> */}
            <section id="contact" className="contact section">

            {/* /s<!-- Section Title --> */}
            <div className="container section-title" data-aos="fade-up">
                <h2>Log In</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">

                <div className="row gy-4">

                <div className="col-lg-5">

                    <div className="info-wrap">
                    <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                        <i className="bi bi-geo-alt flex-shrink-0"></i>
                        <div>
                        <h3>Address</h3>
                        <p>A108 Adam Street, New York, NY 535022</p>
                        </div>
                    </div>

                    <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                        <i className="bi bi-telephone flex-shrink-0"></i>
                        <div>
                        <h3>Call Us</h3>
                        <p>+1 5589 55488 55</p>
                        </div>
                    </div>

                    <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                        <i className="bi bi-envelope flex-shrink-0"></i>
                        <div>
                        <h3>Email Us</h3>
                        <p>info@example.com</p>
                        </div>
                    </div>

                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" frameborder="0" style="border:0; width: 100%; height: 270px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                    </div>
                </div>

                <div className="col-lg-7">
                    <form  className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                    <div className="row gy-4">

                        <div className="col-md-6">
                        <label htmlFor="name-field" className="pb-2">Your Name</label>
                        <input type="text" name="name" id="username" className="form-control" required=""/>
                        </div>

                        <div className="col-md-6">
                        <label  htmlFor="email-field" className="pb-2">Your Email</label>
                        <input type="email" className="form-control" name="email" id="email" required=""/>
                        </div>

                        <div className="col-md-12">
                        <label  htmlFor="subject-field" className="pb-2">Subject</label>
                        <input type="password" className="form-control" name="subject" id="password" required=""/>
                        </div>

                        <div className="col-md-12 text-center">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your message has been sent. Thank you!</div>

                        <button type="submit" onClick={handleSubmit}>Send Message</button>
                        </div>

                    </div>
                    </form>
                </div>

                </div>

            </div>

            </section>

        </main>
        <Footer/>
        </Provider>
    )
    
}


export default Login;