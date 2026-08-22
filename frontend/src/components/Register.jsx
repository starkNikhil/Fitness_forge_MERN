function Register() {
  return (
    <div className="form-box register">
      <h2>Register</h2>
      <form>
        <div className="input-box">
          <span className="icon">User logo</span>

          <input type="text" name="userName" required />
          <label htmlFor="userName">Username</label>
        </div>
        <div className="input-box">
          <span className="icon">email logo</span>

          <input type="email" name="email" required />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-box">
          <span className="icon">password logo</span>

          <input type="text" name="password" required />
          <label htmlFor="password">Username</label>
        </div>
        <div className="remember-forget-pass">
          <label>
            <input type="checkbox" name="termsConditions" />I agree to the terms
            and conditions
          </label>
        </div>
        <button type="submit" className="submit-btn" variant="contained">
          Register
        </button>
        <div className="login-register">
          <p>
            Already have an Account? <a className="login-link">Login</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
