import "./footer.css";
import Logo from "../../assets/logo-footer.png";

export default function Footer() {
  const Socials = (param) => [
    <a href={param.link} target="_blank" rel="noreferrer">
      <i className={param.class}></i>
    </a>,
  ];
  return (
    <>
      <footer>
        <div className="footer text-center">
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
          <div>
            <blockquote className="blockquote mb-0">
              <h5>
                <p className="green">"I am still learning"</p>
              </h5>
              <footer className="blockquote-footer">
                Michelangelo <cite title=" at age of 84"> at age of 84</cite>
              </footer>
            </blockquote>
          </div>

          <img src={Logo} alt="Logo" width="10%" className="d-inline-block" />
          <hr />
          <div>
            <h6 className="disabled">
              Designed and developed by Merry Zeray Semereab.
            </h6>
          </div>
        </div>
      </footer>
    </>
  );
}
