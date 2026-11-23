import '../styles/Login.css';
function Login() {
  return (
    <>
      <div className="loginLayout">
        <div className="loginBox">
          <input type="text" placeholder="username"/>
          <input type="password" placeholder="password"/>
          <button>LOG IN</button> {/* move to main page */}
          <p>Do not have an account ? Create an account</p> {/* move to Register page */}
        </div>
      </div>
    </>
  )
}

export default Login;
