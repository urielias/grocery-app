import React, { useContext, useState } from "react";
import { GlobalContext } from "../App";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./LogInPage.css";

const LogInPage = () => {
    const { global, setGlobal } = useContext(GlobalContext);
    const [existingUser, setExistingUser] = useState(false);
    const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });

    const signupUser = (data: any) => {
        if (data.username.length < 3 || data.username.length > 10) {
            alert("Username must be between 3 and 10 characters long");
            return;
        }

        if (data.password.length < 8 || data.password.length > 15) {
            alert("Passwords must be between 8 and 15 characters long");
            return;
        }

        if (data.password !== data.repeatPassword) {
            alert("Passwords don't match, please try again");
            return;
        }

        axios
            .post(`${global.server}/users/signup`, { ...data, repeatPassword: undefined })
            .then((res) => {
                console.log("Sign Up successful!");
                setGlobal({ ...global, userID: res.data.user_id, currentPage: "home" });
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const loginUser = (data: any) => {
        axios
            .post(`${global.server}/users/login`, data)
            .then((res) => {
                console.log("Log In successful!");
                console.log(res.data);
                setGlobal({ ...global, userID: res.data.user_id, currentPage: "home" });
            })
            .catch((err) => {
                console.error(err);
                alert("Incorrect Username / Email / Password");
            });
    };

    const formHandler = (data: any) => {
        if (existingUser) return loginUser(data);
        return signupUser(data);
    };

    return (
        <div>
            <h1>{existingUser ? "Log In" : "Sign Up"}</h1>
            <form className="LogInForm" onSubmit={handleSubmit(formHandler)}>
                <li>
                    {existingUser ? (
                        <ul>
                            <label htmlFor="identity">Username / Email</label>
                            <input
                                id="identity"
                                {...register("identity")}
                                placeholder="Username / Email"
                            ></input>
                        </ul>
                    ) : (
                        <>
                            <ul>
                                <label htmlFor="username">Username</label>
                                <input id="username" {...register("username")} placeholder="Username"></input>
                            </ul>
                            <ul>
                                <label htmlFor="email">Email</label>
                                <input id="email" {...register("email")} placeholder="Email"></input>
                            </ul>
                        </>
                    )}
                    <ul>
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            {...register("password")}
                            placeholder="Password"
                            type="password"
                        ></input>
                    </ul>
                    {!existingUser ? (
                        <ul>
                            <label htmlFor="repeatPassword">Repeat password</label>
                            <input
                                id="repeatPassword"
                                {...register("repeatPassword")}
                                placeholder="Repeat password"
                                type="password"
                            ></input>
                        </ul>
                    ) : (
                        <></>
                    )}
                </li>
                <div className="FlexRowContainer">
                    <button
                        className="SecondaryButton"
                        type="button"
                        onClick={() => {
                            setExistingUser(!existingUser);
                        }}
                    >
                        {existingUser ? "Sign Up instead" : "Log In instead"}
                    </button>
                    <button className="SubmitButton" type="submit">
                        {existingUser ? "Log In" : "Sign Up"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LogInPage;
