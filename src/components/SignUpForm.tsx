"use client";
import { fetchApi } from "@/utils/connection";
import { Api_Response } from "@/utils/types";
import React, { useState } from "react";
import { useTranslations } from "next-intl";

const SignUpForm = () => {
  const t = useTranslations();
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [comment, setComment] = useState<string>("");

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
            <label htmlFor="name" className="mb-3">
              {t("Hero.Name")}:
            </label>
            <input
              type="text"
              placeholder={t("Hero.Your Name")}
              name="name"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="contact2">
            <label htmlFor="email" className="mb-3">
              {t("Hero.Email")}: :
            </label>
            <input
              type="text"
              placeholder={t("Hero.Your Email")}
              name="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {/* add phone input and comment text-box  */}
          <div className="contact2">
            <label htmlFor="phone" className="mb-3">
              {t("Hero.Phone")}: :
            </label>
            <input
              type="text"
              placeholder={t("Hero.Your Phone")}
              name="phone"
              id="phone"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="contact2">
            <label htmlFor="comment" className="mb-3">
              {t("Hero.Comment")}: :
            </label>
            <textarea
              placeholder={t("Hero.Your Comment")}
              name="comment"
              id="comment"
              className="form-control"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={5}
              maxLength={500}
              required
            />
          </div>

          <div className="d-flex justify-conten-center">
            <button type="submit" className="buttonmain1 text-white py-2 mt-0 ">
              {t("Hero.Signup")}
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
