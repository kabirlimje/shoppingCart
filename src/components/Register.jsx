import { useState, useEffect } from "react";
import '../styles/login.css';
function Register() {
  const [registerData, setRegisterData] = useState({ email: "", username: "", password: "", confirmpassword: "" });
  const [listOfRegisterData, setListOfRegisterData] = useState(() => JSON.parse(localStorage.getItem("registerData")));

  function addTheDataIntoLocalStorage(e) {
    setRegisterData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  useEffect(() => {
    if (listOfRegisterData !== null) {
      localStorage.setItem("registerData", JSON.stringify(listOfRegisterData));
    }
  }, [listOfRegisterData])

  return (
    <>
      <div className="loginLayout">
        <div className="loginBox">
          <input type="text" placeholder="email ID" name="email" onChange={addTheDataIntoLocalStorage} />
          <input type="text" placeholder="set a username" name="username" onChange={addTheDataIntoLocalStorage}/>
          <input type="password" placeholder="set a password" name="password" onChange={addTheDataIntoLocalStorage}/>
          <input type="password" placeholder="confirm password" name="confirmpassword" onChange={addTheDataIntoLocalStorage} />
          {/* here check password should be same */}
          <button
            onClick={() => {
              setListOfRegisterData((prev) => ([...prev, registerData]))
              console.log("see the user data =>", registerData);
              console.log("see the localStorage =>", localStorage.getItem("registerData"));
            }}>
            Sign UP
          </button> {/* move to the login page */}
        </div>
      </div>
    </>
  )
}

export default Register;

// register data will stored in the localStorage
