import react from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        alert(`Email: ${email}\nPassword: ${password}`);

        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");

        if(email === storedEmail && password === storedPassword){
            alert("Login Successfully");
            Navigate("/")
        }
        else{
            alert("Invalid Credentails");
        }
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