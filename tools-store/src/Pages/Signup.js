import react from "react";
import { useState } from "react";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
            <form>
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
            </form>
        </div>
    )
}

export default Signup;
