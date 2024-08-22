import Image from "next/image";
// import styles from "./page.module.css";
import SignUpForm from "../../components/SignUpForm";
import { useTranslations } from "next-intl";
import LanguagePicker from "@/components/LanguagePicker";

export default function Home() {
  const t = useTranslations();

  return (
    <main className="">
      <div className="header ">
        <header className=" pt-3 w-100 top">
          <div className="container d-flex align-items-center justify-content-between">
            <a className="navbar-brand top1" href="#">
              <h3 className="m-0 text-white">DESOCIAL</h3>
            </a>

            {/* <div className="teamicons m-0">
              <a href="https://www.facebook.com/pages/Rayoflightthemes/408688349185439">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="">
                <i className="fa fa-linkedin"></i>
              </a>
            </div> */}
            <LanguagePicker />
          </div>
        </header>

        <section className="w-100 h-100 d-flex align-items-center">
          <div className="container">
            <div className="row topimagewrapper">
              <div
                className="col-lg-6 col-md-7 topimage startAnimation animated text-white d-flex flex-column justify-content-center"
                data-animate="slideInLeft">
                {/* <img src="images/road_to_goal.png" alt="Road to 1 Million" /> */}
                <h1 className="">{t("Hero.Title")}</h1>

                <h5>{t("Hero.Subtitle")}</h5>
              </div>

              <div
                className="col-lg-6 col-md-5 startAnimation animated"
                data-animate="slideInRight">
                <div className="contactform">
                  <div className="text-white">
                    <h4 className="primary-color pt-0">{t("Hero.Signup")}</h4>
                  </div>

                  <div>
                    <SignUpForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <section className="">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 startAnimation animated"
              data-animate="slideInLeft">
              <h2>Progress Tracker</h2>
              <p>Follow our journey to 1 Million Riyals.</p>
              <img src="images/progress_bar.png" alt="Progress Bar" />
            </div>
          </div>
        </div>
      </section> */}

      <section className="sectiongrey">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12 text-center">
              <h2 className="dashedline">
                <span
                  style={{ background: "#ebffe8" }}
                  className="primary-color">
                  {t("HowItWorks.Title")}
                </span>
              </h2>
            </div>

            <section className="maincolumnsblock1">
              <ul className="row d-flex justify-content-center">
                <li
                  className="col-lg-3 col-12 startAnimation animated"
                  data-animate="slideInLeft">
                  <div>
                    <Image
                      src="/images/icon_step1.png"
                      alt="Step 1"
                      className="icon h-100 w-100"
                      width={300}
                      height={300}
                    />
                    <div className="col-lg-12">
                      <h3 className="primary-color">
                        {t("HowItWorks.Step1.Title")}
                      </h3>
                      <p>{t("HowItWorks.Step1.Description")}</p>
                    </div>
                  </div>
                </li>

                <li
                  className="col-lg-3 col-12 startAnimation animated"
                  data-animate="slideInLeft">
                  <div className="">
                    <Image
                      src="/images/icon_step2.png"
                      alt="Step 2"
                      className="icon h-100 w-100"
                      width={300}
                      height={300}
                    />
                    <div className="col-lg-12">
                      <h3 className="primary-color">
                        {t("HowItWorks.Step2.Title")}
                      </h3>
                      <p>{t("HowItWorks.Step2.Description")}</p>
                    </div>
                  </div>
                </li>

                <li
                  className="col-lg-3 col-12 startAnimation animated"
                  data-animate="slideInRight">
                  <div className="">
                    <Image
                      src="/images/icon_step3.png"
                      alt="Step 3"
                      className="icon h-100 w-100"
                      width={300}
                      height={300}
                    />
                    <div className="col-lg-12">
                      <h3 className="primary-color">
                        {t("HowItWorks.Step3.Title")}
                      </h3>
                      <p>{t("HowItWorks.Step3.Description")}</p>
                    </div>
                  </div>
                </li>
                <li
                  className="col-lg-3 col-12 startAnimation animated"
                  data-animate="slideInRight">
                  <div className="">
                    <Image
                      src="/images/icon_step4.png"
                      alt="Step 3"
                      className="icon h-100 w-100"
                      width={300}
                      height={300}
                    />
                    <div className="col-lg-12">
                      <h3 className="primary-color">
                        {t("HowItWorks.Step4.Title")}
                      </h3>
                      <p>{t("HowItWorks.Step4.Description")}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
      {/* 
      <section className="sectionwhite m-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="dashedline">
                <span className="bg-white primary-color">Testimonials</span>
              </h2>
            </div>

            <div className="row testimonials">
              <div
                className="col-lg-6 col-12 startAnimation animated"
                data-animate="slideInLeft">
                <p>
                  &quot;Joining the journey to 1 Million Riyals has been an
                  amazing experience! The updates and community support keep me
                  motivated.&quot;
                </p>

                <div className="picturewrapper">
                  <img
                    src="images/person1.jpg"
                    className="picture"
                    alt="Testimonial"
                  />
                </div>

                <h5 className="mt-2">Jane Smith</h5>
              </div>

              <div
                className="col-lg-6 col-12 startAnimation animated "
                data-animate="slideInRight">
                <p>
                  &quot;I&apos;m excited to be part of something big. The
                  journey has been smooth, and the goal is within reach!&quot;
                </p>

                <div className="picturewrapper">
                  <img
                    src="images/person2.jpg"
                    className="picture"
                    alt="Testimonial"
                  />
                </div>

                <h5 className="mt-2">John Doe</h5>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="sectionwhite pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* <h2 className="dashedline">
                <span
                  style={{ background: "#ebffe8" }}
                  className="primary-color">
                  About the Initiative
                </span>
              </h2> */}
              <h5 className="text-center">{t("Footer.Subtitle")}</h5>
            </div>
          </div>
        </div>
      </section>

      <footer
        className="bottom startAnimation animated  sectionwhite pt-0 pb-2"
        data-animate="fadeInUp">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* <div className="teamicons">
                <a href="">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div> */}
            </div>
            <div className="col-lg-12">
              <p className="copyright">
                &copy; 2024 Desocial. All rights reserved.
              </p>
              <p>
                Powered by{" "}
                <a href="https://asynk.tech" className="primary-color">
                  Asynk Tech
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
