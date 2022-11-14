import React, { useState } from "react";
import "./styles.css";

function App() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const userDatabase = [
        {
            username: "username",
            password: "password"
        },
        {
            username: "username1",
            password: "password1"
        }
    ];

    // Errors are read from here 
    const errors = {
        username: "Your username is invalid",
        password: "Your password is invalid"
    };

    //  On submit this how the form details should be handled
    const handleSubmit = (event) => {
        event.preventDefault();

        var { username, password } = document.forms[0];
        const userData = userDatabase.find((user) => user.username === username.value);

        if (userData) {
            if (userData.password !== password.value) {
                setErrorMessages({ name: "password", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            setErrorMessages({ name: "username", message: errors.username });
        }
    };

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    
    
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="username" required />
                    {renderErrorMessage("username")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="password" required />
                    {renderErrorMessage("password")}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Sign In</div>
                {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
            </div>
        </div>
    );
}

export default App;