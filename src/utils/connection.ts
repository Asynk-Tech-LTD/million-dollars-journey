"use server";
const PROD_FETCH_URL = "https://api.desocial-app.com/";
import { cookies } from "next/headers";
import { Api_Response } from "./types";

export const getLocalData = async (key: string) => {
  try {
    const value = await cookies().get(key)?.value;
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.warn(e);
  }
};

export const fetchApi = async (
  path: string,
  method: string,
  body: any
): Promise<Api_Response> => {
  const authorization = await getLocalData("token");

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (authorization) headers.Authorization = authorization;

  const options: { method: string; headers: any; body?: string } = {
    method: method,
    headers: headers,
  };

  if (method === "POST" || method === "PUT" || method === "DELETE") {
    options.body = JSON.stringify(body);
    console.log("options", options);
  }

  // console.warn(`${PROD_FETCH_URL}${path}`, options);

  try {
    console.log("path", `${PROD_FETCH_URL}${path}`);
    const response = await fetch(`${PROD_FETCH_URL}${path}`, options);

    const json = await response.json();
    // console.warn(json);
    if (json.StatusCode === 403) {
      cookies().delete("token");
      window.location.href = "/login";
    }
    console.log("json", json);
    return json;
  } catch (e) {
    // console.warn(e);
    if (e instanceof Error) {
      throw e; // or throw new Error(e.message);
    } else {
      throw new Error(String(e));
    }
  }
};
