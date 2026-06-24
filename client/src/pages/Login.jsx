import { useState } from "react";
import Navbar from "../components/Navbar";

function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if (!email || !password) {

      alert("Please fill all fields");

      return;
    }

    alert("Login Successful ✅");
  };

  return (

    <>

      <Navbar />

      <div className="auth-page">

        <div className="auth-card">

          <h1>🔐 Welcome Back</h1>

          <p>
            Login to continue
          </p>

          <input
            type="email"
            placeholder="📧 Email"
            value={email}
            onChange={(e)=>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="🔒 Password"
            value={password}
            onChange={(e)=>
              setPassword(e.target.value)
            }
          />

          <button
            className="auth-btn"
            onClick={handleLogin}
          >

            Login

          </button>

        </div>

      </div>

    </>

  );
}

export default Login;