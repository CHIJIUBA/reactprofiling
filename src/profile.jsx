import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Profile = () => {

    const { name } = useParams();
    const navigate = useNavigate();
    

    function handleClick() {
        navigate('/home');
    }

    return (
      <div>
        <h1>Hello {name} from profile page!</h1>
        <p>So, how are you?</p>
        <button onClick={handleClick}>Click</button>
      </div>
    );
  };
  
  export default Profile;
  