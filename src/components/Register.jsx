import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import '../styles/login.css';
function Register() {
  const navigate = useNavigate();
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

    console.log("see the data ===>", listOfRegisterData);
  }, [listOfRegisterData]);

  function handleSignUp(){
    setListOfRegisterData((prev) => ([...prev ?? [], registerData]));
    navigate("/login");
  }

  return (
    <>
      <div className="loginLayout">
        <div className="loginBox">
          <form onSubmit={handleSignUp}>
            <input
              type="email"
              placeholder="email ID"
              name="email"
              onChange={addTheDataIntoLocalStorage}
              required
              title="Please enter a valid email address"
            />
            <input
              type="text"
              placeholder="set a username"
              name="username"
              required
              onChange={addTheDataIntoLocalStorage}
            />
            <input
              type="password"
              placeholder="set a password"
              name="password"
              required
              onChange={addTheDataIntoLocalStorage}
            />
            <input
              type="password"
              placeholder="confirm password"
              name="confirmpassword"
              required
              onChange={addTheDataIntoLocalStorage}
            />
            <button type="submit">Sign UP</button>{" "}
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
