import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
   
    return (
      <div className='main-content'>
        <div className='header'>
          <h1>BUDGET TODAY FOR BETTER TOMORROW</h1>
        </div>
        <div className="header-buttons">
          <button className="button-custom" onClick={() => navigate('/signup')}>Register</button>
          <button className="button-custom" onClick={() => navigate('/logins')}>Log In</button>

          
        </div>
      </div>
    );
  };

  export default Header;