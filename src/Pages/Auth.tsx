import React, { useState } from "react";

const Auth = () => {
  const [login, setLogin] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isLogin) {
      const savedUser = JSON.parse(localStorage.getItem("user") || "{}");

      if (email === savedUser.email && password === savedUser.password) {
        localStorage.setItem("token", "mock-token");
        alert(`Hello, ${savedUser.login}`);
        window.location.href = "/";
      } else {
        alert("Not correct email or password");
      }
    } else {
      localStorage.setItem("user", JSON.stringify({ login, email, password }));
      alert("Correct registration");
      setIsLogin(true);
    }
  };

  return (
    <>
      <div style={{ paddingTop: 100, paddingBottom: 100, textAlign: "center" }}>
        <h1 style={{ color: "white", textAlign: "center" }}>
          {isLogin ? "Login" : "Registration"}
        </h1>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            alignItems: "center",
            paddingTop: 5,
          }}
        >
          {isLogin ? (
            ""
          ) : (
            <input
              onChange={(e) => setLogin(e.target.value)}
              style={{
                color: "black",
                border: "none",
                borderRadius: 10,
                height: 25,
                paddingLeft: 10,
                width: 150,
              }}
              type="text"
              placeholder="Login"
            ></input>
          )}

          <input
            onChange={(e) => setEmail(e.target.value)}
            style={{
              color: "black",
              border: "none",
              borderRadius: 10,
              height: 25,
              paddingLeft: 10,
              width: 150,
            }}
            type="text"
            placeholder="Email"
          ></input>
          <input
            onChange={(e) => setPassword(e.target.value)}
            style={{
              color: "black",
              border: "none",
              borderRadius: 10,
              height: 25,
              paddingLeft: 10,
              width: 150,
            }}
            type="password"
            placeholder="Password"
          ></input>
          <button
            style={{ width: 100, border: "none", height: 20, borderRadius: 10 }}
          >
            Submit
          </button>
        </form>

        <div style={{ paddingTop: 10 }}>
          {isLogin ? (
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
              Already have an account?
            </button>
          ) : (
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
              You don`t have an account?
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Auth;
