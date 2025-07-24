import react from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        alert("Signup Successfully!");
        navigate("/login");
    }

    const nameHandleChange = (e) => {
        setName(e.target.value);
    }


     const emailHandleChange = (e) => {
        setEmail(e.target.value);
    }

       const passwordHandleChange = (e) => {
        setPassword(e.target.value);
    }

    return(
        <div>
            <h1>Welcome to Signup Page</h1>
            <form onSubmit={handleSignup}>
                <label>
                    Name
                    <input type="text" 
                    onChange={nameHandleChange}
                    />
                </label>
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
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Signup;
