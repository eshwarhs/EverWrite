import "./FormSection.css";
import React from "react";
import FormErrors from "./FormErrors";
import { post } from "../lib/Requests";

export default function FormSection() {
  const [state, setState] = React.useState({ form: "" });
  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [errors, setErrors] = React.useState([]);

  const name_onchange = (event) => {
    setName(event.target.value);
  };
  const username_onchange = (event) => {
    setUsername(event.target.value);
  };

  const onLoginSubmit = async (event) => {
    event.preventDefault();
    setErrors([]);
    console.log("username", username);
    try {
      // const { user } = await Auth.signUp({
      //   username: email,
      //   password: password,
      //   attributes: {
      //     name: name,
      //     email: email,
      //     preferred_username: username,
      //   },
      //   autoSignIn: { // optional - enables auto sign in after user is confirmed
      //     enabled: true,
      //   }
      // });
      // console.log(user);
      window.location.href = `/home`;
    } catch (error) {
      setErrors([error.message]);
    }
    return false;
  };

  const onSignUpSubmit = async (event) => {
    event.preventDefault();
    setErrors([]);
    console.log("username", username);
    console.log("name", name);
    try {
      const url = `${process.env.REACT_APP_BACKEND_URL}/signup`;
      console.log("url", url);
      const payload_data = {
        username: username,
        name: name,
      };
      post(url, payload_data, {
        auth: true,
        setErrors: setErrors,
        success: function (data) {
          console.log(data);
          window.location.href = `/home`;
        },
      });
    } catch (error) {
      setErrors([error.message]);
    }
    return false;
  };

  return (
    <div className="form-wrapper">
      {state.form === "" || state.form === "login" ? (
        <div className="login">
          <form className="signup_form" onSubmit={onLoginSubmit}>
            <h2>Sign In to your EverWrite account</h2>
            <div className="fields">
              <div className="field text_field username">
                <label>Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={username_onchange}
                />
              </div>
            </div>
            <FormErrors errors={errors} />
            <div className="submit">
              <button type="submit" style={{ cursor: "pointer" }}>
                Sign In
              </button>
            </div>
          </form>
          <div className="already-have-an-account">
            <span>Don't have an account?</span>
            <p
              style={{ cursor: "pointer", fontWeight: "bold", margin: 0 }}
              onClick={() => setState((s) => ({ ...s, form: "signup" }))}
            >
              Sign Up!
            </p>
          </div>
        </div>
      ) : (
        <div className="signup">
          <form className="signup_form" onSubmit={onSignUpSubmit}>
            <h2>Sign Up to create an EverWrite account</h2>
            <div className="fields">
              <div className="field text_field name">
                <label>Name</label>
                <input type="text" value={name} onChange={name_onchange} />
              </div>

              <div className="field text_field username">
                <label>Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={username_onchange}
                />
              </div>
            </div>
            <FormErrors errors={errors} />
            <div className="submit">
              <button type="submit" style={{ cursor: "pointer" }}>
                Sign Up
              </button>
            </div>
          </form>
          <div className="already-have-an-account">
            <span>Already have an account?</span>
            <p
              style={{ cursor: "pointer", fontWeight: "bold", margin: 0 }}
              onClick={() => setState((s) => ({ ...s, form: "login" }))}
            >
              Sign in!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
