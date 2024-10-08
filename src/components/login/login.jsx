import React, { useEffect, useState } from "react";
import axios from "axios";
import "./login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://vehicle-owner-database-default-rtdb.firebaseio.com/users.json",
      )
      .then((res) => {
        setData(res?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
    setEmailError("");
  };
  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
    setPasswordError("");
  };

  const login = () => {
    let filter = [];
    let emailText = emailValue.toLowerCase();
    let passwordText = passwordValue.toLowerCase();
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    filter = data.filter((r) => {
      if (
        data.filter((res) => res.email.toLowerCase() === emailText).length !== 0
      ) {
        filter = r.email.toLowerCase() === emailText;
      } else {
        filter = r.password.toLowerCase() === passwordText;
      }
      return filter;
    });

    if (filter.length < 1) {
      if (!gmailRegex.test(emailText)) {
        setEmailError("Please enter a valid Gmail address");
      } else {
        setEmailError("Email record not found");
      }

      setPasswordError("Incorrect Password");
      return;
    }
    if (
      (filter[0].email.toLowerCase() === emailText) &
      (filter[0].password.toLowerCase() === passwordText)
    ) {
      localStorage.setItem("auth", "true");
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate("/");
      }, 3000);
    }
    if (
      (filter[0].email.toLowerCase() !== emailText) &
      (filter[0].password.toLowerCase() !== passwordText)
    ) {
      setEmailError("Email record not found");
      setPasswordError("Incorrect Password");
    }
    if (filter[0].email.toLowerCase() !== emailText) {
      setEmailError("Email record not found");
    }
    if (!gmailRegex.test(emailText)) {
      setEmailError("Please enter a valid Gmail address");
    }
    if (filter[0].password.toLowerCase() !== passwordText) {
      setPasswordError("Incorrect Password");
    }
  };

  return (
    <>
      <section
        id="login"
        className="w-full bg-[#508C9B] h-[100vh] bg flex justify-center items-center"
      >
        {!loading ? (
          <>
            <div className="block lg:w-[40%] w-[86%] bg-slate-300 mx-auto rounded-md pt-7 pb-10">
              <h1
                id="logo"
                className="text-[19px] w-full lg:text-[40px] font-serif text-center"
              >
                Federal Road Safety Corp
              </h1>
              <form action="">
                <div>
                  <div className="w-[90%] mx-auto">
                    <label className="block text-xl font-bold">
                      Enter Email Address
                    </label>
                    <input
                      value={emailValue}
                      onChange={(e) => handleEmailChange(e)}
                      className="w-full bg-inherit focus:border-blue-700 border-gray-600 border-[1px] mt-3 h-[40px] px-3"
                      type="text"
                      placeholder="Your Email"
                      required
                    />
                    {emailError !== "" ? (
                      <>
                        <span className="text-red-700">{emailError}</span>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="w-[90%] mt-5 mx-auto">
                    <label className="block text-xl font-bold">
                      Enter Password
                    </label>
                    <input
                      value={passwordValue}
                      onChange={(e) => handlePasswordChange(e)}
                      className="w-full bg-inherit focus:border-blue-700 border-gray-600 border-[1px] mt-3 h-[40px] px-3"
                      type="password"
                      placeholder="Your Password"
                      required
                    />
                    {passwordError !== "" ? (
                      <>
                        <span className="text-red-700">{passwordError}</span>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <div className="w-[90%] mt-5 mx-auto">
                  <input
                    onClick={login}
                    value="Log In"
                    className="w-full bg-inherit text-center cursor-pointer hover:bg-blue-800 hover:text-white border-blue-700 border-[1px] mt-5 h-[40px]"
                  />
                  <button className="w-full bg-inherit hover:bg-red-600 hover:text-white cursor-pointer border-blue-700 border-[1px] mt-5 h-[40px]">
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </>
        ) : (
          <>
            <div className="w-[200px] h-[100px] bg-gray-300 flex items-center justify-center">
              <span className="text-2xl">Logging In ....</span>
            </div>
          </>
        )}
      </section>
    </>
  );
}

export default Login;
