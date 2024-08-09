import Image from "next/image";
import styles from "./page.module.css";
import SignUpForm from "../components/SignUpForm";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="header ">
        <header className=" pt-3 w-100 top">
          <div className="container d-flex align-items-center justify-content-between">
            <a className="navbar-brand top1" href="#">
              <h3 className="m-0 text-white">DESOCIAL</h3>
            </a>

            <div className="teamicons m-0">
              <a href="https://www.facebook.com/pages/Rayoflightthemes/408688349185439">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
        </header>

        <section className="w-100 h-100 d-flex align-items-center">
          <div className="container">
            <div className="row topimagewrapper">
              <div
                className="col-lg-6 col-md-7 topimage startAnimation animated text-white"
                data-animate="slideInLeft">
                {/* <img src="images/road_to_goal.png" alt="Road to 1 Million" /> */}
                <h1 className="">
                  Join our Journey On The Road to
                  <br /> 1 Million Riyals!
                </h1>

                <h5>
                  Track the progress, stay updated, and be part of the success.
                </h5>
              </div>

              <div
                className="col-lg-6 col-md-5 startAnimation animated"
                data-animate="slideInRight">
                <div className="contactform">
                  <div className="text-white">
                    <h4 className="primary-color">
                      Sign up to Join Our Journey
                    </h4>
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
                  HOW IT WORKS
                </span>
              </h2>
            </div>

            <section className="maincolumnsblock1">
              <ul className="row d-flex justify-content-center">
                <li
                  className="col-lg-3 col-12 startAnimation animated"
                  data-animate="slideInLeft">
                  <div>
                    <img
                      src="images/icon_step1.png"
                      alt="Step 1"
                      className="icon w-100"
                    />
                    <div className="col-lg-12">
                      <h3 className="primary-color">Join</h3>
                      <p>Enter your details to become part of the journey.</p>
                    </div>
                  </div>
                </li>

                <li
                  className="col-lg-3 col-12 startAnimation animated"
                  data-animate="slideInLeft">
                  <div className="">
                    <img
                      src="images/icon_step2.png"
                      alt="Step 2"
                      className="icon w-100"
                    />
                    <div className="col-lg-12">
                      <h3 className="primary-color">Track</h3>
                      <p>Receive updates on our progress towards the goal.</p>
                    </div>
                  </div>
                </li>

                <li
                  className="col-lg-3 col-12 startAnimation animated"
                  data-animate="slideInRight">
                  <div className="">
                    <img
                      src="images/icon_step3.png"
                      alt="Step 3"
                      className="icon"
                    />
                    <div className="col-lg-12">
                      <h3 className="primary-color">Celebrate</h3>
                      <p>
                        Be part of the success when we reach the 1 Million
                        Riyals goal.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>

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
      </section>

      <section className="sectiongrey">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="dashedline">
                <span
                  style={{ background: "#ebffe8" }}
                  className="primary-color">
                  About the Initiative
                </span>
              </h2>
              <p>
                Our mission is to reach 1 Million Riyals, empowering our
                community and making a difference. Join us in this exciting
                journey, led by dedicated individuals who believe in the power
                of collective effort.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer
        className="bottom startAnimation animated mt-2"
        data-animate="fadeInUp">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="teamicons">
                <a href="">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
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
