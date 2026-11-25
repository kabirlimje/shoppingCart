import { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { UserContext } from '../context/UserContext'
import '../styles/Login.css'
function Login() {
  const userData = useContext(UserContext);
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userAlert, setUserAlert] = useState("");
  const [passAlert, setPassAlert] = useState("");

  useEffect(() => {
    console.log("get the value from the localStorage ==>", userData);
  }, [userData]);

  function handleValidation(e) {
    e.preventDefault();
    setUserAlert(
      !userData.some((e) => e.username === username) &&
        "Please enter valid username",
    );
    setPassAlert(
      !userData.some((e) => e.confirmpassword === password) &&
        "Please enter valid password",
    );
    userData.some((e) => e.username === username) &&
    userData.some((e) => e.confirmpassword === password) &&
    navigate("/products");
  }



  return (
    <>
      <div className="loginLayout">
        <div className="loginBox">
          <form onSubmit={handleValidation}>
            <input type="username" placeholder="username" onChange={(e) => { setUserName(e.target.value); }} value={username} required />
            {userAlert && <span>{userAlert}</span>}
            <input type="password" placeholder="password" onChange={(e) => { setPassword(e.target.value); }} value={password} required />
            {passAlert && <span>{passAlert}</span>}
            <button type="submit">LOG IN</button>
          </form>
          <p>Do not have an account ? <span onClick={() => navigate('/')} style={{cursor: 'pointer'}}>Create an account</span></p> {/* move to Register page */}
        </div>
      </div>
    </>
  )
}

export default Login;
