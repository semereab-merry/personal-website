import "./home.css";
import Typical from "react-typical";
import NavBar from "./nav/navBar";

export default function Home(props) {
  const Socials = (param) => [
    <a href={param.link} target="_blank" rel="noreferrer">
      <i className={param.class}></i>
    </a>,
  ];
  /* SCROLL TO CONTACT ME SCREEN */
  const scrollToHireMe = () => {
    const contactMeScreen = document.getElementById("Contact Me");
    if (!contactMeScreen) return;

    contactMeScreen.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <NavBar />
      <div className="container home" id={props.id || ""}>
        <div className="row d-flex align-items-center">
          <div className="col-lg-8 text-center flex-grow-1 ">
            <div className="socials">
              <Socials
                link="mailto:merry0zeray@gmail.com"
                class="fas fa-envelope"
              />
              <Socials
                link="https://github.com/semereab-merry"
                class="fab fa-github"
              />
              <Socials
                link="https://www.linkedin.com/in/merry-zeray/"
                class="fab fa-linkedin"
              />
              <Socials
                link="https://www.kaggle.com/merryzeray"
                class="fab fa-kaggle"
              />
            </div>
            <strong>
              <h3>
                Hello, I'm <span className="highlight">Merry Semereab</span>.
              </h3>
            </strong>

            <div className="profile-role">
              <h2>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Data Scientist 📊",
                    1000,
                    "Mobile App Developer 📲",
                    1000,
                    "Data Analyst 📈",
                    1000,
                    "Web Developer 🌐",
                    1000,
                  ]}
                />
              </h2>
            </div>

            <p className="lead darken">
              🌞 I'm a Data Scientist and aspiring Software Developer, holding a
              degree in Information Systems and Technology Management from Zayed
              University 🎓.
              {/* Passionate about using data and technology to create innovative solutions for a brighter world.  */}
              <br />
              I'm a lifelong learner, always seeking new challenges. If you're
              into tech, data, or simply fancy a coffee chat, reach out! Your
              thoughts and ideas are always welcome. 🌟
            </p>

            <div className="d-flex justify-content-evenly">
              <button
                type="button"
                className="butn light"
                onClick={() => {
                  scrollToHireMe();
                }}
              >
                Contact Me
              </button>
              <a href="resume.pdf" download="Merry-Semereab-Resume.pdf">
                <button type="button" className="butn dark">
                  Get Resume
                </button>
              </a>
            </div>
          </div>

          <div className="col-lg-4 flex-shrink-0 profile-pic">
            <div className="my-photo"> </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}
