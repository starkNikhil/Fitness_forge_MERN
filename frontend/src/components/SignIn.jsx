function SignIn() {
  return (
    <div className="user-sign-in-flex">
      <span className="icon close" id="closeButton">
      </span>
        <div className="form-box login">
          <h2>Login</h2>
          <form action="">
            <div className="input-box">
              <span className="icon">User logo</span>

              <input type="text" name="userName" required />
              <label htmlFor="userName">Username or email</label>
            </div>
            <div className="input-box">
              <span className="icon">Password Logo</span>

              <input type="text" name="password" required />
              <label htmlFor="password">Password</label>
            </div>
            <div className="remember-forget-pass">
              <label>
                <input type="checkbox" />
                Remember Me
              </label>
              <a href="#" className="forgot pass">
                {" "}
                Forgot Password?
              </a>
            </div>
            <button type="submit" className="submit-btn">
              Login
            </button>
            <div className="login-register">
              <p>
                Don't have an Account?{" "}
                <a href="#" className="register-link"></a>
              </p>
            </div>
          </form>
        </div>
    </div>
  );
}

export default SignIn;
