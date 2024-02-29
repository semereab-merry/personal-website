import "./projects.css";
import SubHeader from "../subHeader/subHeader";
import car from "../../assets/projects/car.png";
import ecole from "../../assets/projects/42-logo.png";
import ml from "../../assets/projects/ml.png";

export default function Projects() {
  const ProjectCards = (param) => {
    return (
      <>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-7 text-center" style={{ height: "300px" }}>
              <img
                style={{ height: "100%", padding: "1px" }}
                src={param.imgSrc}
                className="img-fluid rounded-start"
                alt={param.imgAlt}
              />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title">{param.title}</h5>
                <h6
                  className="card-subtitle mb-2"
                  style={{ color: "var(--green)" }}
                >
                  {param.heading}
                </h6>
                <br />
                <p className="card-text">
                  {param.description ? param.description : ""}
                </p>
                <div className="text-center">
                  <a href={param.link} target="_blank">
                    <button className="butn light">{param.action}</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container home" id="Projects">
        <div>
          <SubHeader title={"Projects"} subheading={"My Works"} />
        </div>
        {/* project 1 car care*/}
        <div className="col">
          <ProjectCards
            imgSrc={car}
            imgAlt1={"car-care-app"}
            title={"Car Care Mobile App"}
            heading={"Technologies: Flutter, FireBase, NewsAPI"}
            description={
              <span>
                CarCare is a native multi-platform mobile application developed
                using Flutter and Firebase. It is designed to help car owners
                manage their car maintenance tasks.
                <br />
                <a
                  href="https://youtu.be/UFaAwMRFMT8?si=lcxFme6H7Fa6OVA_"
                  target="_blank"
                >
                  View on YouTube
                </a>
              </span>
            }
            link={"https://github.com/semereab-merry/CarCare"}
            action="Visit GitHub"
          />
        </div>

        {/* project ecole 42 */}
        <div className="col">
          <ProjectCards
            imgSrc={ecole}
            imgAlt="ecole-42-logo"
            title={"École 42 Projects"}
            heading={"Technologies: C"}
            description={
              <span>
                Ecole 42 is a unique and innovative coding school that follows a
                peer-to-peer learning approach. Each project in this collection
                is written in the universal language of C.
              </span>
            }
            link={"https://github.com/semereab-merry/42-Projects"}
            action="Visit GitHub"
          />
        </div>

        {/* projects machine learning */}
        <div className="col">
          <ProjectCards
            imgSrc={ml}
            imgAlt="ml-diagram"
            title={"Machine Learning Projects"}
            heading={"Technologies: Python, R"}
            description={
              <span>
                An assembly of innovative projects -- from predictive modeling
                to data visualization, my collection showcases the impact of
                data science in various domains.
              </span>
            }
            link={"https://semereab-merry.github.io/Machine-learning-projects/"}
            action="Visit Website"
          />
        </div>
      </div>
      <div></div>
    </>
  );
}
