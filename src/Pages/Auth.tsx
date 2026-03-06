import React, { memo, useState } from "react";
import { AuthInput } from "../components/Auth/authInput";

const Auth = () => {
  const [login, setLogin] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isLogin) {
      const savedUsers = JSON.parse(localStorage.getItem("users") || "[]");
      const user = savedUsers.find(
        (u: any) => u.email === email && u.password === password,
      );

      if (user) {
        localStorage.setItem("token", "mock-token");
        localStorage.setItem("currentUser", JSON.stringify(user));
        alert(`Hello, ${user.login}`);
        window.location.href = "/";
      } else {
        alert("Not correct email or password");
      }
    } else {
      const savedUsers = JSON.parse(localStorage.getItem("users") || "[]");

      const isExist = savedUsers.some((u: any) => u.email === email);
      if (isExist) {
        alert("User already exists with this email!");
        return;
      }

      savedUsers.push({ login, email, password });
      localStorage.setItem("users", JSON.stringify(savedUsers));
      alert("Correct registration");
      setIsLogin(true);
    }
  };

  return (
    <>
      <div className="auth_container">
        <h1 className="auth_h1">{isLogin ? "Login" : "Registration"}</h1>
        <form onSubmit={handleSubmit} className="auth_form">
          {!isLogin && (
            <AuthInput onChange={setLogin} placeholder="Login" value={login} />
          )}

          <AuthInput onChange={setEmail} placeholder="email" value={email} />
          <AuthInput onChange={setPassword} placeholder="Password" value={password} />
          <button
            className="auth_button"
          >
            Submit
          </button>
        </form>

        <div style={{ paddingTop: 10 }}>
          <button
            onClick={() => setIsLogin(!isLogin)}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              margin: 0,
              color: "white",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            {isLogin
              ? "You don't have an account?"
              : "Already have an account?"}
          </button>
        </div>
      </div>
    </>
  );
};

export default memo(Auth);
