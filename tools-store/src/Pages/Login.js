import react from "react";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handlesubmit = (e) => {
        e.preventDefault();
        alert(`Email: ${email}\nPassword: ${password}`);
  };

    const emailHandleChange = (e) => {
        setEmail(e.target.value);
    }

    const passwordHandleChange = (e) => {
        setPassword(e.target.value);
    }

    return(
        <div>
            <h1>Welcome to Login Page</h1>
            <form onSubmit={handlesubmit}>
                <label>
                    Email
                    <input type="email" 
                    onChange={emailHandleChange}
                    />
                </label>
                <label>
                    Password
                    <input type="password" 
                    onChange={passwordHandleChange}
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;