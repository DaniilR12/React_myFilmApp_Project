import React, { useState } from "react";

const Auth = () => {
  const [login, setLogin] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isLogin) {
      // Вход
      const savedUsers = JSON.parse(localStorage.getItem("users") || "[]");
      const user = savedUsers.find(
        (u: any) => u.email === email && u.password === password
      );

      if (user) {
        localStorage.setItem("token", "mock-token");
        localStorage.setItem("currentUser", JSON.stringify(user)); // Сохраняем текущего пользователя
        alert(`Hello, ${user.login}`);
        window.location.href = "/";
      } else {
        alert("Not correct email or password");
      }
    } else {
      // Регистрация
      const savedUsers = JSON.parse(localStorage.getItem("users") || "[]");

      // Проверка на уже существующего пользователя
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
          {!isLogin && (
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
              required
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
            type="email"
            placeholder="Email"
            required
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
            required
          ></input>
          <button
            style={{ width: 100, border: "none", height: 20, borderRadius: 10 }}
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

export default Auth;
