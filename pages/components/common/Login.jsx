import React from "react";
import { useFormik } from 'formik';
const Login = ({closeModalFn}) => {
    const formik = useFormik({
        initialValues: {
          signinEmail: '',
          signinPassword:''
        },
        onSubmit: values => {
            let newValues = ({...values, userId: "user123"});
          localStorage.setItem('data', JSON.stringify(newValues));
          closeModalFn()
        },
      });
  return (
    <>
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <div className="form-group">
          <label htmlFor="signinEmail">Username or email address *</label>
          <input
            type="email"
            className="form-control"
            id="signinEmail"
            name="signinEmail"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.signinEmail}
          />
        </div>

        <div className="form-group">
          <label htmlFor="signinPassword">Password *</label>
          <input
            type="password"
            className="form-control"
            id="signinPassword"
            name="signinPassword"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.signinPassword}
          />
        </div>

        <div className="form-footer">
          <button type="submit" className="btn btn-outline-primary-2">
            <span>LOG IN</span>
            <i className="icon-long-arrow-right"></i>
          </button>

          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="signin-remember"
            />
            <label className="custom-control-label" htmlFor="signin-remember">
              Remember Me
            </label>
          </div>

          <a href="#" className="forgot-link">
            Forgot Your Password?
          </a>
        </div>
      </form>
      <div className="form-choice">
        <p className="text-center">or sign in with</p>
        <div className="row">
          <div className="col-sm-6">
            <a href="#" className="btn btn-login btn-g">
              <i className="icon-google"></i>
              Login With Google
            </a>
          </div>
          <div className="col-sm-6">
            <a href="#" className="btn btn-login btn-f">
              <i className="icon-facebook-f"></i>
              Login With Facebook
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
