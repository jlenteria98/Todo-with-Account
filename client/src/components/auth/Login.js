import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";
import { useDispatch, useSelector } from "react-redux";

const Login = (props) => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const errors = useSelector((state) => state.errors);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    errors.notFound = "";
    errors.loginEmail = "";
    errors.loginPassword = "";
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.isAuthenticated) {
      props.history.push("/dashboard");
    }
  });
  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      loginEmail: state.email,
      loginPassword: state.password,
    };

    dispatch(loginUser(data));
  };
  return (
    <div>
      <section
        className="container"
        style={{
          marginTop: "95px",
          paddingBottom: "145px",
        }}
      >
        <div className="row login-container">
          <div className="col-md-12 m-auto">
            <h2 className="large text-primary text-center">
              <i className="fa fa-user"></i> Sign In
            </h2>
            <hr />
            {errors.notFound ? (
              <div className="alert alert-danger">{errors.notFound}</div>
            ) : null}
            <form
              className="form"
              onSubmit={onSubmit}
              style={{ marginTop: 10 }}
            >
              <TextFieldGroup
                autoComplete="on"
                placeholder="Email Address"
                name="email"
                value={state.email}
                onChange={onChange}
                error={errors.loginEmail}
              />
              <TextFieldGroup
                autoComplete="on"
                type="password"
                placeholder="Password"
                name="password"
                value={state.password}
                onChange={onChange}
                error={errors.loginPassword}
              />
              {auth.isLoading ? (
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={true}
                >
                  <i className="fa fa-circle-o-notch fa-spin"> </i> {""}{" "}
                  Loading...
                </button>
              ) : (
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              )}
            </form>
            <p className="text-center">or</p>
            <a href="/">
              <button type="button" className="btn btn-danger google-button">
                Login with Google
              </button>
            </a>

            <p className="my-2">
              Don't have an account?{" "}
              <Link to="/register" style={{ fontWeight: "bold" }}>
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Login;
