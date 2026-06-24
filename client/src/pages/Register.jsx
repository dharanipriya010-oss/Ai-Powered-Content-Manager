import { useState } from "react";
import Navbar from "../components/Navbar";

function Register() {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleRegister = () => {

    if (
      !name ||
      !email ||
      !password
    ) {

      alert("Please fill all fields");

      return;
    }

    alert("Registration Successful ✅");
  };

  return (

    <>

      <Navbar />

      <div className="auth-page">

        <div className="auth-card">

          <h1>📝 Create Account</h1>

          <p>

            Join AI CMS today

          </p>

          <input
            type="text"
            placeholder="👤 Name"
            value={name}
            onChange={(e)=>
              setName(e.target.value)
            }
          />

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
            onClick={handleRegister}
          >

            Register

          </button>

        </div>

      </div>

    </>

  );
}

export default Register;