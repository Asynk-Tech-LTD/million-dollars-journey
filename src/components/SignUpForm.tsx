"use client";
import { fetchApi } from "@/utils/connection";
import { Api_Response } from "@/utils/types";
import React, { useState } from "react";

const SignUpForm = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const signUp = async (e: any) => {
    e.preventDefault();
    const response: Api_Response = await fetchApi("Forms/FillForm", "POST", {
      IdForm: 1,
      FullName: name,
      Email: email,
    });
    if (response.StatusCode === 200) {
      setError("");
      setMessage("Thank you for signing up!");
    } else {
      setError(response.ExceptionMsg);
      setMessage("Error signing up!");
    }
  };

  return (
    <form onSubmit={(e) => signUp(e)}>
      <div>
        <div className="d-flex flex-column gap-3">
          <div className="">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              placeholder="Your name"
              name="name"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="contact2">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              placeholder="Your e-mail address"
              name="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="d-flex justify-conten-center">
            <button type="submit" className="buttonmain1 text-white py-2 mt-0 ">
              Send
            </button>
          </div>

          <div id="response" className={error !== "" ? "text-danger" : ""}>
            {message}
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
