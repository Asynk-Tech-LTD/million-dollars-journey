"use client";
import { fetchApi } from "@/utils/connection";
import { Api_Response } from "@/utils/types";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const SignUpForm = () => {
  const t = useTranslations();
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [niche, setNiche] = useState<string>("");

  const clearForm = () => {
    setEmail("");
    setName("");
    setPhone("");
  };

  const signUp = async (e: any) => {
    e.preventDefault();
    const response: Api_Response = await fetchApi("Forms/FillForm", "POST", {
      IdForm: 1,
      FullName: name,
      Email: email,
      Phone: phone,
      Comment: comment,
      Niche: niche,
    });
    if (response.StatusCode === 200) {
      setError("");
      setMessage(t("Hero.Thank you for signing up!"));
      clearForm();
    } else {
      setError(response.ExceptionMsg);
      setMessage(t("Hero.Error signing up!"));
    }
  };

  useEffect(() => {
    console.log("niche", niche);
  }, [niche]);

  return (
    <form onSubmit={(e) => signUp(e)}>
      <div>
        <div className="d-flex flex-column gap-3">
          <div className="">
            <label htmlFor="name" className="mb-1">
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
            <label htmlFor="email" className="mb-1">
              {t("Hero.Email")}:
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
            <label htmlFor="phone" className="mb-1">
              {t("Hero.Phone")}:
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
            <label htmlFor="phone" className="mb-1">
              {t("Hero.Niche")}:
            </label>
            <select
              name="niche"
              id="niche"
              className="form-select"
              onChange={(e) => console.log(e.target.value)}
              required>
              <option value="" disabled selected>
                {t("Hero.Select Niche")}
              </option>

              {Niches.map((niche, index) => (
                <option key={index} value={t(`Hero.Niches.${niche.value}`)}>
                  {t(`Hero.Niches.${niche.label}`)}
                </option>
              ))}
            </select>
          </div>
          <div className="contact2">
            <label htmlFor="comment" className="mb-1">
              {t("Hero.Comment")}:
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

          {message && (
            <div id="response" className={error !== "" ? "text-danger" : ""}>
              {message}
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;

const Niches = [
  {
    value: "Retail",
    label: "Retail",
  },
  {
    value: "E-commerce",
    label: "E-commerce",
  },
  {
    value: "Marketing Services",
    label: "Marketing Services",
  },
  {
    value: "Consulting",
    label: "Consulting",
  },
  {
    value: "Other",
    label: "Other",
  },
];
