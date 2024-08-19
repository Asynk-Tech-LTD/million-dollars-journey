import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
// import { localePrefix, locales } from "./navigation";

const i18nMiddleware = createMiddleware({
  // // A list of all locales that are supported
  locales: ["en", "ar"],
  // // localePrefix,
  // // Used when no locale matches
  defaultLocale: "ar",
});

export default function middleware(request: NextRequest) {
  request.headers.set("Accept-Language", "ar");
  const response = i18nMiddleware(request);
  // const token = cookies().get("token")?.value;
  // if (request.nextUrl.pathname.includes("/login")) {
  //   return response;
  // }
  // if (token === undefined || token === null) {
  //   const locale = request.nextUrl.pathname.split("/")[1];
  //   let login = "/login";
  //   if (locales.includes(locale as any)) {
  //     login = "/" + locale + "/login";
  //   }
  // const url = new URL(login, request.url);
  // url.searchParams.set("redirect_to", request.nextUrl.pathname);
  // return NextResponse.redirect(url.toString());

  return response;
}

export const config = {
  matcher: [
    "/",
    "/(en|ar)/:path*",
    // "/((?!api|_next/static|_next/images|favicon.ico|manifest.json|icons/*).*)",
  ],
};
